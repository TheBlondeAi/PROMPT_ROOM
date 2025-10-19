# PROMPT_ROOM v1

[![CI](https://github.com/remontpodklych2020-max/PROMPT_ROOM/actions/workflows/ci.yml/badge.svg)](https://github.com/remontpodklych2020-max/PROMPT_ROOM/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/tag/remontpodklych2020-max/PROMPT_ROOM?label=release)](https://github.com/remontpodklych2020-max/PROMPT_ROOM/releases)
[![Donate](https://img.shields.io/badge/donate-support-pink)](./DONATE.md)


отовый модуль для библиотеки промптов: стандарты (RULES), примеры (PROMPTS),
инструменты качества (TOOLS: валидатор, health-check, отчёты), веб-дашборд (WEB),
и конвейер релиза (ZIP + CI).

ыстрый старт:
1) npm i
2) npm run build:dash
3) powershell -ExecutionPolicy Bypass -File TOOLS/health_check.ps1 -Quiet -Snapshot -ArchiveSnapshots
4) ткрой WEB/index.html — тренд

елиз:
- npm run zip (файл появится в releases/)
- git tag v1.0.0 && git push origin v1.0.0 (GitHub Release соберётся)

CI:
- см. .github/workflows/ci.yml — сборка и артефакт ZIP.

