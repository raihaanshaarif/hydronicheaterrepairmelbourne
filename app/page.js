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

export const metadata = {
  title:
    "Hydronic Heater Repair Melbourne | Emergency Service & Installation | #1 Experts",
  description:
    "★★★★★ Melbourne's #1 Hydronic Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
  keywords:
    "hydronic heater repair melbourne, emergency hydronic heater repair, hydronic heater installation melbourne, hydronic heater service melbourne, hydronic heater maintenance melbourne, same day hydronic heater repair, 24/7 emergency hydronic heater, melbourne hydronic heater specialists, hydronic heating system repair, hydronic heater cleaning melbourne",
  alternates: {
    canonical: "https://hydronicheaterrepairmelbourne.com.au",
  },
  openGraph: {
    title:
      "Hydronic Heater Repair Melbourne | Emergency Service & Installation | #1 Experts",
    description:
      "★★★★★ Melbourne's #1 Hydronic Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
    url: "https://hydronicheaterrepairmelbourne.com.au",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://hydronicheaterrepairmelbourne.com.au/#business",
            name: "Hydronic Heater Repair Melbourne",
            description:
              "Melbourne's #1 Hydronic Heater Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians.",
            url: "https://hydronicheaterrepairmelbourne.com.au",
            telephone: "0405133761",
            email: "nihaanexpertise@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Melbourne",
              addressRegion: "Victoria",
              addressCountry: "Australia",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-37.8136",
              longitude: "144.9631",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Melbourne",
              },
              {
                "@type": "State",
                name: "Victoria",
              },
            ],
            serviceType: [
              "Hydronic Heater Repair",
              "Hydronic Heater Installation",
              "Hydronic Heater Maintenance",
              "Emergency Hydronic Heater Service",
              "Hydronic Heater Cleaning",
              "Hydronic Heating System Service",
            ],
            priceRange: "$$",
            openingHours: ["Mo-Su 00:00-23:59"],
            image:
              "https://hydronicheaterrepairmelbourne.com.au/images/hydronic-heater-service-melbourne.jpg",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Hydronic Heater Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Hydronic Heater Repair Melbourne",
                    description:
                      "24/7 emergency hydronic heater repair service in Melbourne. Same-day service available.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hydronic Heater Installation Melbourne",
                    description:
                      "Professional hydronic heater installation service for residential and commercial properties.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hydronic Heater Service & Maintenance Melbourne",
                    description:
                      "Regular hydronic heater servicing and maintenance to keep your heating system running efficiently.",
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            sameAs: [
              "https://www.facebook.com/hydronicheaterrepairmelbourne",
              "https://www.instagram.com/hydronicheaterrepairmelb",
            ],
          }),
        }}
      />

      <main id="tt-pageContent" className="overflow-hidden">
        {/* H1 hidden for SEO - visible in MainSlider */}
        <h1 style={{ position: "absolute", left: "-9999px", fontSize: "1px" }}>
          Hydronic Heater Repair Melbourne | Emergency Service & Installation
        </h1>

        <MainSlider />
        <OurServicesIndex />
        <AboutIndex />
        <AdditionalServices />
        <Testimonials />
        <FaqIndex />
        <Partners />

        {/* Emergency Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EmergencyService",
              name: "Emergency Hydronic Heater Repair Melbourne",
              description:
                "24/7 emergency hydronic heater repair service available throughout Melbourne. Same-day service and immediate response for heating emergencies.",
              provider: {
                "@type": "LocalBusiness",
                name: "Hydronic Heater Repair Melbourne",
                telephone: "0405133761",
                email: "nihaanexpertise@gmail.com",
              },
              areaServed: {
                "@type": "City",
                name: "Melbourne",
                containedInPlace: {
                  "@type": "State",
                  name: "Victoria",
                },
              },
              availableLanguage: "English",
              telephone: "0405133761",
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Hydronic Heater Repair Melbourne",
              description:
                "Professional hydronic heater repair, installation and maintenance services in Melbourne. Emergency repairs available 24/7.",
              provider: {
                "@type": "LocalBusiness",
                name: "Hydronic Heater Repair Melbourne",
                telephone: "0405133761",
                email: "nihaanexpertise@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Melbourne",
                  addressRegion: "Victoria",
                  addressCountry: "Australia",
                },
              },
              areaServed: "Melbourne",
              serviceType: "Hydronic Heater Repair",
              category: "Home Services",
            }),
          }}
        />
      </main>
    </>
  );
}
