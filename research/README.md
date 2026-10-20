# Research workspace (VIB)

Equity and financial research on VIB (Vietnam International Bank) and Vietnamese banks, run with Claude Code.

## AI agents (repo-root `.claude/agents/`)
| Agent | Use it for |
|---|---|
| `financial-analyst` | Financial statement analysis, ratios, profitability drivers. Never invents data. |
| `quant-stock-researcher` | Stock price behaviour, technicals, valuation, bull/base/bear executive brief. |

Start a Claude Code session from this repository (agents live in the repo-root `.claude/agents/`) and ask, for example:
- "Use the financial-analyst agent on research/data/<file>.xlsx: ratios and ROE drivers."
- "Use the quant-stock-researcher agent to assess VIB with the latest prices."

## Folders
- `research/data/` – input files (price histories, financial statements). Add your Excel/CSV exports here.
- `research/analysis/vib/` – VIB brief (Oct 2026): scripts, metrics, scenarios, peer data, dashboard datasets.
- `research/reference/` – your own definitions and assumptions the agents should read (see `research/reference/README.md`).

## Data sources
- Prices: Vietcap public chart API (`trading.vietcap.com.vn`, one symbol per request, browser headers).
- Financials: Vietcap IQ (`iq.vietcap.com.vn`).
- News: CafeF.
The environment's network access must allow these domains.

## Dashboard
VIB investment brief: https://claude.ai/artifact/SmnJ2mKj9gZE8id2KAB3bk (private unless shared).
