import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FinalCta, GalleryPreview, SimplePageHero } from "@/components/home-sections";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Recent Fence Work",
  description:
    "Explore ASAP Fence & Gates project inspiration including vinyl privacy fences, aluminum fencing, gates, wood fences, commercial fencing, and property upgrades."
};

export default function RecentWorkPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Recent Work"
        title="Real recent fence and gate work from the public project portfolio."
        text="The existing ASAP site embeds a CompanyCam-powered project feed. This page turns that raw portfolio into a richer project gallery with filters, locations, products used, and expandable job photos."
      />
      <GalleryPreview />
      <section className="bg-white py-16">
        <div className="container-xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Related Services</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link className="group rounded-3xl bg-slate-50 p-6 font-black text-[#071427] transition hover:-translate-y-1 hover:bg-blue-50" href={`/${service.slug}`} key={service.slug}>
                {service.title}
                <ArrowRight className="mt-4 h-4 w-4 text-[#0b3b75] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
