"""IR pack - market & technical metrics for VIB, MBB, VNINDEX (+ peers for context).
Data: raw/ohlcv.csv (Vietcap gap-chart, back-adjusted for stock/cash corporate actions), raw/priceboard_getList.json,
raw/shareholder_structure.json. Run: python3 -I market_analysis.py"""
import pandas as pd, numpy as np, json, os
D=os.path.dirname(os.path.abspath(__file__))+"/"; R=D+"raw/"
RF=0.0445   # ASSUMPTION: ~10Y VGB yield (same as research/analysis/vib/analysis.py)
TD=252
P=pd.read_csv(R+"ohlcv.csv",parse_dates=["date"])
px=P.pivot(index="date",columns="symbol",values="close").sort_index()
vol=P.pivot(index="date",columns="symbol",values="volume").sort_index()
val=P.pivot(index="date",columns="symbol",values="value_mn").sort_index()   # VND mn, order-matched value
assert px.isna().sum().sum()==0
LAST=px.index[-1]; AS_OF=str(LAST.date())
sr=px.pct_change().dropna()
banks=["VIB","MBB","TCB","VPB","ACB","HDB","STB","VCB"]
ss=json.load(open(R+"shareholder_structure.json"))
pb_={x["listingInfo"]["symbol"]:x for x in json.load(open(R+"priceboard_getList.json"))}
H={"1M":21,"3M":63,"6M":126,"1Y":252,"3Y":756}
def ret(s,n): return s.iloc[-1]/s.iloc[-1-n]-1
rows={}
for s in banks+["VNINDEX"]:
    c=px[s]; r=sr[s]; m=sr["VNINDEX"]
    d={"as_of":AS_OF,"close":c.iloc[-1]}
    for k,n in H.items(): d["ret_"+k]=ret(c,n)
    d["ret_YTD"]=c.iloc[-1]/c[c.index<="2025-12-31"].iloc[-1]-1
    d["CAGR_3Y"]=(1+d["ret_3Y"])**(1/3)-1
    for lab,n in (("1Y",252),("3Y",756)):
        rr=r.iloc[-n:]; mm=m.iloc[-n:]
        d["vol_ann_"+lab]=rr.std()*np.sqrt(TD)
        d["beta_"+lab]=np.cov(rr,mm)[0,1]/mm.var()
        d["corr_"+lab]=np.corrcoef(rr,mm)[0,1]
        ex=rr-RF/TD; d["sharpe_"+lab]=ex.mean()/rr.std()*np.sqrt(TD)
        dn=np.minimum(ex,0); d["sortino_"+lab]=ex.mean()*TD/(np.sqrt((dn**2).mean())*np.sqrt(TD))
    w=c.iloc[-757:]; dd=w/w.cummax()-1; tr=dd.idxmin(); pk=w[:tr].idxmax()
    d.update(maxDD_3Y=dd.min(),maxDD_peak_date=str(pk.date()),maxDD_trough_date=str(tr.date()),currDD_from_3Y_peak=dd.iloc[-1],
             peak_3Y=w.max(),peak_3Y_date=str(w.idxmax().date()))
    d["vol60_ann_now"]=r.iloc[-60:].std()*np.sqrt(TD)
    d["ADTV_3M_VNDbn"]=val[s].iloc[-63:].mean()/1e3
    d["ADTV_1Y_VNDbn"]=val[s].iloc[-252:].mean()/1e3
    if s in banks:
        sh=ss[s]["totalShares"]; mc=c.iloc[-1]*sh
        d["shares_m"]=sh/1e6; d["mcap_VNDtn"]=mc/1e12
        d["turnover_3M_ann_%"]=val[s].iloc[-63:].mean()*1e6*TD/mc*100
        mp=pb_[s]["matchPrice"]
        d["foreign_cap_%"]=mp["totalRoom"]/sh*100; d["foreign_held_%"]=ss[s]["foreignPercentage"]*100
        d["foreign_room_left_%"]=mp["currentRoom"]/sh*100; d["foreign_room_left_m_sh"]=mp["currentRoom"]/1e6
        d["foreign_room_left_VNDbn"]=mp["currentRoom"]*c.iloc[-1]/1e9
        d["foreign_room_left_days_ADTV3M"]=mp["currentRoom"]*c.iloc[-1]/(val[s].iloc[-63:].mean()*1e6)
        d["foreign_net_buy_last_session_VNDbn"]=(mp["foreignBuyValue"]-mp["foreignSellValue"])/1e9
    rows[s]=d
