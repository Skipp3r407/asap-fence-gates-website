import type { Metadata } from "next";
import { HomePage } from "@/components/home-sections";

export const metadata: Metadata = {
  title: "Fence Company Bradenton FL",
  description:
    "ASAP Fence & Gates provides professional fence installation, gate installation, automatic gates, repairs, commercial fencing, and privacy fencing across Bradenton, Sarasota, Manatee County, Charlotte County, and Orlando area."
};

export default function Page() {
  return <HomePage />;
}
