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

// Emergency Shutdown Service Data
const emergencyShutdownServices = [
  {
    id: 1,
    title: "Immediate Safety Isolation:",
    text: "When gas heating equipment poses a safety risk, our emergency technicians can safely isolate and shut down the system following proper safety protocols.",
  },
  {
    id: 2,
    title: "Safety Assessment & Documentation:",
    text: "We conduct thorough safety assessments to identify all hazards and provide detailed documentation of issues found and actions taken for your records and insurance.",
  },
  {
    id: 3,
    title: "Temporary Heating Solutions:",
    text: "After emergency shutdown, we provide guidance on safe temporary heating alternatives and can arrange priority repairs or replacement systems.",
  },
  {
    id: 4,
    title: "Restoration Planning:",
    text: "We develop comprehensive plans for either repairing the existing system or recommending replacement options to restore safe heating to your home.",
  },
];

//Page Layout
export default function EmergencyGasHeaterShutdowns() {
  return (
    <>
      <PageTitle dataTitle="Emergency Gas Heater Shutdowns Melbourne | 24/7 Safety Response" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency safety service"
                  dataTitle="Emergency Gas Heater Shutdowns - Safety First"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="emergency gas heater shutdown safety service Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Sometimes a gas heater needs to be immediately shut down for
                  safety reasons. Whether it&apos;s due to gas leaks, carbon
                  monoxide detection, unusual noises, or visible damage, our
                  emergency technicians are available 24/7 to safely isolate
                  dangerous gas heating equipment and protect your family from
                  harm.
                </p>
                <p className="indent__top">
                  Safety always comes first. Our certified gas fitters are
                  trained in emergency shutdown procedures and carry the
                  equipment necessary to safely isolate gas heating systems. We
                  can respond immediately to make your home safe, then work on
                  solutions to restore heating quickly and safely.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  When Emergency Shutdown May Be Required
                </h4>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Gas Leak Detection</li>
                      <li>Carbon Monoxide Alarms</li>
                      <li>Unusual Burning Smells</li>
                      <li>Visible Cracks in Heat Exchanger</li>
                      <li>Flue or Ventilation Blockages</li>
                      <li>Electrical Burning Smells</li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Strange Mechanical Noises</li>
                      <li>Flame Color Changes</li>
                      <li>Excessive Vibration</li>
                      <li>Safety Switch Activations</li>
                      <li>Visible Corrosion or Damage</li>
                      <li>Water/Moisture in Gas Lines</li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency Shutdown Services Include:
                </h4>
                <ListWithTitle
                  dataLayout={emergencyShutdownServices}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency Shutdown Procedure
                </h5>
                <p>
                  When you call for emergency shutdown service, our technician
                  responds immediately with safety equipment and tools. We first
                  assess the immediate danger, then safely shut down the gas
                  supply and heating system. All electrical connections are also
                  safely disconnected if required.
                </p>
                <p className="indent__top">
                  After shutdown, we conduct a comprehensive safety inspection
                  to identify all potential hazards. We provide detailed
                  documentation of the problems found and explain what needs to
                  be done to restore safe operation. Your safety is our absolute
                  priority throughout this process.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  What Happens After Emergency Shutdown?
                </h5>
                <p>
                  Once your heating system is safely shut down, we&apos;ll
                  discuss options for restoration. Some issues can be repaired
                  immediately, while others may require parts ordering or system
                  replacement. We can provide temporary heating advice and
                  prioritize permanent solutions.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Temporary Heating Safety
                </h5>
                <p>
                  If your main heating system needs to be shut down, we&apos;ll
                  advise you on safe temporary heating options. We strongly
                  advise against using unvented gas heaters, camping equipment,
                  or car heaters indoors. Portable electric heaters are
                  typically the safest temporary solution.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Insurance and Documentation
                </h5>
                <p>
                  We provide comprehensive documentation of emergency shutdowns,
                  including photographs, safety test results, and detailed
                  reports of all issues found. This documentation is valuable
                  for insurance claims and ensures compliance with safety
                  regulations.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Restoration and Replacement Options
                </h5>
                <p>
                  After emergency shutdown, we&apos;ll provide clear options for
                  restoration. Minor issues can often be repaired quickly, while
                  major safety concerns may require system replacement.
                  We&apos;ll explain all options and help you make the best
                  decision for your family&apos;s safety and comfort.
                </p>
                <PromoLayout
                  dataText="Gas heater safety concern? Don't take risks with your family's safety. Call our emergency shutdown service now for immediate safety response."
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
                  dataTitle="Safety Emergency!"
                  dataText="Immediate Shutdown Service Available"
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
