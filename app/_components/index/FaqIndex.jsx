"use client";
import SectionTitle from "../Common/SectionTitle";
import Accordion from "../Common/Accordion";
import Link from "next/link";
import { dataAccordion } from "../Common/AccordionData__index";
const FaqIndex = () => {
  return (
    <>
      <div className="container container__fluid-lg section__inner">
        <div className="md:flex md:gap-[30px]">
          <div className="md:basis-1/2">
            <SectionTitle
              dataSubtitle="frequently asked questions"
              dataTitle={`What are the benefits \n of heating service?`}
              dataTextUnder="FAQ"
              dataMaxWidth="480px"
              dataAddClass="blocktitle__left"
            />
            <p className="no-resize-text">
              A professionally installed and serviced heating system offers
              numerous benefits for both workplaces and homes, ensuring comfort,
              safety, and efficiency throughout the colder months.
            </p>
            {/* <Link href="/faq" className="lg:mt-[33px] lg-max:mt-[19px] btn">
              <span>Ask question</span>
            </Link> */}
          </div>
          <div className="md:basis-1/2 sm-max:mt-[35px] only-md:mt-[40px]">
            <Accordion dataSrcData={dataAccordion} />
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqIndex;
