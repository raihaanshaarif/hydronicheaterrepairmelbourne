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

// hydronic heating Servicing specific data
const ductedHeatingServicingInclude = [
  {
    id: 1,
    title: "Annual hydronic heating Service:",
    text: "Comprehensive annual maintenance service including cleaning, inspection, and performance testing. Regular servicing extends the life of your hydronic heating system and maintains efficiency.",
  },
  {
    id: 2,
    title: "Safety Inspections & Testing:",
    text: "Thorough safety inspections including electrical checks, temperature monitoring, and air quality testing to ensure your hydronic heating system operates safely.",
  },
  {
    id: 3,
    title: "Component Cleaning & Maintenance:",
    text: "Professional cleaning of heat exchangers, filters, ducts, and other components. Regular maintenance prevents breakdowns and improves energy efficiency.",
  },
  {
    id: 4,
    title: "Performance Optimization:",
    text: "Complete system tune-up to optimize performance, improve energy efficiency, and reduce operating costs. We ensure your hydronic heating runs at peak performance.",
  },
];

//Page Layout
export default function DuctedHeatingServicing() {
  return (
    <>
      <PageTitle dataTitle="hydronic heating Servicing" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="hydronic heating servicing"
                  dataTitle="Professional hydronic heating Servicing & Maintenance in Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="hydronic heating servicing"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Regular hydronic heating servicing is essential for maintaining
                  safety, efficiency, and reliability. Our professional
                  technicians provide comprehensive hydronic heating maintenance
                  services to keep your heating system running smoothly
                  year-round. We recommend annual servicing to prevent
                  breakdowns, improve energy efficiency, and ensure your
                  family&apos;s safety. Our detailed servicing includes all
                  necessary checks and maintenance tasks. You can trust us for
                  all of these hydronic heating servicing needs:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Annual Safety Inspections</a>
                      </li>
                      <li>
                        <a href="#">Electrical System Checks</a>
                      </li>
                      <li>
                        <a href="#">Air Quality Testing</a>
                      </li>
                      <li>
                        <a href="#">Heat Pump Cleaning & Adjustment</a>
                      </li>
                      <li>
                        <a href="#">Heat Exchanger Inspection</a>
                      </li>
                      <li>
                        <a href="#">Filter Replacement</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Thermostat Calibration</a>
                      </li>
                      <li>
                        <a href="#">Ductwork Inspection</a>
                      </li>
                      <li>
                        <a href="#">Zone System Testing</a>
                      </li>
                      <li>
                        <a href="#">Performance Testing</a>
                      </li>
                      <li>
                        <a href="#">Energy Efficiency Assessment</a>
                      </li>
                      <li>
                        <a href="#">Preventive Maintenance</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our hydronic heating Servicing includes:
                </h4>
                <ListWithTitle
                  dataLayout={ductedHeatingServicingInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Benefits of Regular hydronic heating Servicing
                </h5>
                <p>
                  Regular servicing is like health check-ups for your ducted
                  heating system. It helps identify potential problems before
                  they become major issues, saves money on energy bills, and
                  ensures your warranty remains valid. Our professional
                  servicing also helps maintain indoor air quality and prevents
                  system failures.
                </p>
                <p className="indent__top">
                  When you schedule regular servicing with our qualified
                  technicians, you&apos;ll enjoy peace of mind knowing your
                  hydronic heating system is operating safely and efficiently. We
                  provide detailed service reports and recommendations for
                  optimal performance.
                </p>
                <PromoLayout
                  dataText="Schedule your annual hydronic heating service today and save on energy bills while ensuring your family's comfort!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Residential hydronic heating Services
                  </div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <PromoAside
                  dataTitle="Book hydronic heating Service!"
                  dataText="Annual Maintenance Keeps You Comfortable"
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

