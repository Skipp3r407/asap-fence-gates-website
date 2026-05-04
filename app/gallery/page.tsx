import type { Metadata } from "next";
import { FinalCta, GalleryPreview, SimplePageHero } from "@/components/home-sections";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Explore ASAP Fence & Gates public project gallery with real fence and gate installations, CompanyCam project photos, products used, locations, and dates."
};

export default function GalleryPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Project Gallery"
        title="164 public fence and gate projects, rebuilt into a premium gallery."
        text="This gallery pulls from the public Trusty / CompanyCam project feed connected to the existing ASAP Fence & Gates website, then presents projects by type, products used, city, date, and job photos."
      />
      <GalleryPreview />
      <FinalCta />
    </>
  );
}
