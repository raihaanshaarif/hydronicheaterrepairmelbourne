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
import { EmergencyListData } from "../../../_components/ServicesEmergency/EmergencyListData";
import imageLayout from "../../../../public/images/services/services_img02.jpg";

// Emergency System Leak Detection & Repairs specific data
const emergencyLeakDetectionInclude = [
  {
    id: 1,
    title: "24/7 Emergency Leak Response:",
    text: "Immediate response to hydronic heating system leaks that threaten property damage. Our emergency teams are equipped with advanced leak detection equipment and can respond within 60 minutes in most Melbourne areas.",
  },
  {
    id: 2,
    title: "Emergency Leak Isolation:",
    text: "Quick identification and isolation of leak sources to prevent further water damage to your property. We use emergency shutoff procedures and temporary repairs to stop leaks immediately.",
  },
  {
    id: 3,
    title: "Same-Day Emergency Repairs:",
    text: "Complete emergency leak repairs using professional-grade materials and techniques. Our emergency vehicles carry common replacement parts for immediate repairs to restore your heating system.",
  },
  {
    id: 4,
    title: "Property Damage Prevention:",
    text: "Emergency assessment and protection measures to minimize water damage to floors, walls, and personal property. We work quickly to contain leaks and protect your valuable belongings.",
  },
];

// SEO Metadata
export const metadata = {
  title:
    "Emergency System Leak Detection & Repairs Melbourne | 24/7 Hydronic Leak Service",
  description:
    "24/7 emergency hydronic heating system leak detection and repairs in Melbourne. Immediate response to prevent property damage. Call 0405133761!",
  keywords:
    "emergency leak detection melbourne, 24/7 hydronic leak repair, emergency system leak service, urgent leak detection, emergency leak response",
};

//Page Layout
export default function EmergencySystemLeakDetectionRepairs() {
  return (
    <>
      <PageTitle dataTitle="Emergency System Leak Detection & Repairs Melbourne" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container container__fluid-xl">
            <div className="md:flex md:gap-[30px] lg:gap-[60px]">
              <div className="lg:basis-2/3 md:basis-7/12 no-resize-text">
                <SectionTitle
                  dataSubtitle="emergency system leak detection & repairs"
                  dataTitle="24/7 Emergency Hydronic Heating System Leak Detection & Repairs Melbourne"
                  dataMaxWidth="630px"
                />
                <div className="leading-none">
                  <Image
                    src={imageLayout}
                    width={735}
                    height={511}
                    quality={0}
                    alt="emergency hydronic heating system leak detection repairs melbourne"
                    loading={`eager`}
                  />
                </div>
                <p className={`${styles.indent__top2}`}>
                  When your hydronic heating system develops a leak, immediate
                  action is crucial to prevent extensive property damage. Our
                  24/7 emergency leak detection and repair service provides
                  rapid response throughout Melbourne. Using advanced detection
                  equipment and professional repair techniques, we quickly
                  locate and fix leaks to protect your property and restore your
                  heating system.
                </p>
                <div className="sm:flex sm:gap-[30px] mt-[20px]">
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Emergency Leak Detection</a>
                      </li>
                      <li>
                        <a href="#">Immediate Leak Isolation</a>
                      </li>
                      <li>
                        <a href="#">Same-Day Repairs</a>
                      </li>
                      <li>
                        <a href="#">Property Protection</a>
                      </li>
                      <li>
                        <a href="#">24/7 Response Service</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sm:basis-1/2">
                    <ul className="list__type1">
                      <li>
                        <a href="#">Thermal Imaging Detection</a>
                      </li>
                      <li>
                        <a href="#">Pipe Leak Repairs</a>
                      </li>
                      <li>
                        <a href="#">Radiator Leak Fixes</a>
                      </li>
                      <li>
                        <a href="#">Emergency Shutoffs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="ttsubtitle ttsubtitle__top">
                  Our Emergency System Leak Detection & Repair Services include:
                </h4>
                <ListWithTitle
                  dataLayout={emergencyLeakDetectionInclude}                  dataAddClass="grid md-max:gap-[16px] md:gap-[16px]"
                />
                <h5 className="ttsubtitle ttsubtitle__top">
                  Rapid Emergency Response
                </h5>
                <p>
                  Our emergency leak detection service is available 24 hours a
                  day, 7 days a week. We understand that leaks can cause
                  significant property damage quickly, so we prioritize
                  emergency calls and aim to have a technician at your property
                  within 60 minutes of your call.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Advanced Detection Technology
                </h5>
                <p>
                  Our emergency vehicles are equipped with thermal imaging
                  cameras, acoustic leak detectors, and moisture meters to
                  quickly locate the source of leaks, even behind walls or under
                  floors. This technology allows us to minimize damage to your
                  property while finding leaks fast.
                </p>
                <h5 className="ttsubtitle ttsubtitle__top">
                  Immediate Leak Repairs
                </h5>
                <p>
                  Once we locate the leak, our technicians can perform immediate
                  repairs using professional-grade materials. Our emergency
                  service vehicles carry common replacement parts and repair
                  materials, allowing us to fix most leaks on the same visit and
                  restore your heating system quickly.
                </p>
                <PromoLayout />
                <LogoPartners />
              </div>
              <div className="lg:basis-1/3 md:basis-5/12">
                <PromoAside />
                <BoxListAside dataList={ReasonsListData} />
                <FormAside />
                <ServicesListAside dataList={EmergencyListData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

