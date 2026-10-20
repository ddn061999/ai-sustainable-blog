import json, pandas as pd, numpy as np
OUT="/home/user/vib_analysis/"
R=pd.read_csv(OUT+"returns_risk_all.csv",index_col=0)
px=pd.read_csv(OUT+"raw/peers_ohlcv.csv",parse_dates=["date"]); last=px[px.date==px.date.max()].set_index("symbol").close
last["VIB"]=13750.0
rows=[]
for t in ["VIB","TCB","VPB","MBB","ACB","HDB","STB","VCB"]:
    s=pd.DataFrame(json.load(open(OUT+f"raw/{t}_stats.json"))["data"])
    s=s[s.quarter.between(1,4)].sort_values(["yearReport","quarter"])
    q2=s[(s.yearReport==2026)&(s.quarter==2)].iloc[0]; q3=s[(s.yearReport==2026)&(s.quarter==3)].iloc[0]
    # 3Y median P/B and P/E (quarter-end, TTM) 2023Q3..2026Q2
    h=s[(s.yearReport*10+s.quarter>=20233)&(s.yearReport*10+s.quarter<=20262)]
    sh=q3.numberOfSharesMktCap; mcap_now=last[t]*sh
    pb_now=q3.pb*mcap_now/q3.marketCap; pe_now=q3.pe*mcap_now/q3.marketCap  # rescale snapshot P/B to 19-Oct close
    rows.append(dict(ticker=t,close_2026_10_19=last[t],shares_m=sh/1e6,mcap_trn=mcap_now/1e12,PB_now=pb_now,PE_ttm_now=pe_now,
        PB_3y_median=h.pb.median(),PB_3y_min=h.pb.min(),PB_3y_max=h.pb.max(),PE_3y_median=h.pe.median(),
        ROE_ttm=q2.roe,ROA_ttm=q2.roa,NIM_ttm=q2.netInterestMargin,CIR_ttm=-q2.cir,NPL=q2.npl,LLR_cov=-q2.loansLossReservesToNPLs,
        LDR=q2.ldrLoanDepositRatio,CASA=q2.casaRatio,Eq_Assets=q2.totalEquityTotalAsset,
        ret_1Y=R.loc[t,"1Y"],ret_YTD=R.loc[t,"YTD"],vol_ann=R.loc[t,"vol_ann"],beta=R.loc[t,"beta_full"],maxDD=R.loc[t,"maxDD"]))
P=pd.DataFrame(rows).set_index("ticker")
P["PB_vs_3y_median_%"]=(P.PB_now/P.PB_3y_median-1)*100
P.round(4).to_csv(OUT+"peers.csv")
pd.set_option("display.width",300); pd.set_option("display.max_columns",40)
print(P.round(3).to_string())
# cross-sectional P/B vs ROE regression
import numpy.linalg as la
X=np.c_[np.ones(len(P)),P.ROE_ttm]; b=la.lstsq(X,P.PB_now,rcond=None)[0]; fit=X@b
print("PB = %.3f + %.3f*ROE ; R2=%.2f"%(b[0],b[1],1-((P.PB_now-fit)**2).sum()/((P.PB_now-P.PB_now.mean())**2).sum()))
ex=P.drop("VIB"); X2=np.c_[np.ones(len(ex)),ex.ROE_ttm]; b2=la.lstsq(X2,ex.PB_now,rcond=None)[0]
print("ex-VIB fit:",b2, "implied VIB PB:", b2[0]+b2[1]*P.loc["VIB","ROE_ttm"], "R2",1-((ex.PB_now-X2@b2)**2).sum()/((ex.PB_now-ex.PB_now.mean())**2).sum())
json.dump({"pb_roe_fit_exVIB":list(map(float,b2)),"implied_PB_VIB":float(b2[0]+b2[1]*P.loc["VIB","ROE_ttm"])},open(OUT+"peer_regression.json","w"))
