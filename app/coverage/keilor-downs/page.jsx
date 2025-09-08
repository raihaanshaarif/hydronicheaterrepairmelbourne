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
    "Ducted Heating Services Keilor Downs Melbourne | Installation, Repairs & Servicing",
  description:
    "Professional ducted heating services in Keilor Downs, Melbourne. Expert installation, repairs, and maintenance for all ducted heating systems. Certified HVAC technicians serving Keilor Downs and surrounding suburbs.",
  keywords:
    "ducted heating services keilor downs, ducted heating installation keilor downs, ducted heating repairs Melbourne, keilor downs HVAC heating, ducted heating systems keilor downs",
};

//Page Layout
export default function KeilorDownsDuctedHeatingServices() {
  return (
    <>
      <PageTitle dataTitle="Ducted Heating Services Keilor Downs Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="keilor downs ducted heating services"
                  dataTitle="Professional Ducted Heating Services in Keilor Downs, Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="Ducted Heating Services Keilor Downs Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={``}>
                  Stay warm and comfortable throughout Melbourne&apos;s colder
                  months with our comprehensive ducted heating services in Keilor Downs.
                  As a trusted local HVAC heating specialist, we provide
                  professional installation, repair, and maintenance services
                  for all types of ducted heating systems across Keilor Downs and surrounding
                  Melbourne suburbs. Our certified HVAC technicians understand
                  the unique heating needs of Keilor Downs homes and deliver
                  reliable, efficient, and safe ducted heating solutions tailored
                  to your property.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Keilor Downs Homes & Units</a>
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
                        <a href="#">Zoned Ducted Systems</a>
                      </li>
                      <li>
                        <a href="#">Energy Efficient Heat Pumps</a>
                      </li>
                      <li>
                        <a href="#">Inverter Ducted Heating</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                      <li>
                        <a href="#">System Maintenance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Ducted Heating Services We Provide in Keilor Downs:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Ducted Heating Services in 
                </h5>
                <p>
                  Keilor Downs&apos;s mix of heritage homes and modern properties
                  requires specialized knowledge when it comes to ducted heating
                  solutions. Our team understands the unique characteristics of
                  Keilor Downs properties, from charming period homes to
                  contemporary developments. We provide customized ducted heating
                  solutions that respect the architectural integrity of your
                  home while delivering optimal comfort and energy efficiency.
                </p>
                <p className="indent__top">
                  As local Melbourne HVAC heating specialists, we&apos;re
                  familiar with Keilor Downs&apos;s climate patterns and the
                  specific heating challenges faced by residents. Whether
                  you&apos;re dealing with an older heating system that needs
                  replacement, require urgent repairs during winter, or want to
                  upgrade to a more efficient ducted heating system, our certified technicians
                  provide prompt, professional service with upfront pricing and
                  guaranteed workmanship.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Local Keilor Downs Ducted Heating Experts
                </h5>
                <p>
                  Living in Keilor Downs means you appreciate quality, reliability,
                  and attention to detail &ndash; values that drive everything
                  we do. Our ducted heating services are designed to keep your home
                  comfortable year-round while ensuring the safety and
                  well-being of your family. From routine maintenance that
                  prevents costly breakdowns to emergency repairs when you need
                  them most, we&apos;re your trusted local ducted heating
                  specialists in Keilor Downs, Melbourne.
                </p>
                <PromoLayout
                  dataText="Get a free quote for ducted heating installation, repair, or servicing in Keilor Downs from our certified HVAC technicians today!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={` lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Ducted Heating Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="Book A Ducted Heating Technician Now!"
                  dataText="Serving Keilor Downs & Melbourne"
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
          data-bg="/images/extra-bg01.png"
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


