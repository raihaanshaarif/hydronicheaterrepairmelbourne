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
import imageLayout from "../../../../public/images/services/services_img02.jpg";

// Hydronic Heater Servicing specific data
const hydronicHeaterServicingInclude = [
  {
    id: 1,
    title: "Annual System Maintenance:",
    text: "Comprehensive annual servicing to keep your hydronic heating system running efficiently. We check all components, clean the system, and optimize performance.",
  },
  {
    id: 2,
    title: "Pump & Component Servicing:",
    text: "Regular maintenance of circulation pumps, valves, and temperature sensors. We ensure all components are working correctly and replace parts as needed.",
  },
  {
    id: 3,
    title: "System Flushing & Cleaning:",
    text: "Professional system flushing to remove debris and improve circulation. We use specialized equipment to clean your hydronic heating system thoroughly.",
  },
  {
    id: 4,
    title: "Performance Optimization:",
    text: "System tuning and calibration to ensure maximum efficiency and comfort. We adjust settings and balance the system for optimal performance.",
  },
];

// SEO Metadata
export const metadata = {
  title: "Hydronic Heater Servicing Melbourne | Maintenance & Repairs",
  description:
    "Professional hydronic heater servicing in Melbourne. Annual maintenance, system cleaning, pump servicing & performance optimization. Call 0405133761!",
  keywords:
    "hydronic heater servicing melbourne, hydronic heating maintenance, hydronic system service, annual hydronic maintenance melbourne, hydronic heater tune-up",
};

//Page Layout
export default function HydronicHeaterServicing() {
  return (
    <>
      <PageTitle dataTitle="Hydronic Heater Servicing Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="hydronic heater servicing"
                  dataTitle="Professional Hydronic Heater Servicing & Maintenance in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="hydronic heater servicing melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Keep your hydronic heating system running at peak performance
                  with our professional servicing and maintenance services in
                  Melbourne. Regular maintenance is essential for ensuring your
                  hydronic heater operates efficiently, reliably, and safely.
                  Our experienced technicians provide comprehensive servicing
                  for all types of hydronic heating systems. Trust us for all
                  your hydronic heater maintenance needs:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">System Inspections</a>
                      </li>
                      <li>
                        <a href="#">Pump Maintenance</a>
                      </li>
                      <li>
                        <a href="#">Valve Servicing</a>
                      </li>
                      <li>
                        <a href="#">Temperature Calibration</a>
                      </li>
                      <li>
                        <a href="#">System Flushing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Control System Testing</a>
                      </li>
                      <li>
                        <a href="#">Leak Detection</a>
                      </li>
                      <li>
                        <a href="#">Performance Optimization</a>
                      </li>
                      <li>
                        <a href="#">Preventive Maintenance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Hydronic Heater Servicing includes:
                </h4>
                <ListWithTitle
                  dataLayout={hydronicHeaterServicingInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Regular Servicing is Important
                </h5>
                <p>
                  Regular servicing of your hydronic heating system is crucial
                  for maintaining efficiency, preventing breakdowns, and
                  extending the life of your equipment. A well-maintained system
                  runs more efficiently, uses less energy, and provides better
                  comfort. Our comprehensive servicing helps identify potential
                  issues before they become costly repairs.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Experienced Hydronic Heating Technicians
                </h5>
                <p>
                  Our team of experienced hydronic heating specialists has
                  extensive knowledge of all major brands and system types. We
                  use the latest diagnostic equipment and follow manufacturer
                  recommendations to ensure your system receives the best
                  possible care. All our technicians are fully licensed and
                  insured for your protection.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Scheduled Maintenance Programs Available
                </h5>
                <p>
                  We offer convenient scheduled maintenance programs to keep
                  your hydronic heating system in top condition year-round. Our
                  programs include regular inspections, cleaning, and preventive
                  maintenance to help you avoid unexpected breakdowns and ensure
                  optimal performance throughout the heating season.
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
