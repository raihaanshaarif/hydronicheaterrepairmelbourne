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

// Commercial Emergency Gas Heater Repairs specific data
const commercialEmergencyGasHeaterRepairsInclude = [
  {
    id: 1,
    title: "24/7 Commercial Emergency Response:",
    text: "Round-the-clock emergency commercial gas heater repair service available 365 days a year. We prioritize business heating emergencies to minimize operational disruption and maintain workplace comfort.",
  },
  {
    id: 2,
    title: "Business Safety Emergency Service:",
    text: "Immediate response to commercial gas leaks, carbon monoxide concerns, and workplace safety issues. We understand the critical importance of employee and customer safety in commercial environments.",
  },
  {
    id: 3,
    title: "Priority Commercial Repairs:",
    text: "Fast diagnosis and repair of commercial gas heating emergencies with priority scheduling for business clients. Our commercial-equipped vehicles ensure most emergency repairs are completed the same day.",
  },
  {
    id: 4,
    title: "After-Hours Business Service:",
    text: "Emergency commercial gas heater repairs available outside business hours, weekends, and holidays. We work around your business schedule to minimize disruption to operations and revenue.",
  },
];

//Page Layout
export default function EmergencyGasHeaterRepairs() {
  return (
    <>
      <PageTitle dataTitle="Commercial Emergency Gas Heater Repairs" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial emergency gas heater repairs"
                  dataTitle="24/7 Commercial Emergency Gas Heater Repairs Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial emergency gas heater repairs Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your commercial gas heating system breaks down
                  unexpectedly, you need fast, reliable emergency repair service
                  that understands business priorities. Our 24/7 commercial
                  emergency technicians are ready to respond to urgent business
                  heating problems across Melbourne, day or night. We understand
                  that commercial heating emergencies can impact employee
                  productivity, customer comfort, and business operations.
                  Whether it&apos;s a complete system breakdown, gas leak, or
                  workplace safety concern, our commercial emergency team is
                  equipped to handle any urgent business gas heating repair:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">24/7 Commercial Emergency</a>
                      </li>
                      <li>
                        <a href="#">Business Gas Leak Emergency</a>
                      </li>
                      <li>
                        <a href="#">Commercial System Failures</a>
                      </li>
                      <li>
                        <a href="#">Workplace CO Emergencies</a>
                      </li>
                      <li>
                        <a href="#">Industrial Heater Breakdowns</a>
                      </li>
                      <li>
                        <a href="#">Office Heating Emergencies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Weekend Business Service</a>
                      </li>
                      <li>
                        <a href="#">Holiday Commercial Repairs</a>
                      </li>
                      <li>
                        <a href="#">After-Hours Business Service</a>
                      </li>
                      <li>
                        <a href="#">Priority Commercial Repairs</a>
                      </li>
                      <li>
                        <a href="#">Emergency Safety Shutdowns</a>
                      </li>
                      <li>
                        <a href="#">Urgent System Replacements</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Commercial Emergency Gas Heater Repair Services include:
                </h4>
                <ListWithTitle
                  dataLayout={commercialEmergencyGasHeaterRepairsInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  When to Call for Commercial Emergency Gas Heater Repairs
                </h5>
                <p>
                  Call our commercial emergency service immediately if you
                  detect gas odors in the workplace, suspect a gas leak,
                  experience complete heating system failure during business
                  hours, or have any workplace safety concerns. Employee and
                  customer safety should always be the top priority. Follow your
                  emergency procedures, evacuate if necessary, and contact us
                  right away.
                </p>
                <p className="indent__top">
                  Our commercial emergency technicians carry extensive
                  industrial-grade parts and specialized tools for business
                  heating systems, enabling us to resolve most commercial
                  problems on the first visit. We provide transparent emergency
                  pricing and work efficiently to restore heating while ensuring
                  all safety and compliance requirements are met.
                </p>
                <PromoLayout
                  dataText="Commercial gas heating emergency? Don't let it impact your business - call our 24/7 commercial emergency service now!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Commercial Gas Heating Services
                  </div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="24/7 Commercial Emergency!"
                  dataText="Priority Business Response Service"
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
