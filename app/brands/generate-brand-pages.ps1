# Define remaining brands
$brands = @(
    @{
        name = "Brivis"
        slug = "brivis"
        tagline = "Heating & Cooling Excellence"
        description = "Trusted Australian manufacturer of gas heating systems, delivering reliable warmth and comfort for over 30 years."
        specialFeatures = @("Continuous Pilot", "Electronic Ignition", "Weather Shield", "Easy Maintenance")
        mainBenefit = "reliability and proven performance"
        founded = "1988"
        warranty = "Up to 15 years"
        efficiency = "Up to 5.5 stars"
        keyTech = "Electronic Controls"
    },
    @{
        name = "Rinnai"
        slug = "rinnai"
        tagline = "Continuous Hot Water & Heating"
        description = "Japanese technology meets Australian engineering in Rinnai's comprehensive range of gas heating solutions."
        specialFeatures = @("Instant Heat", "Continuous Operation", "Low Emissions", "Precise Temperature Control")
        mainBenefit = "instant warmth and continuous operation"
        founded = "1920"
        warranty = "Up to 12 years"
        efficiency = "Up to 6 stars"
        keyTech = "Instant Heat Technology"
    },
    @{
        name = "Kaden"
        slug = "kaden"
        tagline = "Smart Heating Solutions"
        description = "Modern gas heating technology with smart controls and energy-efficient operation for contemporary Melbourne homes."
        specialFeatures = @("Smart Thermostat", "App Control", "Energy Monitoring", "Compact Design")
        mainBenefit = "smart technology and compact installation"
        founded = "2010"
        warranty = "Up to 10 years"
        efficiency = "Up to 5 stars"
        keyTech = "Smart Control Systems"
    },
    @{
        name = "Pyrox"
        slug = "pyrox"
        tagline = "Professional Heating Solutions"
        description = "Commercial and residential gas heating specialists offering robust, reliable heating systems for Melbourne's climate."
        specialFeatures = @("Heavy Duty Construction", "Commercial Grade", "Extended Warranty", "Professional Installation")
        mainBenefit = "commercial-grade durability and reliability"
        founded = "1975"
        warranty = "Up to 20 years"
        efficiency = "Up to 5 stars"
        keyTech = "Heavy Duty Heat Exchangers"
    }
)

