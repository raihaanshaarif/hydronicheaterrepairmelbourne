import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from "../_components/Common/SectionTitle";
import TabsServices from "../_components/Services/TabServices";
import WhatIsIncluded from "../_components/Services/WhatIsIncluded";
import ListWithTitle from "../_components/Common/ListWithTitle";
import TabInfo from "../_components/Services/TabInfo";
//Import Data
import { dataImpactCost } from "../_components/Services/WhatImpactsCostData";

export const metadata = {
  title:
    "Ducted Heating Services Melbourne | Installation, Repair & Maintenance",
  description:
    "Professional ducted heating services in Melbourne. Expert installation, repairs, servicing & maintenance. Licensed technicians, 24/7 emergency support. Free quotes available.",
  keywords:
    "ducted heating services Melbourne, ducted heating installation, ducted heating repairs, ducted heating maintenance, HVAC services Melbourne, heating system servicing",
  openGraph: {
    title: "Ducted Heating Services Melbourne | Expert Installation & Repair",
    description:
      "Professional ducted heating services across Melbourne. Expert installation, repairs & maintenance by licensed technicians. Emergency support available.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ducted Heating Services Melbourne | Professional Installation & Repair",
    description:
      "Expert ducted heating services in Melbourne. Installation, repairs, maintenance by licensed technicians. Emergency support available.",
  },
  alternates: {
    canonical: "https://ductedheaterrepairmelbourne.com.au/services",
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne",
    "geo.position": "-37.8136;144.9631",
    ICBM: "-37.8136, 144.9631",
  },
};

//Page Layout
export default function Services() {
  return (
    <>
      <PageTitle dataTitle="Ducted Heating Services" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container__fluid">
            <SectionTitle
              dataSubtitle="professional ducted heating services"
              dataTitle={"Reliable Ducted Heating Services You Can Trust"}
              dataTextUnder="Expert Care"
              dataText="We provide comprehensive ducted heating installation, repair, and maintenance services. Our certified technicians ensure your heating system operates safely and efficiently year-round."
              dataAddClass="text-center"
              dataMaxWidth="600px"
            />
          </div>
          <TabsServices />
        </div>
        <div className="section__indent">
          <div className="container container__fluid-lg">
            <WhatIsIncluded />
          </div>
        </div>
        <div className="section__indent base__bg section__inner">
          <div className="container container__fluid-lg">
            <SectionTitle dataTitle="What Affects Service Pricing?" />
            <div className="mb-[26px]">
              <ListWithTitle
                dataLayout={dataImpactCost}
                dataAddClass="grid md-max:gap-[16px] md:gap-[30px] md:grid-cols-2"
              />
            </div>
          </div>
        </div>
        <TabInfo />
      </main>
    </>
  );
}
