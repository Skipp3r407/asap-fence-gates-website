import type { Metadata } from "next";
import { FinalCta, OnlineReviewsSection, SimplePageHero, TestimonialsSection } from "@/components/home-sections";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "ASAP Fence & Gates Reviews",
  description:
    "Public review highlights and testimonial-style proof for ASAP Fence & Gates, including Facebook profile stats, Google review themes, and local listing context."
};

export default function ReviewsPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Reviews"
        title="Public review highlights and customer trust signals."
        text={`ASAP Fence & Gates has public profile signals including ${company.facebookFollowers}, ${company.facebookRecommendation}, and ${company.facebookReviews}, along with Google-style review themes around professional installation, fast responses, and fair pricing.`}
      />
      <OnlineReviewsSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
