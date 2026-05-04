import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { FinalCta, MapsSection, ServiceAreaSection, SimplePageHero } from "@/components/home-sections";
import { serviceAreas } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Fence Service Areas",
  description:
    "ASAP Fence & Gates serves Bradenton, Sarasota, Palmetto, Lakewood Ranch, Anna Maria, Longboat Key, Venice, North Port, Punta Gorda, Port Charlotte, Orlando, Manatee County, Sarasota County, and Charlotte County."
};

const countyGroups = [
  {
    title: "Manatee County",
    areas: ["Bradenton", "Bradenton Beach", "Anna Maria", "Holmes Beach", "Palmetto", "Longboat Key", "Ellenton", "West Bradenton"]
  },
  {
    title: "Sarasota County",
    areas: ["Sarasota", "Venice", "North Port", "Osprey", "Nokomis", "Siesta Key", "South Sarasota", "Englewood"]
  },
  {
    title: "Charlotte County",
    areas: ["Punta Gorda", "Port Charlotte", "Rotonda West", "Charlotte Harbor", "Grove City", "Manasota Key"]
  },
  {
    title: "Orlando Area",
    areas: ["Orlando", "Leesburg", "Central Florida communities", "Commercial and residential projects"]
  }
];

export default function ServiceAreasPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Service Areas"
        title="Local fence and gate installation across Florida communities."
        text="ASAP Fence & Gates serves Bradenton, Sarasota, Manatee County, Charlotte County, Palmetto, Lakewood Ranch, Orlando area, and surrounding Florida communities."
      />
      <ServiceAreaSection />
      <section className="bg-white py-16">
        <div className="container-xl grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {countyGroups.map((group) => (
            <article className="rounded-[1.75rem] bg-slate-50 p-6" key={group.title}>
              <MapPin className="h-7 w-7 text-[#f59f22]" />
              <h2 className="mt-4 text-xl font-black text-[#071427]">{group.title}</h2>
              <div className="mt-4 grid gap-2 text-sm font-bold text-slate-600">
                {group.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="py-16">
        <div className="container-xl grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Local Project Knowledge</p>
            <h2 className="mt-3 text-4xl font-black text-[#071427]">Different Florida communities can mean different fence planning details.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Coastal communities, HOA neighborhoods, pool properties, commercial sites, job sites, corner lots, and rural
              land all create different fence and gate priorities. This page helps searchers understand that ASAP Fence &
              Gates serves a broad local footprint while still planning around each property.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Bradenton, Palmetto, and Manatee County projects often focus on privacy, pets, pools, HOAs, rental properties, and curb appeal.",
              "Sarasota, Venice, North Port, and Longboat Key projects may require coastal durability, clean aesthetics, and neighborhood-aware layouts.",
              "Charlotte County, Punta Gorda, and Port Charlotte properties often need practical privacy, storm-conscious materials, and access planning.",
              "Orlando-area and commercial projects may involve larger runs, access control, temporary fencing, scheduling, and contractor coordination."
            ].map((item) => (
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100" key={item}>
                <MapPin className="h-6 w-6 text-[#f59f22]" />
                <p className="mt-4 text-sm font-bold leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <MapsSection />
        <div className="container-xl mt-8 flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <Link className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#0b3b75]" href="/contact" key={area}>
              {area}
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
