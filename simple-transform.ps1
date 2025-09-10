# Simple PowerShell script to transform content
Write-Host "Starting transformation..." -ForegroundColor Green

$transformations = @{
    "gas heater" = "hydronic heater"
    "Gas Heater" = "Hydronic Heater"
    "ducted heating" = "hydronic heating"
    "Ducted Heating" = "Hydronic Heating"
    "ductedheaterrepairmelbourne" = "hydronicheaterrepairmelbourne"
    "Ducted Heating Repair Melbourne" = "Hydronic Heater Repair Melbourne"
    "gas heating" = "hydronic heating"
    "Gas heating" = "Hydronic heating"
    "HVAC" = "hydronic"
}

$files = Get-ChildItem -Path "app" -Recurse -Include "*.js", "*.jsx" | Where-Object { $_.FullName -notmatch "node_modules" }

Write-Host "Found $($files.Count) files"

$count = 0
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $hasChanges = $false
    
    foreach ($search in $transformations.Keys) {
        if ($content.Contains($search)) {
            $content = $content.Replace($search, $transformations[$search])
            $hasChanges = $true
        }
    }
    
    if ($hasChanges) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated: $($file.Name)"
        $count++
    }
}

Write-Host "Processed $count files"
