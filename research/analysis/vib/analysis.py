"""VIB quantitative & technical analysis. Data: Vietcap gap-chart API (adjusted OHLCV). Run: python3 -I analysis.py"""
import pandas as pd, numpy as np, json
from scipy import stats
OUT="/home/user/vib_analysis/"
RF=0.0445  # ASSUMPTION: ~10Y VGB yield, CafeF Oct-2026 reporting (~4.45%)
TD=252
xl="/home/user/VIB_VNINDEX_prices.xlsx"
v=pd.read_excel(xl,sheet_name="VIB"); vn=pd.read_excel(xl,sheet_name="VNINDEX")
pr=pd.read_csv(OUT+"raw/peers_ohlcv.csv")
for d in (v,vn,pr): d["date"]=pd.to_datetime(d["date"])
px=pd.concat([v,vn,pr]).pivot(index="date",columns="symbol",values="close").sort_index()
vol=pd.concat([v,vn,pr]).pivot(index="date",columns="symbol",values="volume").sort_index()
assert px.isna().sum().sum()==0
LAST=px.index[-1]; c=px["VIB"]; idx=px["VNINDEX"]
r=np.log(px).diff().dropna(); sr=px.pct_change().dropna()
M={"as_of":str(LAST.date()),"last_close_VIB":float(c.iloc[-1]),"last_close_VNINDEX":float(idx.iloc[-1]),"rf_assumption":RF,
   "note_last_bar":"2026-10-19 bar is final: 1-min data show 14:45 ATC print; fetched 22:47 ICT"}
# ---- returns
def ret_since(s,days=None,date=None):
    if date is not None: base=s[s.index<=date].iloc[-1]
    else: base=s.iloc[-1-days]
    return s.iloc[-1]/base-1
H={"1M":21,"3M":63,"6M":126,"1Y":252,"3Y":min(756,len(c)-1)}
rets={}
for sym in px.columns:
    d={k:ret_since(px[sym],n) for k,n in H.items()}
    d["YTD"]=ret_since(px[sym],date=pd.Timestamp("2025-12-31"))
    d["Full"]=px[sym].iloc[-1]/px[sym].iloc[0]-1
    yrs=(px.index[-1]-px.index[0]).days/365.25
    d["CAGR_full"]=(1+d["Full"])**(1/yrs)-1
    d["vol_ann"]=sr[sym].std()*np.sqrt(TD)
    d["vol_60d"]=sr[sym].iloc[-60:].std()*np.sqrt(TD)
    cum=px[sym]/px[sym].cummax()-1; d["maxDD"]=cum.min(); d["currDD"]=cum.iloc[-1]
    d["peak_date"]=str(px[sym].idxmax().date()); d["peak"]=float(px[sym].max())
    cov=np.cov(sr[sym],sr["VNINDEX"]); d["beta_full"]=cov[0,1]/cov[1,1]; d["corr_full"]=np.corrcoef(sr[sym],sr["VNINDEX"])[0,1]
    ex=sr[sym]-RF/TD; dn=np.minimum(ex,0)
    d["sharpe"]=ex.mean()/sr[sym].std()*np.sqrt(TD); d["sortino"]=ex.mean()*TD/(np.sqrt((dn**2).mean())*np.sqrt(TD))
    ex1=ex.iloc[-252:]; d["sharpe_1y"]=ex1.mean()/sr[sym].iloc[-252:].std()*np.sqrt(TD)
    rets[sym]=d
