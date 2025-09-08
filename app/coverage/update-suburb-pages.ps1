# PowerShell script to update all suburb coverage pages from gas heating to ducted heating
# This script will systematically update all suburb pages with SEO optimized content

$coverageDir = "G:\Faisal Final\ductedheaterrepairmelbourne\app\coverage"
$suburbDirs = Get-ChildItem -Path $coverageDir -Directory

Write-Host "Found $($suburbDirs.Count) suburb directories to update..."

foreach ($suburbDir in $suburbDirs) {
    $pagePath = Join-Path $suburbDir.FullName "page.jsx"
    
    if (Test-Path $pagePath) {
        Write-Host "Updating: $($suburbDir.Name)"
        
        # Read the file content
        $content = Get-Content $pagePath -Raw
        
        # Skip if already updated (contains "ducted heating services")
        if ($content -match "ducted heating services") {
            Write-Host "  Already updated - skipping"
            continue
        }
        
        # Extract suburb name for replacements
        $suburbName = $suburbDir.Name -replace "-", " "
        $suburbNameTitle = (Get-Culture).TextInfo.ToTitleCase($suburbName)
        
        # Update metadata title
        $content = $content -replace "Gas Heater Services $suburbNameTitle Melbourne", "Ducted Heating Services $suburbNameTitle Melbourne"
        
        # Update metadata description
        $content = $content -replace "Professional gas heater services in $suburbNameTitle, Melbourne\. Expert installation, repairs, and maintenance for all gas heating systems\. Certified technicians", "Professional ducted heating services in $suburbNameTitle, Melbourne. Expert installation, repairs, and maintenance for all ducted heating systems. Certified HVAC technicians"
        
        # Update keywords
        $content = $content -replace "gas heater services $suburbName, gas heater installation $suburbName, gas heater repairs Melbourne, $suburbName gas heating, ducted gas heating $suburbName", "ducted heating services $suburbName, ducted heating installation $suburbName, ducted heating repairs Melbourne, $suburbName HVAC heating, ducted heating systems $suburbName"
        
        # Update function name
        $content = $content -replace "${suburbNameTitle}GasHeaterServices", "${suburbNameTitle}DuctedHeatingServices"
        $content = $content -replace "(\w+)GasHeaterServices", '${1}DuctedHeatingServices'
        
        # Update page title
        $content = $content -replace "Gas Heater Services $suburbNameTitle Melbourne", "Ducted Heating Services $suburbNameTitle Melbourne"
        
        # Update section subtitle
        $content = $content -replace "$suburbName gas heater services", "$suburbName ducted heating services"
        
        # Update section title
        $content = $content -replace "Professional Gas Heater Services in $suburbNameTitle, Melbourne", "Professional Ducted Heating Services in $suburbNameTitle, Melbourne"
        
        # Update alt text
        $content = $content -replace "gas heater services $suburbName melbourne", "ducted heating services $suburbName melbourne"
        
        # Update main content paragraphs
        $content = $content -replace "comprehensive gas heater services", "comprehensive ducted heating services"
        $content = $content -replace "gas heating specialist", "HVAC heating specialist"
        $content = $content -replace "all types of gas heaters", "all types of ducted heating systems"
        $content = $content -replace "certified gas technicians", "certified HVAC technicians"
        $content = $content -replace "safe gas heating solutions", "safe ducted heating solutions"
        
        # Update service lists
        $content = $content -replace "Ducted Gas Heating", "Reverse Cycle Ducted Heating"
        $content = $content -replace "Gas Wall Furnaces", "Zoned Ducted Systems"
        $content = $content -replace "Central Gas Heating", "Energy Efficient Heat Pumps"
        $content = $content -replace "Gas Log Fires", "Inverter Ducted Heating"
        $content = $content -replace "Safety Inspections", "System Maintenance"
        
        # Update headings
        $content = $content -replace "Gas Heater Services We Provide in ${suburbNameTitle}:", "Ducted Heating Services We Provide in ${suburbNameTitle}:"
        $content = $content -replace "Why Choose Our Gas Heater Services in ${suburbNameTitle}\?", "Why Choose Our Ducted Heating Services in ${suburbNameTitle}?"
        $content = $content -replace "Local ${suburbNameTitle} Gas Heater Experts", "Local ${suburbNameTitle} Ducted Heating Experts"
        
        # Update content paragraphs
        $content = $content -replace "gas heating solutions", "ducted heating solutions"
        $content = $content -replace "gas heating specialists", "HVAC heating specialists"
        $content = $content -replace "older gas heater", "older heating system"
        $content = $content -replace "more efficient system", "more efficient ducted heating system"
        $content = $content -replace "gas heating services", "ducted heating services"
        $content = $content -replace "gas heater specialists", "ducted heating specialists"
        
        # Update promo text
        $content = $content -replace "gas heater installation, repair, or servicing", "ducted heating installation, repair, or servicing"
        $content = $content -replace "certified gas technicians", "certified HVAC technicians"
        
        # Update aside sections
        $content = $content -replace "Gas Heater Services", "Ducted Heating Services"
        $content = $content -replace "Book A Gas Technician Now!", "Book A Ducted Heating Technician Now!"
        
        # Write updated content back to file
        Set-Content -Path $pagePath -Value $content -Encoding UTF8
        Write-Host "  ✓ Updated successfully"
    }
}

Write-Host "`nCompleted updating all suburb pages!"
Write-Host "All pages have been converted from gas heating to ducted heating services."
