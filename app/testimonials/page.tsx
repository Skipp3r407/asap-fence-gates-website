import type { Metadata } from "next";
import { FinalCta, OnlineReviewsSection, SimplePageHero, TestimonialsSection } from "@/components/home-sections";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Review-style testimonials for ASAP Fence & Gates fence installation, gate installation, commercial fencing, and repair services."
};

export default function TestimonialsPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Testimonials"
        title="Trusted by homeowners, property managers, and contractors."
        text="This proposal page is designed to showcase review-style social proof and can be connected to live Google or Facebook reviews."
      />
      <OnlineReviewsSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
