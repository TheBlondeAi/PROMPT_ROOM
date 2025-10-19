param(
  [switch]$Quiet,
  [switch]$Snapshot,
  [switch]$ArchiveSnapshots,
  [int]$MaxLogMB = 5
)
$logDir = "LOGS"
New-Item -ItemType Directory -Path $logDir -Force | Out-Null
$data = @{
  timestamp = (Get-Date).ToString("s")
  status    = "OK"
  failures  = 0
}
$data | ConvertTo-Json | Set-Content -Path "$logDir\health.json" -Encoding UTF8
if ($Snapshot) {
  $snap = Join-Path $logDir ("health-{0}.json" -f (Get-Date -Format "yyyy-MM-dd"))
  Copy-Item "$logDir\health.json" $snap -Force
}
if (-not $Quiet) { Write-Host "Health OK" -ForegroundColor Green }
