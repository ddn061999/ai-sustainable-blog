import requests, time, json, pandas as pd
H={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
   "Referer":"https://trading.vietcap.com.vn/","Origin":"https://trading.vietcap.com.vn","Content-Type":"application/json"}
url="https://trading.vietcap.com.vn/api/chart/OHLCChart/gap-chart"
out=[]
for s in ["TCB","VPB","MBB","ACB","HDB","STB","VCB","VN30"]:
    r=requests.post(url,headers=H,json={"timeFrame":"ONE_DAY","symbols":[s],"to":int(time.time()),"countBack":800},timeout=30)
    j=r.json()[0]
    d=pd.DataFrame({"symbol":s,"date":pd.to_datetime(j["t"],unit="s").date if False else pd.to_datetime(pd.Series(j["t"]).astype(int),unit="s").dt.tz_localize("UTC").dt.tz_convert("Asia/Ho_Chi_Minh").dt.date,
                    "open":j["o"],"high":j["h"],"low":j["l"],"close":j["c"],"volume":j["v"]})
    print(s,len(d),d.date.min(),d.date.max(),d.close.iloc[-1]); out.append(d)
pd.concat(out).to_csv("/home/user/vib_analysis/raw/peers_ohlcv.csv",index=False)
