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
import imageLayout from "../../../../public/images/services/services_img01.jpg";

// Commercial Hydronic Heater Installation specific data
const commercialHydronicHeaterInstallationInclude = [
  {
    id: 1,
    title: "Large-Scale System Installation:",
    text: "Professional installation of commercial hydronic heating systems for offices, warehouses, retail spaces, and industrial facilities. We design custom solutions for large spaces.",
  },
  {
    id: 2,
    title: "Zone-Controlled Commercial Systems:",
    text: "Installation of advanced zone control systems for commercial properties, allowing independent temperature control for different areas and improved energy efficiency.",
  },
  {
    id: 3,
    title: "High-Efficiency Boiler Installation:",
    text: "Installation of commercial-grade boilers and heat pumps designed for continuous operation and maximum efficiency in commercial environments.",
  },
  {
    id: 4,
    title: "Retrofit & Upgrade Services:",
    text: "Retrofitting existing commercial heating systems with modern hydronic technology, ensuring minimal disruption to business operations during installation.",
  },
];

// SEO Metadata
export const metadata = {
  title: "Commercial Hydronic Heater Installation Melbourne | Business Heating",
  description:
    "Professional commercial hydronic heater installation in Melbourne. Large-scale systems for offices, warehouses & retail. Energy-efficient solutions. Call 0405133761!",
  keywords:
    "commercial hydronic heater installation melbourne, business hydronic heating, office heating installation, warehouse hydronic heating, commercial heating systems",
};

//Page Layout
export default function CommercialHydronicHeaterInstallation() {
  return (
    <>
      <PageTitle dataTitle="Commercial Hydronic Heater Installation Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial hydronic heater installation"
                  dataTitle="Professional Commercial Hydronic Heater Installation Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial hydronic heater installation melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Looking for efficient heating solutions for your Melbourne
                  business? Our expert technicians provide professional
                  commercial hydronic heater installation services throughout
                  Melbourne. Hydronic heating systems offer superior energy
                  efficiency, quiet operation, and consistent comfort for
                  commercial properties of all sizes. From small offices to
                  large warehouses, we design and install custom hydronic
                  heating solutions that meet your business needs.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Office Building Heating</a>
                      </li>
                      <li>
                        <a href="#">Warehouse Heating Systems</a>
                      </li>
                      <li>
                        <a href="#">Retail Space Heating</a>
                      </li>
                      <li>
                        <a href="#">Industrial Heating Solutions</a>
                      </li>
                      <li>
                        <a href="#">Multi-Zone Control Systems</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Energy-Efficient Boilers</a>
                      </li>
                      <li>
                        <a href="#">Smart Building Integration</a>
                      </li>
                      <li>
                        <a href="#">Maintenance Programs</a>
                      </li>
                      <li>
                        <a href="#">System Retrofits</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Commercial Hydronic Heater Installation Services include:
                </h4>
                <ListWithTitle
                  dataLayout={commercialHydronicHeaterInstallationInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Benefits of Commercial Hydronic Heating
                </h5>
                <p>
                  Commercial hydronic heating systems provide numerous
                  advantages for businesses, including lower operating costs,
                  improved energy efficiency, and enhanced employee comfort.
                  These systems operate silently, don&apos;t circulate dust or
                  allergens, and provide even heat distribution throughout your
                  commercial space.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Custom Design & Project Management
                </h5>
                <p>
                  Every commercial property has unique heating requirements. Our
                  experienced team provides comprehensive design services,
                  working with architects and building managers to create the
                  perfect heating solution. We manage the entire installation
                  process, ensuring minimal disruption to your business
                  operations.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Licensed Commercial Installation Team
                </h5>
                <p>
                  Our commercial installation team consists of fully licensed
                  and experienced hydronic heating specialists. We follow all
                  commercial building codes and safety standards, ensuring your
                  installation is compliant and reliable. All commercial
                  installations come with comprehensive warranties and ongoing
                  support.
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

