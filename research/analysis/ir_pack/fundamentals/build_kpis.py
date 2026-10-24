import json, pandas as pd, numpy as np
O="/home/user/ai-sustainable-blog/research/analysis/ir_pack/fundamentals/"
R="/home/user/ai-sustainable-blog/research/analysis/ir_pack/raw/"
F=pd.read_csv(O+"fundamentals_VIB_MBB_quarterly.csv",index_col=0)
SRC="fundamentals_VIB_MBB_quarterly.csv (Vietcap IQ raw/{T}_IS|BS|NOTE.json)"
LQ="2026Q2"
def prevq(p,n):  # shift period string by -n quarters
    y,qq=int(p[:4]),int(p[-1]); k=y*4+qq-1-n; return f"{k//4}Q{k%4+1}"
def window(end,n): return [prevq(end,i) for i in range(n-1,-1,-1)]
FLOW={"NII":"isb27","Fee":"isb30","NonII":"isb38-isb27","TOI":"isb38","Opex":"isb39","PPOP":"isb40","Prov":"isb41","PBT":"isa16","NPAT":"isa20","NPAT_parent":"isa22"}
# bases: (label, end period, n quarters, annualisation factor)
BASES=[("Quarter",LQ,1,4),("TTM",LQ,4,1),("6M YTD",LQ,2,2)]
rows=[]
def add(t,metric,basis,cp,cv,pp,pv,unit,formula,excel,src):
    if unit=="VND bn": ch=(cv/pv-1)*100 if pv not in (0,None) and not pd.isna(pv) else np.nan; cu="% YoY"
    else: ch=cv-pv; cu="pp" if unit=="%" else unit
    rows.append(dict(ticker=t,metric=metric,basis=basis,period=cp,value=cv,prior_period=pp,prior_value=pv,change=ch,change_unit=cu,unit=unit,formula=formula,excel_equiv=excel,source=src))
