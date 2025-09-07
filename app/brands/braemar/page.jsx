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
  title:
    "Braemar Gas Heaters Melbourne | WiFi Enabled Heating by Seeley International",
  description:
    "Braemar gas heaters with MyClimate technology & WiFi control. Premium energy-efficient heating systems. Expert installation & service in Melbourne. Call 0405133761",
  keywords:
    "Braemar gas heaters Melbourne, Braemar MyClimate, WiFi gas heater, Seeley International heating, smart gas heater Melbourne, energy efficient heating Braemar",
};

// Braemar specific data
const braemarModels = [
  {
    name: "Braemar Paradigm",
    type: "Premium Smart Ducted System",
    features: [
      "MyClimate Technology",
      "WiFi App Control",
      "6 Star Energy Rating",
      "Variable Speed ECM Fan",
    ],
    capacity: "20kW - 50kW",
    ideal: "Large homes & smart home integration",
  },
  {
    name: "Braemar Supernova",
    type: "High Efficiency Ducted",
    features: [
      "Advanced Heat Exchanger",
      "Ultra-Quiet Operation",
      "Zone Control Ready",
      "Compact Installation",
    ],
    capacity: "15kW - 35kW",
    ideal: "Medium to large homes (3-5 bedrooms)",
  },
  {
    name: "Braemar LCE Series",
    type: "Low Carbon Emissions",
    features: [
      "Environmental Focus",
      "High Efficiency Burner",
      "Continuous Pilot Available",
      "Reliable Performance",
    ],
    capacity: "12kW - 30kW",
    ideal: "Eco-conscious homes & replacements",
  },
];

const braemarTechnology = [
  {
    title: "MyClimate Technology",
    description:
      "Intelligent heating system that learns your preferences and automatically adjusts for perfect comfort while minimizing energy consumption.",
  },
  {
    title: "WiFi Smart Control",
    description:
      "Control your heating from anywhere with the Braemar app. Set schedules, monitor usage, and adjust temperature remotely.",
  },
  {
    title: "Zone Control Integration",
    description:
      "Heat only the areas you need with advanced zoning capabilities, reducing energy waste and maximizing comfort control.",
  },
  {
    title: "Ultra-Quiet Operation",
    description:
      "Advanced fan and burner design ensures whisper-quiet operation, perfect for bedrooms and living areas.",
  },
];

