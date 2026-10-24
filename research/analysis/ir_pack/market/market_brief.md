# IR Pack: Market & Valuation, VIB vs MBB (HOSE)
**Executive Decision Brief.** Prices as of the 2026-10-23 close (VIB 14,200; MBB 19,800; VNINDEX 1,774.15). Fundamentals are 2026Q2 TTM (Q3 2026 not yet filed). Source data: Vietcap chart API, Vietcap IQ and the price board. Each figure traces to a CSV in this folder.

## 1. Executive summary
- **The market discounts both banks, but for different reasons.** VIB trades at **1.11x P/B**, 19% below its 3Y median (1.39x, 17th percentile). The market is pricing **lower ROE (15.7%)**, not a high risk premium: implied COE is **14.7%**, close to the peer median of ~13.9%.
- **MBB is the larger anomaly.** It trades at **1.27x P/B and 6.6x P/E** with **ROE 20.7%**, so the market implies a **17.6% COE**, the highest of 8 peers and 3.5pp above our 14% base. At COE 14% / g 6%, justified P/B is **1.84x (~28,700, +44%)**. VIB's equivalent is **1.21x (~15,500, +9%)**.
- **The P/B gap between the two banks is narrow given their ROE.** VIB is at a 12.8% P/B discount to MBB and a 7.9% P/E *premium*. On ROE alone (same COE), VIB should trade at about 0.66x MBB's P/B, a 34% discount. So in relative terms the market is generous to VIB and harsh on MBB.
- **Flows are structurally constrained for both.** Remaining foreign room is **1.14% for VIB (4.99% cap)** and **0.89% for MBB (23.24% cap)**, each about 7–8 days of ADTV. Neither appears in ACBS's list of FTSE-inclusion banks.

## 2. Quantitative & technical (market_metrics.csv, technicals.csv)
| | VIB | MBB | VNINDEX |
|---|---|---|---|
| Return 3M / YTD / 1Y / 3Y | +6.5% / −7.6% / −16.7% / +24.2% | +7.8% / −2.3% / −8.8% / +109.8% | +4.4% / −0.6% / +2.5% / +55.1% |
| Vol 1Y / beta 1Y (3Y) | 24.1% / 0.82 (0.93) | 26.7% / 0.80 (0.97) | 20.5% |
| Max DD 3Y / current DD | −36.8% / −30.5% | −22.4% / −14.8% | −18.1% / −8.0% |
| Sharpe 1Y / 3Y (rf 4.45%) | −0.82 / 0.24 | −0.38 / 0.91 | 0.01 / 0.65 |
| ADTV 3M (VND bn) | 74 (−30% vs 1Y) | 252 (−49% vs 1Y) | 16,626 |

- **VIB** is above MA20 and MA50, and 1.3% below MA200 (14,386). RSI is 64. MACD is bullish above zero (cross on 6-Oct). The MA50/MA200 death cross from 26-Jan has not reversed. Support is 13,750 then 13,250; resistance is 14,300 (MA200 cluster) then 14,600 (6M volume POC). A close above about 14,400 on rising volume would be the first trend repair since January.
- **MBB** is above MA20 but below MA50 (19,952) and MA200 (20,548). RSI is 53. MACD is bullish below zero (cross on 15-Oct). Support is 19,700 then 18,900; resistance is 19,900–20,125 then 20,500.
- **Timing.** Both are momentum-neutral to improving with no confirmed uptrend. Both lagged the VNINDEX's +5.0% over 19–23 Oct (VIB +3.3%, MBB +0.5%). Low ADTV at VIB raises the execution cost of any re-rating.

## 3. Fundamentals & valuation (valuation.csv)
| | VIB | MBB | Peer median ex-STB |
|---|---|---|---|
| P/B / P/E TTM | 1.11x / 7.1x | 1.27x / 6.6x | 1.35x |
| 3Y P/B median (min–max) | 1.39 (1.09–1.58) | 1.37 (1.23–1.78) | – |
| ROE TTM / NIM / CASA | 15.7% / 3.0% / 11.9% | 20.7% / 3.9% / 34.6% | – |
| NPL / LLR coverage | 2.9% / 44% | 1.45% / 94% | – |
| Implied COE (g 6%) | 14.7% | 17.6% | ~13.9% |
| ROE the price discounts at COE 14% | 14.9% | 16.1% | – |
| Peer P/B–ROE residual (LOO, ex-STB) | −20% | −22% | R² 0.15–0.38: weak |

- The cross-section regression is statistically weak (n=6). Implied COE is the cleaner comparison.
- CAPM gives a COE of 11.9–12.2% (beta x 8% ERP + 4.45%). The 14% base therefore carries a ~2pp bank/EM premium.

