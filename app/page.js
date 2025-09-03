import MainSlider from "./_components/index/MainSlider";
import OurServicesIndex from "./_components/index/OurServicesIndex";
import AboutIndex from "./_components/index/AboutIndex";
import TabsIndex from "./_components/index/TabsIndex";
import AdditionalServices from "./_components/index/AdditionalServices";
import HowWeWork from "./_components/index/HowWeWork";
import PromoFullWidth from "./_components/Common/PromoFullWidth";
import RequestQuote from "./_components/index/RequestQuote";
import FaqIndex from "./_components/index/FaqIndex";
import Testimonials from "./_components/index/Testimonials";
import NewsLayout from "./_components/index/NewsLayout";
import Partners from "./_components/index/Partners";
export default function Home() {
  return (
    <main id="tt-pageContent" className="overflow-hidden">
      <MainSlider />
      <OurServicesIndex />
      <AboutIndex />
      {/* <PromoFullWidth
        dataIcon="icon-154518"
        dataTitle={
          "Efficient Residential & Commercial  \n Gas Heating Services!"
        }
        dataText="We make homes and businesses in Melbourne warm and comfortable again with expert gas heater installation, repairs, and servicing."
        dataBgSrc="/images/bg-01.jpg"
        dataMaxWidth="745"
        dataAddClass="fullwidthPromo__inner_tab"
      /> */}
      {/* <TabsIndex /> */}
      <AdditionalServices />
      {/* <HowWeWork /> */}
      {/* <PromoFullWidth
        dataIcon="icon-3410263"
        dataTitle={"Emergency Gas Heating Service \n 24 Hours 7 Days a Week"}
        dataText="Quality Gas Heating Services from a Team of Professionals"
        dataBgSrc="/images/bg-02.jpg"
        dataMaxWidth="745"
        dataAddClass="fullwidthPromo__inner_box section__indent-top"
      /> */}
      {/* <RequestQuote /> */}
      <Testimonials />
      <FaqIndex />

      {/* <NewsLayout /> */}
      {/* <Partners /> */}
    </main>
  );
}
