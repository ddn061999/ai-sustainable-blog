"""Fetch daily OHLCV (Vietcap gap-chart, one symbol/request) + Vietcap IQ fundamentals for IR pack.
Run: python3 -I fetch_market.py   Outputs to ./raw/"""
import requests, time, json, pandas as pd, os
D=os.path.dirname(os.path.abspath(__file__))+"/raw/"
H={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
   "Referer":"https://trading.vietcap.com.vn/","Origin":"https://trading.vietcap.com.vn","Content-Type":"application/json"}
url="https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart"
out=[]
SYMS=["VIB","MBB","VNINDEX","TCB","VPB","ACB","HDB","STB","VCB"]
for s in SYMS:
    r=requests.post(url,headers=H,json={"timeFrame":"ONE_DAY","symbols":[s],"to":int(time.time()),"countBack":1000},timeout=30)
    j=r.json()[0]
    d=pd.DataFrame({"symbol":s,"date":pd.to_datetime(pd.Series(j["t"]).astype(int),unit="s").dt.tz_localize("UTC").dt.tz_convert("Asia/Ho_Chi_Minh").dt.date,
        "open":j["o"],"high":j["h"],"low":j["l"],"close":j["c"],"volume":j["v"],"value_mn":j.get("accumulatedValue")})
    print(s,len(d),d.date.min(),d.date.max(),d.close.iloc[-1]); out.append(d); time.sleep(0.5)
P=pd.concat(out); P.to_csv(D+"ohlcv.csv",index=False)
json.dump({"fetched_at_utc":time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime())},open(D+"fetch_meta.json","w"))
HI={k:v for k,v in H.items() if k!="Content-Type"}
B="https://iq.vietcap.com.vn/api/iq-insight-service/v1/company/{t}/"
for t in ["VIB","MBB","TCB","VPB","ACB","HDB","STB","VCB"]:
    eps={"stats":"statistics-financial","metrics":"financial-statement/metrics"}
    if t in("VIB","MBB"): eps.update({"IS":"financial-statement?section=INCOME_STATEMENT","BS":"financial-statement?section=BALANCE_SHEET","NOTE":"financial-statement?section=NOTE"})
    for k,e in eps.items():
        r=requests.get(B.format(t=t)+e,headers=HI,timeout=30)
        json.dump(r.json(),open(D+f"{t}_{k}.json","w"),ensure_ascii=False); print(t,k,r.status_code,len(r.text)); time.sleep(0.3)