foreach ($brand in $brands) {
    # Create directory
    New-Item -ItemType Directory -Path $brand.slug -Force | Out-Null
    
    # Create page.jsx content
    $content = @"
//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
import Link from "next/link";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import imageLayout from "../../../public/images/services/services_img03.jpg";

// Metadata
export const metadata = {
  title: "$($brand.name) Gas Heaters Melbourne | Expert Installation, Service & Repairs",
  description: "$($brand.name) gas heaters - $($brand.description) Expert installation & service in Melbourne. Call 0405133761 for free quote.",
  keywords: "$($brand.name) gas heaters Melbourne, $($brand.name) heater installation, $($brand.name) gas heater service, $($brand.name) repairs Melbourne, gas heating $($brand.name)",
};

//Page Layout
export default function $($brand.name)Page() {
  return (
    <>
      <PageTitle dataTitle="$($brand.name) Gas Heaters Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="$($brand.name.ToLower()) gas heaters melbourne"
                  dataTitle="$($brand.name) Gas Heaters - $($brand.tagline)"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="$($brand.name.ToLower()) gas heaters melbourne installation service"
                    loading={``eager``}
                  />
                </div>
                
                <p className={``${styles.indent__top2}``}>
                  $($brand.description) As Melbourne&apos;s authorized $($brand.name) dealers and certified installation specialists, we provide expert installation, comprehensive service, and professional repairs for the complete $($brand.name) gas heater range. Choose $($brand.name) for $($brand.mainBenefit) backed by our professional installation guarantee.
                </p>

                <p className="indent__top">
                  Our factory-trained technicians ensure your $($brand.name) gas heater delivers optimal performance, maximum efficiency, and reliable comfort throughout Melbourne&apos;s coldest months. Every $($brand.name) installation includes comprehensive warranty coverage and ongoing service support.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  $($brand.name) Gas Heater Key Features
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
"@

    # Add features
    foreach ($feature in $brand.specialFeatures) {
        $content += @"

                  <div className="bg-white border border-gray-200 rounded-lg p-[15px] shadow-sm">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">✓ $feature</h4>
                    <p className="text-[13px] text-gray-700">Advanced $feature technology ensures optimal performance and reliability for your Melbourne home heating needs.</p>
                  </div>
"@
    }

    $content += @"

                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Why Choose $($brand.name) Gas Heaters in Melbourne?
                </h3>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[20px] mt-[20px]">
                  <h4 className="text-[16px] font-bold text-blue-900 mb-[15px]">$($brand.name) Advantages</h4>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[8px]">
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Proven Reliability:</strong> Trusted by Melbourne families for years</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Energy Efficiency:</strong> $($brand.efficiency) rated models available</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Professional Installation:</strong> Certified technician network</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[8px]">
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Comprehensive Warranty:</strong> $($brand.warranty) coverage</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Ongoing Support:</strong> Local service network</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>$($brand.keyTech):</strong> Advanced heating technology</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Professional $($brand.name) Installation & Service Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our authorized $($brand.name) technicians provide professional installation with complete system commissioning, user training, and warranty registration. We ensure your $($brand.name) gas heater operates at peak efficiency while meeting all safety standards and building codes.
                </p>

                <div className="grid md:grid-cols-3 gap-[15px] mt-[20px]">
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[18px] font-bold text-blue-600 mb-[5px]">$($brand.efficiency)</div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">Energy Rating</div>
                    <div className="text-[12px] text-gray-600">Efficient heating for lower bills</div>
                  </div>
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[18px] font-bold text-green-600 mb-[5px]">$($brand.warranty)</div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">Warranty</div>
                    <div className="text-[12px] text-gray-600">Comprehensive coverage</div>
                  </div>
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[18px] font-bold text-purple-600 mb-[5px]">Professional</div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">Installation</div>
                    <div className="text-[12px] text-gray-600">Certified technicians</div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  $($brand.name) Gas Heater Running Costs Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  $($brand.name) gas heaters are designed for efficiency and cost-effective operation. With proper installation and regular maintenance, a $($brand.name) system can provide reliable heating at competitive running costs throughout Melbourne&apos;s winter months.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mt-[15px]">
                  <p className="text-[13px] text-green-800">
                    <strong>Cost Effective:</strong> $($brand.name) gas heaters offer excellent value with low running costs and reliable performance for Melbourne homes.
                  </p>
                </div>

                <PromoLayout
                  dataText="Get a free $($brand.name) gas heater quote with professional installation and comprehensive warranty coverage!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>
              
              <div className={``${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text``}>
                <div>
                  <div className={``ttsubtitle``}>Gas Heater Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-gray-900 mb-[10px]">$($brand.name) Quick Facts</h4>
                  <div className="space-y-[8px] text-[13px] text-gray-700">
                    <div><strong>Founded:</strong> $($brand.founded)</div>
                    <div><strong>Specialty:</strong> $($brand.tagline)</div>
                    <div><strong>Warranty:</strong> $($brand.warranty)</div>
                    <div><strong>Energy Rating:</strong> $($brand.efficiency)</div>
                    <div><strong>Key Technology:</strong> $($brand.keyTech)</div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="$($brand.name) Specialists!"
                  dataText="Authorized dealers & certified installers"
                  dataTelefon="0405133761"
                />
                
                <BoxListAside
                  dataTitle={"Why Choose Our \n $($brand.name) Service"}
                  dataList={ReasonsListData}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section__inner bg-no-repeat bg-center lazyload" data-bg="/images/extra-bg01.png">
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="authorized $($brand.name.ToLower()) dealer"
              dataTitle="Melbourne's Trusted $($brand.name) Partner"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
"@
    
    # Write content to file
    $content | Out-File -FilePath "$($brand.slug)\page.jsx" -Encoding UTF8
    
    Write-Host "Created: $($brand.slug)/page.jsx"
}

Write-Host "All brand pages created successfully!"
