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

// Emergency hydronic heater Repairs specific data
const emergencyGasHeaterRepairsInclude = [
  {
    id: 1,
    title: "24/7 Emergency Response:",
    text: "Round-the-clock emergency hydronic heater repair service available 365 days a year. We respond quickly to urgent heating failures, especially during cold Melbourne winters.",
  },
  {
    id: 2,
    title: "Urgent Safety Issues:",
    text: "Immediate response to gas leaks, carbon monoxide concerns, and other dangerous situations. Your safety is our top priority in any emergency situation.",
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

//Page Layout
export default function EmergencyGasHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Emergency hydronic heater Repairs" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency hydronic heater repairs"
                  dataTitle="24/7 Emergency hydronic heater Repair Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="emergency hydronic heater repairs"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your hydronic heater breaks down unexpectedly, you need fast,
                  reliable emergency repair service. Our 24/7 emergency
                  technicians are ready to respond to urgent heating problems
                  across Melbourne, day or night. We understand that heating
                  emergencies can&apos;t wait, especially during cold winter
                  months. Whether it&apos;s a complete breakdown, gas leak, or
                  safety concern, our emergency team is equipped to handle any
                  urgent hydronic heater repair. You can trust us for all of these
                  emergency services:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">24/7 Emergency Call-outs</a>
                      </li>
                      <li>
                        <a href="#">Gas Leak Emergencies</a>
                      </li>
                      <li>
                        <a href="#">Complete Heater Breakdowns</a>
                      </li>
                      <li>
                        <a href="#">Carbon Monoxide Alerts</a>
                      </li>
                      <li>
                        <a href="#">Pilot Light Failures</a>
                      </li>
                      <li>
                        <a href="#">No Heat Emergencies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Weekend Emergency Service</a>
                      </li>
                      <li>
                        <a href="#">Holiday Repairs</a>
                      </li>
                      <li>
                        <a href="#">After-Hours Service</a>
                      </li>
                      <li>
                        <a href="#">Same-Day Emergency Repairs</a>
                      </li>
                      <li>
                        <a href="#">Safety Shutdowns</a>
                      </li>
                      <li>
                        <a href="#">Urgent Replacements</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency hydronic heater Repair Services include:
                </h4>
                <ListWithTitle
                  dataLayout={emergencyGasHeaterRepairsInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  When to Call for Emergency hydronic heater Repairs
                </h5>
                <p>
                  Call our emergency service immediately if you smell gas,
                  suspect a gas leak, hear unusual noises from your heater, or
                  if your heater stops working completely during cold weather.
                  Any safety concerns should be treated as emergencies. Turn off
                  your gas supply and contact us right away.
                </p>
                <p className="indent__top">
                  Our emergency technicians carry a wide range of parts and
                  tools, enabling us to fix most problems on the first visit. We
                  provide upfront emergency pricing and work quickly to restore
                  heat to your home while ensuring everything is safe and
                  compliant.
                </p>
                <PromoLayout
                  dataText="hydronic heater emergency? Don't wait - call our 24/7 emergency service now for immediate assistance!"
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
                  dataTitle="24/7 Emergency Service!"
                  dataText="Call Now for Immediate Assistance"
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

