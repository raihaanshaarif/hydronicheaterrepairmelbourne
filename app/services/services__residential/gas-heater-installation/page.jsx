//Style
import styles from "../../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../../_components/Common/PageTitle";
import SectionTitle from "../../../_components/Common/SectionTitle";
import LogoPartners from "../../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
import PromoLayout from "../../../_components/ServicesSubPages/PromoLayout";
import ListWithTitle from "../../../_components/Common/ListWithTitle";
//Import Aside
import PromoAside from "../../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../../_components/ServicesSubPages/BoxListAside";
import FormAside from "../../../_components/ServicesSubPages/FormAside";
import ServicesListAside from "../../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../../_components/ServicesResidential/ServicesListData";
import imageLayout from "../../../../public/images/services/services_img03.jpg";

export const metadata = {
  title:
    "Ducted Heating Installation Melbourne | Professional Home Installation",
  description:
    "Expert ducted heating installation services in Melbourne. Professional home HVAC installation by licensed technicians. Free quotes, quality workmanship, warranty included.",
  keywords:
    "ducted heating installation Melbourne, home ducted heating, HVAC installation residential, ducted heating system installation, professional heating installation",
  openGraph: {
    title: "Ducted Heating Installation Melbourne | Expert Home Services",
    description:
      "Professional ducted heating installation for Melbourne homes. Licensed technicians, quality workmanship, free quotes available.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducted Heating Installation Melbourne | Professional Service",
    description:
      "Expert ducted heating installation services in Melbourne. Professional installation by licensed HVAC technicians.",
  },
  alternates: {
    canonical:
      "https://ductedheaterrepairmelbourne.com.au/services/services__residential/gas-heater-installation",
  },
};

// Ducted Heating Installation specific data
const ductedHeatingInstallationInclude = [
  {
    id: 1,
    title: "New Ducted Heating Installation:",
    text: "Professional installation of new ducted heating systems for your home. We ensure proper sizing, placement, and connection to electrical supply for optimal performance and efficiency.",
  },
  {
    id: 2,
    title: "Complete Ducted System Installation:",
    text: "Complete ducted heating system installation throughout your home. Our expert technicians handle everything from unit placement to ductwork installation and zoning controls.",
  },
  {
    id: 3,
    title: "Ducted Heating Replacement:",
    text: "Replacement of old, inefficient heating systems with modern, energy-efficient ducted heating models. We handle the complete removal and installation process with minimal disruption.",
  },
  {
    id: 4,
    title: "Safety Inspections & Compliance:",
    text: "All installations include comprehensive safety inspections and compliance checks. We ensure your new ducted heating system meets all safety standards and building codes for peace of mind.",
  },
];

//Page Layout
export default function DuctedHeatingInstallation() {
  return (
    <>
      <PageTitle dataTitle="Ducted Heating Installation" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="ducted heating installation"
                  dataTitle="Professional Ducted Heating Installation Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="ducted heating installation"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Looking to install a new ducted heating system in your
                  Melbourne home? Our expert technicians provide professional
                  ducted heating installation services for all types of
                  residential properties. We specialize in installing
                  energy-efficient ducted heating systems that will keep your
                  home warm and comfortable while reducing your energy bills.
                  Our installation service includes proper sizing, safety
                  inspections, and compliance with all local regulations. You
                  can trust us for all of these ducted heating installation
                  needs:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Reverse Cycle Ducted Heating</a>
                      </li>
                      <li>
                        <a href="#">Zoned Ducted Heating Systems</a>
                      </li>
                      <li>
                        <a href="#">Energy Efficient Heat Pumps</a>
                      </li>
                      <li>
                        <a href="#">Inverter Ducted Systems</a>
                      </li>
                      <li>
                        <a href="#">Multi-Zone Climate Control</a>
                      </li>
                      <li>
                        <a href="#">Ducted Heating with Cooling</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Ceiling Cassette Systems</a>
                      </li>
                      <li>
                        <a href="#">Floor Console Units</a>
                      </li>
                      <li>
                        <a href="#">Bulkhead Ducted Systems</a>
                      </li>
                      <li>
                        <a href="#">Ducted Heating Upgrades</a>
                      </li>
                      <li>
                        <a href="#">Smart Control Systems</a>
                      </li>
                      <li>
                        <a href="#">WiFi Thermostat Integration</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Ducted Heating Installation Services include:
                </h4>
                <ListWithTitle
                  dataLayout={ductedHeatingInstallationInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Professional Ducted Heating Installation?
                </h5>
                <p>
                  Installing a ducted heating system requires specialized
                  knowledge of electrical connections, ductwork design, and HVAC
                  regulations. While some might consider DIY installation,
                  professional installation ensures your system operates safely
                  and efficiently. Our licensed technicians have the expertise
                  to handle all aspects of the installation process according to
                  Australian standards.
                </p>
                <p className="indent__top">
                  When you choose our professional ducted heating installation
                  service, you can count on us to provide a complete solution
                  from start to finish. We handle everything from selecting the
                  right system for your home to post-installation support and
                  maintenance advice.
                </p>
                <PromoLayout
                  dataText="Get a free quote for your ducted heating installation from our professional, licensed HVAC technicians today!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Residential Ducted Heating Services
                  </div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>
                {/* <div>
                  <div className={`ttsubtitle`}>Get Free Quote</div>
                  <FormAside />
                </div> */}
                <PromoAside
                  dataTitle="Need Ducted Heating Installation?"
                  dataText="Get a Free, No-Obligation Quote Today"
                  dataTelefon="0405 133 761"
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
              dataSubtitle="we work with"
              dataTitle="Our Partners"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px]  only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
