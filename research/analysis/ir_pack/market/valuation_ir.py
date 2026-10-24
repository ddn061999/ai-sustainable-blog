"""IR pack valuation: P/B, P/E TTM, 3Y P/B history, ROE, justified P/B, implied COE, peer P/B-ROE regression, scenarios.
Method reused from research/analysis/vib/valuation.py & peers.py. Run after market_analysis.py: python3 -I valuation_ir.py"""
import pandas as pd, numpy as np, json, os
D=os.path.dirname(os.path.abspath(__file__))+"/"; R=D+"raw/"
banks=["VIB","MBB","TCB","VPB","ACB","HDB","STB","VCB"]
MM=pd.read_csv(D+"market_metrics_peers.csv",index_col=0)
ss=json.load(open(R+"shareholder_structure.json"))
AS_OF=MM.loc["VIB","as_of"]
# ---------- ASSUMPTIONS (standing; same as VIB brief) ----------
COE=0.14; G=0.06          # base cost of equity and long-run growth for justified P/B
RF=0.0445; ERP=0.08       # CAPM cross-check only: 10Y VGB ~4.45% (assumption), ERP 8% (assumption)
rows={}; hist={}
for t in banks:
    s=pd.DataFrame(json.load(open(R+f"{t}_stats.json"))["data"]); s=s[s.quarter.between(1,4)].sort_values(["yearReport","quarter"])
    s["yq"]=s.yearReport*10+s.quarter
    q=s[s.yq==20262].iloc[0]
    BE=q.marketCap/q.pb          # book equity implied by Vietcap snapshot (Q2-2026)
    E_ttm=q.marketCap/q.pe       # TTM earnings implied by Vietcap snapshot
    src="Vietcap stats snapshot (mcap/pb, mcap/pe)"
    if t in ("VIB","MBB"):       # override with statements: parent equity (bsa78, excl. minority bsa210) and parent NPAT TTM (isa22)
        IS_=pd.DataFrame(json.load(open(R+f"{t}_IS.json"))["data"]["quarters"]); BS_=pd.DataFrame(json.load(open(R+f"{t}_BS.json"))["data"]["quarters"])
        IS_["yq"]=IS_.yearReport*10+IS_.lengthReport; BS_["yq"]=BS_.yearReport*10+BS_.lengthReport
        BE=float(BS_[BS_.yq==20262].bsa78.iloc[0]); E_ttm=float(IS_[IS_.yq.isin([20253,20254,20261,20262])].isa22.sum())
        src="Statements 2026Q2: parent equity bsa78; parent NPAT TTM isa22 (2025Q3-2026Q2)"
    sh=ss[t]["totalShares"]; px=MM.loc[t,"close"]; mc=px*sh
    h=s[(s.yq>=20233)&(s.yq<=20262)]   # 12 quarterly TTM snapshots 2023Q3-2026Q2 = 3Y
    hist[t]=h.set_index("yq").pb
    rows[t]=dict(as_of_price=AS_OF,price=px,shares_m=sh/1e6,mcap_VNDtn=mc/1e12,BVPS=BE/sh,PB_now=mc/BE,EPS_TTM=E_ttm/sh,PE_TTM=mc/E_ttm,
        PB_3Y_median=h.pb.median(),PB_3Y_min=h.pb.min(),PB_3Y_max=h.pb.max(),PB_3Y_n=len(h),PE_3Y_median=h.pe.median(),
        ROE_TTM=q.roe,ROA_TTM=q.roa,NIM_TTM=q.netInterestMargin,CIR_TTM=-q.cir,NPL=q.npl,LLR_cov=-q.loansLossReservesToNPLs,
        CASA=q.casaRatio,Eq_to_Assets=q.totalEquityTotalAsset,fundamentals_period="2026Q2 TTM (Vietcap IQ)",BV_EPS_source=src)
V=pd.DataFrame(rows).T
for c_ in V.columns:
    if c_ not in ("as_of_price","fundamentals_period","BV_EPS_source"): V[c_]=pd.to_numeric(V[c_])
