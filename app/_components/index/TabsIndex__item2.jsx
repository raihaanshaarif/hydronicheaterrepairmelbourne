import SectionTitle from "../Common/SectionTitle";
import Signature from "../Common/Signature";
import BoxLayout from "./BoxLayout";
import styles from "./TabsIndex.module.css";
const colData = [
  {
    id: 1,
    icon: "icon-780840",
    title: "Experienced hydronic heating Team",
    text: "Our technicians have years of hands-on knowledge with all types of hydronic heating systems.",
  },
  {
    id: 2,
    icon: "icon-2058768",
    title: "Friendly, Professional Service",
    text: "We provide helpful advice and courteous service from start to finish.",
  },
  {
    id: 3,
    icon: "icon-1179233",
    title: "Fully Licensed & Insured",
    text: "Every technician is certified and insured for your peace of mind.",
  },
  {
    id: 4,
    icon: "icon-1233103",
    title: "Consistent Quality",
    text: "We ensure every job meets the highest standards for safety and reliability.",
  },
];
const colRightData = colData.filter((colData) => colData.id % 2 == 0);
const colLeftData = colData.filter((colData) => colData.id % 2 !== 0);
const TabsIndex__item2 = () => {
  return (
    <div className="md:flex md:gap-[30px]">
      <div className={`basis-1/2 md-max:mt-[-8px]`}>
        <SectionTitle
          dataSubtitle="why choose us"
          dataTitle="Expect the Best with Our Service"
          dataMaxWidth="422px"
        />
        <p>
          Experience the difference with our dedicated hydronic heating service in
          Melbourne. We deliver reliable, high-quality hydronic heating repairs,
          servicing, and installation at honest prices, always backed by a
          satisfaction guarantee. Our fully licensed technicians are ready to
          respond promptly to your home or business hydronic heating needs.
        </p>
        <ul className="list__type1 lg-max:mt-[19px] lg:mt-[33px]">
          <li>Clear, upfront pricing for every hydronic heating job</li>
          <li>Guaranteed workmanship and customer satisfaction</li>
        </ul>
        <div className={styles.signature__indent}>
          {/* <Signature
            dataSrcImg="/images/signature-img01.png"
            dataTitle="CEO & Founder"
          /> */}
        </div>
      </div>
      <div
        className="basis-1/2 flex
				lg:gap-[30px]  lg-max:gap-[15px]
				only-md:mt-[40px] sm-max:mt-[35px]"
      >
        <div className={`basis-1/2 ${styles.custom__col}`}>
          <BoxLayout dataSrcData={colLeftData} />
        </div>
        <div className={`basis-1/2 ${styles.custom__col}`}>
          <BoxLayout dataSrcData={colRightData} />
        </div>
      </div>
    </div>
  );
};
export default TabsIndex__item2;
