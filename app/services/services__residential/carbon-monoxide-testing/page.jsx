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

// Carbon Monoxide Testing specific data
const carbonMonoxideTestingInclude = [
  {
    id: 1,
    title: "Comprehensive CO Testing:",
    text: "Professional carbon monoxide testing using advanced detection equipment to identify dangerous CO levels in your home and ensure your family&apos;s safety.",
  },
  {
    id: 2,
    title: "Gas Appliance Inspection:",
    text: "Thorough inspection of all gas appliances including heaters, stoves, and hot water systems to identify potential sources of carbon monoxide leaks.",
  },
  {
    id: 3,
    title: "Ventilation Assessment:",
    text: "Complete assessment of ventilation systems, flues, and chimneys to ensure proper exhaust of combustion gases and prevent CO buildup.",
  },
  {
    id: 4,
    title: "Safety Certification & Reporting:",
    text: "Detailed safety reports and certificates documenting CO testing results and recommendations for maintaining a safe indoor environment.",
  },
];

//Page Layout
export default function CarbonMonoxideTesting() {
  return (
    <>
      <PageTitle dataTitle="Carbon Monoxide Testing" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="carbon monoxide testing"
                  dataTitle="Professional Carbon Monoxide Testing Services in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="carbon monoxide testing"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Carbon monoxide is a deadly, odorless gas that can be produced
                  by faulty gas appliances. Protect your family with
                  professional carbon monoxide testing from our certified
                  technicians. We use advanced detection equipment to identify
                  dangerous CO levels and ensure your gas heating systems are
                  operating safely. Regular CO testing is essential for any home
                  with gas appliances. You can trust us for all of these carbon
                  monoxide testing services:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">hydronic heater CO Testing</a>
                      </li>
                      <li>
                        <a href="#">Hot Water System Testing</a>
                      </li>
                      <li>
                        <a href="#">Gas Stove & Cooktop Testing</a>
                      </li>
                      <li>
                        <a href="#">Gas Fireplace Testing</a>
                      </li>
                      <li>
                        <a href="#">Commercial Kitchen Testing</a>
                      </li>
                      <li>
                        <a href="#">Flue & Chimney Inspection</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Ventilation Assessment</a>
                      </li>
                      <li>
                        <a href="#">CO Detector Installation</a>
                      </li>
                      <li>
                        <a href="#">Annual Safety Checks</a>
                      </li>
                      <li>
                        <a href="#">Emergency CO Testing</a>
                      </li>
                      <li>
                        <a href="#">Property Sale Inspections</a>
                      </li>
                      <li>
                        <a href="#">Compliance Certificates</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Carbon Monoxide Testing Services include:
                </h4>
                <ListWithTitle
                  dataLayout={carbonMonoxideTestingInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Carbon Monoxide Testing is Critical
                </h5>
                <p>
                  Carbon monoxide poisoning is responsible for numerous deaths
                  and illnesses each year. Because CO is colorless and odorless,
                  it&apos;s impossible to detect without proper equipment. Even
                  low levels of exposure can cause headaches, dizziness, and
                  fatigue, while high levels can be fatal within minutes.
                </p>
                <p className="indent__top">
                  Our professional CO testing service provides peace of mind by
                  ensuring your gas appliances are operating safely. We
                  recommend annual testing, especially before winter when gas
                  heaters are used most frequently. Don&apos;t take risks with
                  your family&apos;s safety.
                </p>
                <PromoLayout
                  dataText="Protect your family with professional carbon monoxide testing - book your safety inspection today!"
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
                  dataTitle="Carbon Monoxide Testing!"
                  dataText="Protect Your Family's Safety"
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

