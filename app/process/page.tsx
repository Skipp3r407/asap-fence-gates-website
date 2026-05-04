import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { FinalCta, ProcessSection, SimplePageHero } from "@/components/home-sections";
import { processSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fence Installation Process",
  description:
    "Learn how ASAP Fence & Gates handles fence estimates, fence style selection, building permits, property line concerns, utility checks, and professional installation."
};

export default function ProcessPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Our Process"
        title="A simpler path from estimate to finished fence."
        text="The existing ASAP site explains that fence projects can involve scheduling, permits, property lines, and utility checks. This page makes that process clear before a customer calls."
      />
      <ProcessSection />
      <section className="bg-white py-16">
        <div className="container-xl grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Project Prep</p>
            <h2 className="mt-3 text-4xl font-black text-[#071427]">ASAP helps handle the details that slow projects down.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              The current website notes that filing for permits and calling gas, phone, and utility companies can add work
              to a fence or automatic gate project. ASAP Fence & Gates uses that coordination as part of the customer value.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Building permit support before installation starts.",
              "Property line concerns and layout questions discussed early.",
              "Utility checks coordinated so digging is handled responsibly.",
              "Scheduling made as effortless as possible after the fence or gate is selected."
            ].map((item) => (
              <div className="flex gap-3 rounded-3xl bg-slate-50 p-5" key={item}>
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f59f22]" />
                <p className="font-bold leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-xl grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm" key={step.title}>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0b3b75] text-lg font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-[#071427]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
