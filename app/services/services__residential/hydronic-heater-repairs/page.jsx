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

// Hydronic Heater Repairs specific data
const hydronicHeaterRepairsInclude = [
  {
    id: 1,
    title: "Hydronic Heater Not Working:",
    text: "Comprehensive diagnosis and repair of hydronic heaters that won't start, heat properly, or have circulation issues. We identify the root cause and provide effective solutions to restore your heating.",
  },
  {
    id: 2,
    title: "Thermostat & Control Repairs:",
    text: "Repair and replacement of faulty thermostats, control panels, and temperature sensors. We ensure your hydronic heater responds correctly to temperature settings.",
  },
  {
    id: 3,
    title: "Pump & Component Repairs:",
    text: "Professional repair of circulation pumps, temperature sensors, control systems, and other critical components. All repairs are carried out to the highest safety standards.",
  },
  {
    id: 4,
    title: "Piping & Flow Issues:",
    text: "Repair of blocked pipes, damaged valves, and flow problems that affect heating efficiency. We ensure proper circulation throughout your hydronic heating system.",
  },
];

// SEO Metadata
export const metadata = {
  title: "Hydronic Heater Repairs Melbourne | Fast & Reliable Service",
  description:
    "Professional hydronic heater repair services in Melbourne. Fast diagnosis and repair of all hydronic heating systems. Same-day service available. Call 0405133761!",
  keywords:
    "hydronic heater repairs melbourne, hydronic heating repair, hydronic system repair, emergency hydronic heater repair, hydronic heater service melbourne",
};

//Page Layout
export default function HydronicHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Hydronic Heater Repairs Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="hydronic heater repairs"
                  dataTitle="Fast & Reliable Hydronic Heater Repair Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="hydronic heater repairs melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Is your hydronic heater not working properly? Don&apos;t let a
                  broken heater leave you in the cold! Our experienced
                  technicians provide fast, reliable hydronic heater repair
                  services across Melbourne. We diagnose and fix all types of
                  hydronic heating problems, from circulation pump issues to
                  temperature sensor failures. Our priority is getting your
                  heating system back up and running quickly and safely. You can
                  trust us for all of these hydronic heater repair needs:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Floor Heating Systems</a>
                      </li>
                      <li>
                        <a href="#">Radiator Heating</a>
                      </li>
                      <li>
                        <a href="#">Towel Rail Repairs</a>
                      </li>
                      <li>
                        <a href="#">Zone Control Issues</a>
                      </li>
                      <li>
                        <a href="#">Circulation Pump Problems</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">System Leak Detection</a>
                      </li>
                      <li>
                        <a href="#">Temperature Sensor Issues</a>
                      </li>
                      <li>
                        <a href="#">Control System Problems</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Hydronic Heater Repair Services include:
                </h4>
                <ListWithTitle
                  dataLayout={hydronicHeaterRepairsInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Same Day Hydronic Heater Repair Service
                </h5>
                <p>
                  When your hydronic heater breaks down, especially during
                  Melbourne&apos;s cold winter months, you need fast service.
                  That&apos;s why we offer same-day repair services for most
                  hydronic heater problems. Our fully equipped service vehicles
                  carry common parts and tools, allowing us to complete most
                  repairs on the first visit. We understand the urgency of
                  heating repairs and prioritize getting your system working
                  again.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Licensed Hydronic Heater Repair Technicians
                </h5>
                <p>
                  Our team consists of fully licensed and experienced hydronic
                  heating technicians who have extensive knowledge of all major
                  heating brands and systems. We stay up-to-date with the latest
                  technology and repair techniques to ensure we can handle any
                  hydronic heater problem efficiently and safely. All our work
                  comes with a comprehensive warranty for your peace of mind.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency Hydronic Heater Repairs Available 24/7
                </h5>
                <p>
                  Heating emergencies don&apos;t wait for convenient times.
                  That&apos;s why we offer emergency hydronic heater repair
                  services 24 hours a day, 7 days a week, including weekends and
                  holidays. If your heating system fails unexpectedly,
                  don&apos;t suffer in the cold - call us immediately for rapid
                  response emergency repair service throughout Melbourne.
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
