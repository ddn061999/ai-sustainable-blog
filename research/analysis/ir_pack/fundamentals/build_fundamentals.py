"""Build VIB+MBB quarterly fundamentals. Method/columns reuse research/analysis/vib/fundamentals.py,
plus extra columns appended at the end (marked EXTRA)."""
import json, pandas as pd, numpy as np
R="/home/user/ai-sustainable-blog/research/analysis/ir_pack/raw/"
O="/home/user/ai-sustainable-blog/research/analysis/ir_pack/fundamentals/"
BASE=list(pd.read_csv("/home/user/ai-sustainable-blog/research/analysis/vib/fundamentals_quarterly.csv",nrows=0).columns)

def q(t,sec):
    d=pd.DataFrame(json.load(open(R+f"{t}_{sec}.json"))["data"]["quarters"])
    d=d[d.lengthReport.between(1,4)].copy(); d["per"]=d.yearReport.astype(str)+"Q"+d.lengthReport.astype(str)
    return d.set_index("per").sort_index()

def build(t):
    IS,BS,NT=q(t,"IS"),q(t,"BS"),q(t,"NOTE")
    f=pd.DataFrame(index=IS.index)
    f["publicDate"]=IS.publicDate.str[:10]
    f["NII"]=IS.isb27; f["Fee"]=IS.isb30; f["TOI"]=IS.isb38; f["Opex"]=IS.isb39; f["PPOP"]=IS.isb40
    f["Prov"]=IS.isb41; f["PBT"]=IS.isa16; f["NPAT"]=IS.isa20; f["NPAT_parent"]=IS.isa22; f["EPS_q"]=IS.isa23
    f["Loans"]=BS.bsb104; f["LLR"]=BS.bsb105; f["Deposits"]=BS.bsb113; f["Bonds"]=BS.bsb116; f["Assets"]=BS.bsa53; f["Equity"]=BS.bsa78; f["Charter"]=BS.bsa80
    for c in ["nob39","nob40","nob41","nob42","nob43","nob44","nob65","nob66","nob68","nob151","nob80","nob81"]:
        f[c]=NT[c] if c in NT else np.nan
    # EXTRA raw inputs
    f["Tax"]=IS.isa19; f["MI_PL"]=IS.isa21
    f["FX"]=IS.isb31; f["TradingSec"]=IS.isb32; f["InvSec"]=IS.isb33; f["OtherNet"]=IS.isb36; f["Div"]=IS.isb37
    f["IntInc"]=IS.isb25; f["IntExp"]=IS.isb26
    f["MI_BS"]=BS.bsa210; f["Liab"]=BS.bsa54; f["LiabEq"]=BS.bsa96
    f["IEA"]=BS.bsb97+BS.bsb258+BS.bsb259+BS.bsb100+BS.bsb104+BS.bsb262.fillna(0)+BS.bsb107+BS.bsb108
    f["nob69"]=NT.nob69; f["nob70"]=NT.nob70
    bn=["NII","Fee","TOI","Opex","PPOP","Prov","PBT","NPAT","NPAT_parent","Loans","LLR","Deposits","Bonds","Assets","Equity","Charter",
        "Tax","MI_PL","FX","TradingSec","InvSec","OtherNet","Div","IntInc","IntExp","MI_BS","Liab","LiabEq","IEA"]
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
    f["Loan_ytd_%"]=np.nan; f["Deposit_ytd_%"]=np.nan
    for p in f.index:
        prev=f"{int(p[:4])-1}Q4"
        if prev in f.index:
            f.loc[p,"Loan_ytd_%"]=(f.loc[p,"Loans"]/f.loc[prev,"Loans"]-1)*100
            f.loc[p,"Deposit_ytd_%"]=(f.loc[p,"Deposits"]/f.loc[prev,"Deposits"]-1)*100
    f["LDR_simple_%"]=f.Loans/f.Deposits*100
    for c in ["NII","TOI","Opex","Prov","PBT","NPAT"]: f[c+"_TTM"]=f[c].rolling(4).sum()
    f["BVPS_charter"]=f.Equity*1e9/(f.Charter*1e9/1e4)
    # EXTRA derived
    f["Equity_parent"]=f.Equity-f.MI_BS
    avgEp=(f.Equity_parent+f.Equity_parent.shift(1))/2; avgIEA=(f.IEA+f.IEA.shift(1))/2
    f["ROE_parent_ann_%"]=f.NPAT_parent*4/avgEp*100
    f["NIM_ann_%"]=f.NII*4/avgIEA*100
    f["CASA_broad_%"]=(f.nob66+f.nob69+f.nob70)/f.nob65*100
    f["EqA_%"]=f.Equity/f.Assets*100
    f["BVPS_parent_charter"]=f.Equity_parent*1e9/(f.Charter*1e9/1e4)
    f["NonII"]=f.TOI-f.NII
    f["Fee_TTM"]=f.Fee.rolling(4).sum(); f["NPAT_parent_TTM"]=f.NPAT_parent.rolling(4).sum()
    f["Deposit_yoy_%"]=(f.Deposits/f.Deposits.shift(4)-1)*100; f["Loan_yoy_%"]=(f.Loans/f.Loans.shift(4)-1)*100
    # validation (VND bn)
    f["chk_BS_A_minus_LE"]=f.Assets-(f.Liab+f.Equity)
    f["chk_TOI_minus_parts"]=f.TOI-(f.NII+f.Fee+f.FX+f.TradingSec+f.InvSec+f.OtherNet+f.Div)
    f["chk_PBT_minus_PPOPplusProv"]=f.PBT-(f.PPOP+f.Prov)
    f["chk_NPAT_minus_PBTplusTax"]=f.NPAT-(f.PBT+f.Tax)
    f["chk_PPOP_minus_TOIplusOpex"]=f.PPOP-(f.TOI+f.Opex)
    f["chk_nob39_minus_Loans"]=f.nob39/1e9-f.Loans
    f["chk_nob65_minus_Deposits"]=f.nob65/1e9-f.Deposits
    f["chk_grades_minus_nob39"]=(f.nob40+f.nob41+f.nob42+f.nob43+f.nob44-f.nob39)/1e9
    f.insert(0,"ticker",t)
    return f

F=pd.concat([build("VIB"),build("MBB")]); F.index.name="per"
extra=[c for c in F.columns if c not in BASE and c!="ticker"]
F=F[["ticker"]+[c for c in BASE if c!="per"]+extra]
F=F[F.index>="2021Q1"]   # deliverable scope
F.to_csv(O+"fundamentals_VIB_MBB_quarterly.csv")
chk=[c for c in F.columns if c.startswith("chk_")]
print(F.groupby("ticker")[chk].agg(lambda s: s.abs().max()).T.round(3))
print(F.groupby("ticker").apply(lambda d: d.index.min()+"..."+d.index.max()))
