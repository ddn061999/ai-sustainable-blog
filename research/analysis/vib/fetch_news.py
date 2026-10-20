import requests, re, html, sys, json
H={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36"}
urls=dict(a.split("=",1) for a in sys.argv[1:])
for k,u in urls.items():
    t=requests.get(u,headers=H,timeout=30).text
    dp=re.search(r'"datePublished":\s*"([^"]+)"',t)
    paras=re.findall(r"<p[^>]*>(.*?)</p>",t,re.S)
    txt="\n".join(re.sub(r"\s+"," ",html.unescape(re.sub(r"<[^>]+>","",p))).strip() for p in paras)
    txt="\n".join(l for l in txt.split("\n") if len(l)>60)
    open(f"/home/user/vib_analysis/raw/news/{k}.txt","w").write((dp.group(1) if dp else "")+"\n"+txt)
    print("=====",k,dp.group(1) if dp else None); print(txt[:1800])
