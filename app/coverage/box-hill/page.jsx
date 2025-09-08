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
    "Ducted Heating Services Box Hill Melbourne | Installation, Repairs & Servicing",
  description:
    "Professional ducted heating services in Box Hill, Melbourne. Expert installation, repairs, and maintenance for all ducted heating systems. Certified HVAC technicians serving Box Hill and surrounding suburbs.",
  keywords:
    "ducted heating services Box Hill, ducted heating installation Box Hill, ducted heating repairs Melbourne, Box Hill HVAC heating, ducted heating systems Box Hill",
  openGraph: {
    title:
      "Ducted Heating Services Box Hill Melbourne | Expert Installation & Repair",
    description:
      "Professional ducted heating services in Box Hill. Licensed technicians, quality installations, emergency repairs available.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducted Heating Box Hill | Professional HVAC Services",
    description:
      "Expert ducted heating services in Box Hill Melbourne. Installation, repairs & maintenance by licensed technicians.",
  },
  alternates: {
    canonical: "https://ductedheaterrepairmelbourne.com.au/coverage/box-hill",
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Box Hill, Melbourne",
    "geo.position": "-37.8229;145.1195",
    ICBM: "-37.8229, 145.1195",
  },
};

//Page Layout
export default function BoxHillGasHeaterServices() {
  return (
    <>
      <PageTitle dataTitle="ducted heating system Services Box Hill Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="box hill ducted heating system services"
                  dataTitle="Professional ducted heating system Services in Box Hill, Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="ducted heating system services box hill melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={``}>
                  Stay warm and comfortable throughout Melbourne&apos;s colder
                  months with our comprehensive ducted heating system services
                  in Box Hill. As a trusted local ducted heating specialist, we
                  provide professional installation, repair, and maintenance
                  services for all types of ducted heating systems across Box
                  Hill and surrounding Melbourne suburbs. Our certified gas
                  technicians understand the unique heating needs of Box Hill
                  homes and deliver reliable, efficient, and safe ducted heating
                  solutions tailored to your property.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Box Hill Homes & Units</a>
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
                        <a href="#">Ducted ducted heating</a>
                      </li>
                      <li>
                        <a href="#">Gas Wall Furnaces</a>
                      </li>
                      <li>
                        <a href="#">Central ducted heating</a>
                      </li>
                      <li>
                        <a href="#">Gas Log Fires</a>
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
                  ducted heating system Services We Provide in Box Hill:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Ducted Heating Services in Box Hill?
                </h5>
                <p>
                  Box Hill&apos;s mix of heritage homes and modern properties
                  requires specialized knowledge when it comes to ducted heating
                  solutions. Our team understands the unique characteristics of
                  Box Hill properties, from charming period homes to
                  contemporary developments. We provide customized ducted
                  heating solutions that respect the architectural integrity of
                  your home while delivering optimal comfort and energy
                  efficiency.
                </p>
                <p className="indent__top">
                  As local Melbourne HVAC heating specialists, we&apos;re
                  familiar with Box Hill&apos;s climate patterns and the
                  specific heating challenges faced by residents. Whether
                  you&apos;re dealing with an older ducted heating system that
                  needs replacement, require urgent repairs during winter, or
                  want to upgrade to a more efficient system, our certified
                  technicians provide prompt, professional service with upfront
                  pricing and guaranteed workmanship.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Local Box Hill Ducted Heating Experts
                </h5>
                <p>
                  Living in Box Hill means you appreciate quality, reliability,
                  and attention to detail &ndash; values that drive everything
                  we do. Our ducted heating services are designed to keep your
                  home comfortable year-round while ensuring the safety and
                  well-being of your family. From routine maintenance that
                  prevents costly breakdowns to emergency repairs when you need
                  them most, we&apos;re your trusted local ducted heating
                  specialists in Box Hill, Melbourne.
                </p>
                <PromoLayout
                  dataText="Get a free quote for ducted heating system installation, repair, or servicing in Box Hill from our certified gas technicians today!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={` lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    ducted heating system Services
                  </div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="Book A Gas Technician Now!"
                  dataText="Serving Box Hill & Melbourne"
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
