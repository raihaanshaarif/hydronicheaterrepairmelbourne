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

// Commercial System Testing specific data
const commercialSystemTestingInclude = [
  {
    id: 1,
    title: "Comprehensive Performance Testing:",
    text: "Complete evaluation of your commercial hydronic heating system&apos;s performance including temperature distribution, pressure levels, flow rates, and energy efficiency. We test all zones and components for optimal operation.",
  },
  {
    id: 2,
    title: "Safety and Compliance Testing:",
    text: "Thorough safety inspections and compliance testing to ensure your commercial system meets all Australian standards and building codes. Essential for insurance requirements and workplace safety regulations.",
  },
  {
    id: 3,
    title: "Energy Efficiency Analysis:",
    text: "Detailed analysis of your system&apos;s energy consumption and efficiency ratings. We identify opportunities for cost savings and recommend upgrades to reduce operational expenses and environmental impact.",
  },
  {
    id: 4,
    title: "Preventive Maintenance Testing:",
    text: "Regular testing schedules to identify potential issues before they cause system failures. Our preventive approach minimizes unexpected downtime and extends the life of your commercial heating equipment.",
  },
];

// SEO Metadata
export const metadata = {
  title:
    "Commercial System Testing Melbourne | Hydronic Heater Performance Testing",
  description:
    "Professional commercial hydronic heating system testing in Melbourne. Performance analysis, safety compliance, energy efficiency testing. Call 0405133761!",
  keywords:
    "commercial hydronic system testing melbourne, heating system performance testing, commercial heating compliance, energy efficiency testing, business heating analysis",
};

//Page Layout
export default function CommercialSystemTesting() {
  return (
    <>
      <PageTitle dataTitle="Commercial System Testing Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial system testing"
                  dataTitle="Professional Commercial Hydronic Heating System Testing Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial hydronic heating system testing melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Regular testing of your commercial hydronic heating system is
                  essential for maintaining optimal performance, ensuring
                  workplace safety, and meeting compliance requirements. Our
                  comprehensive testing services help businesses maximize energy
                  efficiency, prevent costly breakdowns, and maintain
                  comfortable working environments. We provide detailed reports
                  and recommendations for system optimization.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Performance Analysis</a>
                      </li>
                      <li>
                        <a href="#">Safety Compliance Testing</a>
                      </li>
                      <li>
                        <a href="#">Energy Efficiency Assessment</a>
                      </li>
                      <li>
                        <a href="#">Pressure Testing</a>
                      </li>
                      <li>
                        <a href="#">Temperature Distribution Testing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Flow Rate Analysis</a>
                      </li>
                      <li>
                        <a href="#">Control System Testing</a>
                      </li>
                      <li>
                        <a href="#">Zone Performance Testing</a>
                      </li>
                      <li>
                        <a href="#">Leak Detection Testing</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Commercial System Testing Services include:
                </h4>
                <ListWithTitle
                  dataLayout={commercialSystemTestingInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Compliance and Safety Testing
                </h5>
                <p>
                  We ensure your commercial hydronic heating system meets all
                  Australian safety standards and building code requirements.
                  Our compliance testing covers pressure safety, temperature
                  controls, emergency shutoffs, and ventilation requirements
                  essential for commercial properties.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Performance Optimization
                </h5>
                <p>
                  Our detailed performance testing identifies inefficiencies and
                  optimization opportunities in your commercial system. We
                  analyze temperature distribution, energy consumption patterns,
                  and component performance to maximize comfort and minimize
                  operating costs.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Detailed Reporting
                </h5>
                <p>
                  Every testing service includes a comprehensive report with
                  findings, recommendations, and maintenance schedules. Our
                  reports help you plan maintenance budgets, schedule upgrades,
                  and ensure continuous optimal performance of your commercial
                  heating system.
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