V["PB_pctile_vs_3Y"]=[ (hist[t]<V.loc[t,"PB_now"]).mean() for t in V.index]
V["PB_vs_3Y_median_%"]=(V.PB_now/V.PB_3Y_median-1)*100
# ---------- own cross-check from statements for VIB & MBB (parent NPAT, avg equity) ----------
chk={}
for t in ["VIB","MBB"]:
    IS=pd.DataFrame(json.load(open(R+f"{t}_IS.json"))["data"]["quarters"]); BS=pd.DataFrame(json.load(open(R+f"{t}_BS.json"))["data"]["quarters"])
    for d_ in (IS,BS): d_["yq"]=d_.yearReport*10+d_.lengthReport
    IS=IS[IS.lengthReport.between(1,4)].set_index("yq").sort_index(); BS=BS[BS.lengthReport.between(1,4)].set_index("yq").sort_index()
    ttm=[20253,20254,20261,20262]; npat=IS.loc[ttm,"isa22"].sum(); eq=BS.loc[[20252]+ttm,"bsa78"]
    sh=ss[t]["totalShares"]
    q_roe={k:IS.loc[k,"isa22"]*4/((BS.loc[k,"bsa78"]+BS.loc[prev,"bsa78"])/2) for k,prev in ((20261,20254),(20262,20261))}
    chk[t]=dict(NPAT_parent_TTM_bn=npat/1e9,Equity_Q2_2026_bn=BS.loc[20262,"bsa78"]/1e9,Minority_Q2_bn=BS.loc[20262].get("bsa210",np.nan)/1e9,
        ROE_TTM_own_avg5Q=npat/eq.mean(),ROE_Q1_2026_ann=q_roe[20261],ROE_Q2_2026_ann=q_roe[20262],
        BVPS_own=BS.loc[20262,"bsa78"]/sh,EPS_TTM_own=npat/sh,PB_own=V.loc[t,"price"]/(BS.loc[20262,"bsa78"]/sh),PE_own=V.loc[t,"price"]/(npat/sh),
        Q2_publicDate=str(IS.loc[20262,"publicDate"])[:10],PBT_H1_2026_bn=IS.loc[[20261,20262],"isa16"].sum()/1e9,PBT_FY2025_bn=IS.loc[[20251,20252,20253,20254],"isa16"].sum()/1e9,
        PBT_H2_2025_bn=IS.loc[[20253,20254],"isa16"].sum()/1e9,PBT_Q3_2025_bn=IS.loc[20253,"isa16"]/1e9)
C=pd.DataFrame(chk).T
# ---------- justified P/B, implied COE ----------
V["COE_base"]=COE; V["g_base"]=G
V["justified_PB_base"]=(V.ROE_TTM-G)/(COE-G)
V["justified_value_base"]=V.justified_PB_base*V.BVPS; V["upside_to_justified_%"]=(V.justified_value_base/V.price-1)*100
for g in (0.05,0.06,0.07): V[f"implied_COE_g{int(g*100)}"]=g+(V.ROE_TTM-g)/V.PB_now
V["beta_3Y"]=MM.loc[banks,"beta_3Y"]; V["CAPM_COE"]=RF+V.beta_3Y*ERP
V["implied_ROE_at_COE14_g6"]=G+V.PB_now*(COE-G)   # ROE the price discounts at base COE
# ---------- peer P/B-ROE regression ----------
def fit(idx):
    X=np.c_[np.ones(len(idx)),V.loc[idx,"ROE_TTM"].astype(float)]; y=V.loc[idx,"PB_now"].astype(float).values
    b=np.linalg.lstsq(X,y,rcond=None)[0]; r2=1-((y-X@b)**2).sum()/((y-y.mean())**2).sum(); return b,r2
reg={}
b_all,r2_all=fit(banks); exS=[t for t in banks if t!="STB"]; b_ex,r2_ex=fit(exS)
reg["all8"]={"a":b_all[0],"b":b_all[1],"R2":r2_all,"n":8}; reg["exSTB"]={"a":b_ex[0],"b":b_ex[1],"R2":r2_ex,"n":7}
for t in banks:
    loo=[x for x in exS if x!=t]; b,r2=fit(loo)
    V.loc[t,"PB_fit_exSTB_LOO"]=b[0]+b[1]*V.loc[t,"ROE_TTM"]; V.loc[t,"LOO_R2"]=r2; V.loc[t,"LOO_slope"]=b[1]
    V.loc[t,"PB_fit_exSTB_incl"]=b_ex[0]+b_ex[1]*V.loc[t,"ROE_TTM"]
