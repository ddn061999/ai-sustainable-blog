# IR pack – Fundamentals: VIB vs MBB (as of 2026-10-24)

**Latest quarter: 2026Q2.** Q3 2026 is not yet in the Vietcap IQ feed for either bank (fetched 2026-10-24; last releases were VIB on 2026-08-06 and MBB on 2026-08-07). YTD figures are therefore 6M. Rerun the scripts after Q3 is published.
Units: VND bn. Sources: `K:` kpi_comparison.csv (metric, basis; the `formula` column gives every formula), `D:` roe_dupont.csv, `G:` roe_gap_attribution.csv, `Q:` fundamentals_VIB_MBB_quarterly.csv.

## 1. Headline numbers (facts and calculations)

| Metric | VIB | MBB | Source |
|---|---|---|---|
| NPAT-parent 2026Q2 (YoY) | 1,905 (-8.2%) | 8,229 (+40.0%) | K: NPAT_parent, Quarter |
| NPAT-parent 6M26 (YoY) | 4,147 (+3.3%) | 15,745 (+26.5%) | K: NPAT_parent, 6M YTD |
| NPAT-parent TTM (YoY) | 7,419 (-1.5%) | 30,078 (+22.7%) | K: NPAT_parent, TTM |
| TOI 6M26 (YoY) | 11,228 (+15.5%) | 37,865 (+16.3%) | K: TOI |
| PPOP 6M26 (YoY) | 7,672 (+26.3%) | 27,890 (+17.9%) | K: PPOP |
| Provisions 6M26 (YoY) | 2,486 (+135.2%) | 7,702 (-0.9%) | K: Prov |
| ROE TTM (parent) | 15.9% | 22.1% | K: ROE_% TTM |
| ROA TTM | 1.34% | 2.04% | K: ROA_% TTM |
| NIM TTM (my calc) | 3.07% | 4.02% | K: NIM_% TTM |
| CIR TTM | 34.2% | 28.4% | K: CIR_% TTM |
| Credit cost TTM | 1.29% | 1.30% | K: CreditCost_% TTM |
| NPL / Group 2 (Jun-26) | 2.93% / 2.56% | 1.45% / 0.98% | K: NPL_%, Group2_% |
| LLR coverage | 43.6% | 93.6% | K: LLR_cov_% |
| CASA (current deposits / deposits) | 11.8% | 33.6% | K: CASA_% |
| Loans / deposits (simple) | 125.1% | 127.4% | K: LDR_simple_% |
| Loan growth YTD / YoY | +4.0% / +11.5% | +13.2% / +39.5% | K: Loan_ytd_%, Loan_yoy_% |
| Deposit growth YTD | +7.8% | +4.6% | K: Deposit_ytd_% |
| Equity / assets | 8.23% | 9.05% | K: EqA_% |
| BVPS (parent equity / charter shares) | 14,053 | 18,540 | K: BVPS_parent_charter |

## 2. ROE gap drivers (TTM 2026Q2: MBB 22.14% vs VIB 15.94%, gap 6.21pp)

ROE = PBT/avgA × NPAT/PBT × NPAT-parent/NPAT × avgA/avg parent equity. The gap is split with the midpoint rule, and the pieces sum exactly to the total (G:).

| Driver | MBB | VIB | Gap contribution |
|---|---|---|---|
| NII / avgA | 3.92% | 3.03% | **+8.13pp** |
| Non-II / avgA | 0.90% | 0.85% | +0.45pp |
| Opex / avgA | -1.37% | -1.32% | -0.42pp |
| Provisions / avgA | -0.90% | -0.88% | -0.18pp |
| Tax + minority retention | 0.780 | 0.800 | -0.49pp |
| Leverage (x) | 11.16 | 11.92 | -1.28pp |

- **Fact:** NII explains more than the whole gap. VIB's higher leverage and MBB's minority interests offset about 1.8pp of it.
- **Fact:** The gap widened from 3.76pp (TTM 2025Q2). Over the year, VIB's NII/A fell from 3.29% to 3.03% and its provisions/A rose from 0.70% to 0.88%. MBB's provisions/A fell from 1.13% to 0.90% (D:).
- **Interpretation:** VIB's ROE problem is margin. In 2026Q2 its interest expense rose 52.8% YoY against 33.3% for interest income (Q: IntExp, IntInc). A CASA of 11.8% gives it little cushion. MBB's opex/assets is actually slightly *higher* than VIB's, so its lower CIR comes from earning more revenue per unit of assets.

