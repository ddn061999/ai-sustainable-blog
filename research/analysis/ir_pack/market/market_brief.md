# IR Pack: Market & Valuation, VIB vs MBB (HOSE)
Prices: 2026-10-23 close (VIB 14,200; MBB 19,800; VNINDEX 1,774.15). Fundamentals: 2026Q2 TTM (Q3 not yet filed). Data: Vietcap (chart API, IQ, price board).

## 1. Executive summary
- **Both are discounted, for different reasons.** VIB is at **1.11x P/B**, 19% below its 3Y median (1.39x). The market prices **lower ROE (15.7%)**, not a risk premium: implied COE **14.7%** vs a peer median of ~13.9%.
- **MBB is the larger anomaly.** **1.27x P/B, 6.6x P/E, ROE 20.7%** implies a **17.6% COE**, the highest of 8 peers. At COE 14% / g 6%, justified P/B is **1.84x (~28,700, +44%)** vs VIB **1.21x (~15,500, +9%)**.
- **The P/B gap is narrow given ROE.** VIB has a 12.8% P/B discount but a 7.9% P/E *premium* to MBB. On ROE alone, VIB should sit at ~0.66x MBB's P/B (a 34% discount).
- **Flows are constrained.** Foreign room left: **VIB 1.14% (4.99% cap)**, **MBB 0.89% (23.24% cap)**, ~7–8 days of ADTV. Neither is on ACBS's FTSE-inclusion bank list.

## 2. Quantitative & technical (market_metrics.csv, technicals.csv)
| | VIB | MBB | VNINDEX |
|---|---|---|---|
| Return 3M / YTD / 1Y / 3Y | +6.5% / −7.6% / −16.7% / +24.2% | +7.8% / −2.3% / −8.8% / +109.8% | +4.4% / −0.6% / +2.5% / +55.1% |
| Vol 1Y / beta 1Y (3Y) | 24.1% / 0.82 (0.93) | 26.7% / 0.80 (0.97) | 20.5% |
| Max DD 3Y / current DD | −36.8% / −30.5% | −22.4% / −14.8% | −18.1% / −8.0% |
| Sharpe 1Y / 3Y (rf 4.45%) | −0.82 / 0.24 | −0.38 / 0.91 | 0.01 / 0.65 |
| ADTV 3M (VND bn) | 74 (−30% vs 1Y) | 252 (−49% vs 1Y) | 16,626 |

- **VIB:** above MA20/MA50, 1.3% below MA200 (14,386). RSI 64. MACD bullish above zero (6-Oct). Death cross since 26-Jan. Support 13,750 / 13,250; resistance 14,300 (MA200) / 14,600 (volume POC). A close above ~14,400 on volume would repair the trend.
- **MBB:** above MA20, below MA50 (19,952) and MA200 (20,548). RSI 53. MACD bullish below zero (15-Oct). Support 19,700 / 18,900; resistance 19,900–20,125 / 20,500.
- **Timing:** momentum improving, no confirmed uptrend.

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

- The regression is weak (n=6); implied COE is the cleaner comparison. CAPM gives 11.9–12.2%, so the 14% base embeds a ~2pp premium.

## 4. What drove the prices
- **VIB (documented):** H1 PBT +3% YoY (27-Jul-2026), with fee income +294%, largely one-off (Vietcap, 7-Aug). The stock closed at its 3Y low that day. Retail NPL is 4.3% and the plan needs H2 PBT **+56% YoY**. ROE fell from 17.8% (2025Q2) to 15.7%, so the de-rating is earned.
- **MBB (documented):** H1 PBT +27%, Q2 NIM 4.16% (1-Aug). Limit-up +6.7% on 3-Aug (+5.4% idiosyncratic). 2026 dilution is 15% stock plus a 10:1 rights issue at VND10,000 (shares +25%).
- **Hypotheses (unverified) for MBB's high COE:** no marginal foreign buyer; dilution and a ~805m unlisted-share overhang; doubts that ROE survives the capital raise; real-estate exposure under SBV caps.

