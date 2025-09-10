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
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import { dataServicesInclude } from "../../_components/ServicesResidential/ServicesIncludeData";
import imageLayout from "../../../public/images/services/services_img03.jpg";

export const metadata = {
  title:
    "Residential hydronic heating Services Melbourne | Home Installation & Repair",
  description:
    "Professional residential hydronic heating services in Melbourne. Expert installation, repairs & maintenance for homes. Licensed technicians, free quotes, emergency support.",
  keywords:
    "residential hydronic heating Melbourne, home hydronic heating installation, hydronic heating repairs residential, home HVAC services, residential heating system maintenance",
  openGraph: {
    title:
      "Residential hydronic heating Services Melbourne | Expert Home Solutions",
    description:
      "Professional hydronic heating services for Melbourne homes. Expert installation, repairs & maintenance by licensed technicians. Free quotes available.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential hydronic heating Melbourne | Professional Home Services",
    description:
      "Expert residential hydronic heating services in Melbourne. Installation, repairs, maintenance for all home types. Licensed technicians.",
  },
  alternates: {
    canonical:
      "https://ductedheaterrepairmelbourne.com.au/services/services__residential",
  },
};

//Page Layout
export default function ServicesResidential() {
  return (
    <>
      <PageTitle dataTitle="Residential hydronic heating Services" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="residential services"
                  dataTitle="Professional hydronic heating Services for Your Home"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="residential hydronic heating services"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Keep your family warm and comfortable all year round with our
                  comprehensive residential hydronic heating services. From new
                  installations to emergency repairs, our certified HVAC
                  technicians provide safe, reliable, and efficient heating
                  solutions for your home. We understand that a properly
                  functioning hydronic heating system is essential for your
                  family&apos;s comfort and safety. You can trust us for all of
                  these residential hydronic heating needs:
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Single Family Homes</a>
                      </li>
                      <li>
                        <a href="#">Apartments & Condos</a>
                      </li>
                      <li>
                        <a href="#">Townhouses</a>
                      </li>
                      <li>
                        <a href="#">Rental Properties</a>
                      </li>
                      <li>
                        <a href="#">New Construction Homes</a>
                      </li>
                      <li>
                        <a href="#">Home Renovations</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Basement Heating Solutions</a>
                      </li>
                      <li>
                        <a href="#">Multi-Zone Heating</a>
                      </li>
                      <li>
                        <a href="#">Energy-Efficient Upgrades</a>
                      </li>
                      <li>
                        <a href="#">Smart Thermostat Integration</a>
                      </li>
                      <li>
                        <a href="#">Seasonal Maintenance</a>
                      </li>
                      <li>
                        <a href="#">Emergency Repairs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Residential hydronic heating Services include:
                </h4>
                <ListWithTitle
                  dataLayout={dataServicesInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  hydronic heating for Your Home Renovation Project
                </h5>
                <p>
                  Planning a home renovation or addition? Don&apos;t overlook
                  your heating needs. Our expert technicians can design and
                  install efficient hydronic heating solutions that complement
                  your renovation project. Whether you&apos;re adding a new
                  room, finishing a basement, or upgrading your entire home, we
                  ensure your hydronic heating system meets all safety codes and
                  efficiency standards.
                </p>
                <p className="indent__top">
                  When you choose our family-owned and operated company for your
                  residential hydronic heating needs, you can count on us to
                  deliver exceptional service and quality workmanship. We take
                  pride in keeping your family comfortable and safe, and
                  we&apos;re not satisfied unless you are completely happy with
                  our work!
                </p>
                <PromoLayout
                  dataText="Get a free estimate for your residential hydronic heating installation or repair from our certified HVAC technicians today!"
                  dataScrImg="../images/services/promo01-img01.png"
                  dataScrImg2="../images/services/promo01-img01.webp"
                />
              </div>
              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Residential Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>
                <div>
                  <div className={`ttsubtitle`}>Ask Question</div>
                  <FormAside />
                </div>
                <PromoAside
                  dataTitle="Book A hydronic heating Technician Now!"
                  dataText="Get a Free, No-Obligation Quote Today"
                  dataTelefon="123-456-789"
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

