# PowerShell script to update brand pages for hydronic heater services
Write-Host "🔧 Updating Brand Pages for Hydronic Heater Services..." -ForegroundColor Green

# Define brands that work with hydronic heating
$hydronicBrands = @(
    @{ Name = "Rinnai"; Description = "Premium hydronic heating systems with advanced efficiency" },
    @{ Name = "Bosch"; Description = "European engineering excellence in hydronic heating" },
    @{ Name = "Viessmann"; Description = "High-performance condensing boilers and hydronic systems" },
    @{ Name = "Worcester"; Description = "Reliable and efficient hydronic heating solutions" },
    @{ Name = "Vaillant"; Description = "Advanced hydronic heating technology" }
)

# Base directory for brands
$brandsDir = "app\brands"

foreach ($brand in $hydronicBrands) {
    $brandName = $brand.Name
    $brandDesc = $brand.Description
    $brandDir = Join-Path $brandsDir $brandName.ToLower()
    $pagePath = Join-Path $brandDir "page.jsx"
    
    # Create directory if it doesn't exist
    if (!(Test-Path $brandDir)) {
        New-Item -ItemType Directory -Path $brandDir -Force | Out-Null
        Write-Host "📁 Created directory: $brandDir" -ForegroundColor Yellow
    }
    
    # Create the brand page content
    $pageContent = @"
//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
import ListWithTitle from "../../_components/Common/ListWithTitle";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import FormAside from "../../_components/ServicesSubPages/FormAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import imageLayout from "../../../public/images/services/services_img01.jpg";

// $brandName Hydronic Heater Services data
const ${brandName.ToLower()}HydronicHeaterServices = [
  {
    id: 1,
    title: "$brandName Hydronic System Installation:",
    text: "Professional installation of $brandName hydronic heating systems with expert setup and configuration. We ensure optimal performance and efficiency for your heating solution.",
  },
  {
    id: 2,
    title: "$brandName System Maintenance:",
    text: "Regular maintenance and servicing of $brandName hydronic systems to keep them running at peak performance. Our certified technicians provide comprehensive care.",
  },
  {
    id: 3,
    title: "$brandName Repair Services:",
    text: "Expert repair services for all $brandName hydronic heating models. We use genuine parts and follow manufacturer specifications for reliable repairs.",
  },
  {
    id: 4,
    title: "Emergency $brandName Service:",
    text: "24/7 emergency service for $brandName hydronic system breakdowns. Fast response times and same-day repairs available throughout Melbourne.",
  },
];

// SEO Metadata
export const metadata = {
  title: "$brandName Hydronic Heaters Melbourne | Expert Installation, Service & Repairs",
  description: "$brandName hydronic heaters - $brandDesc Expert installation & service in Melbourne. Call 0405133761 for free quote.",
  keywords: "$brandName hydronic heaters Melbourne, $brandName heater installation, $brandName hydronic heater service, $brandName repairs Melbourne, hydronic heating $brandName",
};

//Page Layout
export default function ${brandName}Page() {
  return (
    <>
      <PageTitle dataTitle="$brandName Hydronic Heaters Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="$($brandName.ToLower()) hydronic heaters melbourne"
                  dataTitle="Professional $brandName Hydronic Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="$($brandName.ToLower()) hydronic heater repair service melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`$`{styles.indent__top2}`}>
                  Looking for expert $brandName hydronic heater service in Melbourne?
                  Our certified technicians are specialists for $brandName hydronic heater repair
                  and service throughout Melbourne. We provide comprehensive
                  maintenance, repairs, and installation services for all $brandName hydronic heating models.
                  Whether you need routine servicing or emergency repairs, our experienced
                  team delivers reliable, professional service you can trust.
                </p>
                
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our $brandName Hydronic Heater Services:
                </h4>
                <ListWithTitle
                  dataLayout={${brandName.ToLower()}HydronicHeaterServices}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our $brandName Hydronic Heater Service?
                </h5>
                <p>
                  Our $brandName hydronic heater repair services are carried out by
                  certified hydronic technicians, using genuine parts and following
                  manufacturer guidelines. We understand the unique features of $brandName
                  systems and provide targeted solutions for optimal performance.
                  All our work is backed by comprehensive warranties.
                </p>
                
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency $brandName Hydronic Heater Repair
                </h5>
                <p>
                  When your $brandName hydronic heating system breaks down unexpectedly,
                  our emergency repair team is ready to help 24/7. We understand that
                  heating emergencies require immediate attention, especially during
                  Melbourne's cold winter months. Our fully equipped service vehicles
                  carry $brandName-specific parts for same-day repairs.
                </p>
                
                <h5 className="ttsubtitle ttsubtitle__top">
                  Common $brandName Hydronic Heater Problems We Fix:
                </h5>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Hydronic heater won't start</li>
                      <li>Insufficient heating output</li>
                      <li>System circulation issues</li>
                      <li>Temperature control problems</li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Pump failures</li>
                      <li>Control system faults</li>
                      <li>System leaks</li>
                      <li>Thermostat malfunctions</li>
                    </ul>
                  </div>
                </div>
                
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataLayout={ReasonsListData} />
                <FormAside />
                <ServicesListAside dataLayout={ServicesListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
"@

    # Write the content to the file
    Set-Content -Path $pagePath -Value $pageContent -Encoding UTF8
    Write-Host "✅ Created: $brandName brand page" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎯 Brand Pages Update Complete!" -ForegroundColor Green
Write-Host "📊 Created pages for hydronic heating brands:"
foreach ($brand in $hydronicBrands) {
    Write-Host "  • $($brand.Name)" -ForegroundColor White
}
Write-Host ""
Write-Host "✅ All brand pages now focus on hydronic heating systems" -ForegroundColor Cyan