## 3. Asset quality and funding

- NPL plus Group 2 is 5.49% at VIB and 2.43% at MBB. Group 5 is about 49% of NPL at both banks (Q: nob42–44).
- Coverage is 43.6% at VIB and 93.6% at MBB. Reserves/loans are 1.28% and 1.36% (Q: LLR, Loans). *Interpretation:* VIB has a thinner buffer against new NPL formation.
- VIB's 6M credit cost rose 0.65pp to 1.28%. MBB's fell 0.55pp to 1.35% (K: CreditCost_% 6M YTD).
- VIB's CASA is 11.8%, down from 16.6% and the lowest quarter since 2021Q1. MBB's is 33.6%, down from 36.9%.
- At VIB, loans grew +11.5% YoY and deposits +4.3%. At MBB, loans grew +39.5% and deposits +23.1%. Bonds and papers issued are 6.5% of assets at VIB and 13.5% at MBB (Q: Bonds).

## 4. What investors will probe

**VIB – strengths**
1. 6M fees were 3,064, up 293.5%, or 27.3% of TOI. Q1 alone was 1,989.
2. 6M opex fell 2.4% YoY, and 6M CIR fell 5.8pp to 31.7%.
3. 6M PPOP grew 26.3%, the faster of the two banks.
4. NPL fell 0.63pp YoY and Group 2 fell 0.34pp.
5. There are no minority interests, so all profit accrues to shareholders, and the tax rate is 20.0%.

**VIB – concerns**
1. TTM NIM is 3.07%, down 0.25pp.
2. CASA is 11.8%, down 4.9pp YoY.
3. Coverage is 43.6% and 6M provisions rose 135%.
4. The fee spike may not recur: Q2 fees were 1,075 against Q1's 1,989. FX plus investment securities lost 958 in 6M26.
5. TTM ROE fell 2.2pp to 15.9%, TTM NPAT fell 1.5%, and YTD loan growth was only 4.0%.

**MBB – strengths**
1. TTM ROE is 22.1% and ROA is 2.04%, driven by core NII rather than leverage.
2. Q2 NII grew 36.6% and Q2 NPAT-parent grew 40.0%.
3. TTM NIM is 4.02%, about 0.95pp above VIB.
4. CASA is 33.6%, about three times VIB's.
5. NPL is 1.45% with 93.6% coverage, and 6M credit cost fell.

**MBB – concerns**
1. Growth pace: loans +39.5% YoY, and assets jumped 21.6% QoQ in 2025Q4. Investors should ask about credit-quota headroom (not in the feed) and what caused the Q4 jump.
2. Funding cost: Q2 interest expense rose 96.1% YoY against 61.2% for interest income. CASA fell 3.3pp.
3. 6M non-II fell 28.8%, as FX plus investment securities dropped from 2,367 to 109.
4. Leverage rose from 10.0x to 11.2x (D:) and equity/assets fell 0.86pp to 9.05%. Jun-26 CAR is not available.
5. Dilution: Vietcap shows 10,068.7m shares against 8,055m implied by charter capital, so BVPS on the latest share count is 14,832 against 18,540 on charter shares. Minority interests take 2.5% of NPAT.

## 5. Data gaps

- Q3 2026 is not yet published, so all "latest" figures are 2026Q2.
- **CAR** is not in the feed: nob151 = 0, and stats show only MBB FY2025 at 11.02%. You need Circular 41 CAR from the banks' disclosures.
- The regulatory LDR (Circular 22) cannot be calculated; LDR_simple is loans / customer deposits.
- nob80 (interest-earning assets) is 0, so NIM uses my own IEA from balance-sheet lines. Vietcap's TTM NIM is 3.04% for VIB and 3.90% for MBB, against my 3.07% and 4.02%. Vietcap's ROE is 15.7% for VIB and 20.7% for MBB, on an undisclosed basis.
- CASA_% is current deposits only. CASA_broad_% adds margin and special-purpose deposits and matches Vietcap.
- MBB is consolidated with subsidiaries, and the feed has no segment split. MBB EPS (isa23) is 0. Also missing: restructured and written-off loans, deposit cost, LCR/NSFR, bond quality, and 2026 targets.
- research/reference/ has no definitions, so formulas follow vib/fundamentals.py.
- Validation passed: the balance sheet balances, P&L subtotals foot, and loan grades sum to gross loans for 2021Q1–2026Q2 (Q: chk_*).
