import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/home-sections";

export const metadata: Metadata = {
  title: "Fence Installation Services",
  description:
    "Explore vinyl, aluminum, chain link, wood, gate installation, automatic gates, commercial fencing, privacy fencing, pool fencing, repairs, and temporary fencing from ASAP Fence & Gates."
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
