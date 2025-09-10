# PowerShell script to update suburb pages for hydronic heater services
Write-Host "Updating Suburb Pages for Hydronic Heater Services..." -ForegroundColor Green

# Get all suburb directories
$suburbDirs = Get-ChildItem -Path "app\coverage" -Directory | Where-Object { $_.Name -ne "fix-paths.ps1" -and $_.Name -notlike "*.ps1" }

$transformations = @{
    "gas heater" = "hydronic heater"
    "Gas Heater" = "Hydronic Heater"
    "ducted heating" = "hydronic heating"
    "Ducted Heating" = "Hydronic Heating"
    "gas heating" = "hydronic heating"
    "HVAC" = "hydronic"
    "gas technician" = "hydronic technician"
    "certified HVAC technicians" = "certified hydronic technicians"
    "HVAC heating specialist" = "hydronic heating specialist"
    "gas valve" = "circulation pump"
    "pilot light" = "temperature sensor"
    "ignition system" = "control system"
    "Ducted Gas Heating" = "Hydronic Floor Heating"
    "Gas Wall Furnaces" = "Hydronic Radiators"
    "Central Gas Heating" = "Central Hydronic Heating"
    "Gas Log Fires" = "Hydronic Towel Rails"
}

$processedCount = 0

foreach ($suburbDir in $suburbDirs) {
    $pagePath = Join-Path $suburbDir.FullName "page.jsx"
    
    if (Test-Path $pagePath) {
        try {
            $content = Get-Content $pagePath -Raw -Encoding UTF8
            $originalContent = $content
            $hasChanges = $false
            
            # Apply transformations
            foreach ($search in $transformations.Keys) {
                if ($content.Contains($search)) {
                    $content = $content.Replace($search, $transformations[$search])
                    $hasChanges = $true
                }
            }
            
            # Save if changes were made
            if ($hasChanges) {
                Set-Content -Path $pagePath -Value $content -Encoding UTF8
                Write-Host "Updated: $($suburbDir.Name)"
                $processedCount++
            }
            
        } catch {
            Write-Host "Error processing $($suburbDir.Name): $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "Suburb Pages Update Complete!" -ForegroundColor Green
Write-Host "Processed $processedCount suburb pages" -ForegroundColor Cyan
Write-Host "All suburb pages now focus on hydronic heater services" -ForegroundColor White
