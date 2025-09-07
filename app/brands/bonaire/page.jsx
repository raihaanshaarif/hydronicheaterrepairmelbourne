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
import ListWithTitle from "../../_components/Common/ListWithTitle";
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
  title:
    "Bonaire Gas Heaters Melbourne | Installation, Service & Repairs | Australia's #1",
  description:
    "Bonaire gas heaters - Australia's leading heating brand. Expert installation, service & repairs in Melbourne. Energy Star rated, 25-year warranty. Call 0405133761 for free quote.",
  keywords:
    "Bonaire gas heaters Melbourne, Bonaire heater installation, Bonaire gas heater service, Bonaire repairs Melbourne, ducted gas heating Bonaire, energy efficient heating Melbourne",
};

// Bonaire specific data
const bonaireModels = [
  {
    name: "Bonaire Advance",
    type: "Ducted Gas Heater",
    features: [
      "6 Star Energy Rating",
      "MyClimate Technology",
      "Ultra-Quiet Operation",
      "25 Year Heat Exchanger Warranty",
    ],
    capacity: "15kW - 35kW",
    ideal: "Medium to large homes (3-5 bedrooms)",
  },
  {
    name: "Bonaire Compact",
    type: "Space Saving Ducted",
    features: [
      "Compact Design",
      "5 Star Energy Rating",
      "Easy Installation",
      "Continuous Pilot or Electronic Ignition",
    ],
    capacity: "12kW - 25kW",
    ideal: "Small to medium homes (2-4 bedrooms)",
  },
  {
    name: "Bonaire Navigator",
    type: "Premium Ducted System",
    features: [
      "Smart Zoning",
      "WiFi Control",
      "Variable Speed Fan",
      "Advanced Diagnostics",
    ],
    capacity: "20kW - 45kW",
    ideal: "Large homes & multi-zone applications",
  },
];

const bonaireFeatures = [
  {
    title: "Energy Star Certified",
    description:
      "All Bonaire gas heaters exceed minimum energy standards, saving you hundreds on heating bills each winter.",
  },
  {
    title: "Australian Made Quality",
    description:
      "Designed and manufactured in Australia specifically for Australian climate conditions and building standards.",
  },
  {
    title: "25-Year Heat Exchanger Warranty",
    description:
      "Industry-leading warranty coverage demonstrates Bonaire's confidence in their premium construction quality.",
  },
  {
    title: "MyClimate Technology",
    description:
      "Advanced control system maintains perfect temperature while maximizing energy efficiency and comfort.",
  },
];

