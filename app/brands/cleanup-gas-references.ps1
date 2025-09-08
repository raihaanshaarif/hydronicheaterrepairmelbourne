# PowerShell script to clean up remaining gas heating references in brand pages
# This script performs a second pass to catch any remaining gas heating terminology

$brandDirectories = @("bonaire", "braemar", "brivis", "kaden", "rinnai", "pyrox", "vulcan")

foreach ($brand in $brandDirectories) {
    $brandName = (Get-Culture).TextInfo.ToTitleCase($brand)
    $filePath = "G:\Faisal Final\ductedheaterrepairmelbourne\app\brands\$brand\page.jsx"
    
    if (Test-Path $filePath) {
        Write-Host "Cleaning remaining gas references in $brandName page..." -ForegroundColor Green
        
        # Read the file content
        $content = Get-Content $filePath -Raw
        
        # Clean up remaining gas heater references in alt text
        $content = $content -replace "gas heaters melbourne installation service", "ducted heating melbourne installation service"
        $content = $content -replace "gas heater melbourne service", "ducted heating melbourne service"
        
        # Clean up remaining gas heater references in content
        $content = $content -replace "specialists for $brandName gas heater repair", "specialists for $brandName ducted heating repair"
        $content = $content -replace "instant heat specialists for", "ducted heating specialists for"
        $content = $content -replace "gas heater repair and service", "ducted heating repair and service"
        $content = $content -replace "all $brandName gas heater models", "all $brandName ducted heating models"
        $content = $content -replace "all $brandName continuous operation heating systems", "all $brandName ducted heating systems"
        $content = $content -replace "continuous operation heating systems", "ducted heating systems"
        
        # Clean up service descriptions
        $content = $content -replace "broken $brandName gas heater", "broken $brandName ducted heating system"
        $content = $content -replace "certified technicians, genuine", "certified HVAC technicians, genuine"
        $content = $content -replace "Our $brandName gas heater repair services", "Our $brandName ducted heating repair services"
        
        # Clean up emergency service content
        $content = $content -replace "Emergency $brandName gas heater repair", "Emergency $brandName ducted heating repair"
        $content = $content -replace "When your $brandName gas heater", "When your $brandName ducted heating system"
        $content = $content -replace "gas heater breakdown", "ducted heating breakdown"
        $content = $content -replace "gas heater emergency", "ducted heating emergency"
        
        # Clean up common problems section
        $content = $content -replace "gas heater won't", "ducted heating won't"
        $content = $content -replace "gas heater not", "ducted heating not"
        $content = $content -replace "gas heater making", "ducted heating making"
        $content = $content -replace "Gas smell", "Electrical faults"
        $content = $content -replace "gas safety concerns", "electrical safety concerns"
        $content = $content -replace "Pilot light", "Control system"
        $content = $content -replace "pilot light", "control system"
        $content = $content -replace "Gas valve", "Motor"
        $content = $content -replace "gas valve", "motor"
        $content = $content -replace "Ignition system", "Electronic control"
        $content = $content -replace "ignition system", "electronic control"
        $content = $content -replace "Gas leaks", "System failures"
        $content = $content -replace "gas leaks", "system failures"
        
        # Clean up service team section
        $content = $content -replace "gas fitting expertise", "HVAC expertise"
        $content = $content -replace "Licensed gas fitting", "Licensed HVAC installation"
        $content = $content -replace "licensed gas fitters", "licensed HVAC technicians"
        $content = $content -replace "gas appliance", "ducted heating"
        
        # Clean up promo content
        $content = $content -replace "gas heater specialists", "ducted heating specialists"
        $content = $content -replace "gas heating solutions", "ducted heating solutions"
        
        # Write the updated content back to the file
        $content | Out-File -FilePath $filePath -Encoding UTF8
        
        Write-Host "✓ Cleaned $brandName brand page successfully" -ForegroundColor Green
    }
    else {
        Write-Host "✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`nAll remaining gas heating references have been cleaned up!" -ForegroundColor Cyan
Write-Host "All brand pages now fully converted to ducted heating services." -ForegroundColor Yellow
