import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { EstimateSection, FaqSection, FinalCta, MapsSection, SimplePageHero } from "@/components/home-sections";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Request Fence Estimate",
  description:
    "Request a free fence or gate estimate from ASAP Fence & Gates. Call the Bradenton office or Orlando office for professional fence installation, repairs, and gate services."
};

export default function ContactPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Contact"
        title="Request a fence or gate estimate."
        text="Tell ASAP Fence & Gates what you need installed, repaired, secured, or upgraded and the team can guide you through material choices, scheduling, permits, and next steps."
      />
      <section className="py-16">
        <div className="container-xl grid gap-6 md:grid-cols-3">
          <a className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl" href={company.bradentonHref}>
            <Phone className="h-7 w-7 text-[#0b3b75]" />
            <h2 className="mt-4 text-xl font-black text-[#071427]">Bradenton Office</h2>
            <p className="mt-2 font-bold text-slate-600">{company.bradentonPhone}</p>
          </a>
          <a className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl" href={company.orlandoHref}>
            <Phone className="h-7 w-7 text-[#0b3b75]" />
            <h2 className="mt-4 text-xl font-black text-[#071427]">Orlando Office</h2>
            <p className="mt-2 font-bold text-slate-600">{company.orlandoPhone}</p>
          </a>
          <a className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl" href={`mailto:${company.email}`}>
            <Mail className="h-7 w-7 text-[#0b3b75]" />
            <h2 className="mt-4 text-xl font-black text-[#071427]">Email</h2>
            <p className="mt-2 font-bold text-slate-600">{company.email}</p>
          </a>
        </div>
      </section>
      <EstimateSection />
      <section className="bg-white py-16">
        <div className="container-xl grid gap-5 md:grid-cols-2">
          <div className="rounded-[1.75rem] bg-slate-50 p-6">
            <MapPin className="h-7 w-7 text-[#f59f22]" />
            <h2 className="mt-4 text-xl font-black text-[#071427]">Bradenton Location</h2>
            <p className="mt-2 text-slate-600">{company.addressBradenton}</p>
          </div>
          <div className="rounded-[1.75rem] bg-slate-50 p-6">
            <MapPin className="h-7 w-7 text-[#f59f22]" />
            <h2 className="mt-4 text-xl font-black text-[#071427]">Orlando-Area Location</h2>
            <p className="mt-2 text-slate-600">{company.addressOrlandoArea}</p>
          </div>
        </div>
      </section>
      <MapsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