//Page Layout
export default function BraemarPage() {
  return (
    <>
      <PageTitle dataTitle="Braemar Gas Heaters Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="braemar gas heaters melbourne"
                  dataTitle="Braemar Gas Heaters - Smart WiFi Heating by Seeley International"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="braemar gas heaters melbourne smart wifi heating"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  As Melbourne&apos;s authorized Braemar service specialists and
                  Seeley International certified technicians, we provide expert
                  installation, repair, maintenance, and smart system support
                  for all Braemar gas heater models. Specializing in
                  WiFi-enabled heating systems and MyClimate technology, our
                  team ensures your Braemar heater delivers intelligent climate
                  control, maximum energy efficiency, and seamless smart home
                  integration.
                </p>

                <p className="indent__top">
                  Whether you need emergency repairs, annual maintenance, smart
                  system troubleshooting, or professional installation of a new
                  Braemar system, our certified technicians provide superior
                  service with genuine parts, comprehensive warranties, and
                  expert smart technology support throughout Melbourne.
                </p>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Braemar Service Expertise in Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-[20px]">
                    <h4 className="text-[16px] font-bold text-blue-900 mb-[8px]">
                      Smart System Installation
                    </h4>
                    <p className="text-[13px] text-blue-800">
                      Expert Braemar installation with WiFi setup, MyClimate
                      configuration, and smart home integration. Complete system
                      commissioning and user training included.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-[20px]">
                    <h4 className="text-[16px] font-bold text-blue-900 mb-[8px]">
                      Emergency Smart Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800">
                      24/7 emergency service for Braemar systems including WiFi
                      connectivity issues, MyClimate faults, and traditional
                      heating repairs with genuine Seeley parts.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-[20px]">
                    <h4 className="text-[16px] font-bold text-blue-900 mb-[8px]">
                      Smart System Maintenance
                    </h4>
                    <p className="text-[13px] text-blue-800">
                      Comprehensive maintenance including system diagnostics,
                      WiFi testing, MyClimate optimization, and energy
                      efficiency analysis to maintain peak performance.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-[20px]">
                    <h4 className="text-[16px] font-bold text-blue-900 mb-[8px]">
                      WiFi & App Support
                    </h4>
                    <p className="text-[13px] text-blue-800">
                      Professional setup and troubleshooting of Braemar WiFi
                      controls, smartphone app connectivity, and smart home
                      integration for seamless operation.
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Braemar Gas Heater Models for Melbourne Homes
                </h3>

                <div className="space-y-[20px] mt-[20px]">
                  {braemarModels.map((model, index) => (
                    <div
                      key={index}
                      className="bg-white border-l-4 border-blue-500 shadow-sm p-[20px]"
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
                            <strong>Heating Capacity:</strong> {model.capacity}{" "}
                            | <strong>Best For:</strong> {model.ideal}
                          </p>

                          <div className="mb-[15px]">
                            <p className="text-[13px] font-semibold text-gray-900 mb-[8px]">
                              Advanced Features:
                            </p>
                            <div className="grid grid-cols-2 gap-[5px]">
                              {model.features.map((feature, featureIndex) => (
                                <span
                                  key={featureIndex}
                                  className="text-[12px] bg-indigo-50 text-indigo-700 px-[8px] py-[3px] rounded"
                                >
                                  ⚡ {feature}
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
                  Braemar MyClimate Technology Benefits
                </h3>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-[20px] mt-[20px]">
                  <h4 className="text-[16px] font-bold text-blue-900 mb-[15px]">
                    Intelligent Climate Control
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[8px]">
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>
                            <strong>Learning Algorithm:</strong> Adapts to your
                            heating preferences automatically
                          </span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>
                            <strong>Weather Compensation:</strong> Adjusts for
                            Melbourne&apos;s changing conditions
                          </span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>
                            <strong>Energy Optimization:</strong> Minimizes gas
                            consumption while maintaining comfort
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-blue-800 space-y-[8px]">
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>
                            <strong>Remote Control:</strong> Smartphone app with
                            full system control
                          </span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>
                            <strong>Schedule Management:</strong> Set heating
                            programs for daily/weekly routines
                          </span>
                        </li>
                        <li className="flex items-start gap-[8px]">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>
                            <strong>Usage Monitoring:</strong> Track energy
                            consumption and costs
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Why Melbourne Homeowners Choose Braemar
                </h3>

                <div className="grid md:grid-cols-3 gap-[15px] mt-[20px]">
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[24px] font-bold text-blue-600 mb-[5px]">
                      6★
                    </div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">
                      Energy Rating
                    </div>
                    <div className="text-[12px] text-gray-600">
                      Maximum efficiency saves $300+ annually
                    </div>
                  </div>
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[24px] font-bold text-green-600 mb-[5px]">
                      WiFi
                    </div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">
                      Smart Control
                    </div>
                    <div className="text-[12px] text-gray-600">
                      Control from anywhere via smartphone app
                    </div>
                  </div>
                  <div className="text-center bg-white border border-gray-200 rounded-lg p-[15px]">
                    <div className="text-[24px] font-bold text-purple-600 mb-[5px]">
                      15yr
                    </div>
                    <div className="text-[13px] font-semibold text-gray-900 mb-[5px]">
                      Warranty
                    </div>
                    <div className="text-[12px] text-gray-600">
                      Comprehensive coverage & peace of mind
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Professional Braemar Installation & Smart System Setup
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our Seeley International certified technicians provide
                  comprehensive Braemar installation and smart system setup.
                  This includes WiFi network configuration, MyClimate
                  optimization, smartphone app setup, and complete user training
                  to ensure you get maximum benefit from your intelligent
                  heating system.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-green-900 mb-[8px]">
                    Complete Braemar Service Package:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[10px] text-[13px] text-green-800">
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Professional installation & commissioning</li>
                        <li>• WiFi network setup & testing</li>
                        <li>• MyClimate system configuration</li>
                        <li>• Smartphone app installation & training</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Zone control system setup</li>
                        <li>• Energy monitoring activation</li>
                        <li>• Emergency repair service 24/7</li>
                        <li>• Annual smart system maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Braemar Smart System Maintenance & Support
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our specialized Braemar maintenance service goes beyond
                  traditional heating service to include smart system
                  diagnostics, WiFi connectivity testing, MyClimate
                  optimization, and app functionality verification. We ensure
                  both your heating performance and smart features operate
                  flawlessly.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-blue-900 mb-[8px]">
                    Smart System Service Includes:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-[10px] text-[13px] text-blue-800">
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• MyClimate system diagnostics</li>
                        <li>• WiFi connectivity testing</li>
                        <li>• App functionality verification</li>
                        <li>• Smart thermostat calibration</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-[3px]">
                        <li>• Energy efficiency analysis</li>
                        <li>• Zone control system service</li>
                        <li>• Software updates & optimization</li>
                        <li>• Performance monitoring setup</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Expert Braemar smart heating service, WiFi setup & MyClimate optimization. Professional installation, repairs & maintenance. Available 24/7!"
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

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-blue-900 mb-[10px]">
                    Braemar Smart Features
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-blue-800">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-green-600">📱</span>
                      <span>Smartphone App Control</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <span className="text-green-600">🧠</span>
                      <span>AI Learning Technology</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <span className="text-green-600">🌡️</span>
                      <span>Weather Compensation</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <span className="text-green-600">📊</span>
                      <span>Energy Usage Monitoring</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <span className="text-green-600">🔧</span>
                      <span>Self-Diagnostic System</span>
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Braemar Smart Heating!"
                  dataText="WiFi enabled with MyClimate technology"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Smart Heating \n Technology Experts"}
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
              dataSubtitle="seeley international partner"
              dataTitle="Authorized Braemar Technology Specialists"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
