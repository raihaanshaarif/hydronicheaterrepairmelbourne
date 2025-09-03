import PageTitle from "../_components/Common/PageTitle";
import SectionTitle from "../_components/Common/SectionTitle";
import TabsServices from "../_components/Services/TabServices";
import WhatIsIncluded from "../_components/Services/WhatIsIncluded";
import ListWithTitle from "../_components/Common/ListWithTitle";
import TabInfo from "../_components/Services/TabInfo";
//Import Data
import { dataImpactCost } from "../_components/Services/WhatImpactsCostData";
//Page Layout
export default function Services() {
  return (
    <>
      <PageTitle dataTitle="Gas Heater Services" />
      <main id="tt-pageContent" className="overflow-hidden">
        <div className="section__indent">
          <div className="container__fluid">
            <SectionTitle
              dataSubtitle="professional gas heater services"
              dataTitle={"Reliable Gas Heater Services You Can Trust"}
              dataTextUnder="Expert Care"
              dataText="We provide comprehensive gas heater installation, repair, and maintenance services. Our certified technicians ensure your heating system operates safely and efficiently year-round."
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
