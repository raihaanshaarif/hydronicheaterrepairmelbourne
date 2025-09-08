# List of all suburbs (excluding Armadale and Ashwood which a# Metadata
export const metadata = {
  title:
    "Ducted Heating Services $suburb Melbourne | Installation, Repairs & Servicing",
  description:
    "Professional ducted heating services in $suburb, Melbourne. Expert installation, repairs, and maintenance for all ducted heating systems. Certified HVAC technicians serving $suburb and surrounding suburbs.",
  keywords:
    "ducted heating services $suburb, ducted heating installation $suburb, ducted heating repairs Melbourne, $suburb HVAC heating, ducted heating systems $suburb",
};
$suburbs = @(
    "Attwood", "Avonsleigh", "Badger Creek", "Bayswater", "Baxter", "Beaconsfield", 
    "Belgrave", "Bentleigh", "Bentleigh East", "Berwick", "Beaumaris", "Bittern", 
    "Black Rock", "Blackburn North", "Blairgowrie", "Boneo", "Boronia", "Botanic Ridge", 
    "Box Hill", "Briar Hill", "Broadmeadows", "Brighton", "Brighton East", "Bundoora", 
    "Burwood 3125", "Burwood Chadstone", "Burwood East", "Caulfield", "Chadstone", 
    "Chelsea", "Chelsea Heights", "Chirnside Park", "Clayton", "Clayton South", 
    "Clyde", "Clyde North", "Dandenong", "Dandenong North", "Dandenong South", 
    "Doncaster", "Doncaster East", "Donvale", "Doveton", "Eaglehawk", "Epping", 
    "Essendon", "Essendon Fields", "Fawkner", "Ferntree Gully", "Frankston", 
    "Frankston North", "Frankston South", "Gembrook", "Glen Waverley", "Greensborough", 
    "Hallam", "Hampton", "Hampton Park", "Heatherton", "Highett", "Hillside", 
    "Hoppers Crossing", "Keilor", "Keilor Downs", "Keilor Lodge", "Kings Park", 
    "Knoxfield", "Lakes Entrance", "Lalor", "Langwarrin", "Lara", "Laverton", 
    "Laverton North", "Lilydale", "Little River", "Macleod", "Maroondah", 
    "Melbourne CBD", "Melbourne Airport", "Melbourne East", "Melbourne South", 
    "Melton", "Melton South", "Mordialloc", "Mornington", "Mount Eliza", 
    "Mount Evelyn", "Mount Waverley", "Narre Warren", "Narre Warren North", 
    "Narre Warren South", "North Melbourne", "Northcote", "Oakleigh", "Oakleigh South", 
    "Pakenham", "Pakenham South", "Parkdale", "Pascoe Vale", "Pascoe Vale South", 
    "Point Cook", "Point Leo", "Port Melbourne", "Pakenham Upper", "Ringwood", 
    "Ringwood East", "Ringwood North", "Rivervale", "Rowville", "Sandringham", 
    "Scoresby", "Seaford", "Skye", "Somerville", "South Melbourne", "South Morang", 
    "Southbank", "Springvale", "Springvale South", "St Albans", "St Kilda", 
    "St Kilda East", "Sunshine", "Sunshine North", "Sunshine West", "Tarneit", 
    "Tooradin", "Toorak", "Truemans", "Tyabb", "Upper Ferntree Gully", "Wantirna", 
    "Wantirna South", "Werribee", "Werribee South", "Wheelers Hill", "Yallambie", 
    "Yarra Junction", "Yarra Glen", "Yarraville", "Yering", "Yellingbo"
)

