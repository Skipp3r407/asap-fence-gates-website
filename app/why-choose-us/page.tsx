import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { FinalCta, SimplePageHero, WhyChooseSection } from "@/components/home-sections";
import { stats, whyChoose } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Why Choose ASAP Fence & Gates",
  description:
    "Why homeowners, property managers, businesses, and contractors choose ASAP Fence & Gates for licensed and insured fence installation, fair estimates, quality materials, and warranty-backed work."
};

export default function WhyChooseUsPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Why Choose Us"
        title="A fence company built around trust, speed, and workmanship."
        text="ASAP Fence & Gates positions itself around the concerns customers actually have: Will the crew show up? Will pricing be fair? Will the materials last? Will the work be protected?"
      />
      <section className="py-16">
        <div className="container-xl grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">From The Existing Site</p>
            <h2 className="mt-3 text-4xl font-black text-[#071427]">Licensed and insured experts who make the process easier.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              The current ASAP content emphasizes fast service, quality materials, fair and honest pricing, warranties,
              prompt scheduling, and a professional team. This page organizes those points into a stronger trust-building
              story for homeowners, property managers, businesses, general contractors, industrial sites, and agricultural properties.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100" key={stat.label}>
                  <p className="text-3xl font-black text-[#0b3b75]">
                    {stat.value}
                    <span className="text-base text-[#f59f22]">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/15">
            <Image
              src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1400&q=85"
              alt="Quality fence installation on a clean Florida property"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <WhyChooseSection />
      <section className="bg-white py-16">
        <div className="container-xl grid gap-5 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Protected Work", text: "Licensed and insured service with warranty-backed workmanship." },
            { icon: Star, title: "Customer Experience", text: "Clear communication, on-time service, and fair estimates before work starts." },
            { icon: CheckCircle2, title: "Material Guidance", text: "Help comparing vinyl, aluminum, chain link, wood, gates, privacy, pool, and commercial options." }
          ].map(({ icon: Icon, title, text }) => (
            <div className="rounded-[1.75rem] bg-slate-50 p-6" key={title}>
              <Icon className="h-7 w-7 text-[#f59f22]" />
              <h3 className="mt-5 text-xl font-black text-[#071427]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
        <div className="container-xl mt-8 flex flex-wrap gap-2">
          {whyChoose.map((item) => (
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0b3b75]" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
