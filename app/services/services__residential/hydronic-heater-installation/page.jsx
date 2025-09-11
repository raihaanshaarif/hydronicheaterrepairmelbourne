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
import imageLayout from "../../../../public/images/services/services_img01.jpg";

// Hydronic Heater Installation specific data
const hydronicHeaterInstallationInclude = [
  {
    id: 1,
    title: "Floor Heating Installation:",
    text: "Professional installation of hydronic underfloor heating systems for ultimate comfort. We design and install systems that provide even heat distribution throughout your home.",
  },
  {
    id: 2,
    title: "Radiator System Installation:",
    text: "Expert installation of hydronic radiator systems with zone controls for efficient heating. We install modern, energy-efficient radiators with smart temperature controls.",
  },
  {
    id: 3,
    title: "Towel Rail Installation:",
    text: "Installation of heated towel rails and bathroom heating solutions. Perfect for adding comfort and luxury to your bathroom while providing efficient heating.",
  },
  {
    id: 4,
    title: "Central Heating System Installation:",
    text: "Complete central hydronic heating system installation for homes and commercial properties. We design custom solutions to meet your specific heating requirements.",
  },
];

// SEO Metadata
export const metadata = {
  title: "Hydronic Heater Installation Melbourne | Professional Service",
  description:
    "Expert hydronic heater installation in Melbourne. Floor heating, radiators, towel rails & central heating systems. Energy-efficient solutions. Call 0405133761!",
  keywords:
    "hydronic heater installation melbourne, hydronic heating installation, floor heating installation, radiator installation melbourne, hydronic system installation",
};

//Page Layout
export default function HydronicHeaterInstallation() {
  return (
    <>
      <PageTitle dataTitle="Hydronic Heater Installation Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="hydronic heater installation"
                  dataTitle="Professional Hydronic Heater Installation Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="hydronic heater installation melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Looking for energy-efficient heating for your Melbourne home
                  or business? Our expert technicians provide professional
                  hydronic heater installation services throughout Melbourne.
                  Hydronic heating systems offer superior comfort, energy
                  efficiency, and silent operation compared to traditional
                  heating methods. We specialize in all types of hydronic
                  heating installations, from underfloor heating to radiator
                  systems. Trust us for your hydronic heater installation needs:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Underfloor Heating Systems</a>
                      </li>
                      <li>
                        <a href="#">Radiator Installations</a>
                      </li>
                      <li>
                        <a href="#">Towel Rail Systems</a>
                      </li>
                      <li>
                        <a href="#">Zone Control Systems</a>
                      </li>
                      <li>
                        <a href="#">Boiler Installations</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Heat Pump Integration</a>
                      </li>
                      <li>
                        <a href="#">Smart Control Systems</a>
                      </li>
                      <li>
                        <a href="#">Retrofit Installations</a>
                      </li>
                      <li>
                        <a href="#">Commercial Systems</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Hydronic Heater Installation Services include:
                </h4>
                <ListWithTitle
                  dataLayout={hydronicHeaterInstallationInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Energy-Efficient Hydronic Heating Solutions
                </h5>
                <p>
                  Hydronic heating systems are among the most energy-efficient
                  heating solutions available. By using water to distribute
                  heat, these systems provide consistent, comfortable warmth
                  while using less energy than traditional forced-air systems.
                  Our expert installation ensures maximum efficiency and optimal
                  performance for years to come.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Custom Design & Installation Service
                </h5>
                <p>
                  Every home and business has unique heating requirements.
                  That&apos;s why we provide custom design services to create
                  the perfect hydronic heating solution for your space. Our
                  experienced technicians assess your property, discuss your
                  needs, and design a system that delivers optimal comfort and
                  efficiency.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Licensed & Insured Installation Team
                </h5>
                <p>
                  Our installation team consists of fully licensed and insured
                  hydronic heating specialists with years of experience. We
                  follow all Australian building codes and safety standards to
                  ensure your installation is safe, reliable, and compliant. All
                  our work comes with comprehensive warranties for your peace of
                  mind.
                </p>
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataList={ReasonsListData} />

                <ServicesListAside dataList={ServicesListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
