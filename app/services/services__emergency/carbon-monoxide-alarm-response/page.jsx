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

// Carbon Monoxide Emergency Service Data
const carbonMonoxideServices = [
  {
    id: 1,
    title: "Immediate Safety Response:",
    text: "When your CO alarm sounds, we respond immediately to assess the situation, evacuate if necessary, and identify the source of carbon monoxide in your gas heating system.",
  },
  {
    id: 2,
    title: "Professional CO Testing:",
    text: "Our technicians use calibrated carbon monoxide detection equipment to measure CO levels throughout your home and identify exactly where dangerous levels are coming from.",
  },
  {
    id: 3,
    title: "Heating System Safety Inspection:",
    text: "We thoroughly inspect your hydronic heater, flue system, ventilation, and heat exchanger to identify cracks, blockages, or faults that could cause CO production.",
  },
  {
    id: 4,
    title: "Emergency Repairs & Restoration:",
    text: "Once we&apos;ve identified the CO source, we perform immediate repairs to eliminate the danger and restore safe operation of your heating system.",
  },
];

//Page Layout
export default function CarbonMonoxideAlarmResponse() {
  return (
    <>
      <PageTitle dataTitle="Carbon Monoxide Alarm Emergency Response Melbourne | 24/7 CO Safety" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="carbon monoxide emergency"
                  dataTitle="Carbon Monoxide Alarm Response - Life-Saving Emergency Service"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="carbon monoxide alarm emergency response Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Carbon monoxide alarms save lives. If your CO alarm has
                  activated, this is a serious emergency that requires immediate
                  professional response. Carbon monoxide is an invisible,
                  odorless gas that can be fatal in high concentrations. Our
                  emergency gas technicians are available 24/7 to respond to
                  carbon monoxide emergencies across Melbourne.
                </p>
                <p className="indent__top">
                  Don&apos;t ignore a carbon monoxide alarm - even if you feel
                  fine. CO poisoning symptoms can be subtle initially but become
                  life-threatening quickly. Our certified technicians carry
                  professional CO detection equipment and have the expertise to
                  identify and eliminate carbon monoxide sources in your gas
                  heating system.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  What to Do When Your CO Alarm Sounds
                </h4>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <strong>Evacuate Immediately</strong> - Get everyone out
                      </li>
                      <li>
                        <strong>Get Fresh Air</strong> - Go outside or open area
                      </li>
                      <li>
                        <strong>Call Emergency Services</strong> - If anyone
                        feels sick
                      </li>
                      <li>
                        <strong>Don&apos;t Re-enter</strong> - Stay out until
                        cleared
                      </li>
                      <li>
                        <strong>Turn Off Gas</strong> - If safe to do so
                      </li>
                      <li>
                        <strong>Call Our Emergency Line</strong> - 24/7 response
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <strong>Don&apos;t Use Appliances</strong> - No gas
                        equipment
                      </li>
                      <li>
                        <strong>No Electrical Switches</strong> - Avoid sparks
                      </li>
                      <li>
                        <strong>Ventilate the Area</strong> - Open windows/doors
                      </li>
                      <li>
                        <strong>Account for Everyone</strong> - Check all
                        occupants
                      </li>
                      <li>
                        <strong>Seek Medical Attention</strong> - If symptoms
                        present
                      </li>
                      <li>
                        <strong>Wait for Professional</strong> - Don&apos;t
                        investigate yourself
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Carbon Monoxide Emergency Services Include:
                </h4>
                <ListWithTitle
                  dataLayout={carbonMonoxideServices}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Common Causes of Carbon Monoxide from hydronic heaters
                </h5>
                <p>
                  Carbon monoxide typically results from incomplete combustion
                  in gas heating systems. Common causes include blocked flues,
                  cracked heat exchangers, inadequate ventilation, incorrect
                  installation, or lack of maintenance. Bird nests, debris, or
                  corrosion can block exhaust systems, causing dangerous CO
                  buildup inside your home.
                </p>
                <p className="indent__top">
                  Regular servicing can prevent most CO issues, but emergencies
                  can still occur. That&apos;s why CO alarms are essential
                  safety devices. Our emergency technicians can quickly identify
                  whether the CO is coming from your heating system, hot water
                  unit, or other gas appliances.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Professional CO Detection & Testing
                </h5>
                <p>
                  Our emergency technicians carry calibrated carbon monoxide
                  detectors that provide precise CO level readings throughout
                  your home. We test at multiple locations and heights to map CO
                  distribution and identify the exact source. This scientific
                  approach ensures we find and fix the problem completely.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency Safety Certification
                </h5>
                <p>
                  After identifying and repairing the CO source, we conduct
                  comprehensive safety testing before allowing you to re-enter
                  your home. We provide written certification that your gas
                  heating system is operating safely and CO levels are within
                  acceptable limits. Your family&apos;s safety is our absolute
                  priority.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Preventing Future CO Emergencies
                </h5>
                <p>
                  We&apos;ll advise you on preventing future carbon monoxide
                  issues through regular maintenance, proper ventilation, and
                  early warning signs to watch for. We can also install
                  additional CO detectors and recommend service schedules to
                  keep your family safe year-round.
                </p>
                <PromoLayout
                  dataText="Carbon monoxide alarm sounding? Don't take chances with your family's life. Call our emergency CO response team now for immediate safety assessment."
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
                  dataTitle="CO Emergency!"
                  dataText="Life-Threatening Emergency Response"
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