//Page Layout
export default function BonairePage() {
  return (
    <>
      <PageTitle dataTitle="Bonaire Gas Heaters Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="bonaire gas heaters melbourne"
                  dataTitle="Bonaire Gas Heaters - Australia's Most Trusted Heating Brand"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="bonaire gas heaters melbourne installation service"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  As Melbourne&apos;s authorized Bonaire service specialists and
                  certified installation experts, we provide comprehensive
                  installation, repair, maintenance, and emergency service for
                  all Bonaire gas heater models. With over 50 years of Bonaire
                  expertise, our factory-trained technicians deliver
                  professional service that maximizes your system&apos;s energy
                  efficiency, performance, and reliability throughout its
                  lifespan.
                </p>

                <p className="indent__top">
                  Whether you need emergency repairs, annual maintenance, or
                  professional installation of a new Bonaire system, our
                  certified team ensures superior service with genuine parts,
                  comprehensive warranties, and 24/7 emergency support
                  throughout Melbourne. Experience the difference of expert
                  Bonaire service.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Bonaire Gas Heater Models Available in Melbourne
                </h3>

                <div className="space-y-[20px] mt-[20px]">
                  {bonaireModels.map((model, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-[20px] shadow-sm"
                    >
                      <div className="md:flex md:gap-[20px] md:items-start">
                        <div className="md:flex-1">
                          <h4 className="text-[18px] font-bold text-gray-900 mb-[5px]">
                            {model.name}
                          </h4>
                          <p className="text-[14px] text-blue-600 font-semibold mb-[10px]">
                            {model.type}
                          </p>
                          <p className="text-[13px] text-gray-600 mb-[15px]">
                            <strong>Capacity:</strong> {model.capacity} |{" "}
                            <strong>Ideal for:</strong> {model.ideal}
                          </p>

                          <div className="mb-[15px]">
                            <p className="text-[13px] font-semibold text-gray-900 mb-[8px]">
                              Key Features:
                            </p>
                            <div className="grid grid-cols-2 gap-[5px]">
                              {model.features.map((feature, featureIndex) => (
                                <span
                                  key={featureIndex}
                                  className="text-[12px] bg-blue-50 text-blue-700 px-[8px] py-[3px] rounded"
                                >
                                  ✓ {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Bonaire Service Expertise in Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      Expert Bonaire installation with precise sizing, zoning
                      design, and MyClimate setup. Our certified technicians
                      ensure maximum efficiency from day one.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      Emergency Repairs
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      24/7 emergency repair service for all Bonaire models. Fast
                      diagnosis, genuine parts, and expert repairs to restore
                      your heating quickly.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      Annual Maintenance
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      Comprehensive maintenance service to maintain your 6-star
                      energy rating, ensure safety, and maximize system lifespan
                      with genuine Bonaire parts.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      WiFi & Smart Controls
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      Professional setup and service of Bonaire WiFi controls,
                      zone systems, and MyClimate technology for optimal comfort
                      and efficiency.
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Professional Bonaire Installation & Service Melbourne
                </h3>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[20px] mt-[20px]">
                  <h4 className="text-[16px] font-bold text-blue-900 mb-[10px]">
                    Complete Bonaire Service Solutions
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[5px]">
                        <li>✓ Expert installation & commissioning</li>
                        <li>✓ Emergency repair service 24/7</li>
                        <li>✓ Annual maintenance programs</li>
                        <li>✓ Genuine Bonaire parts & accessories</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[5px]">
                        <li>✓ WiFi control setup & service</li>
                        <li>✓ Zone system installation</li>
                        <li>✓ Energy efficiency optimization</li>
                        <li>✓ 25-year warranty service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Bonaire Maintenance & Repair Services
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our comprehensive Bonaire maintenance service ensures your
                  system maintains its 6-star energy rating and peak
                  performance. We provide thorough inspections, genuine parts
                  replacement, and advanced diagnostics using the latest Bonaire
                  service tools and techniques.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-yellow-900 mb-[8px]">
                    What&apos;s Included in Our Bonaire Service:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[10px] text-[13px] text-yellow-800">
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Heat exchanger inspection</li>
                        <li>• MyClimate system testing</li>
                        <li>• Burner & ignition service</li>
                        <li>• Safety device calibration</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• WiFi control diagnostics</li>
                        <li>• Zone damper inspection</li>
                        <li>• Filter replacement</li>
                        <li>• Energy efficiency testing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Bonaire Gas Heater Running Costs Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Bonaire&apos;s Energy Star certified gas heaters are among the
                  most efficient available, with 6-star models using up to 30%
                  less gas than standard heaters. For a typical Melbourne home,
                  this translates to annual heating savings of $200-$400
                  compared to older or less efficient systems.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mt-[15px]">
                  <p className="text-[13px] text-green-800">
                    <strong>Typical Running Costs:</strong> A Bonaire Advance
                    25kW system costs approximately $3-5 per day to heat a
                    4-bedroom Melbourne home during winter peak periods.
                  </p>
                </div>

                <PromoLayout
                  dataText="Expert Bonaire service, repair & installation. Available 24/7 for emergencies. Authorized dealers with genuine parts and comprehensive warranties!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>Gas Heater Services</div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-gray-900 mb-[10px]">
                    Bonaire Quick Facts
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-gray-700">
                    <div>
                      <strong>Founded:</strong> 1968 (55+ years)
                    </div>
                    <div>
                      <strong>Made in:</strong> Australia
                    </div>
                    <div>
                      <strong>Warranty:</strong> Up to 25 years
                    </div>
                    <div>
                      <strong>Energy Rating:</strong> Up to 6 stars
                    </div>
                    <div>
                      <strong>Market Share:</strong> #1 in Australia
                    </div>
                    <div>
                      <strong>Service Network:</strong> Nationwide
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Bonaire Specialists!"
                  dataText="Authorized dealers & certified installers"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Bonaire Service"}
                  dataList={ReasonsListData}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="section__inner bg-no-repeat bg-center lazyload"
          data-bg="/images/extra-bg01.png"
        >
          <div className="container container__fluid-xl no-resize-text">
            <SectionTitle
              dataSubtitle="authorized bonaire dealer"
              dataTitle="Melbourne's Trusted Bonaire Partner"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
