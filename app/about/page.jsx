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
    "About hydronic heating Repair Melbourne | Expert Technicians | Licensed & Insured",
  description:
    "Learn about Melbourne's #1 hydronic heating specialists. Expert technicians, 10+ years experience, transparent pricing, 100% satisfaction guarantee. Trusted hydronic heating services.",
  keywords:
    "about hydronic heating melbourne, hydronic heating specialists, melbourne heating experts, licensed heating technicians, hydronic heating company melbourne, heating service experience",
  alternates: {
    canonical: "https://ductedheaterrepairmelbourne.com.au/about",
  },
  openGraph: {
    title: "About hydronic heating Repair Melbourne | Expert Technicians",
    description:
      "Melbourne's #1 hydronic heating specialists with 10+ years experience. Expert technicians, transparent pricing, 100% satisfaction guarantee.",
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
