import PageTitle from "../_components/Common/PageTitle";

import AboutCompany from "../_components/About/AboutCompany";
import WhyChooseUs from "../_components/About/WhyChooseUs";
import RSF from "../_components/About/RSF";
import Portfolio from "../_components/About/Portfolio";
import OurTeam from "../_components/About/OurTeam";
import OurCertificates from "../_components/About/OurCertificates";
import AreasWeCover from "../_components/About/AreasWeCover";

export const metadata = {
  title:
    "About Ducted Heating Repair Melbourne | Expert Technicians | Licensed & Insured",
  description:
    "Learn about Melbourne's #1 ducted heating specialists. Expert technicians, 10+ years experience, transparent pricing, 100% satisfaction guarantee. Trusted ducted heating services.",
  keywords:
    "about ducted heating melbourne, ducted heating specialists, melbourne heating experts, licensed heating technicians, ducted heating company melbourne, heating service experience",
  alternates: {
    canonical: "https://ductedheaterrepairmelbourne.com.au/about",
  },
  openGraph: {
    title: "About Ducted Heating Repair Melbourne | Expert Technicians",
    description:
      "Melbourne's #1 ducted heating specialists with 10+ years experience. Expert technicians, transparent pricing, 100% satisfaction guarantee.",
    url: "https://ductedheaterrepairmelbourne.com.au/about",
    type: "website",
  },
};

export default function About() {
  return (
    <>
      <PageTitle dataTitle="About us" />
      <main id="tt-pageContent" className="overflow-hidden">
        <AboutCompany />
        <WhyChooseUs />
        <RSF />

        <AreasWeCover />
      </main>
    </>
  );
}
