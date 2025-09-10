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

// Commercial Carbon Monoxide Testing specific data
const commercialCarbonMonoxideTestingInclude = [
  {
    id: 1,
    title: "Workplace CO Testing & Compliance:",
    text: "Professional carbon monoxide testing for commercial properties using advanced detection equipment to ensure workplace safety and meet WorkSafe Victoria requirements.",
  },
  {
    id: 2,
    title: "Commercial Gas Appliance Inspection:",
    text: "Comprehensive inspection of all commercial gas appliances including industrial heaters, commercial kitchens, and heating systems to identify potential CO hazards.",
  },
  {
    id: 3,
    title: "Business Ventilation Assessment:",
    text: "Complete assessment of commercial ventilation systems, exhaust fans, and air circulation to ensure proper removal of combustion gases and prevent CO buildup in work areas.",
  },
  {
    id: 4,
    title: "Commercial Safety Certification:",
    text: "Detailed safety reports and compliance certificates documenting CO testing results for business insurance, regulatory compliance, and workplace safety documentation.",
  },
];

//Page Layout
export default function CarbonMonoxideTesting() {
  return (
    <>
      <PageTitle dataTitle="Commercial Carbon Monoxide Testing" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial carbon monoxide testing"
                  dataTitle="Professional Commercial Carbon Monoxide Testing Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial carbon monoxide testing Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Protect your employees and customers with professional
                  commercial carbon monoxide testing from our certified
                  technicians. Carbon monoxide is a deadly, odorless gas that
                  can be produced by faulty commercial gas appliances and
                  heating systems. We use advanced detection equipment to
                  identify dangerous CO levels and ensure your business
                  environment is safe. Regular commercial CO testing is
                  essential for workplace safety and regulatory compliance. You
                  can trust us for comprehensive commercial CO testing:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Commercial hydronic heater Testing</a>
                      </li>
                      <li>
                        <a href="#">Industrial Kitchen CO Testing</a>
                      </li>
                      <li>
                        <a href="#">Office Building Gas Testing</a>
                      </li>
                      <li>
                        <a href="#">Restaurant Gas Appliance Testing</a>
                      </li>
                      <li>
                        <a href="#">Warehouse Heating CO Testing</a>
                      </li>
                      <li>
                        <a href="#">Commercial Flue Inspection</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Business Ventilation Assessment</a>
                      </li>
                      <li>
                        <a href="#">Commercial CO Monitoring</a>
                      </li>
                      <li>
                        <a href="#">Workplace Safety Inspections</a>
                      </li>
                      <li>
                        <a href="#">Emergency Commercial Testing</a>
                      </li>
                      <li>
                        <a href="#">Regulatory Compliance Testing</a>
                      </li>
                      <li>
                        <a href="#">Safety Compliance Certificates</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Commercial Carbon Monoxide Testing Services include:
                </h4>
                <ListWithTitle
                  dataLayout={commercialCarbonMonoxideTestingInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Commercial Carbon Monoxide Testing is Essential
                </h5>
                <p>
                  Commercial properties have a legal responsibility to provide
                  safe working environments for employees and customers. Carbon
                  monoxide poisoning in commercial settings can result in
                  serious legal liability, worker compensation claims, and
                  business closure. Because CO is colorless and odorless,
                  professional testing is the only way to detect dangerous
                  levels before they affect people.
                </p>
                <p className="indent__top">
                  Our commercial CO testing service helps businesses meet
                  WorkSafe Victoria requirements and maintain duty of care
                  obligations. We provide comprehensive testing, detailed
                  reporting, and compliance certificates that satisfy regulatory
                  requirements and business insurance needs. Regular testing
                  also protects your business reputation and employee wellbeing.
                </p>
                <PromoLayout
                  dataText="Protect your business with professional commercial carbon monoxide testing - ensure workplace safety today!"
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
                  dataTitle="Commercial Carbon Monoxide Testing!"
                  dataText="Protect Your Business & Employees"
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

