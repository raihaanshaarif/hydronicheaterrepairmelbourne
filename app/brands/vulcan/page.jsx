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
    "Vulcan Gas Heaters Melbourne | Installation, Service & Repairs | Premium Australian Heating",
  description:
    "Vulcan gas heaters - Premium Australian heating solutions. Expert installation, service & repairs in Melbourne. High efficiency, robust design. Call 0405133761 for free quote.",
  keywords:
    "Vulcan gas heaters Melbourne, Vulcan heater installation, Vulcan gas heater service, Vulcan repairs Melbourne, ducted gas heating Vulcan, industrial heating Melbourne",
};

// Vulcan specific data
const vulcanModels = [
  {
    name: "Vulcan Elite",
    type: "Premium Ducted Gas Heater",
    features: [
      "5 Star Energy Rating",
      "Advanced Control System",
      "Ultra-Reliable Operation",
      "20 Year Heat Exchanger Warranty",
    ],
    capacity: "20kW - 40kW",
    ideal: "Large homes & commercial applications (4-6 bedrooms)",
  },
  {
    name: "Vulcan Classic",
    type: "Standard Ducted System",
    features: [
      "Robust Design",
      "4 Star Energy Rating",
      "Simple Operation",
      "Continuous Pilot System",
    ],
    capacity: "15kW - 30kW",
    ideal: "Medium to large homes (3-5 bedrooms)",
  },
  {
    name: "Vulcan Commercial",
    type: "Heavy Duty Industrial",
    features: [
      "Commercial Grade Construction",
      "High Output Capacity",
      "Extended Operating Hours",
      "Professional Installation Required",
    ],
    capacity: "40kW - 100kW",
    ideal: "Commercial buildings & industrial applications",
  },
];

const vulcanFeatures = [
  {
    title: "Australian Engineered",
    description:
      "Designed and manufactured in Australia specifically for harsh Australian conditions and extreme temperature variations.",
  },
  {
    title: "Heavy Duty Construction",
    description:
      "Built with premium materials and robust engineering for exceptional durability and long-lasting performance.",
  },
  {
    title: "20-Year Heat Exchanger Warranty",
    description:
      "Comprehensive warranty coverage demonstrates Vulcan's confidence in their superior build quality and reliability.",
  },
  {
    title: "Industrial Strength Performance",
    description:
      "Proven in commercial applications, Vulcan heaters deliver consistent, powerful heating even in demanding environments.",
  },
];