M=pd.DataFrame(rows).T
for k in ["1M","3M","6M","YTD","1Y","3Y"]:
    M["rel_vs_VNINDEX_"+k]=M["ret_"+k]-M.loc["VNINDEX","ret_"+k]
    M["rel_vs_peer_median_"+k]=M["ret_"+k]-M.loc[[b for b in banks if b not in("VIB","MBB")],"ret_"+k].median()
    M["rank_of_8_banks_"+k]=M.loc[banks,"ret_"+k].rank(ascending=False)
for s in ["VNINDEX"]:
    for c_ in ["foreign_cap_%","foreign_held_%","foreign_room_left_%","foreign_room_left_m_sh","foreign_room_left_VNDbn","foreign_room_left_days_ADTV3M","shares_m","mcap_VNDtn","turnover_3M_ann_%","foreign_net_buy_last_session_VNDbn"]:
        M.loc[s,c_]="n/a"
M.loc[["VIB","MBB","VNINDEX"]].to_csv(D+"market_metrics.csv",index_label="ticker")
M.loc[banks+["VNINDEX"]].to_csv(D+"market_metrics_peers.csv",index_label="ticker")
# ---- technicals
def rsi(s,n=14):
    d=s.diff(); up=d.clip(lower=0).ewm(alpha=1/n,adjust=False).mean(); dn=(-d.clip(upper=0)).ewm(alpha=1/n,adjust=False).mean()
    return 100-100/(1+up/dn)
