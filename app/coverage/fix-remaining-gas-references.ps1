# Enhanced PowerShell script to find and fix ALL remaining gas heating references
# This script will catch patterns the first script missed

$coverageDir = "G:\Faisal Final\ductedheaterrepairmelbourne\app\coverage"
$suburbDirs = Get-ChildItem -Path $coverageDir -Directory

Write-Host "Checking $($suburbDirs.Count) suburb directories for remaining gas heating references..."

foreach ($suburbDir in $suburbDirs) {
    $pagePath = Join-Path $suburbDir.FullName "page.jsx"
    
    if (Test-Path $pagePath) {
        # Read the file content
        $content = Get-Content $pagePath -Raw
        $originalContent = $content
        
        # Extract suburb name for replacements
        $suburbName = $suburbDir.Name -replace "-", " "
        $suburbNameTitle = (Get-Culture).TextInfo.ToTitleCase($suburbName)
        
        # Find and fix remaining patterns that were missed
        $hasChanges = $false
        
        # Fix "Local [Suburb] Gas Heater Experts" pattern
        if ($content -match "Local $suburbNameTitle Gas Heater Experts") {
            $content = $content -replace "Local $suburbNameTitle Gas Heater Experts", "Local $suburbNameTitle Ducted Heating Experts"
            $hasChanges = $true
            Write-Host "  Fixed: Local Gas Heater Experts heading"
        }
        
        # Fix "gas heater specialists" references
        if ($content -match "gas heater specialists") {
            $content = $content -replace "gas heater specialists", "ducted heating specialists"
            $hasChanges = $true
            Write-Host "  Fixed: gas heater specialists"
        }
        
        # Fix any remaining "gas heater" references in content
        if ($content -match "trusted local gas heater") {
            $content = $content -replace "trusted local gas heater", "trusted local ducted heating"
            $hasChanges = $true
            Write-Host "  Fixed: trusted local gas heater"
        }
        
        # Fix "gas heating" in various contexts
        if ($content -match "comprehensive gas heating") {
            $content = $content -replace "comprehensive gas heating", "comprehensive ducted heating"
            $hasChanges = $true
            Write-Host "  Fixed: comprehensive gas heating"
        }
        
        # Fix "local gas heating" references
        if ($content -match "local gas heating") {
            $content = $content -replace "local gas heating", "local ducted heating"
            $hasChanges = $true
            Write-Host "  Fixed: local gas heating"
        }
        
        # Fix "Melbourne gas heating specialists"
        if ($content -match "Melbourne gas heating specialists") {
            $content = $content -replace "Melbourne gas heating specialists", "Melbourne HVAC heating specialists"
            $hasChanges = $true
            Write-Host "  Fixed: Melbourne gas heating specialists"
        }
        
        # Fix "gas heating solutions" 
        if ($content -match "customized gas heating solutions") {
            $content = $content -replace "customized gas heating solutions", "customized ducted heating solutions"
            $hasChanges = $true
            Write-Host "  Fixed: customized gas heating solutions"
        }
        
        # Fix any remaining "gas heating" references
        if ($content -match "gas heating") {
            $content = $content -replace "gas heating", "ducted heating"
            $hasChanges = $true
            Write-Host "  Fixed: remaining gas heating references"
        }
        
        # Check for other patterns we might have missed
        if ($content -match "gas heater") {
            # Get all matches for reporting
            $matches = [regex]::Matches($content, "gas heater\w*")
            if ($matches.Count -gt 0) {
                Write-Host "  WARNING: Still contains gas heater references:"
                foreach ($match in $matches) {
                    Write-Host "    - $($match.Value)"
                }
                # Fix any remaining gas heater references
                $content = $content -replace "gas heater", "ducted heating system"
                $hasChanges = $true
            }
        }
        
        # Only write if we made changes
        if ($hasChanges) {
            Set-Content -Path $pagePath -Value $content -Encoding UTF8
            Write-Host "Updated: $($suburbDir.Name) - Fixed remaining gas heating references"
        } else {
            # Check if file still contains any gas heating references for reporting
            if ($content -match "gas heat|gas Heat") {
                Write-Host "CHECK: $($suburbDir.Name) - May still contain gas heating references"
            }
        }
    }
}

Write-Host ""
Write-Host "Completed checking and fixing remaining gas heating references!"
Write-Host "All suburb pages should now be fully converted to ducted heating."
