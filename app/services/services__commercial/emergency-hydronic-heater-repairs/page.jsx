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

// Emergency Commercial Hydronic Heater Repairs specific data
const emergencyCommercialHydronicHeaterRepairsInclude = [
  {
    id: 1,
    title: "24/7 Commercial Emergency Response:",
    text: "Round-the-clock emergency commercial hydronic heater repair service available 365 days a year. We prioritize business heating emergencies to minimize operational disruption and maintain workplace comfort.",
  },
  {
    id: 2,
    title: "Business Safety Emergency Service:",
    text: "Immediate response to commercial system leaks, pump failures, and workplace safety issues. We understand the critical importance of employee and customer safety in commercial environments.",
  },
  {
    id: 3,
    title: "Priority Commercial Repairs:",
    text: "Fast diagnosis and repair of commercial hydronic heating emergencies with priority scheduling for business clients. Our commercial-equipped vehicles ensure most emergency repairs are completed the same day.",
  },
  {
    id: 4,
    title: "After-Hours Business Service:",
    text: "Emergency commercial hydronic heater repairs available outside business hours, weekends, and holidays. We work around your business schedule to minimize disruption to operations and revenue.",
  },
];

// SEO Metadata
export const metadata = {
  title:
    "Emergency Commercial Hydronic Heater Repairs Melbourne | 24/7 Business Service",
  description:
    "24/7 emergency commercial hydronic heater repairs in Melbourne. Priority service for business clients. Fast response for offices, warehouses & retail. Call 0405133761!",
  keywords:
    "emergency commercial hydronic heater repairs melbourne, 24/7 business heating repair, urgent commercial heating service, emergency office heating, commercial heating emergency",
};

//Page Layout
export default function EmergencyCommercialHydronicHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Emergency Commercial Hydronic Heater Repairs Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency commercial hydronic heater repairs"
                  dataTitle="24/7 Emergency Commercial Hydronic Heater Repair Services Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="emergency commercial hydronic heater repairs melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your commercial hydronic heating system fails
                  unexpectedly, you need immediate professional help to minimize
                  business disruption. Our emergency commercial hydronic heater
                  repair service is available 24/7 throughout Melbourne. We
                  understand that heating emergencies in commercial properties
                  can impact employee productivity, customer comfort, and
                  business operations. Our priority is restoring your commercial
                  heating quickly and safely.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Complete System Failures</a>
                      </li>
                      <li>
                        <a href="#">Boiler Breakdowns</a>
                      </li>
                      <li>
                        <a href="#">Pump Failures</a>
                      </li>
                      <li>
                        <a href="#">Control System Faults</a>
                      </li>
                      <li>
                        <a href="#">Major System Leaks</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Zone Control Failures</a>
                      </li>
                      <li>
                        <a href="#">Temperature Sensor Issues</a>
                      </li>
                      <li>
                        <a href="#">Valve Malfunctions</a>
                      </li>
                      <li>
                        <a href="#">Emergency Shutdowns</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency Commercial Hydronic Heater Repair Services
                  include:
                </h4>
                <ListWithTitle
                  dataLayout={emergencyCommercialHydronicHeaterRepairsInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Priority Business Response
                </h5>
                <p>
                  We understand that every minute without heating in a
                  commercial property matters. That&apos;s why we prioritize
                  emergency calls from business clients and aim to have a
                  technician on-site within 60 minutes in most Melbourne areas.
                  Our goal is to minimize disruption to your business
                  operations.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Commercial Emergency Equipment
                </h5>
                <p>
                  Our emergency service vehicles are specially equipped for
                  commercial hydronic heating systems, carrying commercial-grade
                  parts, specialized tools, and diagnostic equipment. This
                  allows our technicians to handle large-scale emergency repairs
                  on the first visit.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  24/7 Business Emergency Support
                </h5>
                <p>
                  Commercial heating emergencies don&apos;t follow business
                  hours. Our emergency service is available 24 hours a day, 7
                  days a week, 365 days a year. Whether it&apos;s after hours,
                  weekends, or holidays, we&apos;re ready to respond to your
                  commercial heating emergency.
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
