# Get all suburb directories (excluding armadale which is already fixed)
$suburbDirs = Get-ChildItem -Directory | Where-Object { $_.Name -ne "armadale" }

foreach ($dir in $suburbDirs) {
    $pageFile = Join-Path $dir.FullName "page.jsx"
    
    if (Test-Path $pageFile) {
        Write-Host "Fixing paths in: $($dir.Name)/page.jsx"
        
        # Read the file content
        $content = Get-Content $pageFile -Raw
        
        # Fix the image paths
        $content = $content -replace 'dataScrImg="\.\./images/', 'dataScrImg="/images/'
        $content = $content -replace 'dataScrImg2="\.\./images/', 'dataScrImg2="/images/'
        $content = $content -replace 'data-bg="\.\./images/', 'data-bg="/images/'
        
        # Write the updated content back to the file
        $content | Set-Content $pageFile -NoNewline
    }
}

Write-Host "All suburb pages have been updated with absolute paths!"
