# IR Pack — VIB vs MBB
**As of 24-Oct-2026.** Prices are the 23-Oct-2026 close: VIB 14,200, MBB 19,800, VNINDEX 1,774.15. Fundamentals are **2026Q2**: Q3 2026 has not yet been filed. In 2025 the Q3 filing dates were MBB 27-Oct and VIB 29-Oct. **Refresh this pack when Q3 is published.**
Units are VND bn unless stated otherwise. TTM = 2025Q3–2026Q2. Sources: Vietcap IQ financial statements, the Vietcap chart API and price board, and the dated news links in `market/catalysts.md`.
Built by two agents in this repo. The `financial-analyst` agent produced `fundamentals/`. The `quant-stock-researcher` agent produced `market/`.

> **Two ROE bases are used.** Sections 2–4 use *our calculation*: parent NPAT divided by average parent equity, giving VIB 15.9% and MBB 22.1%. Sections 5–6 use *Vietcap's published ROE*, VIB 15.7% and MBB 20.7%, to stay consistent with the peer valuation set. The direction and size of the gap are the same on both bases.

---

## 1. Executive summary

1. **MBB earns about 6pp more ROE than VIB, and almost all of the gap is margin.** On TTM figures, net interest income per unit of assets is 3.92% at MBB against 3.03% at VIB, worth **+8.1pp of ROE**. The two banks' costs and provisions per unit of assets are almost identical.
2. **VIB's earnings run-rate is under pressure.** Q2 NPAT fell 8.2% YoY and TTM NPAT fell 1.5%. NIM fell 0.25pp to 3.07%. CASA is 11.8%, its lowest since 2021. The 2026 PBT plan of VND11,550bn needs H2 PBT to grow **56% YoY**.
3. **VIB's balance-sheet buffer is thin.** Reserves cover 43.6% of NPLs, the lowest of 8 peers, against 93.6% at MBB. NPL plus Group 2 is 5.49% at VIB and 2.43% at MBB.
4. **MBB is growing very fast.** Loans grew 39.5% YoY and NPAT grew 22.7%. The trade-off is heavy share issuance: about +25% more shares in 2026 from a 15% stock dividend and a 10:1 rights issue. Leverage rose from 10.0x to 11.2x.
5. **The market discounts both stocks, for different reasons.** VIB trades at **1.11x P/B**, 19% below its 3Y median. The COE implied by its price is 14.7%, close to the peer median of ~13.9%, so the market is pricing the lower ROE rather than adding extra risk. MBB trades at **1.27x P/B and 6.6x P/E**. Its implied COE of **17.6%** is the highest of the 8 banks, so the market is pricing in extra risk.
6. **Base-case 12-month value (no re-rating):** VIB ~15,100 (+13% total return) and MBB ~20,600 (+9%). At a uniform 14% COE, the justified values are VIB ~15,500 and MBB ~28,700.
7. **IR implications.** VIB's story has to rest on *ROE delivery*: core earnings separated from recoveries, a rebuild of coverage, and funding. MBB's story has to rest on *reducing perceived risk*: real-estate exposure, ROE on the enlarged equity, and foreign room.

---

## 2. Scorecard (2026Q2, our calculation)

| Metric | VIB | MBB | Edge |
|---|---|---|---|
| NPAT-parent Q2 (YoY) | 1,905 (−8.2%) | 8,229 (+40.0%) | MBB |
| NPAT-parent 6M26 (YoY) | 4,147 (+3.3%) | 15,745 (+26.5%) | MBB |
| NPAT-parent TTM (YoY) | 7,419 (−1.5%) | 30,078 (+22.7%) | MBB |
| PPOP 6M26 (YoY) | 7,672 (+26.3%) | 27,890 (+17.9%) | VIB |
| ROE / ROA TTM | 15.9% / 1.34% | 22.1% / 2.04% | MBB |
| NIM TTM | 3.07% | 4.02% | MBB |
| CIR TTM | 34.2% | 28.4% | MBB |
| Credit cost TTM | 1.29% | 1.30% | = |
| NPL / Group 2 | 2.93% / 2.56% | 1.45% / 0.98% | MBB |
| LLR coverage | 43.6% | 93.6% | MBB |
| CASA | 11.8% | 33.6% | MBB |
| Loans / deposits (simple) | 125.1% | 127.4% | VIB |
| Loan growth YTD / YoY | +4.0% / +11.5% | +13.2% / +39.5% | MBB (growth) |
| Equity / assets | 8.23% | 9.05% | MBB |
| CAR | >12.4% (AGM, Mar-26; Basel III) | 11.02% (FY2025, Vietcap) | Not comparable (different dates) |