R=pd.DataFrame(rets).T
R["years"]=yrs
R.to_csv(OUT+"returns_risk_all.csv")
M["years_sample"]=yrs; M["VIB"]={k:(float(v_) if not isinstance(v_,str) else v_) for k,v_ in rets["VIB"].items()}
M["VNINDEX"]={k:(float(v_) if not isinstance(v_,str) else v_) for k,v_ in rets["VNINDEX"].items()}
# max DD dates for VIB
cum=c/c.cummax()-1; trough=cum.idxmin(); peak=c[:trough].idxmax()
M["VIB"]["maxDD_peak_date"]=str(peak.date()); M["VIB"]["maxDD_trough_date"]=str(trough.date())
# rolling
roll_vol=sr["VIB"].rolling(60).std()*np.sqrt(TD)
rb=sr["VIB"].rolling(120).cov(sr["VNINDEX"])/sr["VNINDEX"].rolling(120).var()
rc=sr["VIB"].rolling(120).corr(sr["VNINDEX"])
M["rolling"]={"vol60_now":float(roll_vol.iloc[-1]),"vol60_min":float(roll_vol.min()),"vol60_max":float(roll_vol.max()),"vol60_median":float(roll_vol.median()),
 "vol60_pctile_now":float((roll_vol.dropna()<roll_vol.iloc[-1]).mean()),
 "beta120_now":float(rb.iloc[-1]),"beta120_min":float(rb.min()),"beta120_max":float(rb.max()),"corr120_now":float(rc.iloc[-1])}
# relative performance
rel={}
for k,n in H.items():
    rel[k]={"VIB_minus_VNINDEX":rets["VIB"][k]-rets["VNINDEX"][k]}
banks=["TCB","VPB","MBB","ACB","HDB","STB","VCB"]
peer_eq=pd.DataFrame({k:{b:rets[b][k] for b in banks} for k in list(H)+["YTD"]})
M["relative"]={k:{"vs_VNINDEX":float(rets["VIB"][k]-rets["VNINDEX"][k]),"vs_peer_median":float(rets["VIB"][k]-peer_eq[k].median()),
   "VIB_rank_among_8_banks":int(pd.Series({**{b:rets[b][k] for b in banks},"VIB":rets["VIB"][k]}).rank(ascending=False)["VIB"])} for k in list(H)+["YTD"]}
# ---- technicals
def rsi(s,n=14):
    d=s.diff(); up=d.clip(lower=0).ewm(alpha=1/n,adjust=False).mean(); dn=(-d.clip(upper=0)).ewm(alpha=1/n,adjust=False).mean()
    return 100-100/(1+up/dn)
T=pd.DataFrame({"close":c,"volume":vol["VIB"]})
for n in (20,50,200): T[f"MA{n}"]=c.rolling(n).mean()
T["RSI14"]=rsi(c); e12=c.ewm(span=12,adjust=False).mean(); e26=c.ewm(span=26,adjust=False).mean()
T["MACD"]=e12-e26; T["signal"]=T.MACD.ewm(span=9,adjust=False).mean(); T["hist_"]=T.MACD-T.signal
T["vol20"]=T.volume.rolling(20).mean(); T["vol60"]=T.volume.rolling(60).mean()
last=T.iloc[-1]
# crosses
def last_cross(a,b):
    s=np.sign(T[a]-T[b]).dropna(); ch=s[s.diff()!=0].index
    return (str(ch[-1].date()), "golden/up" if s.iloc[-1]>0 else "death/down") if len(ch)>1 else None
macd_s=np.sign(T["hist_"]).dropna(); mch=macd_s[macd_s.diff()!=0].index
M["technical"]={"close":float(last.close),"MA20":float(last.MA20),"MA50":float(last.MA50),"MA200":float(last.MA200),
 "pct_vs_MA20":float(last.close/last.MA20-1),"pct_vs_MA50":float(last.close/last.MA50-1),"pct_vs_MA200":float(last.close/last.MA200-1),
 "MA50_vs_MA200_cross":last_cross("MA50","MA200"),"MA20_vs_MA50_cross":last_cross("MA20","MA50"),
 "MA200_slope_20d_pct":float(T.MA200.iloc[-1]/T.MA200.iloc[-21]-1),"MA50_slope_20d_pct":float(T.MA50.iloc[-1]/T.MA50.iloc[-21]-1),
 "RSI14":float(last.RSI14),"MACD":float(last.MACD),"signal":float(last.signal),"hist":float(last["hist_"]),"last_MACD_signal_cross":str(mch[-1].date()),
 "vol_last":float(last.volume),"vol20":float(last.vol20),"vol60":float(last.vol60),"vol_last_vs_20d":float(last.volume/last.vol20),"vol20_vs_vol60":float(last.vol20/last.vol60),
 "vol20_vs_1y_median_vol20":float(last.vol20/T.vol20.iloc[-252:].median())}
