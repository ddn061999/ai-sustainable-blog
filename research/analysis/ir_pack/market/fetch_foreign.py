"""Foreign room (Vietcap price board getList) + shareholder structure (Vietcap IQ). Run: python3 -I fetch_foreign.py"""
import requests, json, os, time
D=os.path.dirname(os.path.abspath(__file__))+"/raw/"
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36"
H={"User-Agent":UA,"Referer":"https://trading.vietcap.com.vn/","Origin":"https://trading.vietcap.com.vn","Content-Type":"application/json"}
T=["VIB","MBB","TCB","VPB","ACB","HDB","STB","VCB"]
r=requests.post("https://trading.vietcap.com.vn/api/price/symbols/getList",headers=H,json={"symbols":T},timeout=30)
json.dump(r.json(),open(D+"priceboard_getList.json","w"),ensure_ascii=False)
ss={}
for t in T:
    ss[t]=requests.get(f"https://iq.vietcap.com.vn/api/iq-insight-service/v1/company/{t}/shareholder-structure",headers={k:v for k,v in H.items() if k!="Content-Type"},timeout=30).json()["data"]; time.sleep(0.3)
json.dump(ss,open(D+"shareholder_structure.json","w"))
for x in r.json():
    m=x["matchPrice"]; t=x["listingInfo"]["symbol"]; s=ss[t]
    print(t,x["listingInfo"]["tradingDate"],"listed",x["listingInfo"]["listedShare"],"totalShares",s["totalShares"],"totalRoom",m["totalRoom"],"currentRoom",m["currentRoom"],"foreignVol",s["foreignerVolume"],
          "cap%%=%.4f held%%=%.4f room_left%%=%.4f chk=%.0f"%(m["totalRoom"]/s["totalShares"],s["foreignPercentage"],m["currentRoom"]/s["totalShares"],m["totalRoom"]-s["foreignerVolume"]-m["currentRoom"]))