for t in ["VIB","MBB"]:
    d=F[F.ticker==t]
    for basis,end,n,ann in BASES:
        pend=prevq(end,4)
        lab=lambda e: f"{window(e,n)[0]}-{e}" if n>1 else e
        for k,code in FLOW.items():
            add(t,k,basis,lab(end),d.loc[window(end,n),k].sum(),lab(pend),d.loc[window(pend,n),k].sum(),"VND bn",
                f"sum of quarterly {k} over {n}Q" if n>1 else f"quarterly {k}",f"=SUM({k} range)" if n>1 else f"={k}",f"{SRC}: {code}")
        def ratio(e):
            w=window(e,n); pts=window(e,n+1)   # n+1 quarter-ends for average balances
            s=lambda c: d.loc[w,c].sum(); a=lambda c: d.loc[pts,c].mean()
            return {"NIM_%":s("NII")*ann/a("IEA")*100,
                    "CIR_%":-s("Opex")/s("TOI")*100,
                    "CreditCost_%":-s("Prov")*ann/a("Loans")*100,
                    "ROE_%":s("NPAT_parent")*ann/a("Equity_parent")*100,
                    "ROE_total_equity_%":s("NPAT")*ann/a("Equity")*100,
                    "ROA_%":s("NPAT")*ann/a("Assets")*100,
                    "EffTax_%":-s("Tax")/s("PBT")*100,
                    "Fee_share_TOI_%":s("Fee")/s("TOI")*100}
        rc,rp=ratio(end),ratio(pend)
        avgtxt=f"average of {n+1} quarter-end balances"
        RF={"NIM_%":(f"NII x{ann} / avg IEA ({avgtxt}); IEA=SBV balances+interbank balances & loans (gross)+trading sec (gross)+customer loans (gross)+debt buying (gross)+AFS+HTM","=NII*ann/AVERAGE(IEA)","isb27; bsb97+bsb258+bsb259+bsb100+bsb104+bsb262+bsb107+bsb108"),
            "CIR_%":("-Opex / TOI","=-Opex/TOI","isb39, isb38"),
            "CreditCost_%":(f"-Provision x{ann} / avg gross customer loans ({avgtxt})","=-Prov*ann/AVERAGE(Loans)","isb41, bsb104"),
            "ROE_%":(f"NPAT attributable to parent x{ann} / avg parent equity (bsa78 - bsa210) ({avgtxt})","=NPAT_parent*ann/AVERAGE(Equity-MI)","isa22, bsa78, bsa210"),
            "ROE_total_equity_%":(f"NPAT x{ann} / avg total equity incl. MI ({avgtxt}) [VIB-file definition]","=NPAT*ann/AVERAGE(Equity)","isa20, bsa78"),
            "ROA_%":(f"NPAT x{ann} / avg total assets ({avgtxt})","=NPAT*ann/AVERAGE(Assets)","isa20, bsa53"),
            "EffTax_%":("-Tax / PBT","=-Tax/PBT","isa19, isa16"),
            "Fee_share_TOI_%":("Net fee income / TOI","=Fee/TOI","isb30, isb38")}
        for m in rc:
            fo,ex,cd=RF[m]; add(t,m,basis,lab(end),rc[m],lab(pend),rp[m],"%",fo,ex,f"{SRC}: {cd}")
    # point-in-time (period end LQ vs LQ-4)
    pe,pp=LQ,prevq(LQ,4)
    shares_now=None
    st=pd.DataFrame(json.load(open(R+f"{t}_stats.json"))["data"]); st=st[(st.yearReport==2026)&(st.quarter==2)].iloc[0]
    PIT={"NPL_%":("(Group3+4+5) / total graded loans","=(nob42+nob43+nob44)/nob39","nob42,nob43,nob44,nob39"),
         "Group2_%":("Group 2 (special mention) / total graded loans","=nob41/nob39","nob41,nob39"),
         "LLR_cov_%":("Customer-loan loss reserve / NPL (Group 3-5)","=-LLR/(nob42+nob43+nob44)","bsb105; nob42-44"),
         "CASA_%":("Current (demand) deposits / customer deposits [VIB-file definition]","=nob66/nob65","nob66,nob65"),
         "CASA_broad_%":("(Current + margin + special-purpose deposits) / customer deposits [matches Vietcap casaRatio]","=(nob66+nob69+nob70)/nob65","nob66,nob69,nob70,nob65"),
         "LDR_simple_%":("Gross customer loans / customer deposits (NOT the SBV Circular 22 regulatory LDR)","=Loans/Deposits","bsb104,bsb113"),
         "EqA_%":("Total equity (incl. MI) / total assets","=Equity/Assets","bsa78,bsa53"),
         "Loan_ytd_%":("Gross loans period-end / prior Dec-end - 1","=Loans/Loans_PriorQ4-1","bsb104"),
         "Deposit_ytd_%":("Customer deposits period-end / prior Dec-end - 1","=Deposits/Deposits_PriorQ4-1","bsb113"),
         "Loan_yoy_%":("Gross loans / same quarter-end prior year - 1","=Loans/Loans_4Qago-1","bsb104"),
         "Deposit_yoy_%":("Customer deposits / same quarter-end prior year - 1","=Deposits/Deposits_4Qago-1","bsb113"),
         "BVPS_charter":("Total equity / (charter capital / 10,000 VND par) [VIB-file definition]","=Equity/(Charter/10000)","bsa78,bsa80"),
         "BVPS_parent_charter":("Parent equity / (charter capital / 10,000)","=(Equity-MI)/(Charter/10000)","bsa78,bsa210,bsa80")}
    for m,(fo,ex,cd) in PIT.items():
        u="VND" if m.startswith("BVPS") else "%"
        add(t,m,"Period-end",pe,d.loc[pe,m],pp,d.loc[pp,m],u,fo,ex,f"{SRC}: {cd}")
    # balances for reference
    for m,cd in [("Loans","bsb104"),("Deposits","bsb113"),("Assets","bsa53"),("Equity","bsa78"),("Equity_parent","bsa78-bsa210"),("Bonds","bsb116")]:
        add(t,m,"Period-end",pe,d.loc[pe,m],pp,d.loc[pp,m],"VND bn",f"period-end {m}",f"={m}",f"{SRC}: {cd}")
    sh=st.numberOfSharesMktCap
    add(t,"BVPS_parent_latest_shares","Period-end",pe,d.loc[pe,"Equity_parent"]*1e9/sh,pp,np.nan,"VND",
        f"Parent equity 2026Q2 / shares {sh/1e6:,.1f}m (Vietcap stats numberOfSharesMktCap, 2026Q2 row; exceeds charter/10,000 -> post-period share issuance)","=(Equity-MI)/Shares",f"raw/{t}_stats.json numberOfSharesMktCap; bsa78-bsa210")
K=pd.DataFrame(rows)
K.to_csv(O+"kpi_comparison.csv",index=False)