V["regression_residual_PB"]=V.PB_now-V.PB_fit_exSTB_LOO; V["regression_residual_%"]=(V.PB_now/V.PB_fit_exSTB_LOO-1)*100
V["peer_median_PB_exSTB"]=V.loc[exS,"PB_now"].median(); V["peer_median_implied_COE_g6_exSTB_exSubject"]=[V.loc[[x for x in exS if x not in("VIB","MBB",t)],"implied_COE_g6"].median() for t in V.index]
V.loc[:,"regression_note"]="LOO fit on peers ex-STB (STB ROE depressed by legacy restructuring) excluding subject; n=6; cross-section as of "+AS_OF
V=V.join(C)
V["BV_note"]=""
V.loc["MBB","BV_note"]="Q2-2026 parent equity / 10,069m current shares; excludes post-Q2 cash dividend paid 17-Jul (~VND8.06tn) and rights proceeds (805.5m x 10,000 = ~VND8.06tn), which roughly offset"
V.loc["VIB","BV_note"]="Q2-2026 parent equity / 3,735m shares (post 9.5% bonus); 2025 cash dividend paid 3-Jun-2026 already deducted"
cols_first=["as_of_price","price","BVPS","PB_now","EPS_TTM","PE_TTM","PB_3Y_median","PB_3Y_min","PB_3Y_max","PB_3Y_n","PB_pctile_vs_3Y","PB_vs_3Y_median_%","PE_3Y_median",
 "ROE_TTM","ROE_TTM_own_avg5Q","ROE_Q2_2026_ann","COE_base","g_base","justified_PB_base","justified_value_base","upside_to_justified_%",
 "implied_COE_g5","implied_COE_g6","implied_COE_g7","CAPM_COE","implied_ROE_at_COE14_g6","PB_fit_exSTB_LOO","regression_residual_PB","regression_residual_%","LOO_R2","LOO_slope"]
V=V[cols_first+[c for c in V.columns if c not in cols_first]]
V.loc[["VIB","MBB"]].to_csv(D+"valuation.csv",index_label="ticker")
V.to_csv(D+"valuation_peers.csv",index_label="ticker")
# sensitivity justified P/B (ROE x COE, g=6%) value per share
sens=[]
for t in ["VIB","MBB"]:
    for roe in (0.12,0.14,0.16,0.18,0.20,0.22):
        for coe in (0.12,0.13,0.14,0.15,0.16,0.17):
            pb=(roe-G)/(coe-G); sens.append(dict(ticker=t,ROE=roe,COE=coe,g=G,justified_PB=pb,value=pb*V.loc[t,"BVPS"],vs_price_pct=(pb*V.loc[t,"BVPS"]/V.loc[t,"price"]-1)*100))
pd.DataFrame(sens).to_csv(D+"sensitivity_justified_pb.csv",index=False)
# ---------- 12M scenarios ----------
# value_12m = justified P/B x BVPS_12m ; BVPS_12m = BVPS*(1+ROE) - DPS ; TR = (value_12m + DPS)/P0 - 1
DPS={"VIB":900.0,   # ASSUMPTION: 9% of par cash (2025 dividend paid 3-Jun-2026 per AGM plan); next payout not declared
     "MBB":1000.0}  # ASSUMPTION: 10% of par cash (2025 dividend, record 10-Jul-2026); next payout not declared
