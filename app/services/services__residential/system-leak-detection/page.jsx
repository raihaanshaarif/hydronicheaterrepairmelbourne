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

// System Leak Detection specific data
const systemLeakDetectionInclude = [
  {
    id: 1,
    title: "Advanced Leak Detection Equipment:",
    text: "Using thermal imaging cameras, acoustic leak detectors, and pressure testing equipment to locate even the smallest leaks in your hydronic heating system. Our technology can detect leaks within walls and under floors without damage.",
  },
  {
    id: 2,
    title: "Complete System Inspection:",
    text: "Comprehensive inspection of all system components including pipes, radiators, valves, fittings, and connection points. We check both visible and hidden areas to ensure no leak goes undetected.",
  },
  {
    id: 3,
    title: "Immediate Leak Repairs:",
    text: "Same-day repair service for detected leaks using professional-grade materials and techniques. We carry common replacement parts for quick repairs and use only approved materials for lasting results.",
  },
  {
    id: 4,
    title: "Preventive Leak Assessment:",
    text: "Identifying potential weak points in your system before they become leaks. Our assessment includes pipe condition evaluation, joint inspection, and system pressure analysis to prevent future issues.",
  },
];

// SEO Metadata
export const metadata = {
  title: "System Leak Detection Melbourne | Hydronic Heater Leak Repair",
  description:
    "Professional hydronic heating system leak detection and repair in Melbourne. Advanced thermal imaging technology. Same-day leak repairs. Call 0405133761!",
  keywords:
    "hydronic heating leak detection melbourne, system leak repair, thermal imaging leak detection, pipe leak detection, radiator leak repair, heating system leak",
};

//Page Layout
export default function SystemLeakDetection() {
  return (
    <>
      <PageTitle dataTitle="System Leak Detection Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="system leak detection"
                  dataTitle="Professional Hydronic Heating System Leak Detection Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="hydronic heating system leak detection melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  Hydronic heating system leaks can cause significant damage to
                  your property if not detected and repaired quickly. Our
                  professional leak detection service uses advanced technology
                  to locate leaks in your hydronic heating system without
                  unnecessary damage to your walls or floors. From minor drips
                  to major leaks, we provide comprehensive detection and
                  immediate repair services throughout Melbourne.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Pipe Leak Detection</a>
                      </li>
                      <li>
                        <a href="#">Radiator Leak Repairs</a>
                      </li>
                      <li>
                        <a href="#">Valve Leak Detection</a>
                      </li>
                      <li>
                        <a href="#">Joint Leak Repairs</a>
                      </li>
                      <li>
                        <a href="#">Boiler Leak Detection</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Pressure Testing</a>
                      </li>
                      <li>
                        <a href="#">Thermal Imaging</a>
                      </li>
                      <li>
                        <a href="#">Hidden Leak Detection</a>
                      </li>
                      <li>
                        <a href="#">Preventive Inspections</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our System Leak Detection Services include:
                </h4>
                <ListWithTitle
                  dataLayout={systemLeakDetectionInclude}
                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Advanced Detection Technology
                </h5>
                <p>
                  We use state-of-the-art thermal imaging cameras and acoustic
                  leak detectors to pinpoint leaks without damaging your
                  property. Our equipment can detect temperature variations and
                  sound signatures that indicate leaks behind walls and under
                  floors, saving you from costly exploratory work.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Comprehensive System Assessment
                </h5>
                <p>
                  Beyond finding existing leaks, we perform a complete system
                  evaluation to identify areas prone to future leaks. This
                  includes checking pipe conditions, joint integrity, pressure
                  levels, and component wear to prevent problems before they
                  occur.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Same-Day Leak Repairs
                </h5>
                <p>
                  When we detect leaks, we&apos;re equipped to repair them
                  immediately in most cases. Our service vehicles carry common
                  replacement parts and professional repair materials, allowing
                  us to fix leaks on the same visit and minimize water damage to
                  your property.
                </p>
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataList={ReasonsListData} />

                <ServicesListAside dataList={ServicesListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
