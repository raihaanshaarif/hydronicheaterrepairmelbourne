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
    "Bosch Hydronic Heater Repair Melbourne | Service, Installation & Maintenance | 24/7 Emergency",
  description:
    "Professional Bosch hydronic heater repair, service & installation in Melbourne. 24/7 emergency repairs, certified HVAC technicians, genuine parts. Same-day service available. Call 0405133761 now!",
  keywords:
    "Bosch repair Melbourne, Bosch hydronic heater service, Bosch installation Melbourne, Bosch maintenance, Bosch emergency repair, hydronic heater repair Melbourne, Bosch technician Melbourne",
};

//Page Layout
export default function BoschPage() {
  return (
    <>
      <PageTitle dataTitle="Bosch Hydronic Heater Repair & Service Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="bosch repair service melbourne"
                  dataTitle="Professional Bosch Hydronic Heater Repair & Service Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="bosch hydronic heater repair service melbourne"
                    loading={`eager`}
                  />
                </div>

                <p className={`${styles.indent__top2}`}>
                  Melbourne&apos;s leading Bosch hydronic heating repair and
                  service specialists. Our certified HVAC technicians provide
                  24/7 emergency repairs, professional installation,
                  comprehensive maintenance, and expert service for all Bosch
                  hydronic heating models across Melbourne. With genuine parts,
                  upfront pricing, and same-day service available, we&apos;re
                  your trusted Bosch repair experts.
                </p>

                <p className="indent__top">
                  Don&apos;t let a broken Bosch hydronic heating system leave
                  you cold. Our emergency repair service operates 24/7 across
                  all Melbourne suburbs with certified HVAC technicians, genuine
                  Bosch parts, and guaranteed repairs. From urgent breakdowns to
                  scheduled maintenance, we keep your Bosch heating system
                  running efficiently.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[20px] mt-[20px]">
                  <h3 className="text-[18px] font-bold text-red-900 mb-[10px]">
                    🚨 Emergency Bosch Repair Service - Available 24/7
                  </h3>
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Same-day emergency repairs</li>
                        <li>✓ All Melbourne suburbs covered</li>
                        <li>✓ Certified Bosch HVAC technicians</li>
                        <li>✓ Genuine parts always in stock</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-[13px] text-red-800 space-y-[5px]">
                        <li>✓ Upfront pricing - no surprises</li>
                        <li>✓ 12-month repair warranty</li>
                        <li>✓ Insurance claims assistance</li>
                        <li>✓ Senior discounts available</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-[15px] text-center">
                    <p className="text-[16px] font-bold text-red-900 mb-[8px]">
                      EMERGENCY BOSCH REPAIR: 0405133761
                    </p>
                    <p className="text-[13px] text-red-700">
                      Don&apos;t freeze tonight - call now for immediate
                      assistance
                    </p>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Our Bosch hydronic heating Repair Services Melbourne
                </h3>

                <div className="grid md:grid-cols-2 gap-[20px] mt-[20px]">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-blue-900 mb-[8px]">
                      Emergency Repairs
                    </h4>
                    <p className="text-[13px] text-blue-800 mb-[10px]">
                      24/7 emergency Bosch repair service across Melbourne. No
                      heating? Strange noises? System failures? We fix it fast
                      with genuine parts.
                    </p>
                    <ul className="text-[12px] text-blue-700 space-y-[2px]">
                      <li>• Heat exchanger repairs</li>
                      <li>• Electronic control fixes</li>
                      <li>• Thermostat replacement</li>
                      <li>• Motor repairs</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-green-900 mb-[8px]">
                      Professional Installation
                    </h4>
                    <p className="text-[13px] text-green-800 mb-[10px]">
                      Expert Bosch installation by licensed HVAC technicians.
                      Full compliance certificates and manufacturer warranty
                      protection included.
                    </p>
                    <ul className="text-[12px] text-green-700 space-y-[2px]">
                      <li>• Licensed HVAC installation</li>
                      <li>• Ductwork installation</li>
                      <li>• Electrical connections</li>
                      <li>• Safety testing</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-yellow-900 mb-[8px]">
                      Annual Maintenance
                    </h4>
                    <p className="text-[13px] text-yellow-800 mb-[10px]">
                      Comprehensive Bosch maintenance service to prevent
                      breakdowns, maintain efficiency, and extend system
                      lifespan.
                    </p>
                    <ul className="text-[12px] text-yellow-700 space-y-[2px]">
                      <li>• Complete safety inspection</li>
                      <li>• Cleaning & tune-up</li>
                      <li>• Filter replacement</li>
                      <li>• Performance optimization</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-[15px]">
                    <h4 className="text-[16px] font-semibold text-purple-900 mb-[8px]">
                      Parts & Warranty Service
                    </h4>
                    <p className="text-[13px] text-purple-800 mb-[10px]">
                      Genuine Bosch parts and warranty repairs. We handle all
                      warranty claims and provide authentic replacement
                      components.
                    </p>
                    <ul className="text-[12px] text-purple-700 space-y-[2px]">
                      <li>• Genuine Bosch parts</li>
                      <li>• Warranty claim processing</li>
                      <li>• Parts availability guarantee</li>
                      <li>• Technical support</li>
                    </ul>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Common Bosch hydronic heating Problems We Fix
                </h3>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-[20px] mt-[20px]">
                  <div className="grid md:grid-cols-2 gap-[15px]">
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Heating Issues:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• No heat or insufficient heating</li>
                        <li>• Uneven heating throughout home</li>
                        <li>• System won&apos;t start or operate</li>
                        <li>• Frequent cycling on and off</li>
                        <li>• Cold air blowing from vents</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-gray-900 mb-[8px]">
                        Safety & Performance:
                      </h4>
                      <ul className="text-[13px] text-gray-700 space-y-[3px]">
                        <li>• Strange noises or vibrations</li>
                        <li>• Electrical faults or safety concerns</li>
                        <li>• High energy bills</li>
                        <li>• Control system issues</li>
                        <li>• Error codes on display</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="ttsubtitle ttsubtitle__top">
                  Melbourne Areas We Service for Bosch Repairs
                </h3>

                <p className="text-[14px] text-gray-700 mt-[15px]">
                  Our Certified Bosch HVAC technicians provide repair, service,
                  installation, and maintenance across all Melbourne
                  metropolitan areas. We cover inner Melbourne, eastern suburbs,
                  western suburbs, northern suburbs, southeastern suburbs, and
                  the Mornington Peninsula.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-[15px] mt-[15px]">
                  <h4 className="text-[14px] font-bold text-blue-900 mb-[8px]">
                    Melbourne Suburbs We Cover:
                  </h4>
                  <div className="grid md:grid-cols-3 gap-[10px] text-[13px] text-blue-800">
                    <div>
                      <p className="font-semibold mb-[5px]">Inner Melbourne:</p>
                      <p>
                        Carlton, Fitzroy, South Yarra, Toorak, Richmond,
                        Hawthorn
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">Eastern Suburbs:</p>
                      <p>
                        Box Hill, Glen Waverley, Ringwood, Blackburn, Camberwell
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-[5px]">All Other Areas:</p>
                      <p>
                        Western, Northern, South Eastern suburbs + Mornington
                        Peninsula
                      </p>
                    </div>
                  </div>
                </div>

                <PromoLayout
                  dataText="Emergency Bosch hydronic heating repair Melbourne! Available 24/7 with certified HVAC technicians, genuine parts, and same-day service. Don't freeze - call now!"
                  dataScrImg="/images/services/promo01-img01.png"
                  dataScrImg2="/images/services/promo01-img01.webp"
                />
              </div>

              <div
                className={`${styles.aside__wrapper} lg:basis-1/3 md:basis-5/12 md-max:mt-[40px] sm-max:mt-[35px] no-resize-text`}
              >
                <div>
                  <div className={`ttsubtitle`}>
                    Bosch hydronic heating Services
                  </div>
                  <ServicesListAside dataList={ServicesListData} />
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-[15px] mb-[20px]">
                  <h4 className="text-[16px] font-bold text-red-900 mb-[10px]">
                    Emergency Bosch Repair
                  </h4>
                  <div className="space-y-[8px] text-[13px] text-red-800">
                    <div>
                      <strong>Available:</strong> 24/7 Every Day
                    </div>
                    <div>
                      <strong>Response:</strong> Same Day Service
                    </div>
                    <div>
                      <strong>Coverage:</strong> All Melbourne
                    </div>
                    <div>
                      <strong>Warranty:</strong> 12 Months
                    </div>
                    <div>
                      <strong>Parts:</strong> Genuine Bosch
                    </div>
                    <div>
                      <strong>Pricing:</strong> Upfront & Fair
                    </div>
                  </div>
                </div>

                <PromoAside
                  dataTitle="Bosch Repair Experts!"
                  dataText="certified HVAC technicians & genuine parts"
                  dataTelefon="0405133761"
                />

                <BoxListAside
                  dataTitle={"Why Choose Our \n Bosch Service"}
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
              dataSubtitle="melbourne bosch specialists"
              dataTitle="Professional Bosch hydronic heating Service Team"
            />
            <LogoPartners wrapperClass="grid sm-max:grid-cols-2 lg-max:grid-cols-3 lg:grid-cols-4 lg:gap-[30px] only-lg:gap-[20px] only-md:gap-[20px] sm-max:gap-[15px] lg:mr-[40px] items-start" />
          </div>
        </div>
      </main>
    </>
  );
}