## 3. ROE gap: MBB minus VIB = 6.21pp on TTM (3.76pp a year earlier)

| Driver (% of average assets) | MBB | VIB | Contribution |
|---|---|---|---|
| Net interest income | 3.92% | 3.03% | **+8.13pp** |
| Non-interest income | 0.90% | 0.85% | +0.45pp |
| Opex | −1.37% | −1.32% | −0.42pp |
| Provisions | −0.90% | −0.88% | −0.18pp |
| Tax and minority retention | 0.780 | 0.800 | −0.49pp |
| Leverage (x) | 11.16 | 11.92 | −1.28pp |

The gap widened over the year. VIB's NII/A fell from 3.29% to 3.03% and its provisions/A rose from 0.70% to 0.88%. MBB's provisions/A fell from 1.13% to 0.90%. In Q2, VIB's interest expense rose 52.8% YoY against 33.3% for interest income.

## 4. Asset quality and funding
- **VIB:** NPL fell 0.63pp YoY and Group 2 fell 0.34pp, but retail NPL is 4.3% (Vietcap note, 7-Aug-26). The 6M credit cost rose 0.65pp to 1.28%, and 6M provisions rose 135%. CASA fell from 16.6% to 11.8%. Deposits grew 7.8% YTD against 4.0% for loans.
- **MBB:** coverage is 93.6% and the 6M credit cost fell 0.55pp to 1.35%. CASA fell 3.3pp to 33.6%. Q2 interest expense rose 96.1% YoY against 61.2% for interest income. Total assets jumped 21.6% in 4Q25 alone.
- **Earnings-quality flags:** VIB's 6M fees rose 293.5%, but Q1 was 1,989 and Q2 1,075, so the spike looks largely one-off. FX and securities lost 958 in 6M. At MBB, 6M non-interest income fell 28.8% as FX and securities dropped from 2,367 to 109.

## 5. Market and valuation (prices at 23-Oct-26; Vietcap ROE basis)

| | VIB | MBB | VNINDEX |
|---|---|---|---|
| Return 3M / YTD / 1Y / 3Y | +6.5% / −7.6% / −16.7% / +24.2% | +7.8% / −2.3% / −8.8% / +109.8% | +4.4% / −0.6% / +2.5% / +55.1% |
| Volatility 1Y / beta 1Y | 24.1% / 0.82 | 26.7% / 0.80 | 20.5% / 1.0 |
| Max drawdown 3Y / current drawdown | −36.8% / −30.5% | −22.4% / −14.8% | −18.1% / −8.0% |
| ADTV 3M (VND bn) | 74 | 252 | 16,626 |
| Foreign room left (cap) | 1.14% (4.99%) | 0.89% (23.24%) | – |
| P/B / P/E TTM | 1.11x / 7.1x | 1.27x / 6.6x | peer median P/B 1.35x |
| 3Y P/B median (min–max) | 1.39 (1.09–1.58) | 1.37 (1.23–1.78) | – |
| Implied COE (g = 6%) | 14.7% | **17.6%** (highest of 8) | peer ~13.9% |
| Justified P/B at COE 14% / g 6% | 1.21x → ~15,500 (+9%) | 1.84x → ~28,700 (+44%) | – |
| Technicals | Above MA20/50, 1.3% below MA200; RSI 64; S 13,750 / R 14,300–14,600 | Below MA50/200; RSI 53; S 19,700 / R 20,125–20,500 | – |

## 6. 12-month scenarios (value per share, total return incl. assumed DPS of VIB 900 / MBB 1,000)

| | Bear | Base (no re-rating) | Bull |
|---|---|---|---|
| VIB | 10,100 (−22%): ROE 13%, NPL hit, plan missed | 15,100 (+13%): ROE 15.5% | 20,300 (+50%): recoveries plus full quota, COE 14% |
| MBB | 15,200 (−18%): real-estate hit, NIM <3.9%, ROE 17% | 20,600 (+9%): ROE 19.5% after dilution | 29,700 (+55%): plan delivered, COE 15% (tail case) |

