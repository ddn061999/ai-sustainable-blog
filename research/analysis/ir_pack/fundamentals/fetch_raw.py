import requests, json, sys
H={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36","Referer":"https://trading.vietcap.com.vn/","Origin":"https://trading.vietcap.com.vn"}
B="https://iq.vietcap.com.vn/api/iq-insight-service/v1/company/{t}/"
RAW="/home/user/ai-sustainable-blog/research/analysis/ir_pack/raw/"
eps={"stats":"statistics-financial","metrics":"financial-statement/metrics","IS":"financial-statement?section=INCOME_STATEMENT","BS":"financial-statement?section=BALANCE_SHEET","CF":"financial-statement?section=CASH_FLOW","NOTE":"financial-statement?section=NOTE"}
for t in ["VIB","MBB"]:
    for k,e in eps.items():
        r=requests.get(B.format(t=t)+e,headers=H,timeout=30)
        open(RAW+f"{t}_{k}.json","w").write(r.text)
        print(t,k,r.status_code,len(r.text))
