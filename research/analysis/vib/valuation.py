"""Justified P/B scenarios for VIB. All inputs labelled; ASSUMPTIONS flagged."""
import json, pandas as pd, numpy as np
OUT="/home/user/vib_analysis/"
F=pd.read_csv(OUT+"fundamentals_quarterly.csv",index_col=0)
P=pd.read_csv(OUT+"peers.csv",index_col=0)
MP=json.load(open(OUT+"metrics_price.json"))
P0=13750.0; SH=3735.386252e6  # shares post 9.5% bonus (Vietcap numberOfSharesMktCap; cafef 2026-10-06: charter 37,354bn)
EQ=F.loc["2026Q2","Equity"]*1e9; BVPS=EQ/SH
NPAT_TTM=F.loc[["2025Q3","2025Q4","2026Q1","2026Q2"],"NPAT"].sum()*1e9; EPS_TTM=NPAT_TTM/SH
ROE_TTM=P.loc["VIB","ROE_ttm"]
out={"BVPS_Q2_2026":BVPS,"EPS_TTM":EPS_TTM,"PB_now":P0/BVPS,"PE_now":P0/EPS_TTM,"NPAT_TTM_bn":NPAT_TTM/1e9,"ROE_TTM_vietcap":ROE_TTM}
# plan tracking
pbt_h1=F.loc[["2026Q1","2026Q2"],"PBT"].sum(); pbt_h2_25=F.loc[["2025Q3","2025Q4"],"PBT"].sum(); pbt_fy25=F.loc[["2025Q1","2025Q2","2025Q3","2025Q4"],"PBT"].sum()
TGT=11550.0
out["plan"]={"PBT_target_2026_bn":TGT,"PBT_FY2025_bn":pbt_fy25,"target_growth":TGT/pbt_fy25-1,"PBT_H1_2026_bn":pbt_h1,"H1_pct_of_target":pbt_h1/TGT,
 "H2_required_bn":TGT-pbt_h1,"H2_2025_bn":pbt_h2_25,"H2_required_growth_yoy":(TGT-pbt_h1)/pbt_h2_25-1,
 "FY_if_H2_flat_yoy_bn":pbt_h1+pbt_h2_25,"FY_if_H2_flat_pct_target":(pbt_h1+pbt_h2_25)/TGT}
# market-implied COE: COE = g + (ROE-g)/PB
imp={}
for g in (0.05,0.06,0.07):
    imp[g]={t:float(g+(P.loc[t,"ROE_ttm"]-g)/P.loc[t,"PB_now"]) for t in P.index}
out["implied_COE"]={str(g):d for g,d in imp.items()}
peer_med=np.median([imp[0.06][t] for t in P.index if t not in ("VIB","STB")])
out["implied_COE_peer_median_exSTB_g6"]=float(peer_med)
# implied ROE at a given COE: ROE = g + PB*(COE-g)
out["implied_ROE_at_COE13_g6"]=0.06+out["PB_now"]*(0.13-0.06)
# scenarios (ASSUMPTIONS)
D=900.0  # ASSUMPTION: next 12M cash DPS = 2025 rate 9% of par; not yet declared
S={"Bear":dict(ROE=0.13,COE=0.155,g=0.05,why="credit cost ~1.5% (FY2024: 1.47%), NIM squeeze; market keeps punitive COE"),
   "Base":dict(ROE=0.155,COE=0.14,g=0.06,why="ROE ~TTM (15.7%) / company H1 16%; COE converges to peer-implied median"),
   "Bull":dict(ROE=0.175,COE=0.135,g=0.06,why="NIM recovery + credit cost ~1.0%, plan delivery; P/B capped near 3Y max (1.58x)")}
rows=[]
for k,s in S.items():
    pb=(s["ROE"]-s["g"])/(s["COE"]-s["g"]); v_now=pb*BVPS
    bv1=BVPS*(1+s["ROE"])-D; p1=pb*bv1; tr=(p1+D)/P0-1
    rows.append(dict(scenario=k,**{x:s[x] for x in ("ROE","COE","g")},justified_PB=pb,value_on_current_BVPS=v_now,upside_now=v_now/P0-1,
                     BVPS_12m=bv1,price_12m=p1,total_return_12m_incl_DPS=tr,rationale=s["why"]))
SC=pd.DataFrame(rows).set_index("scenario"); SC.to_csv(OUT+"scenarios.csv")
# sensitivity: value on current BVPS, ROE x COE (g=6%)
roes=[0.12,0.13,0.14,0.15,0.16,0.17,0.18]; coes=[0.12,0.13,0.14,0.15,0.16]
sens=pd.DataFrame({f"COE {c:.0%}":[(r-0.06)/(c-0.06)*BVPS for r in roes] for c in coes},index=[f"ROE {r:.0%}" for r in roes])
sens.round(0).to_csv(OUT+"sensitivity_ROE_COE_g6.csv")
sens_up=(sens/P0-1)
sg=pd.DataFrame({f"g {g:.0%}":[(0.155-g)/(c-g)*BVPS for c in coes] for g in (0.04,0.05,0.06,0.07,0.08)},index=[f"COE {c:.0%}" for c in coes])
sg.round(0).to_csv(OUT+"sensitivity_COE_g_ROE15.5.csv")
# elasticities around base
b=S["Base"]; f=lambda R,C,G:(R-G)/(C-G)*BVPS; base=f(b["ROE"],b["COE"],b["g"])
out["elasticity_per_1pp"]={"ROE":f(b["ROE"]+.01,b["COE"],b["g"])/base-1,"COE":f(b["ROE"],b["COE"]+.01,b["g"])/base-1,"g":f(b["ROE"],b["COE"],b["g"]+.01)/base-1}
out["scenarios"]=SC.drop(columns="rationale").to_dict(orient="index")
out["DPS_assumption"]=D
# cross-check vs vol cone & history
out["crosscheck"]={"PB_3y_range":[float(P.loc["VIB","PB_3y_min"]),float(P.loc["VIB","PB_3y_max"])],"PB_3y_median":float(P.loc["VIB","PB_3y_median"]),
  "price_at_3y_median_PB":float(P.loc["VIB","PB_3y_median"]*BVPS),"price_at_3y_max_PB":float(P.loc["VIB","PB_3y_max"]*BVPS),
  "vol_cone_12m":MP["vol_cone_fullvol_zero_drift"]["12M"]}
json.dump(out,open(OUT+"metrics_valuation.json","w"),indent=1,default=float)
pd.set_option("display.width",250)
print(json.dumps({k:v for k,v in out.items() if k not in("scenarios",)},indent=1,default=float))
print(SC.round(3).to_string()); print(sens.round(0)); print(sens_up.round(3)); print(sg.round(0))
# merge metrics.json
M=MP; M["fundamentals_latest_Q2_2026"]=F.loc["2026Q2"].dropna().to_dict(); M["valuation"]=out
M["peers"]=P.round(4).to_dict(orient="index")
M["sources"]={"prices":"Vietcap gap-chart API, pulled 2026-10-19 (file VIB_VNINDEX_prices.xlsx + raw/peers_ohlcv.csv)",
 "fundamentals":"Vietcap IQ iq.vietcap.com.vn/api/iq-insight-service/v1/company/{t}/financial-statement & statistics-financial, pulled 2026-10-19; latest statements 2026Q2 (publicDate 2026-08-06)",
 "company":"cafef.vn VIB H1-2026 release 2026-07-27; Q1-2026 2026-04-28; AGM plan 2026-03-18; bonus issue 2026-08-11; syndicated loan 2026-10-06"}
json.dump(M,open(OUT+"metrics.json","w"),indent=1,default=float)