For every 1pp change in ROE, VIB's value moves about 10.5% and MBB's about 7.4%. **ROE drives VIB's value; COE drives MBB's.**

## 7. Catalyst calendar
| Date | Bank | Event |
|---|---|---|
| ~27–29 Oct 2026 | Both | **Q3 2026 results.** MBS forecasts VIB Q3 PBT at ~VND3,000bn (+48%). MBB needs only +4.6% YoY in H2 to meet its plan |
| Q4 2026 | VIB | Credit catch-up from 4.0% H1 growth toward a 12–14% quota; VND2–3tn of write-off recoveries guided |
| Pending | Both | Listing of new shares: VIB +331m, MBB ~805m |
| Mar / Jun / Sep 2027 | Sector | FTSE Secondary EM phase-in (20% / 35% / 35%). Neither bank is on ACBS's list of expected inclusions |
| Mar–Apr 2027 | Both | AGMs: VIB foreign cap and strategic partner; MBB further capital raising |
| Ongoing | Sector | CD rates at 7.2–7.5%; system credit +11.6% YTD against a ~15% target |

---

## 8. Investor Q&A: 14 tough questions with model answers

*Setting assumed: a Q3 2026 earnings call or investor meeting with a mixed audience of foreign funds, local brokers and retail shareholders. Answers are draft talking points written from each bank's own IR seat. Items in [brackets] must be confirmed by management before use; never quote a commitment that has not been approved.*

### Part A: VIB

#### Earnings quality and plan delivery

**Q1. H1 PBT grew only 3%, and Q2 NPAT fell 8%. Your VND11,550bn plan needs H2 PBT +56% YoY, and you've guided VND2–3tn of write-off recoveries. Strip out the recoveries and the one-off fees: what is core PBT growth, and will you revise the plan?**
`[Earnings quality]` `[Sell-side analyst]` `[Very Hard]` → **CEO / CFO**
- We understand the concern about earnings quality, so we'll separate core earnings from recoveries in our disclosures.
- The core engine is improving: 6M PPOP grew 26.3% YoY, opex fell 2.4% and CIR fell 5.8pp to 31.7%. The H1 shortfall came from provisions, which rose 135% while we built buffers.
- [Confirm: the Q3 core PBT figure, the recovery amount booked, and whether the plan is reaffirmed or revised.] We will report recoveries separately each quarter so investors can value the core run-rate.

**Q2. FX and investment securities lost VND958bn in 6M26, and fees fell from 1,989 in Q1 to 1,075 in Q2. What caused the losses, and what is the sustainable quarterly fee run-rate?**
`[Earnings quality – ambush]` `[Sell-side analyst]` `[Very Hard]` → **Head of Treasury / CFO**
- Fair challenge. Q1 fees included one-off items, and we don't ask investors to annualise them.
- Q2 fees of VND1,075bn are the cleaner base. [Explain the treasury loss: mark-to-market on bonds as yields rose, or hedging cost.]
- [Confirm: the guided fee run-rate and the treasury book duration and hedging policy.]

#### Margin and funding

**Q3. NIM fell 0.25pp to 3.07% and CASA fell to 11.8%, the lowest since 2021. In Q2, interest expense grew 53% against 33% for interest income. With CDs still at 7.2–7.5%, why won't NIM keep falling?**
`[NIM / Funding]` `[Foreign fund]` `[Very Hard]` → **Head of Treasury**
- Funding cost is the main pressure on our ROE today, and we're addressing it directly.
- We have improved the funding balance: deposits grew 7.8% YTD against 4.0% for loans, and we are building a USD1bn medium-term funding pipeline, with USD500m highly advanced (Vietcap analyst note, 7-Aug-26).
- [Confirm: the NIM guidance range for Q4 and 2027, and the CASA initiatives, such as payroll and digital transaction accounts.] Our aim is to stabilise NIM around current levels rather than chase volume with expensive funding.

