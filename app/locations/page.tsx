import type { Metadata } from "next";
import { FinalCta, MapsSection, ServiceAreaSection, SimplePageHero } from "@/components/home-sections";

export const metadata: Metadata = {
  title: "Locations & Maps",
  description:
    "Find ASAP Fence & Gates locations, maps, phone numbers, and service areas for Bradenton, Sarasota, Manatee County, Charlotte County, Orlando area, and surrounding Florida communities."
};

export default function LocationsPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Locations & Maps"
        title="Find the ASAP Fence & Gates office closest to your project."
        text="Use the maps, phone links, and service area details to connect with the Bradenton office or Orlando-area support for fence installation, gate installation, repairs, and commercial fencing."
      />
      <MapsSection />
      <ServiceAreaSection />
      <FinalCta />
    </>
  );
}
