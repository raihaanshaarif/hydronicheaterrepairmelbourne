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

// hydronic heater Repairs specific data
const gasHeaterRepairsInclude = [
  {
    id: 1,
    title: "hydronic heater Not Working:",
    text: "Comprehensive diagnosis and repair of hydronic heaters that won't start, ignite, or heat properly. We identify the root cause and provide effective solutions to restore your heating.",
  },
  {
    id: 2,
    title: "Thermostat & Control Repairs:",
    text: "Repair and replacement of faulty thermostats, control panels, and temperature sensors. We ensure your hydronic heater responds correctly to temperature settings.",
  },
  {
    id: 3,
    title: "Gas Valve & Component Repairs:",
    text: "Professional repair of gas valves, pilot lights, ignition systems, and other critical components. All repairs are carried out to the highest safety standards.",
  },
  {
    id: 4,
    title: "Ductwork & Airflow Issues:",
    text: "Repair of blocked ducts, damaged vents, and airflow problems that affect heating efficiency. We ensure proper air circulation throughout your home.",
  },
];

//Page Layout
export default function GasHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="hydronic heater Repairs" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="hydronic heater repairs"
                  dataTitle="Fast & Reliable hydronic heater Repair Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="hydronic heater repairs"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Is your hydronic heater not working properly? Don&apos;t let a
                  broken heater leave you in the cold! Our experienced
                  technicians provide fast, reliable hydronic heater repair services
                  across Melbourne. We diagnose and fix all types of hydronic heater
                  problems, from simple pilot light issues to complex component
                  failures. Our priority is getting your heating system back up
                  and running quickly and safely. You can trust us for all of
                  these hydronic heater repair needs:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Gas Log Fires</a>
                      </li>
                      <li>
                        <a href="#">Outdoor hydronic heaters</a>
                      </li>
                      <li>
                        <a href="#">Hydronic Gas Heating</a>
                      </li>
                      <li>
                        <a href="#">hydronic heater Upgrades</a>
                      </li>
                      <li>
                        <a href="#">Multi-Zone Systems</a>
                      </li>
                      <li>
                        <a href="#">Smart Thermostat Integration</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Control Board Failures</a>
                      </li>
                      <li>
                        <a href="#">Ductwork Repairs</a>
                      </li>
                      <li>
                        <a href="#">Gas Leak Detection</a>
                      </li>
                      <li>
                        <a href="#">Pressure Switch Issues</a>
                      </li>
                      <li>
                        <a href="#">Flame Sensor Problems</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our hydronic heater Repair Services include:
                </h4>
                <ListWithTitle
                  dataLayout={gasHeaterRepairsInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Same Day hydronic heater Repair Service
                </h5>
                <p>
                  When your hydronic heater breaks down, especially during
                  Melbourne&apos;s cold winter months, you need fast service.
                  That&apos;s why we offer same-day repair services for most gas
                  heater problems. Our fully equipped service vehicles carry
                  common parts and tools, allowing us to complete most repairs
                  on the first visit.
                </p>
                <p className="indent__top">
                  Our licensed technicians have extensive experience with all
                  major hydronic heater brands and models. We provide upfront pricing
                  and detailed explanations of all repair work needed, so you
                  can make informed decisions about your heating system.
                </p>
                <PromoLayout
                  dataText="Need urgent hydronic heater repairs? Contact our emergency repair service for same-day assistance!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Residential Gas Heating Services
                  </div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="Emergency hydronic heater Repairs!"
                  dataText="24/7 Emergency Service Available"
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

