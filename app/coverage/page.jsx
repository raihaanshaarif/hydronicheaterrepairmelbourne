//Import Sections
import PageTitle from "../_components/Common/PageTitle";
import CoverageLayout from "../_components/Coverage/CoverageLayout";

export const metadata = {
  title:
    "Service Areas Melbourne | hydronic heating Installation & Repair Coverage",
  description:
    "hydronic heating services across Melbourne suburbs. Professional installation, repair & maintenance in all metro areas. Licensed technicians, free quotes, same-day service available.",
  keywords:
    "hydronic heating Melbourne suburbs, HVAC services coverage Melbourne, hydronic heating installation areas, heating repair service areas, Melbourne hydronic heating zones",
  openGraph: {
    title: "hydronic heating Service Areas Melbourne | Complete Coverage",
    description:
      "Professional hydronic heating services across all Melbourne suburbs. Expert installation, repairs & maintenance. Licensed technicians available in your area.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melbourne hydronic heating Service Areas | Complete Coverage",
    description:
      "Expert hydronic heating services across Melbourne. Installation, repairs & maintenance in all metro suburbs.",
  },
  alternates: {
    canonical: "https://ductedheaterrepairmelbourne.com.au/coverage",
  },
  other: {
    "geo.region": "AU-VIC",
    "geo.placename": "Melbourne",
    "geo.position": "-37.8136;144.9631",
    ICBM: "-37.8136, 144.9631",
  },
};

export default function Coverage() {
  return (
    <>
      <PageTitle dataTitle="Service Areas" />
      <main id="tt-pageContent" className="overflow-hidden">
        <CoverageLayout />
      </main>
    </>
  );
}
