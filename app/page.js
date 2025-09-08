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
    "Ducted Heating Repair Melbourne | Emergency Service & Installation | #1 Experts",
  description:
    "★★★★★ Melbourne's #1 Ducted Heating Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
  keywords:
    "ducted heating repair melbourne, emergency ducted heating repair, ducted heating installation melbourne, ducted heating service melbourne, ducted heating maintenance melbourne, same day ducted heating repair, 24/7 emergency ducted heating, melbourne ducted heating specialists, ducted heating system repair, ducted heating cleaning melbourne",
  alternates: {
    canonical: "https://ductedheaterrepairmelbourne.com.au",
  },
  openGraph: {
    title:
      "Ducted Heating Repair Melbourne | Emergency Service & Installation | #1 Experts",
    description:
      "★★★★★ Melbourne's #1 Ducted Heating Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians. Free Quotes. Call 0405133761!",
    url: "https://ductedheaterrepairmelbourne.com.au",
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
            "@id": "https://ductedheaterrepairmelbourne.com.au/#business",
            name: "Ducted Heating Repair Melbourne",
            description:
              "Melbourne's #1 Ducted Heating Service - Emergency Repairs, Installation & Maintenance. Same-Day Service Available. Licensed Technicians.",
            url: "https://ductedheaterrepairmelbourne.com.au",
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
              "Ducted Heating Repair",
              "Ducted Heating Installation",
              "Ducted Heating Maintenance",
              "Emergency Ducted Heating Service",
              "Ducted Heating Cleaning",
              "Ducted Heating System Service",
            ],
            priceRange: "$$",
            openingHours: ["Mo-Su 00:00-23:59"],
            image:
              "https://ductedheaterrepairmelbourne.com.au/images/ducted-heating-service-melbourne.jpg",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Ducted Heating Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Emergency Ducted Heating Repair Melbourne",
                    description:
                      "24/7 emergency ducted heating repair service in Melbourne. Same-day service available.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Ducted Heating Installation Melbourne",
                    description:
                      "Professional ducted heating installation service for residential and commercial properties.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Ducted Heating Service & Maintenance Melbourne",
                    description:
                      "Regular ducted heating servicing and maintenance to keep your heating system running efficiently.",
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
              "https://www.facebook.com/ductedheatingrepairmelbourne",
              "https://www.instagram.com/ductedheatingrepairmelb",
            ],
          }),
        }}
      />

      <main id="tt-pageContent" className="overflow-hidden">
        {/* H1 hidden for SEO - visible in MainSlider */}
        <h1 style={{ position: "absolute", left: "-9999px", fontSize: "1px" }}>
          Ducted Heating Repair Melbourne | Emergency Service & Installation
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
              name: "Emergency Ducted Heating Repair Melbourne",
              description:
                "24/7 emergency ducted heating repair service available throughout Melbourne. Same-day service and immediate response for heating emergencies.",
              provider: {
                "@type": "LocalBusiness",
                name: "Ducted Heating Repair Melbourne",
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
              name: "Ducted Heating Repair Melbourne",
              description:
                "Professional ducted heating repair, installation and maintenance services in Melbourne. Emergency repairs available 24/7.",
              provider: {
                "@type": "LocalBusiness",
                name: "Ducted Heating Repair Melbourne",
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
              serviceType: "Ducted Heating Repair",
              category: "Home Services",
            }),
          }}
        />
      </main>
    </>
  );
}
