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
import imageLayout from "../../../../public/images/services/services_img03.jpg";

// Commercial Hydronic Heater Repairs specific data
const commercialHydronicHeaterRepairsInclude = [
  {
    id: 1,
    title: "Business Priority Repairs:",
    text: "Fast commercial hydronic heater repair service with priority scheduling for business clients. We understand the importance of maintaining comfortable temperatures for employees and customers.",
  },
  {
    id: 2,
    title: "Large System Diagnostics:",
    text: "Professional diagnosis and repair of complex commercial hydronic systems. Our technicians use advanced diagnostic equipment to quickly identify and resolve issues.",
  },
  {
    id: 3,
    title: "Pump & Boiler Repairs:",
    text: "Expert repair of commercial-grade circulation pumps, boilers, and heat exchangers. We carry commercial parts and can handle large-scale system components.",
  },
  {
    id: 4,
    title: "Minimal Disruption Service:",
    text: "We schedule repairs to minimize disruption to your business operations, including after-hours and weekend service options for urgent commercial repairs.",
  },
];

// SEO Metadata
export const metadata = {
  title:
    "Commercial Hydronic Heater Repairs Melbourne | Business Heating Service",
  description:
    "Professional commercial hydronic heater repairs in Melbourne. Fast service for offices, warehouses & retail. Priority scheduling for business clients. Call 0405133761!",
  keywords:
    "commercial hydronic heater repairs melbourne, business heating repair, office heating service, commercial heating maintenance, warehouse heating repair",
};

//Page Layout
export default function CommercialHydronicHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Commercial Hydronic Heater Repairs Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial hydronic heater repairs"
                  dataTitle="Fast Commercial Hydronic Heater Repair Services Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial hydronic heater repairs melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Is your commercial hydronic heating system not working
                  properly? Don&apos;t let heating problems disrupt your
                  business operations! Our experienced technicians provide fast,
                  reliable commercial hydronic heater repair services across
                  Melbourne. We understand that heating issues can impact
                  employee productivity and customer comfort, so we prioritize
                  urgent commercial repairs to get your business heating back up
                  and running quickly.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Boiler Repairs</a>
                      </li>
                      <li>
                        <a href="#">Pump Replacements</a>
                      </li>
                      <li>
                        <a href="#">Control System Fixes</a>
                      </li>
                      <li>
                        <a href="#">Zone Control Issues</a>
                      </li>
                      <li>
                        <a href="#">System Leaks</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Temperature Sensor Problems</a>
                      </li>
                      <li>
                        <a href="#">Flow Rate Issues</a>
                      </li>
                      <li>
                        <a href="#">Valve Malfunctions</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Commercial Hydronic Heater Repair Services include:
                </h4>
                <ListWithTitle
                  dataLayout={commercialHydronicHeaterRepairsInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Priority Business Service
                </h5>
                <p>
                  We understand that heating problems in commercial properties
                  can significantly impact your business. That&apos;s why we
                  offer priority scheduling for commercial clients, ensuring
                  your heating issues are resolved quickly to maintain
                  comfortable conditions for employees and customers.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Commercial-Grade Parts & Equipment
                </h5>
                <p>
                  Our service vehicles are stocked with commercial-grade parts
                  and specialized tools for large-scale hydronic systems. We
                  maintain relationships with major suppliers to ensure fast
                  access to parts for all commercial heating equipment brands.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  After-Hours Emergency Service
                </h5>
                <p>
                  Commercial heating emergencies don&apos;t wait for business
                  hours. Our emergency repair team is available after hours,
                  weekends, and holidays to address urgent commercial heating
                  issues that could impact your business operations.
                </p>
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataList={ReasonsListData} />

                <ServicesListAside dataList={ComercialListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
