# PROMPT_ROOM v1

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
