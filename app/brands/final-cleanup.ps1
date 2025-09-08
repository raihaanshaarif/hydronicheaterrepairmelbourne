# Final comprehensive cleanup script for brand pages
# This script performs a thorough cleanup of ALL gas heating references

$brandDirectories = @("bonaire", "braemar", "brivis", "kaden", "rinnai", "pyrox", "vulcan")

foreach ($brand in $brandDirectories) {
    $brandName = (Get-Culture).TextInfo.ToTitleCase($brand)
    $filePath = "G:\Faisal Final\ductedheaterrepairmelbourne\app\brands\$brand\page.jsx"
    
    if (Test-Path $filePath) {
        Write-Host "Final cleanup for $brandName page..." -ForegroundColor Green
        
        # Read the file content
        $content = Get-Content $filePath -Raw
        
        # Replace ANY remaining "gas heater" with "ducted heating"
        $content = $content -replace "gas heater", "ducted heating"
        $content = $content -replace "Gas heater", "Ducted heating"
        $content = $content -replace "GAS HEATER", "DUCTED HEATING"
        
        # Replace any remaining "gas heating" with "ducted heating"
        $content = $content -replace "gas heating", "ducted heating"
        $content = $content -replace "Gas heating", "Ducted heating"
        
        # Replace instant heat technology references
        $content = $content -replace "instant heat technology", "ducted heating technology"
        $content = $content -replace "instant heat", "ducted heating"
        
        # Replace ignition with electronic control
        $content = $content -replace "ignition problems", "electronic control problems"
        $content = $content -replace "ignition issues", "electronic control issues"
        
        # Replace continuous operation with ducted system
        $content = $content -replace "continuous operation", "ducted system operation"
        
        # Write the updated content back to the file
        $content | Out-File -FilePath $filePath -Encoding UTF8
        
        Write-Host "✓ Final cleanup completed for $brandName" -ForegroundColor Green
    }
}

Write-Host "`n🎉 ALL brand pages are now fully converted to ducted heating!" -ForegroundColor Cyan
Write-Host "✅ Brand names preserved: Bonaire, Braemar, Brivis, Kaden, Rinnai, Pyrox, Vulcan" -ForegroundColor Yellow
Write-Host "✅ All gas heating terminology replaced with ducted heating" -ForegroundColor Yellow