//Page Layout
export default function VulcanPage() {
  return (
    <>
      <PageTitle dataTitle="Vulcan Gas Heaters Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="vulcan gas heaters melbourne"
                  dataTitle="Vulcan Gas Heaters - Premium Australian Heating Solutions"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="vulcan gas heaters melbourne installation service"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  As Melbourne&apos;s authorized Vulcan service specialists and
                  certified installation experts, we provide comprehensive
                  installation, repair, maintenance, and emergency service for
                  all Vulcan gas heater models. With over 40 years of experience
                  servicing robust Australian heating systems, our
                  factory-trained technicians deliver professional service that
                  keeps your Vulcan heater operating at peak performance year
                  after year.
                </p>

                <p className="indent__top">
                  Whether you need emergency repairs, annual maintenance, or
                  professional installation of a new Vulcan system, our
                  certified team ensures reliable service with genuine parts,
                  comprehensive warranties, and 24/7 emergency support
                  throughout Melbourne. Trust our expertise to maximize your
                  Vulcan heater&apos;s performance, efficiency, and lifespan.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Vulcan Gas Heater Models Available in Melbourne
                </h3>

                <div className="space-y-[20px] mt-[20px]">
                  {vulcanModels.map((model, index) => (
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
                  Our Vulcan Service Expertise in Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      Expert Vulcan installation with proper sizing, ductwork
                      design, and safety compliance. Our certified technicians
                      ensure optimal performance from day one.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      Emergency Repairs
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      24/7 emergency repair service for Vulcan heaters. Fast
                      diagnosis, genuine parts, and reliable repairs to restore
                      your heating quickly.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      Annual Maintenance
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      Comprehensive maintenance service to ensure safety,
                      efficiency, and reliability. Prevent breakdowns and extend
                      your Vulcan heater&apos;s lifespan.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-gray-900 mb-[8px]">
                      Commercial Service
                    </h4>
                    <p className="text-[13px] text-gray-700">
                      Specialized commercial and industrial Vulcan service with
                      flexible scheduling, preventive maintenance programs, and
                      priority support.
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Professional Vulcan Installation & Service Melbourne
                </h3>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[20px] mt-[20px]">
                  <h4 className="text-[16px] font-bold text-blue-900 mb-[10px]">
                    Complete Vulcan Service Solutions
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[5px]">
                        <li>✓ Expert installation & commissioning</li>
                        <li>✓ Emergency repair service 24/7</li>
                        <li>✓ Annual maintenance programs</li>
                        <li>✓ Genuine parts & accessories</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[5px]">
                        <li>✓ Commercial service contracts</li>
                        <li>✓ Safety inspections & compliance</li>
                        <li>✓ Performance optimization</li>
                        <li>✓ Warranty service & support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Vulcan Maintenance & Repair Services
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our comprehensive Vulcan maintenance service includes thorough
                  safety inspections, performance testing, cleaning, and
                  component replacement to ensure your system operates safely
                  and efficiently. We service all Vulcan models including older
                  units, with access to genuine parts and technical expertise.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-yellow-900 mb-[8px]">
                    What&apos;s Included in Our Vulcan Service:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[10px] text-[13px] text-yellow-800">
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Heat exchanger inspection</li>
                        <li>• Burner cleaning & adjustment</li>
                        <li>• Safety device testing</li>
                        <li>• Gas pressure verification</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Ductwork inspection</li>
                        <li>• Filter replacement</li>
                        <li>• Control system testing</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Vulcan Gas Heater Running Costs Melbourne
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Vulcan&apos;s efficient gas heaters provide excellent value
                  with their robust construction and reliable operation. While
                  focusing on durability over maximum efficiency ratings, Vulcan
                  heaters offer consistent performance and lower maintenance
                  costs over their extended lifespan.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mt-[15px]">
                  <p className="text-[13px] text-green-800">
                    <strong>Typical Running Costs:</strong> A Vulcan Elite 25kW
                    system costs approximately $4-6 per day to heat a 4-bedroom
                    Melbourne home during winter peak periods, with minimal
                    maintenance requirements.
                  </p>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Vulcan Commercial & Industrial Applications
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Vulcan specializes in commercial and industrial heating
                  solutions, with systems designed for warehouses, factories,
                  workshops, and large commercial buildings. Their heavy-duty
                  construction and high-output capacity make them ideal for
                  demanding applications where reliability is critical.
                </p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-orange-900 mb-[8px]">
                    Commercial Applications Include:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[10px] text-[13px] text-orange-800">
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Warehouses & Distribution Centers</li>
                        <li>• Manufacturing Facilities</li>
                        <li>• Workshop & Garage Heating</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Retail & Commercial Buildings</li>
                        <li>• Sports Facilities & Gyms</li>
                        <li>• Agricultural & Farming Operations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Expert Vulcan service, repair & installation. Available 24/7 for emergencies. Professional technicians, genuine parts, comprehensive warranties!"
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
                    Vulcan Quick Facts
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-gray-700">
                    <div>
                      <strong>Founded:</strong> 1980s (40+ years)
                    </div>
                    <div>
                      <strong>Made in:</strong> Australia
                    </div>
                    <div>
                      <strong>Warranty:</strong> Up to 20 years
                    </div>
                    <div>
                      <strong>Energy Rating:</strong> Up to 5 stars
                    </div>
                    <div>
                      <strong>Speciality:</strong> Commercial & Industrial
                    </div>
                    <div>
                      <strong>Service Network:</strong> Australia-wide
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Vulcan Specialists!"
                  dataText="Authorized dealers & certified installers"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Vulcan Service"}
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
              dataSubtitle="authorized vulcan dealer"
              dataTitle="Melbourne's Trusted Vulcan Partner"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
