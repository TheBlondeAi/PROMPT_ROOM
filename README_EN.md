# PROMPT_ROOM v1 (EN)

Prompt library toolkit: RULES, PROMPTS, quality tools (validator, health check),
WEB dashboard, and ZIP/CI release pipeline.

Quick start:
1) npm i
2) npm run build:dash
3) powershell -ExecutionPolicy Bypass -File TOOLS/health_check.ps1 -Quiet -Snapshot -ArchiveSnapshots
4) open WEB/index.html

Release:
- npm run zip (creates releases/)
- git tag v1.0.0 && git push origin v1.0.0

CI:
- see .github/workflows/ci.yml — build and ZIP artifact.
