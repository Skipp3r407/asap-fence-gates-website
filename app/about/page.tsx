import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, HandHeart, Phone, ShieldCheck, Star, UsersRound } from "lucide-react";
import { FinalCta, ProcessSection } from "@/components/home-sections";
import { company, whyChoose } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About ASAP Fence & Gates",
  description:
    "Learn about ASAP Fence & Gates, a licensed and insured fence and gate installation company serving Bradenton, Sarasota, Manatee County, Charlotte County, Orlando area, and surrounding communities."
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071427] py-20 text-white">
        <Image
          src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1800&q=85"
          alt="Black metal fence background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071427] via-[#071427]/82 to-[#071427]/45" />
        <div className="container-xl relative grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <article className="rounded-[2rem] bg-[#0b3b75] p-8 text-center shadow-2xl shadow-blue-950/35 ring-1 ring-white/10">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-white text-[#0b3b75]">
              <HandHeart className="h-10 w-10" />
            </div>
            <p className="mx-auto mt-6 inline-flex rounded-full bg-[#f59f22] px-5 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#071427]">
              Our Core Values
            </p>
            <p className="mt-5 text-sm font-semibold leading-7 text-blue-50">
              At ASAP Fence & Gates, we believe in providing customers with quality service that meets their needs and
              exceeds expectations. We are committed to a safe, secure environment for customers and to taking the time
              to answer questions and address concerns.
            </p>
          </article>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">About Us</p>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black md:text-6xl">
              Full-service fence and gate professionals for Florida properties.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              ASAP Fence & Gates is a full-service fence company specializing in installation and repair for residential
              and commercial customers. The team offers fencing options including wood, vinyl, aluminum, chain link,
              custom gates, and automatic gate solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Quality workmanship", "Competitive pricing", "Licensed and insured", "Residential & commercial"].map((item) => (
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-white ring-1 ring-white/10" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14 text-center">
        <div className="container-xl">
          <p className="font-black text-[#0b3b75]">Prompt, Professional Service, Guaranteed.</p>
          <h2 className="mt-3 text-3xl font-black text-[#071427]">Contact Us</h2>
          <a
            className="mt-3 inline-flex items-center justify-center gap-3 text-4xl font-black text-[#dc2626] transition hover:text-[#f59f22] md:text-5xl"
            href={company.bradentonHref}
          >
            <Phone className="h-8 w-8" />
            {company.bradentonPhone}
          </a>
        </div>
      </section>
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
            <div className="mt-8 grid gap-3">
              {[
                { label: "Residential customers", icon: UsersRound },
                { label: "Commercial properties", icon: ShieldCheck },
                { label: "Local reputation", icon: Star }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div className="flex items-center gap-3 rounded-2xl bg-white p-4 font-black text-[#071427] shadow-sm ring-1 ring-slate-100" key={item.label}>
                    <Icon className="h-5 w-5 text-[#f59f22]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-[#f59f22] hover:shadow-xl hover:shadow-amber-500/20" key={item}>
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
