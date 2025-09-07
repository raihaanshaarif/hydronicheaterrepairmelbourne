//Style
import styles from "../../_components/ServicesSubPages/ServicesSubPages.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import SectionTitle from "../../_components/Common/SectionTitle";
import LogoPartners from "../../_components/Common/LogoPartners";
//Import Layout
import Image from "next/legacy/image";
import Link from "next/link";
import PromoLayout from "../../_components/ServicesSubPages/PromoLayout";
//Import Aside
import PromoAside from "../../_components/ServicesSubPages/PromoAside";
import BoxListAside from "../../_components/ServicesSubPages/BoxListAside";
import ServicesListAside from "../../_components/ServicesSubPages/ServicesListAside";
//Import Data
import { ReasonsListData } from "../../_components/Services/AsideReasonsListData";
import { ServicesListData } from "../../_components/ServicesResidential/ServicesListData";
import imageLayout from "../../../public/images/services/services_img03.jpg";

// Metadata
export const metadata = {
  title: "Pyrox Gas Heaters Melbourne | Expert Installation, Service & Repairs",
  description: "Pyrox gas heaters - Commercial and residential gas heating specialists offering robust, reliable heating systems for Melbourne's climate. Expert installation & service in Melbourne. Call 0405133761 for free quote.",
  keywords: "Pyrox gas heaters Melbourne, Pyrox heater installation, Pyrox gas heater service, Pyrox repairs Melbourne, gas heating Pyrox",
};

//Page Layout
export default function PyroxPage() {
  return (
    <>
      <PageTitle dataTitle="Pyrox Gas Heaters Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="pyrox gas heaters melbourne"
                  dataTitle="Pyrox Gas Heaters - Professional Heating Solutions"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="pyrox gas heaters melbourne installation service"
                    loading={`eager`}
                  />
                </div>
                
                <p className={``}>
                  Commercial and residential gas heating specialists offering robust, reliable heating systems for Melbourne's climate. As Melbourne&apos;s authorized Pyrox dealers and certified installation specialists, we provide expert installation, comprehensive service, and professional repairs for the complete Pyrox gas heater range. Choose Pyrox for commercial-grade durability and reliability backed by our professional installation guarantee.
                </p>

                <p className="indent__top">
                  Our factory-trained technicians ensure your Pyrox gas heater delivers optimal performance, maximum efficiency, and reliable comfort throughout Melbourne&apos;s coldest months. Every Pyrox installation includes comprehensive warranty coverage and ongoing service support.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Pyrox Gas Heater Key Features
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-white border border-gray-200 rounded-lg p-[15px] shadow-sm">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">✓ Heavy Duty Construction</h4>
                    <p className="text-[13px] text-gray-700">Advanced Heavy Duty Construction technology ensures optimal performance and reliability for your Melbourne home heating needs.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-[15px] shadow-sm">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">✓ Commercial Grade</h4>
                    <p className="text-[13px] text-gray-700">Advanced Commercial Grade technology ensures optimal performance and reliability for your Melbourne home heating needs.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-[15px] shadow-sm">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">✓ Extended Warranty</h4>
                    <p className="text-[13px] text-gray-700">Advanced Extended Warranty technology ensures optimal performance and reliability for your Melbourne home heating needs.</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-[15px] shadow-sm">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">✓ Professional Installation</h4>
                    <p className="text-[13px] text-gray-700">Advanced Professional Installation technology ensures optimal performance and reliability for your Melbourne home heating needs.</p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Why Choose Pyrox Gas Heaters in Melbourne?
                </h3>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[20px] mt-[20px]">
                  <h4 className="text-[16px] font-bold text-blue-900 mb-[15px]">Pyrox Advantages</h4>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[8px]">
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Proven Reliability:</strong> Trusted by Melbourne families for years</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Energy Efficiency:</strong> Up to 5 stars rated models available</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Professional Installation:</strong> Certified technician network</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[8px]">
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Comprehensive Warranty:</strong> Up to 20 years coverage</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Ongoing Support:</strong> Local service network</span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span><strong>Heavy Duty Heat Exchangers:</strong> Advanced heating technology</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Professional Pyrox Installation & Service Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our authorized Pyrox technicians provide professional installation with complete system commissioning, user training, and warranty registration. We ensure your Pyrox gas heater operates at peak efficiency while meeting all safety standards and building codes.
                </p>

                <div className="grid md:grid-cols-3 gap-[15px] mt-[20px]">
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[18px] font-bold text-blue-600 mb-[5px]">Up to 5 stars</div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">Energy Rating</div>
                    <div className="text-[12px] text-gray-600">Efficient heating for lower bills</div>
                  </div>
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[18px] font-bold text-green-600 mb-[5px]">Up to 20 years</div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">Warranty</div>
                    <div className="text-[12px] text-gray-600">Comprehensive coverage</div>
                  </div>
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[18px] font-bold text-purple-600 mb-[5px]">Professional</div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">Installation</div>
                    <div className="text-[12px] text-gray-600">Certified technicians</div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Pyrox Gas Heater Running Costs Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Pyrox gas heaters are designed for efficiency and cost-effective operation. With proper installation and regular maintenance, a Pyrox system can provide reliable heating at competitive running costs throughout Melbourne&apos;s winter months.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mt-[15px]">
                  <p className="text-[13px] text-green-800">
                    <strong>Cost Effective:</strong> Pyrox gas heaters offer excellent value with low running costs and reliable performance for Melbourne homes.
                  </p>
                </div>

                <PromoLayout
                  dataText="Get a free Pyrox gas heater quote with professional installation and comprehensive warranty coverage!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>
              
              <div className={` lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}>
                <div>
                  <div className={`ttsubtitle`}>Gas Heater Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-gray-900 mb-[10px]">Pyrox Quick Facts</h4>
                  <div className="space-y-[8px] text-[13px] text-gray-700">
                    <div><strong>Founded:</strong> 1975</div>
                    <div><strong>Specialty:</strong> Professional Heating Solutions</div>
                    <div><strong>Warranty:</strong> Up to 20 years</div>
                    <div><strong>Energy Rating:</strong> Up to 5 stars</div>
                    <div><strong>Key Technology:</strong> Heavy Duty Heat Exchangers</div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Pyrox Specialists!"
                  dataText="Authorized dealers & certified installers"
                  dataTelefon="0405133761"
                />
                
                <BoxListAside
                  dataTitle={"Why Choose Our \n Pyrox Service"}
                  dataList={ReasonsListData}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section__inner bg-no-repeat bg-center lazyload" data-bg="/images/extra-bg01.png">
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="authorized pyrox dealer"
              dataTitle="Melbourne's Trusted Pyrox Partner"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