TR={}; CH=[]
for s in ["VIB","MBB","VNINDEX"]:
    c=px[s]; v=vol[s]
    T=pd.DataFrame({"close":c,"volume":v})
    for n in (20,50,200): T[f"MA{n}"]=c.rolling(n).mean()
    T["RSI14"]=rsi(c); e12=c.ewm(span=12,adjust=False).mean(); e26=c.ewm(span=26,adjust=False).mean()
    T["MACD"]=e12-e26; T["signal"]=T.MACD.ewm(span=9,adjust=False).mean(); T["hist"]=T.MACD-T.signal
    L=T.iloc[-1]
    def lastcross(a,b):
        sg=np.sign(T[a]-T[b]).dropna(); ch=sg[sg.diff().fillna(0)!=0].index; return str(ch[-1].date()) if len(ch) else ""
    hs=np.sign(T["hist"]).dropna(); hch=hs[hs.diff().fillna(0)!=0].index
    d={"as_of":AS_OF,"close":L.close}
    for n in (20,50,200):
        d[f"MA{n}"]=L[f"MA{n}"]; d[f"pct_vs_MA{n}"]=L.close/L[f"MA{n}"]-1; d[f"above_MA{n}"]=bool(L.close>L[f"MA{n}"])
        d[f"MA{n}_slope_20d"]=T[f"MA{n}"].iloc[-1]/T[f"MA{n}"].iloc[-21]-1
    d["MA50_vs_MA200"]="MA50 above MA200" if L.MA50>L.MA200 else "MA50 below MA200"; d["MA50_MA200_last_cross"]=lastcross("MA50","MA200")
    d["MA20_vs_MA50"]="MA20 above MA50" if L.MA20>L.MA50 else "MA20 below MA50"; d["MA20_MA50_last_cross"]=lastcross("MA20","MA50")
    d["RSI14"]=L.RSI14; d["RSI_state"]="overbought(>70)" if L.RSI14>70 else "oversold(<30)" if L.RSI14<30 else "neutral"
    d["MACD"]=L.MACD; d["MACD_signal"]=L.signal; d["MACD_hist"]=L["hist"]
    d["MACD_state"]=("bullish" if L.MACD>L.signal else "bearish")+(" / above zero" if L.MACD>0 else " / below zero")
    d["MACD_last_signal_cross"]=str(hch[-1].date()); d["MACD_hist_5d_change"]=T["hist"].iloc[-1]-T["hist"].iloc[-6]
    d["vol20_vs_vol60"]=T.volume.iloc[-20:].mean()/T.volume.iloc[-60:].mean()
    w=T.iloc[-60:].copy(); w["r"]=w.close.pct_change()
    d["avg_vol_up_vs_down_days_60d"]=w[w.r>0].volume.mean()/w[w.r<0].volume.mean()
    d["low_52w"]=c.iloc[-252:].min(); d["high_52w"]=c.iloc[-252:].max(); d["pct_in_52w_range"]=(L.close-d["low_52w"])/(d["high_52w"]-d["low_52w"])
    d["low_3M"]=c.iloc[-63:].min(); d["high_3M"]=c.iloc[-63:].max()
    # pivots (10-bar each side) over last 1Y, using closes
    win=10; Lw=T.iloc[-262:]
    ph=Lw.close[(Lw.close==Lw.close.rolling(2*win+1,center=True).max())]; pl=Lw.close[(Lw.close==Lw.close.rolling(2*win+1,center=True).min())]
    tick=50 if s!="VNINDEX" else 5
    below=sorted(set(pl[pl<L.close*0.995].round(-1 if s=="VNINDEX" else -1)) ,reverse=True)
    above=sorted(set(ph[ph>L.close*1.005].round(-1 if s=="VNINDEX" else -1)))
    # volume-profile point of control 6M (bucket: 250 VND / 10 pts)
    b=250 if s!="VNINDEX" else 10; vp=T.iloc[-126:]; prof=vp.groupby((vp.close//b)*b).volume.sum()
    d["vol_profile_POC_6M"]=float(prof.idxmax()+b/2)
    # candidate levels: 1Y pivot lows/highs (role reversal allowed), MA50, MA200, 6M volume POC; cluster within 1.5%
    cand=[(x,f"pivot low {i.date()}") for i,x in pl.items()]+[(x,f"pivot high {i.date()}") for i,x in ph.items()]
    cand+=[(L.MA50,"MA50"),(L.MA200,"MA200"),(d["vol_profile_POC_6M"],"6M volume POC"),(d["low_52w"],"52w low"),(d["high_52w"],"52w high")]
    def pick(levels,rev):
        levels=sorted(levels,key=lambda t:t[0],reverse=rev); out=[]
        for x,lab in levels:
            if out and abs(x/out[-1][0]-1)<0.015: out[-1]=(out[-1][0],out[-1][1]+" + "+lab); continue
            out.append((x,lab))
        return out
    sup=pick([t for t in cand if t[0]<L.close*0.995],True); res=pick([t for t in cand if t[0]>L.close*1.005],False)
    rnd=(lambda x:round(x,0)) if s=="VNINDEX" else (lambda x:round(x/50)*50)
    for k,lst in (("support",sup),("resistance",res)):
        for j in (0,1):
            d[f"{k}_{'S' if k=='support' else 'R'}{j+1}"]=rnd(lst[j][0]) if len(lst)>j else np.nan
            d[f"{k}_{'S' if k=='support' else 'R'}{j+1}_basis"]=lst[j][1] if len(lst)>j else ""
    d["swing_lows_1Y"]=";".join(f"{i.date()}:{x:.0f}" for i,x in pl.items()); d["swing_highs_1Y"]=";".join(f"{i.date()}:{x:.0f}" for i,x in ph.items())
    TR[s]=d
    T["symbol"]=s; CH.append(T.reset_index())
pd.DataFrame(TR).T.to_csv(D+"technicals.csv",index_label="ticker")
pd.concat(CH).to_csv(D+"chart_data.csv",index=False)
# ---- big moves last 6M (|z|>2) with index move, for driver attribution
bm=[]
for s in ["VIB","MBB"]:
    r=sr[s]; z=(r-r.mean())/r.std(); beta=M.loc[s,"beta_1Y"]
    x=pd.DataFrame({"ret":r,"z":z,"VNINDEX_ret":sr["VNINDEX"],"idio":r-beta*sr["VNINDEX"],"vol_vs_20d":(vol[s]/vol[s].rolling(20).mean().shift(1)).reindex(r.index)})
    x=x.iloc[-126:]; x=x[x.z.abs()>2]; x["symbol"]=s; bm.append(x.reset_index())
pd.concat(bm).to_csv(D+"big_moves_6m.csv",index=False)
# 20-day windows: VIB-MBB spread
spread=(px.VIB/px.VIB.iloc[-757])/(px.MBB/px.MBB.iloc[-757])
json.dump({"as_of":AS_OF,"rf":RF,"VIB_over_MBB_relative_3Y":float(spread.iloc[-1]),
  "VIB_MBB_corr_1Y":float(np.corrcoef(sr.VIB.iloc[-252:],sr.MBB.iloc[-252:])[0,1]),
  "notes":"Prices back-adjusted by Vietcap for stock & cash dividends/rights (detected via VWAP/close ratio); returns ~ total return for stocks; VNINDEX is a price index. ADTV = order-matched value (accumulatedValue), excludes put-throughs."},
  open(D+"market_meta.json","w"),indent=1)
pd.set_option("display.width",250); pd.set_option("display.max_columns",80); pd.set_option("display.max_colwidth",200)
print(M.T.to_string()); print(pd.DataFrame(TR).to_string()); print(pd.concat(bm).round(4).to_string())
print("VIB/MBB 3Y rel",spread.iloc[-1])
