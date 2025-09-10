# PowerShell script to update brand pages for hydronic heater services
Write-Host "Updating Brand Pages for Hydronic Heater Services..." -ForegroundColor Green

# Define brands that work with hydronic heating
$hydronicBrands = @("Rinnai", "Bosch", "Viessmann", "Worcester", "Vaillant")

# Base directory for brands
$brandsDir = "app\brands"

foreach ($brand in $hydronicBrands) {
    $brandDir = Join-Path $brandsDir $brand.ToLower()
    $pagePath = Join-Path $brandDir "page.jsx"
    
    # Create directory if it doesn't exist
    if (!(Test-Path $brandDir)) {
        New-Item -ItemType Directory -Path $brandDir -Force | Out-Null
        Write-Host "Created directory: $brandDir"
    }
    
    # Create simple brand page content
    $pageContent = @"
import PageTitle from "../../_components/Common/PageTitle";

export const metadata = {
  title: "$brand Hydronic Heaters Melbourne | Expert Service & Repairs",
  description: "$brand hydronic heating systems - Expert installation & service in Melbourne. Call 0405133761 for free quote.",
  keywords: "$brand hydronic heaters Melbourne, $brand heater installation, $brand hydronic heater service",
};

export default function ${brand}Page() {
  return (
    <>
      <PageTitle dataTitle="$brand Hydronic Heaters Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="container">
          <h1>$brand Hydronic Heater Services Melbourne</h1>
          <p>Professional $brand hydronic heater installation, repair and maintenance services in Melbourne.</p>
        </div>
      </main>
    </>
  );
}
"@

    # Write the content to the file
    Set-Content -Path $pagePath -Value $pageContent -Encoding UTF8
    Write-Host "Created: $brand brand page"
}

Write-Host "Brand Pages Update Complete!"
