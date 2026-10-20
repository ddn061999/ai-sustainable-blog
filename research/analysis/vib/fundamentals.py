import json, pandas as pd, numpy as np
R="/home/user/vib_analysis/raw/"
def q(sec):
    d=pd.DataFrame(json.load(open(R+f"VIB_{sec}.json"))["data"]["quarters"])
    d=d[d.lengthReport.between(1,4)].copy(); d["per"]=d.yearReport.astype(str)+"Q"+d.lengthReport.astype(str)
    return d.set_index("per")
def y(sec):
    d=pd.DataFrame(json.load(open(R+f"VIB_{sec}.json"))["data"]["years"]); return d.set_index("yearReport")
IS,BS,NT=q("IS"),q("BS"),q("NOTE")
f=pd.DataFrame(index=IS.index)
f["publicDate"]=IS.publicDate.str[:10]
f["NII"]=IS.isb27; f["Fee"]=IS.isb30; f["TOI"]=IS.isb38; f["Opex"]=IS.isb39; f["PPOP"]=IS.isb40
f["Prov"]=IS.isb41; f["PBT"]=IS.isa16; f["NPAT"]=IS.isa20; f["NPAT_parent"]=IS.isa22; f["EPS_q"]=IS.isa23
f["Loans"]=BS.bsb104; f["LLR"]=BS.bsb105; f["Deposits"]=BS.bsb113; f["Bonds"]=BS.bsb116; f["Assets"]=BS.bsa53; f["Equity"]=BS.bsa78; f["Charter"]=BS.bsa80
for c in ["nob39","nob40","nob41","nob42","nob43","nob44","nob65","nob66","nob68","nob151","nob80","nob81"]:
    f[c]=NT[c] if c in NT else np.nan
pass
bn=["NII","Fee","TOI","Opex","PPOP","Prov","PBT","NPAT","NPAT_parent","Loans","LLR","Deposits","Bonds","Assets","Equity","Charter"]
f[bn]=f[bn]/1e9  # VND bn
f["NPL_%"]=(f.nob42+f.nob43+f.nob44)/f.nob39*100
f["Group2_%"]=f.nob41/f.nob39*100
f["CASA_%"]=f.nob66/f.nob65*100
f["CAR_note"]=f.nob151
f["LLR_cov_%"]=-f.LLR/((f.nob42+f.nob43+f.nob44)/1e9)*100
f["CIR_%"]=-f.Opex/f.TOI*100
avgL=(f.Loans+f.Loans.shift(1))/2; avgE=(f.Equity+f.Equity.shift(1))/2; avgA=(f.Assets+f.Assets.shift(1))/2
f["CreditCost_ann_%"]=-f.Prov*4/avgL*100
f["ROE_ann_%"]=f.NPAT*4/avgE*100
f["ROA_ann_%"]=f.NPAT*4/avgA*100
f["NPAT_yoy_%"]=(f.NPAT/f.NPAT.shift(4)-1)*100
f["NII_yoy_%"]=(f.NII/f.NII.shift(4)-1)*100
f["Loan_ytd_%"]=np.nan
for p in f.index:
    yr=int(p[:4]); prev=f"{yr-1}Q4"
    if prev in f.index: f.loc[p,"Loan_ytd_%"]=(f.loc[p,"Loans"]/f.loc[prev,"Loans"]-1)*100
f["LDR_simple_%"]=f.Loans/f.Deposits*100
# TTM
for c in ["NII","TOI","Opex","Prov","PBT","NPAT"]: f[c+"_TTM"]=f[c].rolling(4).sum()
f["BVPS_charter"]=f.Equity*1e9/(f.Charter*1e9/1e4)
f.to_csv("/home/user/vib_analysis/fundamentals_quarterly.csv")
pd.set_option("display.width",300); pd.set_option("display.max_columns",50)
show=["publicDate","NII","Fee","TOI","Opex","Prov","PBT","NPAT","EPS_q","Loans","Deposits","Equity","Charter","NPL_%","Group2_%","CASA_%","CAR_note","LLR_cov_%","CIR_%","CreditCost_ann_%","ROE_ann_%","NPAT_yoy_%","NII_yoy_%","Loan_ytd_%","BVPS_charter"]
print(f[show].tail(10).round(2).T.to_string())
Y=y("IS"); print(Y[["isb27","isb38","isb41","isa16","isa20","isa23","publicDate"]].tail(6))
