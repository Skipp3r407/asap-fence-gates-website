import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { FaqSection, FinalCta, SimplePageHero } from "@/components/home-sections";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fence Installation FAQs",
  description:
    "Answers to common questions about privacy fencing, vinyl fences, gate repairs, commercial fence projects, permits, installation timelines, automatic gates, and free estimates."
};

export default function FaqPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="FAQs"
        title="Fence and gate questions answered before you call."
        text="Use this page to help customers understand privacy fence options, vinyl installation, gate repair, commercial fencing, permits, project timelines, service areas, automatic gates, and free estimates."
      />
      <section className="py-16">
        <div className="container-xl grid gap-5 md:grid-cols-3">
          {[
            "Choose the right fence material for privacy, security, pools, pets, curb appeal, or commercial access.",
            "Understand how permits, property lines, utility checks, and scheduling can affect your installation.",
            "Know when repairs may make sense and when a full replacement is the better long-term value."
          ].map((item) => (
            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-100" key={item}>
              <HelpCircle className="h-7 w-7 text-[#f59f22]" />
              <p className="mt-5 font-bold leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <FaqSection />
      <section className="bg-white py-16">
        <div className="container-xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">All FAQ Topics</p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faqs.map((faq) => (
              <div className="rounded-2xl bg-slate-50 p-5" key={faq.question}>
                <h2 className="font-black text-[#071427]">{faq.question}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
