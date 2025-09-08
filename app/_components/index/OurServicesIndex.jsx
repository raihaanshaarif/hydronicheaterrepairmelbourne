import SectionTitle from "../Common/SectionTitle";
import CaruselServices from "../Common/CaruselServices";
const OurServicesIndex = () => {
  return (
    <>
      <div className="container container__fluid-lg section__indent-top ">
        <div className="md:flex md:gap-[30px] holder__title">
          <div className="md:basis-1/2">
            <SectionTitle
              dataSubtitle="our services"
              dataTitle="Trusted Ducted Heating Specialists"
              dataTextUnder="Services"
              dataAddClass="blocktitle__nomargin blocktitle__left"
              dataMaxWidth="430px"
            />
          </div>
          <div className="md:basis-1/2 relative">
            <p className="ttnotes no-resize-text">
              Professional ducted heating service and repairs across Melbourne —
              all brands, all problems, handled by licensed experts.
            </p>
          </div>
        </div>
      </div>
      <div className="container__fluid">
        <div className="lg__indent-x">
          <CaruselServices />
        </div>
      </div>
    </>
  );
};
export default OurServicesIndex;