## 5. Scenarios, 12-month value per share (scenarios.csv)
Value = (ROE−g)/(COE−g) x [BVPS·(1+ROE) − DPS]. Assumed DPS: VIB 900, MBB 1,000 (undeclared).

| | Bear | Base | Bull |
|---|---|---|---|
| **VIB** ROE / COE | 13% / 15.7% (g 5%) | 15.5% / 14.7% | 17.5% / 14.0% |
| Value (total return) | 10,100 (−22%) | 15,100 (+13%) | 20,300 (+50%) |
| **MBB** ROE / COE | 17% / 18.6% (g 5%) | 19.5% / 17.6% | 21% / 15.0% |
| Value (total return) | 15,200 (−18%) | 20,600 (+9%) | 29,700 (+55%) |

- Base = no re-rating (COE held at today's implied level).
- Sensitivity per 1pp: VIB ROE ±10.5%, COE −10.3%; MBB ±7.4% / −8.0%. ROE drives VIB; COE drives MBB.
- MBB's bull case is at about the 95th percentile of the 12M vol cone (a tail). Both bear cases are below the 3Y minimum P/B.

## 6. Risks & catalysts (catalysts.md)
- **Upside:** (1) Q3 results in late Oct: VIB needs PBT ≥ ~3,000bn with clean core earnings, MBB needs NIM above 4%; (2) foreign-cap changes or a VIB partner; (3) FTSE tranches in 2027.
- **Downside:** (1) VIB retail/mortgage asset quality and a plan miss; (2) deposit rates staying high (CDs at 7.2–7.5%) and squeezing NIM; (3) supply from new share listings, and the credit quota (system +11.6% YTD vs ~15% target).

## 7. Final assessment
- **Relative value favours MBB:** the larger COE-compression option at a cheaper P/E. VIB's discount is mostly earned; it needs ROE delivery, not sentiment.
- **Confidence: moderate.** Q2 fundamentals (Q3 imminent); weak regression; COE and g are assumptions.
- **Thesis changes if** VIB prints Q3 core PBT growth without recoveries and builds coverage (bullish), or MBB's NIM falls below 3.8% or NPL rises above 2% (bearish).
- **Next:** re-run `valuation_ir.py` on Q3 filings; obtain real-estate exposure detail.

## 8. The 5 hardest investor questions for each bank's IR team
**VIB**
1. H2 needs PBT +56% YoY. How much is the VND2–3tn of recoveries, what is core PBT, and will you revise the VND11,550bn plan?
2. Coverage is 44% (lowest of 8 peers) and retail NPL 4.3%. Why pay 9% cash plus a 9.5% bonus before rebuilding coverage?
3. The 4.99% foreign cap dates from Jul-2024, with 1.14% left and ADTV down to VND74bn. Where is the strategic partner, and when will you restore the cap?
4. With CASA at 11.9% and deposit rates high, what 2027 ROE do you underwrite? The price discounts 14.9%.
5. The stock is last of 8 peers over 1Y (−16.7%). How will you manage supply from 331m new shares?

**MBB**
1. Your implied COE is 17.6%, the highest of the peers. Is the market discounting real-estate exposure or ROE durability?
2. Shares are +25% in 2026 (rights at VND10,000 vs a 19,800 price). What ROE do you target on the enlarged equity, and is more issuance planned?
3. Foreign room is 0.89% and MBB is absent from FTSE inclusion. Will you lift the 23.24% cap toward the 30% that ACB, STB and VCB use?
4. Q2 NIM recovered to 4.16% while non-interest income fell to 17.3% of income. How does NIM hold if funding costs rise?
5. Credit was +13.2% YTD at H1 against a ~15% system target. Is the quota exhausted, and what does a Q4 slowdown do to PBT?
