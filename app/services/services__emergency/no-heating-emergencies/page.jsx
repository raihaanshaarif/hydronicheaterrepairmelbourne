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

// No Heating Emergency Service Data
const noHeatingServices = [
  {
    id: 1,
    title: "Complete Heating System Failure:",
    text: "When your gas heater stops working completely, our emergency technicians diagnose the problem quickly and restore heating to your home. We handle pilot light failures, gas supply issues, and electrical component problems.",
  },
  {
    id: 2,
    title: "Partial Heating Loss:",
    text: "If some rooms aren&apos;t heating properly or your system is struggling to maintain temperature, we identify and fix issues with zone controls, dampers, and ductwork to restore full heating capacity.",
  },
  {
    id: 3,
    title: "Emergency Heating Restoration:",
    text: "Our priority is getting your heating working as quickly as possible. We carry emergency repair parts and provide temporary heating solutions if extended repairs are needed.",
  },
  {
    id: 4,
    title: "Winter Emergency Response:",
    text: "During Melbourne&apos;s coldest months, heating failures become true emergencies. Our technicians prioritize no-heating calls and provide rapid response to prevent health and safety risks.",
  },
];

//Page Layout
export default function NoHeatingEmergencies() {
  return (
    <>
      <PageTitle dataTitle="No Heating Emergencies Melbourne | 24/7 Gas Heater Repairs" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency heating services"
                  dataTitle="No Heating Emergency? We'll Get You Warm Fast!"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="no heating emergency services Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your gas heater breaks down and leaves you without
                  heating, it&apos;s more than just uncomfortable - it can be
                  dangerous, especially for young children, elderly family
                  members, and those with health conditions. Our emergency gas
                  technicians are available 24/7 across Melbourne to restore
                  heating to your home quickly and safely.
                </p>
                <p className="indent__top">
                  We understand that heating emergencies can&apos;t wait until
                  business hours. That&apos;s why our certified gas technicians
                  carry emergency repair parts and diagnostic equipment to get
                  your heating system working again, often on the same visit.
                  Don&apos;t suffer in the cold - call us now for immediate
                  assistance.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Common No Heating Emergency Causes
                </h4>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Pilot Light Won&apos;t Stay Lit</li>
                      <li>Gas Supply Problems</li>
                      <li>Faulty Thermostat</li>
                      <li>Ignition System Failure</li>
                      <li>Blocked Flue or Ventilation</li>
                      <li>Heat Exchanger Problems</li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Electrical Component Failures</li>
                      <li>Gas Valve Malfunction</li>
                      <li>Ductwork Disconnections</li>
                      <li>Safety Switch Activation</li>
                      <li>Control Board Issues</li>
                      <li>Sensor Malfunctions</li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency No Heating Services Include:
                </h4>
                <ListWithTitle
                  dataLayout={noHeatingServices}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Emergency Heating Service?
                </h5>
                <p>
                  Our emergency gas technicians are available 24/7, 365 days a
                  year across Melbourne. We arrive with fully stocked service
                  vehicles containing common repair parts, diagnostic equipment,
                  and safety testing tools. Most heating emergencies can be
                  resolved on the first visit, getting your family warm again
                  quickly.
                </p>
                <p className="indent__top">
                  All our emergency technicians are licensed gas fitters with
                  extensive experience in residential heating systems. We
                  prioritize safety in every repair and ensure your heating
                  system operates efficiently after restoration. Our emergency
                  service comes with the same quality guarantee as our regular
                  service calls.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency Heating Safety Tips
                </h5>
                <p>
                  While waiting for our technician to arrive, never attempt to
                  repair gas heating equipment yourself. Ensure adequate
                  ventilation if using alternative heating sources, and never
                  use camping stoves, BBQs, or car heaters indoors. If you smell
                  gas, turn off the gas supply at the meter and call us
                  immediately.
                </p>
                <PromoLayout
                  dataText="Don't spend another hour without heating! Call our emergency gas technicians now for rapid heating restoration across Melbourne."
                  dataScrImg="../../images/services/promo01-img01.png"
                  dataScrImg2="../../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Emergency Services</div>
                  <ServicesListAside dataList={EmergencyListData} />
                </div>
                <div>
                  <div className={`ttsubtitle`}>Ask Question</div>
                  <FormAside />
                </div>
                <PromoAside
                  dataTitle="Emergency Call-Out!"
                  dataText="24/7 No Heating Emergency Response"
                  dataTelefon="123-456-789"
                />
                <BoxListAside
                  dataTitle={"6 Different Reasons \n You Should Hire Us"}
                  dataList={ReasonsListData}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="../../images/extra-bg01.png"
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
