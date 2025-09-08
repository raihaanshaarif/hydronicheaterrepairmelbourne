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

// Urgent Ducted Heating Repair Service Data
const urgentRepairServices = [
  {
    id: 1,
    title: "Same-Day Emergency Repairs:",
    text: "Our emergency technicians carry a comprehensive range of spare parts for all major ducted heating brands, enabling us to complete most urgent repairs on the same day.",
  },
  {
    id: 2,
    title: "Diagnostic & Troubleshooting:",
    text: "We use advanced diagnostic equipment to quickly identify faults in ducted heating systems, from electronic controls to mechanical components, ensuring accurate and efficient repairs.",
  },
  {
    id: 3,
    title: "Safety-First Repair Approach:",
    text: "All emergency repairs follow strict safety protocols with comprehensive testing before restoration of service. We never compromise on safety for speed.",
  },
  {
    id: 4,
    title: "Temporary Heating Solutions:",
    text: "If repairs require ordering special parts, we can provide advice on safe temporary heating solutions and priority scheduling for completion of repairs.",
  },
];

//Page Layout
export default function UrgentGasHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Urgent Gas Heater Repairs Melbourne | 24/7 Emergency Heating Fixes" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="urgent heater repairs"
                  dataTitle="24/7 Urgent Gas Heater Repairs - Fast & Reliable"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="urgent gas heater repairs Melbourne emergency service"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your gas heater breaks down unexpectedly, you need urgent
                  professional repairs to restore comfort and safety to your
                  home. Our emergency gas technicians are available 24/7 across
                  Melbourne to provide rapid response for urgent gas heater
                  repairs. We understand that heating problems can&apos;t wait,
                  especially during Melbourne&apos;s cold winter months.
                </p>
                <p className="indent__top">
                  Our fully equipped service vehicles carry extensive spare
                  parts inventory for all major gas heater brands including
                  Rinnai, Bonaire, Brivis, and Pyrox. This means we can complete
                  most urgent repairs on the first visit, getting your heating
                  restored quickly and efficiently.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Common Urgent Gas Heater Problems We Fix
                </h4>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Heater Won&apos;t Start or Ignite</li>
                      <li>Pilot Light Keeps Going Out</li>
                      <li>No Heat Despite Running</li>
                      <li>Strange Noises or Smells</li>
                      <li>Thermostat Not Responding</li>
                      <li>Uneven Heating Throughout Home</li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Gas Supply Issues</li>
                      <li>Ignition System Failures</li>
                      <li>Heat Exchanger Problems</li>
                      <li>Blower Motor Malfunctions</li>
                      <li>Safety Switch Activations</li>
                      <li>Control Board Failures</li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Urgent Gas Heater Repair Services Include:
                </h4>
                <ListWithTitle
                  dataLayout={urgentRepairServices}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency Repair Process
                </h5>
                <p>
                  When you call for urgent gas heater repairs, we dispatch our
                  nearest available certified gas technician immediately. Our
                  technician arrives with diagnostic equipment and a
                  comprehensive parts inventory. We quickly assess the problem,
                  explain the issue and repair options, then get to work
                  restoring your heating.
                </p>
                <p className="indent__top">
                  All emergency repairs include safety testing to ensure your
                  gas heater operates safely after repair. We test gas
                  pressures, check for leaks, verify proper combustion, and
                  ensure all safety systems are functioning correctly before
                  considering the job complete.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Emergency Repair Service?
                </h5>
                <p>
                  Our emergency gas technicians are available 24/7, 365 days a
                  year across Melbourne. All technicians are licensed gas
                  fitters with extensive experience in residential heating
                  systems. We provide upfront pricing, quality guarantees, and
                  the same professional service whether it&apos;s 2pm or 2am.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Brands We Service in Emergencies
                </h5>
                <p>
                  We carry spare parts and have extensive experience with all
                  major gas heater brands including Rinnai, Bonaire, Brivis,
                  Pyrox, Vulcan, Rheem, and many others. Our technicians
                  regularly attend manufacturer training to stay current with
                  the latest models and repair techniques.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Preventing Future Emergency Repairs
                </h5>
                <p>
                  Many urgent repairs can be prevented with regular maintenance.
                  During our emergency service, we&apos;ll identify any other
                  potential issues and provide recommendations for preventive
                  maintenance to avoid future emergency call-outs. We can
                  schedule regular services to keep your heating reliable.
                </p>
                <PromoLayout
                  dataText="Gas heater emergency? Don't suffer in the cold! Call our urgent repair technicians now for rapid response across Melbourne."
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

                <PromoAside
                  dataTitle="Urgent Repair Needed!"
                  dataText="24/7 Emergency Gas Heater Repairs"
                  dataTelefon="0405133761"
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
