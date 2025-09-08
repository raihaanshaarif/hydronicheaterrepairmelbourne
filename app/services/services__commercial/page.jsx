//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
import ListWithTitle from "../../_components/Common/ListWithTitle";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import FormAside from "../../_components/ServicesSubPages/FormAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ComercialListData } from "../../_components/ServicesCommercial/ComercialListData";
import { dataServicesInclude } from "../../_components/ServicesCommercial/ServicesIncludeData";
import imageLayout from "../../../public/images/services/services_img02.jpg";

export const metadata = {
  title:
    "Commercial Ducted Heating Services Melbourne | Business HVAC Solutions",
  description:
    "Professional commercial ducted heating services in Melbourne. Expert installation, maintenance & repair for offices, warehouses, retail spaces. Licensed technicians, 24/7 support.",
  keywords:
    "commercial ducted heating Melbourne, business HVAC services, commercial heating installation, office ducted heating, warehouse heating systems",
  openGraph: {
    title:
      "Commercial Ducted Heating Melbourne | Professional Business Solutions",
    description:
      "Expert commercial ducted heating services for Melbourne businesses. Installation, repairs & maintenance for all commercial properties. 24/7 emergency support.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Ducted Heating Melbourne | Business HVAC Services",
    description:
      "Professional commercial ducted heating services in Melbourne. Expert installation, maintenance & repairs for all business types.",
  },
  alternates: {
    canonical:
      "https://ductedheaterrepairmelbourne.com.au/services/services__commercial",
  },
};

//Page Layout
export default function ServicesCommercial() {
  return (
    <>
      <PageTitle dataTitle="Commercial Ducted Heating Services" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="commercial ducted heating services"
                  dataTitle="Professional Commercial Ducted Heating Services Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="commercial ducted heating services Melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Keep your business comfortable and productive with our
                  professional commercial ducted heating services in Melbourne.
                  We specialize in commercial-grade ducted heating solutions for
                  offices, warehouses, retail spaces, restaurants, and
                  industrial facilities. Our business heating experts understand
                  the unique requirements of commercial properties and provide
                  reliable, energy-efficient heating solutions that minimize
                  operational costs while maintaining optimal workplace comfort.
                  From installation to emergency repairs, we deliver
                  comprehensive commercial ducted heating services:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Office Building Ducted Heating</a>
                      </li>
                      <li>
                        <a href="#">Warehouse Heating Systems</a>
                      </li>
                      <li>
                        <a href="#">Retail Space Ducted Heating</a>
                      </li>
                      <li>
                        <a href="#">Restaurant HVAC Heating</a>
                      </li>
                      <li>
                        <a href="#">Industrial Ducted Heating</a>
                      </li>
                      <li>
                        <a href="#">Medical Facility Heating</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Hotel & Hospitality Heating</a>
                      </li>
                      <li>
                        <a href="#">Educational Facility Heating</a>
                      </li>
                      <li>
                        <a href="#">Gym & Fitness Center Heating</a>
                      </li>
                      <li>
                        <a href="#">Multi-Zone Commercial Systems</a>
                      </li>
                      <li>
                        <a href="#">Energy Management Systems</a>
                      </li>
                      <li>
                        <a href="#">24/7 Commercial Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Commercial Ducted Heating Services include:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Why Choose Our Commercial Ducted Heating Services?
                </h5>
                <p>
                  Commercial heating systems require specialized expertise and
                  understanding of business operational needs. Our commercial
                  ducted heating specialists have extensive experience with
                  large-scale heating installations, energy efficiency
                  optimization, and regulatory compliance. We work around your
                  business schedule to minimize disruption and provide 24/7
                  emergency support to keep your operations running smoothly.
                </p>
                <p className="indent__top">
                  We understand that reliable heating is essential for employee
                  productivity, customer comfort, and business success. Our
                  commercial services include energy assessments, scheduled
                  maintenance programs, compliance certifications, and priority
                  emergency response. All our commercial installations meet
                  WorkSafe Victoria requirements and building code standards.
                </p>
                <PromoLayout
                  dataText="Get a free commercial ducted heating quote and discover how we can improve your business comfort while reducing energy costs!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Commercial Ducted Heating Services
                  </div>
                  <ServicesListAside dataList={ComercialListData} />
                </div>
                <div>
                  <div className={`ttsubtitle`}>Get Free Commercial Quote</div>
                  <FormAside />
                </div>
                <PromoAside
                  dataTitle="Need Commercial Ducted Heating?"
                  dataText="Get a Free Business Quote Today"
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
