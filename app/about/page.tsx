import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { FinalCta, ProcessSection, SimplePageHero } from "@/components/home-sections";
import { company, whyChoose } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About ASAP Fence & Gates",
  description:
    "Learn about ASAP Fence & Gates, a licensed and insured fence and gate installation company serving Bradenton, Sarasota, Manatee County, Charlotte County, Orlando area, and surrounding communities."
};

export default function AboutPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="About"
        title="A local fence company built around reliability."
        text="ASAP Fence & Gates provides professional fence and gate installation, repairs, automatic gates, privacy fencing, commercial fencing, and temporary fencing for Florida homes and properties."
      />
      <section className="py-16">
        <div className="container-xl grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Who We Serve</p>
            <h2 className="mt-3 text-4xl font-black text-[#071427]">Homeowners, property managers, and general contractors.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              The site positions {company.name} as an established, easy-to-work-with contractor that understands the
              details customers care about: clear estimates, fast scheduling, strong materials, warranties, and crews
              that show up ready.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Their public Facebook profile identifies the company as a verified Fence & Gate Contractor serving Manatee,
              Palmetto, Charlotte County, Bradenton, Lakewood Ranches, Sarasota County, and Hillsborough County, with
              {` ${company.facebookFollowers}`}, {company.facebookRecommendation}, and a {company.priceRange} price range.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100" key={item}>
                <CheckCircle2 className="h-6 w-6 text-[#f59f22]" />
                <p className="mt-4 font-bold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <FinalCta />
    </>
  );
}
