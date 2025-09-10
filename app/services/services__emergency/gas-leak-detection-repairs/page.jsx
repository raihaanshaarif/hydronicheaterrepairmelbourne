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

// Gas Leak Detection Service Data
const gasLeakServices = [
  {
    id: 1,
    title: "Advanced Leak Detection Equipment:",
    text: "Our technicians use professional electronic gas detectors, soap testing, and pressure testing to accurately locate gas leaks in heating systems, pipework, and connections.",
  },
  {
    id: 2,
    title: "Emergency Gas Leak Repairs:",
    text: "Once located, we safely repair gas leaks using approved materials and techniques. All repairs are pressure tested and certified to ensure complete safety before gas supply is restored.",
  },
  {
    id: 3,
    title: "Safety Isolation & Assessment:",
    text: "We immediately isolate the gas supply to make the area safe, then conduct thorough assessments to identify all potential leak points and safety hazards.",
  },
  {
    id: 4,
    title: "Post-Repair Testing & Certification:",
    text: "After repairs, we conduct comprehensive pressure testing, leak detection sweeps, and provide safety certificates to ensure your gas system meets all safety standards.",
  },
];

//Page Layout
export default function GasLeakDetectionRepairs() {
  return (
    <>
      <PageTitle dataTitle="Emergency Gas Leak Detection & Repairs Melbourne | 24/7 Service" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency gas services"
                  dataTitle="Emergency Gas Leak Detection & Repair Services"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="emergency gas leak detection and repair Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Gas leaks are serious safety emergencies that require
                  immediate professional attention. If you smell gas, hear
                  hissing sounds near gas appliances, or suspect a gas leak in
                  your heating system, don&apos;t wait - call our emergency gas
                  technicians immediately. We provide 24/7 emergency gas leak
                  detection and repair services across Melbourne.
                </p>
                <p className="indent__top">
                  Our certified gas fitters respond rapidly to gas leak
                  emergencies with specialized detection equipment and repair
                  materials. We work quickly to make your property safe while
                  ensuring all repairs meet Australian gas safety standards.
                  Your family&apos;s safety is our absolute priority.
                </p>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Signs of Gas Leaks You Should Never Ignore
                </h4>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Strong Gas/Rotten Egg Smell</li>
                      <li>Hissing Sounds Near Gas Lines</li>
                      <li>Dead Vegetation Near Gas Lines</li>
                      <li>Dirt or Dust Blowing from Underground</li>
                      <li>Visible Damage to Gas Pipes</li>
                      <li>Gas Meter Readings Higher Than Normal</li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>Physical Symptoms (Headaches, Dizziness)</li>
                      <li>Pilot Lights Going Out Repeatedly</li>
                      <li>Yellow or Orange Flame Colors</li>
                      <li>Condensation on Windows</li>
                      <li>Rust or Corrosion on Gas Fittings</li>
                      <li>Unusual Sounds from Gas Appliances</li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency Gas Leak Services Include:
                </h4>
                <ListWithTitle
                  dataLayout={gasLeakServices}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  What to Do If You Suspect a Gas Leak
                </h5>
                <p>
                  If you smell gas or suspect a leak, immediately turn off the
                  gas supply at the meter if it&apos;s safe to do so. Don&apos;t
                  use electrical switches, phones, or any devices that could
                  create sparks. Open windows and doors for ventilation,
                  evacuate the area, and call us from a safe location away from
                  the property.
                </p>
                <p className="indent__top">
                  Never attempt to locate or repair gas leaks yourself. Even
                  small leaks can become dangerous quickly. Our emergency
                  technicians have the training, equipment, and experience to
                  safely handle gas leak emergencies and restore safety to your
                  property.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Professional Gas Leak Detection Methods
                </h5>
                <p>
                  Our technicians use electronic gas detectors that can identify
                  even trace amounts of gas in the air. We conduct systematic
                  pressure testing of gas lines, soap bubble testing of
                  connections, and visual inspections of all gas components.
                  This comprehensive approach ensures we locate all leaks, not
                  just the obvious ones.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Emergency Response Process
                </h5>
                <p>
                  When you call our emergency service, we dispatch a certified
                  gas fitter immediately. Our technician will arrive with gas
                  detection equipment, emergency repair materials, and safety
                  gear. We work with local gas utilities when necessary and
                  provide documentation of all safety testing and repairs
                  completed.
                </p>
                <PromoLayout
                  dataText="Gas leak emergency? Don't take risks with your family's safety. Call our emergency gas technicians now for immediate response across Melbourne."
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
                  dataTitle="Gas Leak Emergency!"
                  dataText="24/7 Emergency Response Available"
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

