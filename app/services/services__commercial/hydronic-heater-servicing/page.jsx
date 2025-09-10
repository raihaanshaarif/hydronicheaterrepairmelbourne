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
import { ComercialListData } from "../../../_components/ServicesCommercial/ComercialListData";
import imageLayout from "../../../../public/images/services/services_img02.jpg";

// Commercial Hydronic Heater Servicing specific data
const commercialHydronicHeaterServicingInclude = [
  {
    id: 1,
    title: "Comprehensive System Maintenance:",
    text: "Complete annual servicing of commercial hydronic heating systems including boilers, pumps, controls, and distribution systems. We ensure optimal performance and efficiency.",
  },
  {
    id: 2,
    title: "Preventive Maintenance Programs:",
    text: "Scheduled maintenance programs designed to prevent costly breakdowns and extend equipment life. We offer flexible service contracts to meet your business needs.",
  },
  {
    id: 3,
    title: "Energy Efficiency Optimization:",
    text: "System tuning and optimization to maximize energy efficiency and reduce operating costs. We analyze performance data and make adjustments for optimal operation.",
  },
  {
    id: 4,
    title: "Compliance & Safety Inspections:",
    text: "Regular safety inspections and compliance checks to ensure your commercial heating system meets all relevant Australian standards and regulations.",
  },
];

// SEO Metadata
export const metadata = {
  title:
    "Commercial Hydronic Heater Servicing Melbourne | Business Maintenance",
  description:
    "Professional commercial hydronic heater servicing in Melbourne. Maintenance programs for offices, warehouses & retail. Preventive service contracts. Call 0405133761!",
  keywords:
    "commercial hydronic heater servicing melbourne, business heating maintenance, commercial heating service, office heating maintenance, preventive maintenance programs",
};

//Page Layout
export default function CommercialHydronicHeaterServicing() {
  return (
    <>
      <PageTitle dataTitle="Commercial Hydronic Heater Servicing Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial hydronic heater servicing"
                  dataTitle="Professional Commercial Hydronic Heater Servicing & Maintenance Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial hydronic heater servicing melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Keep your commercial hydronic heating system running at peak
                  performance with our professional servicing and maintenance
                  services in Melbourne. Regular maintenance is essential for
                  ensuring your business heating operates efficiently, reliably,
                  and safely while minimizing operating costs. Our experienced
                  commercial technicians provide comprehensive servicing for all
                  types of commercial hydronic heating systems.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Annual System Inspections</a>
                      </li>
                      <li>
                        <a href="#">Boiler Maintenance</a>
                      </li>
                      <li>
                        <a href="#">Pump Servicing</a>
                      </li>
                      <li>
                        <a href="#">Control System Testing</a>
                      </li>
                      <li>
                        <a href="#">System Flushing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Efficiency Optimization</a>
                      </li>
                      <li>
                        <a href="#">Safety Inspections</a>
                      </li>
                      <li>
                        <a href="#">Compliance Checks</a>
                      </li>
                      <li>
                        <a href="#">Performance Reports</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Commercial Hydronic Heater Servicing includes:
                </h4>
                <ListWithTitle
                  dataLayout={commercialHydronicHeaterServicingInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Flexible Service Contracts
                </h5>
                <p>
                  We offer flexible commercial service contracts tailored to
                  your business needs and budget. Our contracts include regular
                  maintenance visits, priority emergency service, and discounted
                  repair rates. Choose from annual, bi-annual, or quarterly
                  service schedules.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Reduce Operating Costs
                </h5>
                <p>
                  Regular servicing of your commercial hydronic heating system
                  helps reduce energy consumption, prevent costly breakdowns,
                  and extend equipment life. A well-maintained system operates
                  more efficiently, reducing your heating bills and
                  environmental impact.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Commercial Heating Specialists
                </h5>
                <p>
                  Our commercial heating team has extensive experience with
                  large-scale hydronic systems in offices, warehouses, retail
                  spaces, and industrial facilities. We understand the unique
                  requirements of commercial heating and provide professional
                  service that minimizes disruption to your business.
                </p>
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataList={ReasonsListData} />
                <FormAside />
                <ServicesListAside dataList={ComercialListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

