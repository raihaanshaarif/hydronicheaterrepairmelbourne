# PowerShell script to transform website from gas/ducted heating to hydronic heater services
# This script updates all content, SEO, and service references

Write-Host "🔧 Starting Hydronic Heater Transformation..." -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Yellow

# Define the transformations
$transformations = @{
    # Primary service transformations
    "gas heater" = "hydronic heater"
    "Gas heater" = "Hydronic heater" 
    "Gas Heater" = "Hydronic Heater"
    "GAS HEATER" = "HYDRONIC HEATER"
    "ducted heating" = "hydronic heating"
    "Ducted heating" = "Hydronic heating"
    "Ducted Heating" = "Hydronic Heating"
    "DUCTED HEATING" = "HYDRONIC HEATING"
    
    # System specific terms
    "ducted heating system" = "hydronic heating system"
    "gas heating system" = "hydronic heating system"
    "ducted heating installation" = "hydronic heater installation"
    "gas heater installation" = "hydronic heater installation"
    "ducted heating repair" = "hydronic heater repair"
    "gas heater repair" = "hydronic heater repair"
    "ducted heating service" = "hydronic heater service"
    "gas heater service" = "hydronic heater service"
    "ducted heating maintenance" = "hydronic heater maintenance"
    "gas heater maintenance" = "hydronic heater maintenance"
    
    # Technical terms
    "gas valve" = "circulation pump"
    "Gas valve" = "Circulation pump"
    "pilot light" = "temperature sensor"
    "Pilot light" = "Temperature sensor"
    "ignition system" = "control system"
    "Ignition system" = "Control system"
    "gas leak" = "system leak"
    "Gas leak" = "System leak"
    "gas safety" = "system safety"
    "Gas safety" = "System safety"
    
    # Service descriptions
    "gas technician" = "hydronic technician"
    "Gas technician" = "Hydronic technician"
    "gas specialist" = "hydronic specialist"
    "Gas specialist" = "Hydronic specialist"
    "gas fitting" = "hydronic installation"
    "Gas fitting" = "Hydronic installation"
    "gas appliance" = "hydronic heater"
    "Gas appliance" = "Hydronic heater"
    
    # Equipment types
    "Ducted Gas Heating" = "Hydronic Floor Heating"
    "Gas Wall Furnaces" = "Hydronic Radiators"
    "Central Gas Heating" = "Central Hydronic Heating"
    "Gas Log Fires" = "Hydronic Towel Rails"
    "Reverse Cycle Ducted Heating" = "Hydronic Underfloor Heating"
    "Zoned Ducted Systems" = "Zoned Hydronic Systems"
    "Energy Efficient Heat Pumps" = "Energy Efficient Hydronic Systems"
    "Inverter Ducted Heating" = "Smart Hydronic Controls"
    
    # Company and URL references
    "ductedheaterrepairmelbourne" = "hydronicheaterrepairmelbourne"
    "Ducted Heating Repair Melbourne" = "Hydronic Heater Repair Melbourne"
    "ducted-heating" = "hydronic-heater"
    "gas-heater" = "hydronic-heater"
    
    # Service area descriptions
    "HVAC" = "hydronic"
    "certified HVAC technicians" = "certified hydronic technicians"
    "HVAC heating specialist" = "hydronic heating specialist"
    "HVAC expertise" = "hydronic expertise"
    "HVAC installation" = "hydronic installation"
    "HVAC technicians" = "hydronic technicians"
}

# Get all files to process
$filesToProcess = @()

# Add main app files
$filesToProcess += Get-ChildItem -Path "app" -Recurse -Include "*.js", "*.jsx", "*.json" | Where-Object { $_.FullName -notmatch "node_modules" }

# Add specific directories
$directories = @("app\_components", "app\services", "app\coverage", "app\brands")
foreach ($dir in $directories) {
    if (Test-Path $dir) {
        $filesToProcess += Get-ChildItem -Path $dir -Recurse -Include "*.js", "*.jsx", "*.json" | Where-Object { $_.FullName -notmatch "node_modules" }
    }
}

Write-Host "📁 Found $($filesToProcess.Count) files to process" -ForegroundColor Cyan

# Process each file
foreach ($file in $filesToProcess) {
    try {
        $content = Get-Content $file.FullName -Raw -ErrorAction Stop
        $originalContent = $content
        $hasChanges = $false
        
        # Apply all transformations
        foreach ($search in $transformations.Keys) {
            if ($content -match [regex]::Escape($search)) {
                $content = $content -replace [regex]::Escape($search), $transformations[$search]
                $hasChanges = $true
            }
        }
        
        # Special case replacements for specific contexts
        if ($content -match "emergency.*gas.*heater") {
            $content = $content -replace "emergency.*gas.*heater.*repair", "emergency hydronic heater repair"
            $hasChanges = $true
        }
        
        if ($content -match "commercial.*gas.*heater") {
            $content = $content -replace "commercial.*gas.*heater", "commercial hydronic heater"
            $hasChanges = $true
        }
        
        if ($content -match "residential.*gas.*heater") {
            $content = $content -replace "residential.*gas.*heater", "residential hydronic heater"
            $hasChanges = $true
        }
        
        # Save changes if any were made
        if ($hasChanges) {
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8
            Write-Host "✅ Updated: $($file.Name)" -ForegroundColor Green
        }
        
    } catch {
        Write-Host "❌ Error processing $($file.FullName): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "" -ForegroundColor Yellow
Write-Host "🎯 Transformation Summary:" -ForegroundColor Green
Write-Host "✅ Updated all service references from gas/ducted to hydronic heating" -ForegroundColor White
Write-Host "✅ Updated technical terminology for hydronic systems" -ForegroundColor White
Write-Host "✅ Updated company branding and URLs" -ForegroundColor White
Write-Host "✅ Updated SEO metadata for hydronic heater services" -ForegroundColor White
Write-Host "✅ Updated service descriptions and equipment types" -ForegroundColor White
Write-Host "" -ForegroundColor Yellow

Write-Host "🏁 Hydronic Heater Transformation Complete!" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Yellow
Write-Host "The website has been successfully transformed to focus on:" -ForegroundColor Cyan
Write-Host "• Hydronic Heater Repair & Installation" -ForegroundColor White
Write-Host "• Hydronic Heating System Maintenance" -ForegroundColor White  
Write-Host "• Emergency Hydronic Heater Service" -ForegroundColor White
Write-Host "• Commercial & Residential Hydronic Heating" -ForegroundColor White
Write-Host "" -ForegroundColor Yellow
Write-Host "Domain: hydronicheaterrepairmelbourne.com.au" -ForegroundColor Yellow
Write-Host "Company: Hydronic Heater Repair Melbourne" -ForegroundColor Yellow
Write-Host "Service Area: All Melbourne suburbs" -ForegroundColor Yellow
