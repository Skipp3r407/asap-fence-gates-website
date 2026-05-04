import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Monitor, Phone } from "lucide-react";
import { FinalCta, SimplePageHero } from "@/components/home-sections";
import { company, processSteps, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fence Builder Tool",
  description:
    "Plan your fence before you call with the ASAP Fence & Gates online fence builder tool, then request help with materials, permits, gates, and installation."
};

export default function FenceBuilderPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Fence Builder Tool"
        title="Plan your fence before you call."
        text="ASAP Fence & Gates offers a desktop-friendly online fence builder so homeowners, property managers, and contractors can think through layout, fence type, gates, and project scope before requesting an estimate."
      />
      <section className="py-16">
        <div className="container-xl grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/15">
            <Image
              src="https://images.unsplash.com/photo-1596825203509-04faae1cc09c?auto=format&fit=crop&w=1400&q=85"
              alt="Fence planning and property layout inspiration"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-[#0b3b75]">
              <Monitor className="h-4 w-4" /> Desktop-friendly planning tool
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-[#071427] md:text-5xl">
              Get clearer about style, layout, and next steps.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              The original site highlights the online fence builder as a convenient way to start. This page turns that
              tool into a stronger conversion step: customers can explore ideas first, then call ASAP Fence & Gates for
              professional guidance on material choices, gates, permits, property line questions, and utility checks.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f59f22] px-7 py-4 font-black text-[#071427] shadow-lg shadow-amber-500/25"
                href={company.fenceBuilderUrl}
                target="_blank"
                rel="noreferrer"
              >
                Try Fence Builder Tool <ExternalLink className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b3b75] px-7 py-4 font-black text-white"
                href={company.bradentonHref}
              >
                <Phone className="h-4 w-4" /> Call Bradenton
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">What To Think Through</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black text-[#071427]">A better estimate starts with better project notes.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Approximate fence length, property access, and where gates should go.",
              "Preferred material: vinyl, aluminum, chain link, wood, privacy, pool, or commercial fencing.",
              "Concerns about HOA rules, permits, property lines, pets, pools, security, or construction schedules."
            ].map((item) => (
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 font-bold leading-7 text-slate-700" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-xl grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-100" key={step.title}>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b3b75] font-black text-white">{index + 1}</span>
              <h3 className="mt-5 text-lg font-black text-[#071427]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="container-xl mt-8 flex flex-wrap gap-2">
          {services.slice(0, 8).map((service) => (
            <Link className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0b3b75]" href={`/${service.slug}`} key={service.slug}>
              {service.title}
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
