# PowerShell script to update all brand pages from gas heating to ducted heating
# This script transforms all brand sub-pages while keeping the brand names intact

$brandDirectories = @("bonaire", "braemar", "brivis", "kaden", "rinnai", "pyrox", "vulcan")

foreach ($brand in $brandDirectories) {
    $brandName = (Get-Culture).TextInfo.ToTitleCase($brand)
    $filePath = "G:\Faisal Final\ductedheaterrepairmelbourne\app\brands\$brand\page.jsx"
    
    if (Test-Path $filePath) {
        Write-Host "Processing $brandName brand page..." -ForegroundColor Green
        
        # Read the file content
        $content = Get-Content $filePath -Raw
        
        # Update metadata title
        $content = $content -replace "$brandName Gas Heater Repair Melbourne", "$brandName Ducted Heating Repair Melbourne"
        
        # Update metadata description
        $content = $content -replace "Professional $brandName gas heater repair", "Professional $brandName ducted heating repair"
        $content = $content -replace "gas heater repair Melbourne", "ducted heating repair Melbourne"
        $content = $content -replace "certified technicians", "certified HVAC technicians"
        
        # Update metadata keywords
        $content = $content -replace "$brandName gas heater service", "$brandName ducted heating service"
        $content = $content -replace "gas heater repair Melbourne", "ducted heating repair Melbourne"
        
        # Update page title
        $content = $content -replace "dataTitle=`"$brandName Gas Heater Repair & Service Melbourne`"", "dataTitle=`"$brandName Ducted Heating Repair & Service Melbourne`""
        
        # Update section subtitle and title
        $content = $content -replace "Professional $brandName Gas Heater Repair & Service Melbourne", "Professional $brandName Ducted Heating Repair & Service Melbourne"
        
        # Update alt text
        $content = $content -replace "$($brand.ToLower()) gas heater repair service melbourne", "$($brand.ToLower()) ducted heating repair service melbourne"
        
        # Update main content
        $content = $content -replace "$brandName gas heater repair and service", "$brandName ducted heating repair and service"
        $content = $content -replace "certified technicians provide", "certified HVAC technicians provide"
        $content = $content -replace "all $brandName gas heater models", "all $brandName ducted heating models"
        $content = $content -replace "broken $brandName gas heater", "broken $brandName ducted heating system"
        $content = $content -replace "certified technicians, genuine", "certified HVAC technicians, genuine"
        
        # Update emergency service section
        $content = $content -replace "Certified $brandName technicians", "Certified $brandName HVAC technicians"
        
        # Update service descriptions
        $content = $content -replace "Our $brandName Gas Heater Repair Services Melbourne", "Our $brandName Ducted Heating Repair Services Melbourne"
        $content = $content -replace "Gas leaks\? We fix it fast", "System failures\? We fix it fast"
        $content = $content -replace "Ignition system fixes", "Electronic control fixes"
        $content = $content -replace "Gas valve repairs", "Motor repairs"
        $content = $content -replace "licensed gas fitters", "licensed HVAC technicians"
        $content = $content -replace "Licensed gas fitting", "Licensed HVAC installation"
        
        # Update common problems section
        $content = $content -replace "Common $brandName Gas Heater Problems We Fix", "Common $brandName Ducted Heating Problems We Fix"
        $content = $content -replace "won't start or ignite", "won't start or operate"
        $content = $content -replace "Gas smell or safety concerns", "Electrical faults or safety concerns"
        $content = $content -replace "Pilot light issues", "Control system issues"
        
        # Update promo text
        $content = $content -replace "Emergency $brandName gas heater repair Melbourne", "Emergency $brandName ducted heating repair Melbourne"
        $content = $content -replace "certified technicians, genuine parts", "certified HVAC technicians, genuine parts"
        
        # Update section titles in footer
        $content = $content -replace "Professional $brandName Gas Heater Service Team", "Professional $brandName Ducted Heating Service Team"
        
        # Update aside content
        $content = $content -replace "$brandName Repair Services", "$brandName Ducted Heating Services"
        
        # Write the updated content back to the file
        $content | Out-File -FilePath $filePath -Encoding UTF8
        
        Write-Host "✓ Updated $brandName brand page successfully" -ForegroundColor Green
    }
    else {
        Write-Host "✗ File not found: $filePath" -ForegroundColor Red
    }
}

Write-Host "`nAll brand pages have been updated from gas heating to ducted heating!" -ForegroundColor Cyan
Write-Host "Brand names have been preserved as requested." -ForegroundColor Yellow