# Volume-confirmed moves: up/down days volume last 60 days
w=T.iloc[-60:].copy(); w["r"]=w.close.pct_change()
M["technical"]["avgvol_up_days_60d"]=float(w[w.r>0].volume.mean()); M["technical"]["avgvol_down_days_60d"]=float(w[w.r<0].volume.mean())
M["technical"]["n_up_down_60d"]=[int((w.r>0).sum()),int((w.r<0).sum())]
# OBV trend
obv=(np.sign(c.diff()).fillna(0)*T.volume).cumsum(); M["technical"]["OBV_change_60d_vs_price_change_60d"]=[float(obv.iloc[-1]-obv.iloc[-61]),float(c.iloc[-1]/c.iloc[-61]-1)]
# swing levels (pivot highs/lows, 10-bar window) over last 250 days
win=10; L=T.iloc[-260:]
ph=L.close[(L.close==L.close.rolling(2*win+1,center=True).max())]
pl=L.close[(L.close==L.close.rolling(2*win+1,center=True).min())]
M["technical"]["swing_highs_1y"]=[(str(d.date()),float(x)) for d,x in ph.items()]
M["technical"]["swing_lows_1y"]=[(str(d.date()),float(x)) for d,x in pl.items()]
M["technical"]["range_52w"]=[float(c.iloc[-252:].min()),float(c.iloc[-252:].max())]
M["technical"]["range_3m"]=[float(c.iloc[-63:].min()),float(c.iloc[-63:].max())]
# Volume profile last 6 months (volume by 250-VND close bucket)
vp=T.iloc[-126:]; b=(vp.close//250*250); prof=vp.groupby(b).volume.sum().sort_values(ascending=False)
M["technical"]["volume_profile_6m_top"]=[(float(k),float(x/vp.volume.sum())) for k,x in prof.head(6).items()]
# ---- statistical rigor
x=sr["VIB"]
def tstat(s): return s.mean()/(s.std()/np.sqrt(len(s)))
M["stats"]={}
for k,n in {"1M":21,"3M":63,"6M":126,"1Y":252,"Full":len(x)}.items():
    s=x.iloc[-n:]; t=tstat(s); M["stats"][f"t_mean_{k}"]={"mean_daily":float(s.mean()),"t":float(t),"p_two_sided":float(2*(1-stats.t.cdf(abs(t),len(s)-1))),"n":int(len(s))}
# excess vs index (alpha) t-test, last 6M & 1Y using market model
import numpy.linalg as la
for k,n in {"6M":126,"1Y":252,"Full":len(x)}.items():
    y=x.iloc[-n:].values; X=np.c_[np.ones(n),sr["VNINDEX"].iloc[-n:].values]
    b_=la.lstsq(X,y,rcond=None)[0]; res=y-X@b_; s2=res@res/(n-2); cov=s2*la.inv(X.T@X)
    M["stats"][f"market_model_{k}"]={"alpha_daily":float(b_[0]),"alpha_ann":float(b_[0]*TD),"t_alpha":float(b_[0]/np.sqrt(cov[0,0])),"beta":float(b_[1]),"R2":float(1-res@res/((y-y.mean())@(y-y.mean())))}
M["stats"]["skew"]=float(stats.skew(x)); M["stats"]["excess_kurtosis"]=float(stats.kurtosis(x))
jb=stats.jarque_bera(x); M["stats"]["jarque_bera"]={"stat":float(jb.statistic),"p":float(jb.pvalue)}
z=(x-x.mean())/x.std(); M["stats"]["share_abs_z_gt_2.5"]=float((z.abs()>2.5).mean()); M["stats"]["normal_expected_share"]=float(2*(1-stats.norm.cdf(2.5)))
M["stats"]["limit_moves_ge_6.5pct"]=int((x.abs()>=0.065).sum())
from statsmodels.stats.diagnostic import acorr_ljungbox
lb=acorr_ljungbox(x,lags=[5,10],return_df=True); M["stats"]["ljung_box"]={str(k):{"Q":float(a),"p":float(p)} for k,(a,p) in lb.iterrows()}
M["stats"]["acf_lag1"]=float(x.autocorr(1)); M["stats"]["acf_abs_lag1"]=float(x.abs().autocorr(1))
# variance ratio (Lo-MacKinlay, simple) q=5,20
def vr(s,q):
    rq=np.log(1+s).rolling(q).sum().dropna(); return float(rq.var()/(q*np.log(1+s).var()))
M["stats"]["variance_ratio_q5"]=vr(x,5); M["stats"]["variance_ratio_q20"]=vr(x,20)
# momentum: 12-1 month
M["stats"]["mom_12_1"]=float(c.iloc[-22]/c.iloc[-253]-1)
# biggest moves
big=pd.DataFrame({"ret":x,"z":z,"vnindex_ret":sr["VNINDEX"],"vol":T.volume.reindex(x.index),"vol_vs_20d":(T.volume/T.vol20.shift(1)).reindex(x.index)})
big["idio"]=big.ret-M["VIB"]["beta_full"]*big.vnindex_ret
bigm=big[big.z.abs()>2.5].sort_values("z",key=abs,ascending=False)
bigm.to_csv(OUT+"big_moves.csv")
# multi-week moves: rolling 20d returns extremes (non-overlapping)
r20=c.pct_change(20); ext=[]
s=r20.copy()
for _ in range(6):
    i=s.abs().idxmax(); ext.append((str((c.index[c.index.get_loc(i)-20]).date()),str(i.date()),float(s[i]),float(idx.loc[i]/idx.iloc[idx.index.get_loc(i)-20]-1)))
    lo=max(0,s.index.get_loc(i)-20); hi=s.index.get_loc(i)+20; s.iloc[lo:hi]=0
M["multiweek_20d_extremes"]=ext
# ---- volatility cone / price ranges (lognormal, zero drift & drift scenarios)
sig=float(roll_vol.iloc[-1]); sig_full=rets["VIB"]["vol_ann"]
cone={}
for hname,hd in {"3M":63,"6M":126,"12M":252}.items():
    t=hd/TD; s_=sig_full*np.sqrt(t)
    cone[hname]={q:float(c.iloc[-1]*np.exp(-0.5*s_**2+stats.norm.ppf(q)*s_)) for q in (0.05,0.16,0.5,0.84,0.95)}
M["vol_cone_fullvol_zero_drift"]=cone
# empirical 12M (252d) return distribution from history (overlapping, only ~548 obs)
r252=(c.shift(-252)/c-1).dropna(); M["empirical_252d_ret_pctiles"]={str(q):float(r252.quantile(q)) for q in (0.05,0.25,0.5,0.75,0.95)}
M["empirical_252d_n_overlapping"]=int(len(r252))
json.dump(M,open(OUT+"metrics_price.json","w"),indent=1,default=str)
# chart data
CD=pd.DataFrame({"date":T.index.date,"VIB_close":c.values,"VNINDEX_close":idx.values,"VIB_rebased100":(c/c.iloc[0]*100).values,"VNINDEX_rebased100":(idx/idx.iloc[0]*100).values,
  "MA20":T.MA20.values,"MA50":T.MA50.values,"MA200":T.MA200.values,"RSI14":T.RSI14.values,"MACD":T.MACD.values,"signal":T.signal.values,"MACD_hist":T["hist_"].values,"volume":T.volume.values,
  "vol60_ann":roll_vol.reindex(T.index).values,"beta120":rb.reindex(T.index).values})
CD.round(4).to_csv(OUT+"chart_data.csv",index=False)
print(json.dumps(M,indent=1,default=str)[:20000]); print(R.round(3).to_string()); print(bigm.round(4).to_string())
