# PowerShell script to transform website content to hydronic heater services
Write-Host "🔧 Starting Hydronic Heater Transformation..." -ForegroundColor Green

# Define the transformations as hashtable
$transformations = @{
    "gas heater" = "hydronic heater"
    "Gas heater" = "Hydronic heater"
    "Gas Heater" = "Hydronic Heater"
    "ducted heating" = "hydronic heating"
    "Ducted heating" = "Hydronic heating"
    "Ducted Heating" = "Hydronic Heating"
    "gas heating" = "hydronic heating"
    "Gas heating" = "Hydronic heating"
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
    "gas technician" = "hydronic technician"
    "Gas technician" = "Hydronic technician"
    "gas specialist" = "hydronic specialist"
    "Gas specialist" = "Hydronic specialist"
    "HVAC" = "hydronic"
    "ductedheaterrepairmelbourne" = "hydronicheaterrepairmelbourne"
    "Ducted Heating Repair Melbourne" = "Hydronic Heater Repair Melbourne"
}

# Get all JavaScript and JSX files
$files = Get-ChildItem -Path "app" -Recurse -Include "*.js", "*.jsx", "*.json" | Where-Object { $_.FullName -notmatch "node_modules" }

Write-Host "📁 Found $($files.Count) files to process" -ForegroundColor Cyan

$processedCount = 0
foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
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
            Set-Content -Path $file.FullName -Value $content -Encoding UTF8
            Write-Host "✅ Updated: $($file.Name)" -ForegroundColor Green
            $processedCount++
        }
        
    } catch {
        Write-Host "❌ Error processing $($file.FullName): $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🎯 Transformation Complete!" -ForegroundColor Green
Write-Host "📊 Processed $processedCount files successfully" -ForegroundColor Cyan
Write-Host "✅ Website transformed to Hydronic Heater Repair Melbourne" -ForegroundColor White
