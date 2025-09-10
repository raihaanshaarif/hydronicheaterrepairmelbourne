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

// Emergency Hydronic Heater Repairs specific data
const emergencyHydronicHeaterRepairsInclude = [
  {
    id: 1,
    title: "24/7 Emergency Response:",
    text: "Round-the-clock emergency hydronic heater repair service available 365 days a year. We respond quickly to urgent heating failures, especially during cold Melbourne winters.",
  },
  {
    id: 2,
    title: "Urgent System Issues:",
    text: "Immediate response to system leaks, pump failures, and other dangerous situations. Your comfort and safety are our top priority in any emergency situation.",
  },
  {
    id: 3,
    title: "Same-Day Repairs:",
    text: "Fast diagnosis and repair of emergency hydronic heater problems. Our fully equipped vehicles allow us to complete most emergency repairs on the same day.",
  },
  {
    id: 4,
    title: "Holiday & Weekend Service:",
    text: "Emergency hydronic heater repairs available on weekends, public holidays, and after hours. We understand heating emergencies don&apos;t wait for business hours.",
  },
];

// SEO Metadata
export const metadata = {
  title: "Emergency Hydronic Heater Repairs Melbourne | 24/7 Service",
  description:
    "24/7 emergency hydronic heater repairs in Melbourne. Fast response for heating emergencies, system failures & urgent repairs. Call 0405133761 now!",
  keywords:
    "emergency hydronic heater repairs melbourne, 24/7 hydronic heating repair, urgent hydronic heater service, emergency heating melbourne, hydronic emergency repairs",
};

//Page Layout
export default function EmergencyHydronicHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Emergency Hydronic Heater Repairs Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency hydronic heater repairs"
                  dataTitle="24/7 Emergency Hydronic Heater Repair Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="emergency hydronic heater repairs melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your hydronic heating system fails unexpectedly, you need
                  immediate professional help. Our emergency hydronic heater
                  repair service is available 24/7 throughout Melbourne. We
                  understand that heating emergencies can happen at any time,
                  especially during the coldest months. Don&apos;t suffer in the
                  cold - our experienced emergency technicians are ready to
                  restore your comfort quickly and safely. We provide emergency
                  repairs for:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Complete System Failures</a>
                      </li>
                      <li>
                        <a href="#">Pump Breakdowns</a>
                      </li>
                      <li>
                        <a href="#">System Leaks</a>
                      </li>
                      <li>
                        <a href="#">Control Failures</a>
                      </li>
                      <li>
                        <a href="#">No Heat Emergencies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Boiler Failures</a>
                      </li>
                      <li>
                        <a href="#">Temperature Sensor Issues</a>
                      </li>
                      <li>
                        <a href="#">Valve Problems</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency Hydronic Heater Repair Services include:
                </h4>
                <ListWithTitle
                  dataLayout={emergencyHydronicHeaterRepairsInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Fast Emergency Response Times
                </h5>
                <p>
                  When you call us for emergency hydronic heater repairs, we
                  prioritize your call and dispatch a technician immediately.
                  Our emergency response team aims to reach your location within
                  60 minutes in most Melbourne areas. We understand that every
                  minute without heating matters, especially for families with
                  young children or elderly residents.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Fully Equipped Emergency Vehicles
                </h5>
                <p>
                  Our emergency service vehicles are fully stocked with common
                  hydronic heating parts, specialized tools, and diagnostic
                  equipment. This allows our technicians to diagnose and repair
                  most emergency issues on the first visit, getting your heating
                  system back up and running as quickly as possible.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency Repairs Available 24/7/365
                </h5>
                <p>
                  Heating emergencies don&apos;t follow a schedule, and neither
                  do we. Our emergency hydronic heater repair service is
                  available 24 hours a day, 7 days a week, 365 days a year.
                  Whether it&apos;s midnight, weekend, or a public holiday,
                  we&apos;re here to help restore your heating when you need it
                  most.
                </p>
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataList={ReasonsListData} />
                <FormAside />
                <ServicesListAside dataList={ServicesListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