**Q4. MBB's ROE is about 6pp higher than yours, and our breakdown attributes 8pp of that to net interest income per unit of assets. Your costs and credit costs are in line with MBB's. Isn't this a structural franchise gap that a cost programme can't close?**
`[Peer benchmarking]` `[Peer analyst – TCBC/SSI]` `[Very Hard]` → **CEO**
- We agree on the diagnosis: the gap is in funding and yield, not efficiency.
- Our opex per unit of assets (1.32%) is already slightly *below* MBB's (1.37%), and our credit cost matches theirs (1.29% vs 1.30%). That means every basis point of margin we recover goes almost entirely to profit.
- [Confirm: the 2027 ROE ambition and margin levers, such as CASA, the retail-SME mix and card yields.] On our numbers, each 1pp of ROE adds about 10% to the bank's value, so this is our primary focus.

#### Asset quality and capital

**Q5. Reserves cover only 43.6% of NPLs, the lowest of 8 peers. Retail NPL is 4.3%, and NPL plus Group 2 is 5.5%. Why pay a 9% cash dividend and 9.5% bonus shares before rebuilding coverage?**
`[Asset quality – ambush]` `[Foreign fund / rating agency]` `[Very Hard]` → **CRO**
- Coverage is a fair question, so here is the full picture.
- Headline NPL fell 0.63pp YoY and Group 2 fell 0.34pp. Our book is predominantly secured retail, so the loss-given-default profile differs from unsecured lenders. [Confirm the collateral and LTV data before citing it.] Our capital is solid: CAR above 12.4% under Basel III, completed per the March 2026 AGM.
- [Confirm: the coverage target and timeline, and the 2026 retail NPL target.] We raised provisions 135% in H1 and intend to keep building coverage alongside dividends.

**Q6. Credit grew only 4.0% in H1 against a 12–14% quota. If you rush to catch up in Q4 while retail NPL is 4.3%, aren't you buying growth at the wrong point in the cycle?**
`[Growth vs risk]` `[Securities house – SSI/HSC]` `[Hard]` → **CEO / CRO**
- Our H1 caution was deliberate; we prioritised quality over the quota.
- We have room under the quota, and the new lending is focused on [segments to confirm: secured mortgage, SME supply chain, corporate].
- [Confirm: the full-year credit growth expectation and the risk-appetite guardrails.] We will not use the full quota if risk-adjusted returns aren't there.

#### Shareholder value

**Q7. VIB is last of 8 banks over 1 year (−16.7%) and sits 30% below its peak. The foreign cap was cut to 4.99% and only 1.14% of room is left. Liquidity is down to VND74bn a day, and 331m new shares are waiting to list. What is the plan for shareholders?**
`[Shareholder value]` `[Retail shareholder / foreign fund]` `[Very Hard]` → **CEO / IR**
- We hear the frustration. The share price reflects the ROE dip, and that is the problem we are solving.
- At 1.11x P/B, against a 3Y median of 1.39x, the market prices us on ROE rather than on extra risk: our implied COE is 14.7% against a peer median of ~13.9%. Restoring ROE is therefore the most direct route to re-rating.
- [Confirm: the status of the strategic partner search and of restoring the foreign cap, the listing timetable for new shares, and the dividend policy for 2027.]

### Part B: MBB

**Q8. At 6.6x P/E and 20.7% ROE, your price implies a 17.6% cost of equity, the highest of 8 banks. Is the market discounting your real-estate exposure? Give us the numbers.**
`[Valuation / Risk]` `[Foreign fund]` `[Very Hard]` → **CEO / CRO**
- We see the same gap, and we think disclosure is the way to close it.
- The asset-quality data supports a lower risk premium: NPL is 1.45%, Group 2 is 0.98%, coverage is 93.6%, and the 6M credit cost fell 0.55pp to 1.35%.
- [Confirm and disclose: real-estate and developer exposure as a % of loans, corporate bond holdings, and compliance with SBV real-estate credit caps.]

**Q9. Your share count rises about 25% in 2026 from the 15% stock dividend and the 10:1 rights issue at VND10,000, against a share price of 19,800. Leverage still went from 10.0x to 11.2x. What ROE do you target on the enlarged equity, and is more issuance coming?**
`[Capital / Dilution]` `[Sell-side analyst]` `[Very Hard]` → **CEO / CFO**
- The capital raise funds growth that already earns strong returns.
- TTM ROE is 22.1% (parent, our calculation), driven by core NII rather than leverage. The equity raise lifts the buffer from a CAR of 11.02% at FY2025.
- [Confirm: the post-raise ROE target, the CAR after the rights issue, and the private placement of up to 200m shares.]