foreach ($suburb in $suburbs) {
    $folderName = $suburb.ToLower() -replace " ", "-" -replace "'", ""
    $functionName = ($suburb -replace " ", "" -replace "'", "") + "DuctedHeatingServices"
    $urlSlug = $suburb.ToLower() -replace " ", "-" -replace "'", ""
    
    # Create directory
    New-Item -ItemType Directory -Path $folderName -Force | Out-Null
    
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
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
import ListWithTitle from "../../_components/Common/ListWithTitle";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import { dataServicesInclude } from "../../_components/ServicesResidential/ServicesIncludeData";
import imageLayout from "../../../public/images/services/services_img03.jpg";

// Metadata
export const metadata = {
  title:
    "Gas Heater Services $suburb Melbourne | Installation, Repairs & Servicing",
  description:
    "Professional gas heater services in $suburb, Melbourne. Expert installation, repairs, and maintenance for all gas heating systems. Certified technicians serving $suburb and surrounding suburbs.",
  keywords:
    "gas heater services $suburb, gas heater installation $suburb, gas heater repairs Melbourne, $suburb gas heating, ducted gas heating $suburb",
};

//Page Layout
export default function $functionName() {
  return (
    <>
      <PageTitle dataTitle="Ducted Heating Services $suburb Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="$($suburb.ToLower()) ducted heating services"
                  dataTitle="Professional Ducted Heating Services in $suburb, Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="ducted heating services $($suburb.ToLower()) melbourne"
                    loading={``eager``}
                  />
                </div>
                <p className={``${styles.indent__top2}``}>
                  Stay warm and comfortable throughout Melbourne&apos;s colder
                  months with our comprehensive ducted heating services in $suburb.
                  As a trusted local HVAC heating specialist, we provide
                  professional installation, repair, and maintenance services
                  for all types of ducted heating systems across $suburb and surrounding
                  Melbourne suburbs. Our certified HVAC technicians understand
                  the unique heating needs of $suburb homes and deliver
                  reliable, efficient, and safe ducted heating solutions tailored
                  to your property.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">$suburb Homes & Units</a>
                      </li>
                      <li>
                        <a href="#">Period & Heritage Properties</a>
                      </li>
                      <li>
                        <a href="#">Modern Townhouses</a>
                      </li>
                      <li>
                        <a href="#">Investment Properties</a>
                      </li>
                      <li>
                        <a href="#">New Builds & Extensions</a>
                      </li>
                      <li>
                        <a href="#">Victorian Era Homes</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Reverse Cycle Ducted Heating</a>
                      </li>
                      <li>
                        <a href="#">Ducted Heat Pumps</a>
                      </li>
                      <li>
                        <a href="#">Energy Efficient Heat Pumps</a>
                      </li>
                      <li>
                        <a href="#">Zoned Ducted Heating</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                      <li>
                        <a href="#">Safety Inspections</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Ducted Heating Services We Provide in $suburb`:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Ducted Heating Services in $suburb?
                </h5>
                <p>
                  $suburb&apos;s mix of heritage homes and modern properties
                  requires specialized knowledge when it comes to ducted heating
                  solutions. Our team understands the unique characteristics of
                  $suburb properties, from charming period homes to
                  contemporary developments. We provide customized ducted heating
                  solutions that respect the architectural integrity of your
                  home while delivering optimal comfort and energy efficiency.
                </p>
                <p className="indent__top">
                  As local Melbourne HVAC heating specialists, we&apos;re
                  familiar with $suburb&apos;s climate patterns and the
                  specific heating challenges faced by residents. Whether
                  you&apos;re dealing with an older heating system that needs
                  replacement, require urgent repairs during winter, or want to
                  upgrade to a more efficient system, our certified technicians
                  provide prompt, professional service with upfront pricing and
                  guaranteed workmanship.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Local $suburb Ducted Heating Experts
                </h5>
                <p>
                  Living in $suburb means you appreciate quality, reliability,
                  and attention to detail &ndash; values that drive everything
                  we do. Our ducted heating services are designed to keep your home
                  comfortable year-round while ensuring the safety and
                  well-being of your family. From routine maintenance that
                  prevents costly breakdowns to emergency repairs when you need
                  them most, we&apos;re your trusted local ducted heating
                  specialists in $suburb, Melbourne.
                </p>
                <PromoLayout
                  dataText="Get a free quote for ducted heating installation, repair, or servicing in $suburb from our certified HVAC technicians today!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={``${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text``}
              >
                <div>
                  <div className={``ttsubtitle``}>Ducted Heating Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="Book A HVAC Technician Now!"
                  dataText="Serving $suburb & Melbourne"
                  dataTelefon="0405133761"
                />
                <BoxListAside
                  dataTitle={"6 Different Reasons \n You Should Choose Us"}
                  dataList={ReasonsListData}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="../images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="trusted partners"
              dataTitle="Our Certified Partners"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px]  only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
"@
    
    # Write content to file
    $content | Out-File -FilePath "$folderName\page.jsx" -Encoding UTF8
    
    Write-Host "Created: $folderName/page.jsx"
}

Write-Host "All suburb pages created successfully!"
