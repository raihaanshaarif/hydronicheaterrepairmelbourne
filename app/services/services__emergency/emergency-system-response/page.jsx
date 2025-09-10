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
import { EmergencyListData } from "../../../_components/ServicesEmergency/EmergencyListData";
import imageLayout from "../../../../public/images/services/services_img02.jpg";

// Emergency System Response specific data
const emergencySystemResponseInclude = [
  {
    id: 1,
    title: "Immediate System Assessment:",
    text: "Rapid evaluation of your hydronic heating system emergency to determine the cause and severity of the problem. Our technicians quickly diagnose issues to provide appropriate emergency response.",
  },
  {
    id: 2,
    title: "Emergency Safety Procedures:",
    text: "Implementation of immediate safety measures including system shutdowns, leak isolation, and hazard prevention. We prioritize safety for your family and property in all emergency situations.",
  },
  {
    id: 3,
    title: "Priority Emergency Repairs:",
    text: "Immediate repair services for critical system failures including boiler problems, major leaks, pump failures, and complete system breakdowns. We restore heating as quickly as possible.",
  },
  {
    id: 4,
    title: "24/7 Emergency Support:",
    text: "Round-the-clock emergency response service available every day of the year. Our emergency teams are on standby to respond to your hydronic heating crisis at any time.",
  },
];

// SEO Metadata
export const metadata = {
  title:
    "Emergency System Response Melbourne | 24/7 Hydronic Heater Emergency Service",
  description:
    "24/7 emergency system response for hydronic heating failures in Melbourne. Immediate safety procedures and priority repairs. Call 0405133761!",
  keywords:
    "emergency system response melbourne, 24/7 hydronic emergency, emergency heating repair, urgent system response, emergency heater service",
};

//Page Layout
export default function EmergencySystemResponse() {
  return (
    <>
      <PageTitle dataTitle="Emergency System Response Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency system response"
                  dataTitle="24/7 Emergency Hydronic Heating System Response Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="emergency hydronic heating system response melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your hydronic heating system experiences a critical
                  failure or emergency situation, you need immediate
                  professional response. Our emergency system response service
                  provides rapid assessment, safety procedures, and priority
                  repairs 24/7 throughout Melbourne. From complete system
                  failures to safety hazards, we respond quickly to protect your
                  property and restore your heating.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Complete System Failures</a>
                      </li>
                      <li>
                        <a href="#">Boiler Emergencies</a>
                      </li>
                      <li>
                        <a href="#">Major System Leaks</a>
                      </li>
                      <li>
                        <a href="#">Pump Failures</a>
                      </li>
                      <li>
                        <a href="#">Control System Faults</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Emergency Shutdowns</a>
                      </li>
                      <li>
                        <a href="#">Safety Hazard Response</a>
                      </li>
                      <li>
                        <a href="#">Pressure Emergency Relief</a>
                      </li>
                      <li>
                        <a href="#">Temperature Control Failures</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency System Response Services include:
                </h4>
                <ListWithTitle
                  dataLayout={emergencySystemResponseInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Rapid Emergency Assessment
                </h5>
                <p>
                  Our emergency response begins with immediate system assessment
                  to identify the cause and severity of the problem. Our
                  experienced technicians quickly evaluate the situation and
                  implement appropriate emergency measures to prevent further
                  damage or safety risks.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Safety-First Approach
                </h5>
                <p>
                  In any emergency situation, safety is our top priority. We
                  implement immediate safety procedures including emergency
                  shutdowns, hazard containment, and area isolation to protect
                  your family and property while we work on emergency repairs.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Priority Repair Service
                </h5>
                <p>
                  Once safety is secured, we focus on priority repairs to
                  restore your heating system as quickly as possible. Our
                  emergency vehicles are fully equipped with parts and tools
                  needed for most emergency repairs, minimizing downtime and
                  discomfort.
                </p>
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataList={ReasonsListData} />
                <FormAside />
                <ServicesListAside dataList={EmergencyListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