**Q10. Loans grew 39.5% YoY and total assets jumped 21.6% in 4Q25 alone. Credit is up 13.2% YTD against a system target of ~15%. Is the quota exhausted, and when does this growth show up in NPLs?**
`[Growth / Asset quality]` `[Securities house]` `[Very Hard]` → **CRO**
- Fast growth always deserves scrutiny, and we monitor new-vintage performance closely.
- Credit cost fell even as the book grew, and coverage of 93.6% gives a substantial buffer.
- [Confirm: what drove the 4Q25 balance-sheet jump, the remaining quota headroom, and how new vintages are performing.]

**Q11. In Q2, interest expense grew 96% YoY against 61% for interest income, and CASA fell 3.3pp to 33.6%. Q2 NIM of 4.16% looks peak-ish. How does NIM hold if deposit rates stay up?**
`[NIM / Funding]` `[Mass investor]` `[Hard]` → **Head of Treasury**
- Funding costs are rising for the whole sector, and CASA is our biggest defence.
- CASA of 33.6% is about three times VIB's. TTM NIM is 4.02%, 0.95pp above VIB.
- [Confirm: the NIM guidance range and the outlook for deposit pricing.]

**Q12. Non-interest income fell 28.8% in 6M, and FX and securities income collapsed from VND2,367bn to VND109bn. Is MBB now a pure NII story?**
`[Revenue mix – ambush]` `[Sell-side analyst]` `[Hard]` → **CFO**
- The decline is concentrated in market-driven lines, not in client fees.
- [Confirm: the trend in core service fees, separated from treasury income.]
- [Confirm: the outlook for treasury income and for the subsidiaries' contribution.]

**Q13. You have 0.89% of foreign room left under a 23.24% cap, and you are not on the FTSE inclusion list. ACB, STB and VCB use 30%. Will you raise the cap?**
`[Foreign ownership]` `[Foreign fund]` `[Hard]` → **CEO**
- Foreign demand is clearly there: room has almost run out.
- At current turnover, the remaining room is about 7 days of trading.
- [Confirm: whether the AGM 2027 agenda includes changing the foreign cap.]

### Part C: Both banks

**Q14. Deposit rates have barely moved since September, while CDs pay up to 9% at some joint-stock banks and system credit is +11.6% YTD. What is your rate outlook for Q4 2026 and 2027, and how sensitive is your NIM to a 50bp rise in funding cost?**
`[Macro / Rates]` `[Mass investor]` `[Hard]` → **Head of Treasury**
- We plan on rates staying broadly stable through year-end.
- [Insert the bank's NIM sensitivity per 50bp, from ALCO.]
- [Confirm: the funding mix strategy, covering CASA, valuable papers and offshore funding.]

---

## 9. Data gaps and methodology
- **Not in the feed:** Q3 2026 results; CAR under Circular 41 at Jun-26; the regulatory LDR under Circular 22; restructured and written-off loans; deposit cost; LCR/NSFR; segment split; real-estate exposure.
- **MBB share count:** BVPS is 18,540 on charter-capital shares, 14,832 on Vietcap's 10,068.7m shares, and 15,569 on the valuation basis (Q2 equity over current shares). Reconcile against MBB's disclosure before external use.
- **NIM** is calculated by us: 3.07% and 4.02%, against Vietcap's 3.04% and 3.90%. **CASA** counts current deposits only: 11.8% and 33.6%, or 11.9% and 34.6% on the broad definition.
- **Valuation assumptions:** COE 14%, g 6%, rf 4.45%, ERP 8%, DPS 900 and 1,000 (not declared). The peer P/B–ROE regression is weak (R² 0.15–0.38).
- **Checks passed:** the balance sheets balance, the P&L subtotals add up, and loan grades sum to gross loans for 2021Q1–2026Q2 for both banks.
- **To refresh:** `fundamentals/fetch_raw.py` → `build_fundamentals.py` → `build_kpis.py`, then `market/fetch_market.py` → `market_analysis.py` → `valuation_ir.py`.