## 4. What drove the prices
- **VIB, documented.** H1 PBT was +3% YoY (27-Jul-2026), with fee income +294% and largely one-off (Vietcap, 7-Aug). The stock closed at its 3Y low that day. Retail NPL reached 4.3%. The 2026 plan needs H2 PBT **+56% YoY**. Fundamentals justify the de-rating: ROE TTM fell from 17.8% (2025Q2) to 15.7%.
- **MBB, documented.** H1 PBT was +27% and Q2 NIM 4.16% (1-Aug). The stock went limit-up (+6.7%) on 3-Aug, of which +5.4% was idiosyncratic. 2026 dilution is 15% stock plus a 10:1 rights issue at VND10,000, taking share count up 25%.
- **Hypotheses (unverified) for MBB's high COE:**
  - No marginal foreign buyer (room exhausted).
  - Dilution and a listing overhang (~805m unlisted shares).
  - Doubt that the ROE is sustainable after the capital raise.
  - Real-estate exposure under SBV caps.

## 5. Scenarios, 12-month value per share (scenarios.csv)
Method: value = (ROE−g)/(COE−g) x BVPS₁₂, where BVPS₁₂ = BVPS·(1+ROE) − DPS. DPS is assumed at VIB 900 and MBB 1,000 (not yet declared).

| | Bear | Base | Bull |
|---|---|---|---|
| **VIB** ROE / COE | 13% / 15.7% (g 5%) | 15.5% / 14.7% | 17.5% / 14.0% |
| Value (total return) | 10,100 (−22%) | 15,100 (+13%) | 20,300 (+50%) |
| **MBB** ROE / COE | 17% / 18.6% (g 5%) | 19.5% / 17.6% | 21% / 15.0% |
| Value (total return) | 15,200 (−18%) | 20,600 (+9%) | 29,700 (+55%) |

- **Base case means no re-rating.** COE is held at today's implied level.
- **Sensitivity.** For VIB, ±1pp ROE moves value about ±10.5%, and +1pp COE moves it about −10.3%. For MBB the figures are ±7.4% and −8.0%.
- **ROE drives VIB; COE drives MBB.**
- **Cross-check.** MBB's bull case sits at about the 95th percentile of the 12M vol cone (29,400), so treat it as a tail. Both bear cases are below the 3Y minimum P/B.

## 6. Risks & catalysts (catalysts.md)
**Upside**
1. Q3 results (late Oct). VIB needs PBT of at least ~3,000bn with clean core earnings. MBB needs NIM above 4%.
2. Changes to foreign caps or a VIB strategic partner.
3. FTSE tranches in Mar, Jun and Sep 2027.

**Downside**
1. VIB retail and mortgage asset quality, and a miss on the 2026 plan.
2. Deposit rates staying above 7% (big-4 12M at 5.9%, CDs at 7.2–7.5%) and squeezing NIM.
3. Supply from new share listings at both banks, and credit-quota limits (system +11.6% YTD vs a ~15% target).

## 7. Final assessment
- **Relative value favours MBB.** It offers the larger COE-compression option and a cheaper P/E. VIB's discount is mostly earned: it needs ROE delivery, not sentiment.
- **Confidence: moderate.** Fundamentals are Q2 data; Q3 lands within days. The regression is weak. COE and g are assumptions.
- **Thesis changes if:**
  - VIB prints Q3 core PBT growth without recoveries and builds LLR coverage (bullish).
  - MBB's NIM falls below 3.8% or its NPL rises above 2% (bearish).
- **Next steps:** re-run `valuation_ir.py` on Q3 filings, and get the real-estate and MBV exposure breakdown.

## 8. The 5 hardest investor questions for each bank's IR team
**VIB**
1. H2 needs PBT +56% YoY. How much comes from the VND2–3tn of write-off recoveries, what is core PBT, and will you revise the VND11,550bn plan at Q3?
2. LLR coverage is 44%, the lowest of 8 peers, and retail NPL is 4.3%. Why pay 9% cash plus a 9.5% bonus before rebuilding coverage? What is the 2027 credit-cost path?
3. The 4.99% foreign cap has been in place since Jul-2024 with 1.14% room left, and ADTV has fallen to VND74bn. What is the status of the strategic partner, and when will you restore the cap?
4. ROE fell to 15.7% and the price discounts about 14.9%. With CASA at 11.9% and deposit rates above 7%, what ROE do you underwrite for 2027?
5. The stock is last of 8 peers over 1Y (−16.7%) and P/B is at the 17th percentile of its 3Y range. How will you handle supply from 331m new shares, and would you consider buybacks?

**MBB**
1. Your implied COE is 17.6%, the highest in the peer set and 3.5pp above peers. What do you believe the market is discounting: real estate, the MBV transfer, or ROE durability?
2. Share count rises 25% in 2026, including rights at VND10,000 against a VND19,800 price. What ROE do you target on the enlarged equity, and is more issuance planned?
3. Foreign room is 0.89% of a 23.24% cap and MBB is absent from the FTSE-inclusion banks. Will you lift the cap toward the 30% that ACB, STB and VCB use?
4. Q2 NIM recovered to 4.16% while the non-interest income share fell to 17.3%. How does NIM hold if funding costs keep rising?
5. Credit was +13.2% YTD at H1 against a ~15% system target. Is the 2026 quota exhausted, and what does a Q4 slowdown do to H2 PBT and to 2027 guidance?
