# Simple script to update one suburb page as an example
Write-Host "Updating sample suburb page..." -ForegroundColor Green

# Find the first suburb directory
$suburbDirs = Get-ChildItem -Path "app\coverage" -Directory | Where-Object { $_.Name -notlike "*.ps1" }
$firstSuburb = $suburbDirs | Select-Object -First 1

if ($firstSuburb) {
    $pagePath = Join-Path $firstSuburb.FullName "page.jsx"
    
    if (Test-Path $pagePath) {
        $content = Get-Content $pagePath -Raw -Encoding UTF8
        
        # Simple replacements
        $content = $content -replace "gas heater", "hydronic heater"
        $content = $content -replace "Gas Heater", "Hydronic Heater"
        $content = $content -replace "ducted heating", "hydronic heating"
        $content = $content -replace "Ducted Heating", "Hydronic Heating"
        $content = $content -replace "HVAC", "hydronic"
        
        Set-Content -Path $pagePath -Value $content -Encoding UTF8
        Write-Host "Updated: $($firstSuburb.Name)"
    }
}

Write-Host "Sample update complete!"