# ---------- DuPont, TTM, last 8 quarters ----------
D=[]
for t in ["VIB","MBB"]:
    d=F[F.ticker==t]
    for end in window(LQ,8):
        w=window(end,4); pts=window(end,5)
        s=lambda c: d.loc[w,c].sum(); a=lambda c: d.loc[pts,c].mean()
        A=a("Assets"); r={"ticker":t,"TTM_end":end,"TTM_window":f"{w[0]}-{w[-1]}","avg_assets_bn":A,"avg_parent_equity_bn":a("Equity_parent")}
        for c,lbl in [("NII","NII"),("NonII","NonII"),("Fee","Fee_memo"),("TOI","TOI"),("Opex","Opex"),("PPOP","PPOP"),("Prov","Prov"),("PBT","PBT"),("Tax","Tax"),("NPAT","NPAT"),("MI_PL","MI"),("NPAT_parent","NPAT_parent")]:
            r[f"{lbl}/avgA_%"]=s(c)/A*100
        r["NIM_%"]=s("NII")/a("IEA")*100; r["IEA/avgA_%"]=a("IEA")/A*100
        r["tax_burden_NPAT/PBT"]=s("NPAT")/s("PBT"); r["MI_retention_parent/NPAT"]=s("NPAT_parent")/s("NPAT")
        r["leverage_avgA/avgParentE_x"]=A/a("Equity_parent")
        r["ROA_parent_%"]=s("NPAT_parent")/A*100
        r["ROE_%"]=r["ROA_parent_%"]*r["leverage_avgA/avgParentE_x"]
        r["ROE_direct_%"]=s("NPAT_parent")/a("Equity_parent")*100
        r["chk_PBT_sum_components"]=r["NII/avgA_%"]+r["NonII/avgA_%"]+r["Opex/avgA_%"]+r["Prov/avgA_%"]-r["PBT/avgA_%"]
        D.append(r)
D=pd.DataFrame(D); D.to_csv(O+"roe_dupont.csv",index=False)

# ---------- ROE gap attribution MBB - VIB (exact midpoint/Shapley for product) ----------
G=[]
for end in [LQ,prevq(LQ,4)]:
    m=D[(D.ticker=="MBB")&(D.TTM_end==end)].iloc[0]; v=D[(D.ticker=="VIB")&(D.TTM_end==end)].iloc[0]
    k=lambda x: x["tax_burden_NPAT/PBT"]*x["MI_retention_parent/NPAT"]*x["leverage_avgA/avgParentE_x"]
    tm=lambda x: x["tax_burden_NPAT/PBT"]*x["MI_retention_parent/NPAT"]
    kbar=(k(m)+k(v))/2; pbar=(m["PBT/avgA_%"]+v["PBT/avgA_%"])/2
    for c in ["NII","NonII","Opex","Prov"]:
        G.append(dict(TTM_end=end,driver=f"{c}/avgA",MBB=m[f"{c}/avgA_%"],VIB=v[f"{c}/avgA_%"],diff=m[f"{c}/avgA_%"]-v[f"{c}/avgA_%"],ROE_gap_contrib_pp=(m[f"{c}/avgA_%"]-v[f"{c}/avgA_%"])*kbar))
    dk=k(m)-k(v); Lb=(m["leverage_avgA/avgParentE_x"]+v["leverage_avgA/avgParentE_x"])/2; tb=(tm(m)+tm(v))/2
    G.append(dict(TTM_end=end,driver="tax & MI retention (NPAT_parent/PBT)",MBB=tm(m),VIB=tm(v),diff=tm(m)-tm(v),ROE_gap_contrib_pp=pbar*(tm(m)-tm(v))*Lb))
    G.append(dict(TTM_end=end,driver="leverage (avgA/avg parent E)",MBB=m["leverage_avgA/avgParentE_x"],VIB=v["leverage_avgA/avgParentE_x"],diff=m["leverage_avgA/avgParentE_x"]-v["leverage_avgA/avgParentE_x"],ROE_gap_contrib_pp=pbar*tb*(m["leverage_avgA/avgParentE_x"]-v["leverage_avgA/avgParentE_x"])))
    G.append(dict(TTM_end=end,driver="TOTAL ROE gap",MBB=m["ROE_%"],VIB=v["ROE_%"],diff=m["ROE_%"]-v["ROE_%"],ROE_gap_contrib_pp=np.nan))
G=pd.DataFrame(G)
for end in G.TTM_end.unique():
    s=G[(G.TTM_end==end)&(G.driver!="TOTAL ROE gap")].ROE_gap_contrib_pp.sum(); tot=G[(G.TTM_end==end)&(G.driver=="TOTAL ROE gap")]["diff"].iloc[0]
    print(end,"sum contrib",round(s,4),"total gap",round(tot,4))
G["method"]="ROE=(PBT/avgA)x(NPAT/PBT)x(NPAT_parent/NPAT)x(avgA/avgParentE); gap split by midpoint (Shapley) rule, exact; PBT/A = NII+NonII+Opex+Prov (all /avgA)"
G.to_csv(O+"roe_gap_attribution.csv",index=False)
pd.set_option("display.width",250); pd.set_option("display.max_columns",40); pd.set_option("display.max_rows",500)
print(G.round(3).to_string())
print(D.round(3).T.to_string())
print("max chk",D.chk_PBT_sum_components.abs().max(),(D["ROE_%"]-D["ROE_direct_%"]).abs().max())