imp={t:float(V.loc[t,"implied_COE_g6"]) for t in ["VIB","MBB"]}
S={"VIB":{
  "Bear":dict(ROE=0.13,COE=round(imp["VIB"]+0.01,4),g=0.05,why="Retail/mortgage NPL (4.3% retail NPL Q2) forces credit cost ~1.5%; NIM <3% as JSB deposit/CD rates stay ~7%+; 2026 PBT plan missed by ~20%; COE +1pp vs today"),
  "Base":dict(ROE=0.155,COE=round(imp["VIB"],4),g=0.06,why="ROE ~TTM (15.7%); market keeps today's implied COE (no re-rating); value grows with book"),
  "Bull":dict(ROE=0.175,COE=COE,g=0.06,why="Write-off recoveries (mgmt guides VND2-3tn H2) + full credit quota; NIM stabilises 3.1%; COE converges to 14% (peer median)")},
 "MBB":{
  "Bear":dict(ROE=0.17,COE=round(imp["MBB"]+0.01,4),g=0.05,why="Real-estate asset-quality hit, NIM back <3.9% on funding cost; rights (VND8.1tn) + placement (up to VND2tn) add ~6% to Q2 equity and dilute ROE; COE +1pp"),
  "Base":dict(ROE=0.195,COE=round(imp["MBB"],4),g=0.06,why="ROE eases from 20.7% TTM to ~19.5% as 2026 capital raise (rights 10:1 @10,000) enlarges equity; no re-rating"),
  "Bull":dict(ROE=0.21,COE=0.15,g=0.06,why="2026 PBT plan (~VND39.4tn) delivered, NIM ~4.1%; COE falls ~2.5pp (17.6% to 15%) toward peer median as foreign-room/dilution overhang clears")}}
out=[]
for t,sc in S.items():
    P0=float(V.loc[t,"price"]); B0=float(V.loc[t,"BVPS"])
    for k,a in sc.items():
        pb=(a["ROE"]-a["g"])/(a["COE"]-a["g"]); b1=B0*(1+a["ROE"])-DPS[t]; v1=pb*b1
        out.append(dict(ticker=t,scenario=k,as_of_price=AS_OF,price_now=P0,BVPS_now=B0,ROE=a["ROE"],COE=a["COE"],g=a["g"],DPS_12m=DPS[t],justified_PB=pb,
            BVPS_12m=b1,value_per_share_12m=v1,price_return_12m=v1/P0-1,total_return_12m=(v1+DPS[t])/P0-1,PB_3Y_min=float(V.loc[t,"PB_3Y_min"]),below_3Y_min_PB=bool(pb<V.loc[t,"PB_3Y_min"]),PB_vs_3Y_range=f"{V.loc[t,'PB_3Y_min']:.2f}-{V.loc[t,'PB_3Y_max']:.2f}",assumptions=a["why"]))
SC=pd.DataFrame(out); SC.to_csv(D+"scenarios.csv",index=False)
# elasticity of base value per 1pp
el={}
for t in S:
    a=S[t]["Base"]; f=lambda r,c,g:(r-g)/(c-g); b=f(a["ROE"],a["COE"],a["g"])
    el[t]={"ROE+1pp":f(a["ROE"]+.01,a["COE"],a["g"])/b-1,"COE+1pp":f(a["ROE"],a["COE"]+.01,a["g"])/b-1,"g+1pp":f(a["ROE"],a["COE"],a["g"]+.01)/b-1}
json.dump({"as_of":AS_OF,"assumptions":{"COE":COE,"g":G,"RF":RF,"ERP":ERP,"DPS":DPS},"regression":reg,"elasticity_base":el,"own_checks":C.to_dict(orient="index")},open(D+"valuation_meta.json","w"),indent=1,default=float)
pd.set_option("display.width",250); pd.set_option("display.max_columns",80)
print(V.T.to_string()); print(json.dumps(reg,indent=1,default=float)); print(SC.drop(columns="assumptions").round(4).to_string()); print(el)
# ---------- cross-check: 12M lognormal vol cone (zero drift, 3Y realised vol) ----------
from math import exp, sqrt
from statistics import NormalDist
z=NormalDist().inv_cdf
for t in ["VIB","MBB"]:
    sg=float(MM.loc[t,"vol_ann_3Y"]); P0=float(V.loc[t,"price"])
    for q in (0.05,0.16,0.84,0.95): SC.loc[SC.ticker==t,f"vol_cone_12m_p{int(q*100):02d}"]=P0*exp(-0.5*sg**2+z(q)*sg)
SC.to_csv(D+"scenarios.csv",index=False)
print(SC[["ticker","scenario","value_per_share_12m","vol_cone_12m_p05","vol_cone_12m_p16","vol_cone_12m_p84","vol_cone_12m_p95"]].round(0).to_string())
