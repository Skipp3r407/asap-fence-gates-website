"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  MapPin,
  Phone,
  Send,
  Star,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  company,
  faqs,
  mapLocations,
  onlineReviewHighlights,
  processSteps,
  serviceAreas,
  services,
  stats,
  testimonials,
  trustBadges,
  whyChoose
} from "@/lib/site-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const serviceAreaImages: Record<string, string> = {
  Bradenton: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
  Sarasota: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  Palmetto: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85",
  "Lakewood Ranch": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85",
  "Anna Maria": "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=85",
  "Longboat Key": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
  Venice: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=85",
  "North Port": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
  "Punta Gorda": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
  "Port Charlotte": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85",
  Orlando: "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=900&q=85",
  "Manatee County": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
  "Sarasota County": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  "Charlotte County": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85",
  "Hillsborough County": "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=85"
};

const benefits = [
  {
    title: "Experience and expertise",
    text: "Fence projects go smoother when the crew understands layout, materials, gates, property conditions, and Florida weather. ASAP helps customers avoid guesswork before installation starts."
  },
  {
    title: "Convenience from start to finish",
    text: "The team can help with measuring, material recommendations, scheduling, permits, utility checks, and installation details so customers are not managing every step alone."
  },
  {
    title: "A well-installed fence can add value",
    text: "A clean fence improves privacy, security, curb appeal, and day-to-day use of the property. For homeowners thinking long term, it can also support resale presentation."
  },
  {
    title: "The right fence for the right property",
    text: "Vinyl, aluminum, wood, chain link, gates, commercial fencing, pool fencing, and privacy layouts all solve different problems. The estimate conversation helps match the right solution."
  }
];

const repairReplacementSteps = [
  {
    title: "Scheduling",
    text: "Once the fence or automatic gate scope is clear, ASAP works to make installation scheduling straightforward and realistic."
  },
  {
    title: "Building permits",
    text: "The team can help with permit planning, property line concerns, and the utility coordination needed before posts are set."
  },
  {
    title: "From A to Z",
    text: "Fence and gate work can involve more than materials. ASAP helps reduce the extra coordination that comes with permits, utilities, layout, and access."
  },
  {
    title: "We make it easy",
    text: "The goal is a simple, low-stress process before, during, and after the fence or automatic gate operator is installed."
  }
];

const moreReasons = [
  "Fast service",
  "Latest technology",
  "Trustworthy technicians",
  "Licensed and insured",
  "On-time service",
  "Background-checked technicians"
];

type ReviewCard = {
  source: string;
  rating: string;
  title: string;
  text: string;
  author?: string;
  relativeTime?: string;
};

type ProjectGalleryItem = {
  id: string;
  title: string;
  href: string;
  image: string;
  imageSource?: string;
  date: string;
  city: string;
  projectType: string;
  products: string[];
  photoCount: number;
  photos?: string[];
  description?: string;
  reviewerName?: string;
  reviewRating?: string;
  reviewBody?: string;
};

const projectImageFallbacks = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=90"
];

function GalleryFilterDropdown({
  label,
  options,
  value,
  isOpen,
  onChange,
  onClose,
  onToggle
}: {
  label: string;
  options: string[];
  value: string;
  isOpen: boolean;
  onChange: (value: string) => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const [query, setQuery] = useState("");
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative">
      <button
        className={`inline-flex min-w-36 items-center justify-center rounded-full border px-6 py-3 text-sm font-black transition ${
          value !== "All" || isOpen
            ? "border-[#071427] bg-white text-[#071427] shadow-sm"
            : "border-slate-300 bg-white text-[#071427] hover:border-[#f59f22]"
        }`}
        onClick={onToggle}
        type="button"
      >
        {label}
      </button>
      {isOpen ? (
        <div className="absolute left-0 top-full z-30 mt-3 w-[min(86vw,360px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-blue-950/20">
          <input
            className="w-full border-b border-slate-200 px-4 py-4 font-semibold text-[#071427] outline-none placeholder:text-slate-500"
            placeholder="Search..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="max-h-80 overflow-y-auto py-2">
            {filteredOptions.map((option) => (
              <button
                className="flex w-full items-center gap-3 px-4 py-2.5 text-left font-semibold text-[#071427] transition hover:bg-amber-50"
                key={option}
                onClick={() => onChange(option)}
                type="button"
              >
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border ${
                    value === option ? "border-[#071427] bg-[#071427]" : "border-slate-300"
                  }`}
                >
                  {value === option ? <span className="h-2.5 w-2.5 rounded-full bg-[#f59f22]" /> : null}
                </span>
                {option}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 p-4">
            <button
              className="font-semibold text-slate-600 transition hover:text-[#f59f22]"
              onClick={() => {
                onChange("All");
                setQuery("");
              }}
              type="button"
            >
              Clear
            </button>
            <button className="font-semibold text-slate-600 transition hover:text-[#f59f22]" onClick={onClose} type="button">
              Cancel
            </button>
            <button className="rounded-full bg-[#071427] px-6 py-3 font-black text-white transition hover:bg-[#f59f22] hover:text-[#071427]" onClick={onClose} type="button">
              Save
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <EstimateSection />
      <ServicesGrid />
      <FenceBuilderPromo />
      <FenceInstallationsSection />
      <MaterialsAboutSection />
      <BenefitsSection />
      <WhyChooseSection />
      <RepairReplacementSection />
      <ProcessSection />
      <GalleryPreview />
      <OnlineReviewsSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <MapsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071427] text-white">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"
        alt="Clean white fence around a premium Florida property"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-44"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#071427] via-[#071427]/86 to-[#0b3b75]/54" />
      <div className="absolute inset-0 metal-grid opacity-50" />
      <div className="container-xl relative grid min-h-[calc(100vh-80px)] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.75fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            <Star className="h-4 w-4 fill-[#f59f22] text-[#f59f22]" />
            Bradenton, Sarasota, Orlando Area & Surrounding Florida Communities
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Florida&apos;s Trusted Fence & Gate Installation Experts
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Quality fencing, secure gates, honest estimates, and professional installation for homeowners, property
            managers, and contractors.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="rounded-full bg-[#f59f22] px-7 py-4 text-center font-black text-[#071427] shadow-xl shadow-amber-500/25 transition hover:-translate-y-1" href="/contact">
              Request Free Estimate
            </Link>
            <a className="rounded-full bg-white px-7 py-4 text-center font-black text-[#0b3b75] transition hover:-translate-y-1" href={company.bradentonHref}>
              Call Bradenton Office
            </a>
            <a className="rounded-full border border-white/25 px-7 py-4 text-center font-black text-white transition hover:-translate-y-1 hover:bg-white/10" href={company.orlandoHref}>
              Call Orlando Office
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map(({ label, icon: Icon }) => (
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur" key={label}>
                <Icon className="mb-3 h-5 w-5 text-[#f59f22]" />
                <p className="text-sm font-bold">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="glass-card rounded-[2rem] p-6 text-[#071427]"
        >
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Fast quote path</p>
          <h2 className="mt-3 text-3xl font-black">Start with a clean estimate.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Tell the team what you need and they will help with material choices, permits, property line concerns, and
            utility checks before installation.
          </p>
          <div className="mt-6 grid gap-4">
            {stats.map((stat) => (
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100" key={stat.label}>
                <p className="text-3xl font-black text-[#0b3b75]">
                  {stat.value}
                  <span className="text-lg text-[#f59f22]">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function EstimateSection() {
  return (
    <section className="relative z-10 -mt-12 pb-16">
      <div className="container-xl glass-card rounded-[2rem] p-5 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Request A Fence Installation Estimate</p>
            <h2 className="mt-3 text-3xl font-black text-[#071427] md:text-4xl">Get pricing guidance without the runaround.</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Use this client-ready lead form concept for quote requests from homeowners, property managers, contractors,
              and commercial buyers.
            </p>
          </div>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
            {["Name", "Phone", "Email", "City"].map((field) => (
              <label className="grid gap-2 text-sm font-bold text-slate-700" key={field}>
                {field}
                <input className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0b3b75] focus:ring-4 focus:ring-blue-100" placeholder={field} />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Fence type
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0b3b75] focus:ring-4 focus:ring-blue-100">
                {services.slice(0, 8).map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Residential or commercial
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0b3b75] focus:ring-4 focus:ring-blue-100">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Property manager / HOA</option>
                <option>General contractor</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700 md:col-span-2">
              Project details
              <textarea className="min-h-28 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0b3b75] focus:ring-4 focus:ring-blue-100" placeholder="Fence length, gate needs, material preference, timeline, and property notes." />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Preferred contact method
              <select className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0b3b75] focus:ring-4 focus:ring-blue-100">
                <option>Call</option>
                <option>Text</option>
                <option>Email</option>
              </select>
            </label>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#0b3b75] px-5 py-4 font-black text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-0.5 md:self-end">
              Get My Fence Estimate <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="container-xl">
        <SectionHeading eyebrow="What We Install" title="Fence and gate services for every property type." text="Modern service cards guide visitors into the right conversion path without burying them in copy." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, slug, summary, icon: Icon }) => (
            <motion.article
              className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10"
              whileHover={{ y: -8 }}
              key={slug}
            >
              <div className="grid h-13 w-13 place-items-center rounded-2xl bg-blue-50 text-[#0b3b75] transition group-hover:bg-[#0b3b75] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-black text-[#071427]">{title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{summary}</p>
              <Link className="mt-5 inline-flex items-center gap-2 font-black text-[#0b3b75]" href={`/${slug}`}>
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FenceBuilderPromo() {
  return (
    <section className="py-16">
      <div className="container-xl overflow-hidden rounded-[2.25rem] bg-[#071427] text-white shadow-2xl shadow-blue-950/20">
        <div className="grid gap-0 lg:grid-cols-[1fr_0.85fr]">
          <div className="metal-grid p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">Online Fence Builder</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">Plan Your Fence Before You Call</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              The existing desktop-friendly fence builder becomes a premium planning step. Visitors can explore a layout
              first or request direct help from the ASAP Fence & Gates team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f59f22] px-7 py-4 font-black text-[#071427]" href={company.fenceBuilderUrl} target="_blank" rel="noreferrer">
                Try Fence Builder Tool <ExternalLink className="h-4 w-4" />
              </a>
              <Link className="rounded-full border border-white/20 px-7 py-4 text-center font-black" href="/contact">
                Request Help Directly
              </Link>
            </div>
          </div>
          <div className="relative min-h-80">
            <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85" alt="Modern fence builder planning inspiration" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FenceInstallationsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-xl grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Fence installations</p>
          <h2 className="mt-3 text-balance text-4xl font-black text-[#071427] md:text-5xl">
            Fencing for every size, purpose, and property type.
          </h2>
          <div className="mt-6 space-y-4 leading-7 text-slate-600">
            <p>
              A fence can improve security, privacy, curb appeal, pool safety, pet control, access, or the overall
              appearance of a property. ASAP Fence & Gates installs fences and gates for homes, businesses, HOAs,
              contractors, agricultural properties, and industrial sites.
            </p>
            <p>
              Customers can choose from vinyl privacy fencing, aluminum fencing, chain link, wood fencing, gates,
              automatic gates, temporary fencing, construction fencing, and custom access solutions.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-full bg-[#f59f22] px-6 py-3 text-center font-black text-[#071427]" href="/services">
              Explore Services
            </Link>
            <Link className="rounded-full bg-[#0b3b75] px-6 py-3 text-center font-black text-white" href="/gallery">
              View Project Gallery
            </Link>
          </div>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/15">
          <Image
            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1200&q=85"
            alt="Clean white vinyl fence installation beside a Florida home"
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071427]/70 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b3b75]">Built for Florida properties</p>
            <p className="mt-2 text-2xl font-black text-[#071427]">Privacy, security, access, and curb appeal.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MaterialsAboutSection() {
  return (
    <section className="fence-pattern py-16">
      <div className="container-xl grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[2rem] bg-white p-8 shadow-xl shadow-blue-950/10 ring-1 ring-slate-100 md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Highest quality materials</p>
          <h2 className="mt-3 text-4xl font-black text-[#071427]">Made to last, priced honestly, and installed cleanly.</h2>
          <div className="mt-6 space-y-4 leading-7 text-slate-600">
            <p>
              The old site emphasized high-quality materials, fair pricing, schedule flexibility, and workmanship backed
              by a warranty. This rebuild keeps that promise front and center with clearer, more confident messaging.
            </p>
            <p>
              During an estimate, ASAP can review fence type, gate needs, property conditions, budget, and long-term
              maintenance expectations so customers understand their options before committing.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Quality materials", "Fair estimates", "Warranty mindset"].map((item) => (
              <div className="rounded-2xl bg-blue-50 p-4 font-black text-[#0b3b75]" key={item}>
                {item}
              </div>
            ))}
          </div>
        </article>
        <article className="relative overflow-hidden rounded-[2rem] bg-[#071427] p-8 text-white shadow-2xl shadow-blue-950/20 md:p-10">
          <div className="absolute inset-0 metal-grid opacity-40" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">About ASAP</p>
            <h2 className="mt-3 text-4xl font-black">A full-service fence company for Bradenton and beyond.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              ASAP Fence & Gates helps homeowners and businesses choose the right fence or gate for security, privacy,
              appearance, access, and property value. The team serves residential, commercial, industrial, agricultural,
              HOA, property manager, and contractor needs.
            </p>
            <div className="mt-8 grid gap-3">
              {[company.addressBradenton, company.addressOrlandoArea, company.email].map((item) => (
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 font-bold" key={item}>
                  {item}
                </div>
              ))}
            </div>
            <Link className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f59f22] px-6 py-3 font-black text-[#071427]" href="/about">
              Learn About ASAP <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container-xl overflow-hidden rounded-[2.25rem] bg-[#0b3b75] text-white shadow-2xl shadow-blue-950/20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[380px]">
            <Image
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1300&q=85"
              alt="Black aluminum fence around a well maintained Florida property"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b3b75]/20" />
          </div>
          <div className="p-8 md:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">Benefits</p>
            <h2 className="mt-3 text-4xl font-black">Benefits of working with a fence company.</h2>
            <div className="mt-8 grid gap-4">
              {benefits.map((benefit) => (
                <div className="rounded-3xl bg-white/10 p-5 ring-1 ring-white/10" key={benefit.title}>
                  <h3 className="font-black text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseSection() {
  return (
    <section className="fence-pattern py-16">
      <div className="container-xl grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Why Choose ASAP Fence & Gates" title="Built around trust, speed, and clean workmanship." text="The messaging speaks directly to the concerns homeowners and commercial buyers have before hiring a fence contractor." />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <div className="flex items-start gap-3 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100" key={item}>
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f59f22]" />
              <p className="font-bold text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RepairReplacementSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-xl">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0b3b75]">Repair vs. Replacement</p>
          <h2 className="mt-3 text-4xl font-black text-[#071427] md:text-5xl">
            Honest guidance before you spend money.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            When a customer is deciding between repair and replacement, ASAP looks at schedule, permits, property lines,
            utility checks, gate function, materials, and the long-term value of the fix.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {repairReplacementSteps.map((step, index) => (
            <article
              className={`rounded-[1.75rem] p-6 text-white shadow-xl shadow-blue-950/10 ${
                index === 2 ? "bg-[#f59f22] text-[#071427]" : "bg-[#071427]"
              }`}
              key={step.title}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${index === 2 ? "bg-white/60" : "bg-white/10"}`}>
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-black">{step.title}</h3>
              <p className={`mt-3 text-sm leading-6 ${index === 2 ? "text-[#071427]/80" : "text-slate-300"}`}>
                {step.text}
              </p>
            </article>
          ))}
        </div>
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#071427] p-8 text-white md:p-10">
          <Image
            src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=85"
            alt="Privacy fence background for ASAP Fence and Gates reasons to choose us"
            fill
            sizes="100vw"
            className="object-cover opacity-22"
          />
          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">What we offer</p>
              <h3 className="mt-3 text-4xl font-black">More reasons to choose ASAP Fence & Gates.</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {moreReasons.map((reason) => (
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 p-4 font-bold ring-1 ring-white/10" key={reason}>
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f59f22]" />
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container-xl">
        <SectionHeading eyebrow="Simple Process" title="From first call to finished fence." text="A clear process helps visitors feel comfortable before they request an estimate." />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div className="relative rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm" key={step.title}>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#0b3b75] text-lg font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-[#071427]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const [active, setActive] = useState<ProjectGalleryItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [projects, setProjects] = useState<ProjectGalleryItem[]>([]);
  const [failedProjectImages, setFailedProjectImages] = useState<Set<string>>(new Set());
  const [activeType, setActiveType] = useState("All");
  const [activeProduct, setActiveProduct] = useState("All");
  const [activeCity, setActiveCity] = useState("All");
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(18);
  const [galleryStatus, setGalleryStatus] = useState("Loading recent CompanyCam projects...");

  useEffect(() => {
    let mounted = true;

    async function loadProjects() {
      try {
        const response = await fetch("/api/project-gallery", { cache: "no-store" });
        const data = (await response.json()) as {
          projects?: ProjectGalleryItem[];
          totalProjects?: number;
          totalImages?: number;
          updatedAt?: string;
          imageMode?: string;
          actualPhotoCount?: number;
          showcaseProjectCount?: number;
        };

        if (!mounted) {
          return;
        }

        if (data.projects?.length) {
          setProjects(data.projects);
          setGalleryStatus(
            data.imageMode === "actual-project-photos"
              ? `Showing ${data.showcaseProjectCount ?? data.projects.length} detailed public showcase projects with ${data.actualPhotoCount ?? data.totalImages ?? 0} real ASAP Fence & Gates project photos.`
              : `Showing ${data.totalProjects ?? data.projects.length} public ASAP Fence & Gates projects with verified royalty-free image fallbacks.`
          );
        } else {
          setGalleryStatus("Project feed is temporarily unavailable.");
        }
      } catch {
        if (mounted) {
          setGalleryStatus("Project feed is temporarily unavailable.");
        }
      }
    }

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const projectTypes = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.projectType))).sort()], [projects]);
  const projectProducts = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((project) => project.products))).sort()],
    [projects]
  );
  const projectCities = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.city))).sort()], [projects]);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const typeMatches = activeType === "All" || project.projectType === activeType;
        const productMatches = activeProduct === "All" || project.products.includes(activeProduct);
        const cityMatches = activeCity === "All" || project.city === activeCity;

        return typeMatches && productMatches && cityMatches;
      }),
    [activeCity, activeProduct, activeType, projects]
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const getProjectImage = (project: ProjectGalleryItem, index: number) =>
    failedProjectImages.has(project.id) ? projectImageFallbacks[index % projectImageFallbacks.length] : project.image;
  const activePhotos = active?.photos?.length ? active.photos : active ? [active.image] : [];
  const activePhoto = activePhotos[activePhotoIndex] ?? active?.image ?? projectImageFallbacks[0];

  return (
    <section className="bg-white py-16">
      <div className="container-xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Recent Work"
            title="Real ASAP Fence & Gates project gallery."
            text="Pulled from the public project portfolio connected to the existing site, including project type, products used, dates, cities, and CompanyCam job photos."
          />
          <Link className="inline-flex items-center gap-2 font-black text-[#0b3b75]" href="/gallery">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-5 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-[#071427] ring-1 ring-amber-100">
          {galleryStatus}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <GalleryFilterDropdown
            label="Project Type"
            options={projectTypes}
            value={activeType}
            isOpen={openFilter === "type"}
            onChange={(value) => {
              setActiveType(value);
              setVisibleCount(18);
            }}
            onClose={() => setOpenFilter(null)}
            onToggle={() => setOpenFilter(openFilter === "type" ? null : "type")}
          />
          <GalleryFilterDropdown
            label="Products Used"
            options={projectProducts}
            value={activeProduct}
            isOpen={openFilter === "product"}
            onChange={(value) => {
              setActiveProduct(value);
              setVisibleCount(18);
            }}
            onClose={() => setOpenFilter(null)}
            onToggle={() => setOpenFilter(openFilter === "product" ? null : "product")}
          />
          <GalleryFilterDropdown
            label="City & State"
            options={projectCities}
            value={activeCity}
            isOpen={openFilter === "city"}
            onChange={(value) => {
              setActiveCity(value);
              setVisibleCount(18);
            }}
            onClose={() => setOpenFilter(null)}
            onToggle={() => setOpenFilter(openFilter === "city" ? null : "city")}
          />
        </div>
        {activeType !== "All" || activeProduct !== "All" || activeCity !== "All" ? (
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm font-bold text-slate-600">
            <span>Active filters:</span>
            {[activeType, activeProduct, activeCity].filter((filter) => filter !== "All").map((filter) => (
              <span className="rounded-full bg-[#f59f22] px-3 py-1 text-[#071427]" key={filter}>
                {filter}
              </span>
            ))}
            <button
              className="rounded-full bg-slate-100 px-3 py-1 font-black text-[#0b3b75] transition hover:bg-[#071427] hover:text-white"
              onClick={() => {
                setActiveType("All");
                setActiveProduct("All");
                setActiveCity("All");
                setVisibleCount(18);
              }}
              type="button"
            >
              Clear all
            </button>
          </div>
        ) : null}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <button
              className={`group overflow-hidden rounded-[1.75rem] bg-white text-left shadow-lg shadow-blue-950/10 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:ring-[#f59f22] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
              key={project.id}
              onClick={() => {
                setActive(project);
                setActivePhotoIndex(0);
              }}
            >
              <span className="relative block h-72 overflow-hidden bg-slate-900">
                <Image
                  src={getProjectImage(project, index)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  onError={() => {
                    setFailedProjectImages((current) => new Set(current).add(project.id));
                  }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#071427]/76 via-[#071427]/8 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#071427] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                  {project.date}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-[#f59f22] px-3 py-1 text-xs font-black text-[#071427]">
                  +{Math.max(project.photoCount - 1, 0)}
                </span>
                <span className="absolute left-4 top-12 rounded-full bg-white/90 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#0b3b75]">
                  {failedProjectImages.has(project.id) ? "Fallback image" : project.imageSource ?? "Project photo"}
                </span>
                <span className="absolute bottom-4 left-4 right-4">
                  <span className="block text-xl font-black text-white">{project.title}</span>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-white/85">
                    View project photos <ArrowRight className="h-4 w-4" />
                  </span>
                </span>
              </span>
              <span className="block p-5">
                <span className="flex items-center gap-2 text-sm font-black text-[#0b3b75]">
                  <MapPin className="h-4 w-4 text-[#f59f22]" />
                  {project.city}
                </span>
                <span className="mt-3 block text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Project Type
                </span>
                <span className="mt-1 block font-bold text-[#071427]">{project.projectType}</span>
                <span className="mt-3 flex flex-wrap gap-2">
                  {project.products.slice(0, 3).map((product) => (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700" key={product}>
                      {product}
                    </span>
                  ))}
                </span>
                {project.photos?.length ? (
                  <span className="mt-4 flex items-center gap-2">
                    {project.photos.slice(0, 4).map((photo, photoIndex) => (
                      <span className="relative h-10 w-12 overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200" key={`${project.id}-thumb-${photoIndex}`}>
                        <Image
                          src={photo}
                          alt={`${project.title} thumbnail ${photoIndex + 1}`}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </span>
                    ))}
                    {project.photoCount > 4 ? (
                      <span className="grid h-10 min-w-12 place-items-center rounded-lg bg-[#071427] px-2 text-xs font-black text-white">
                        +{project.photoCount - 4}
                      </span>
                    ) : null}
                  </span>
                ) : null}
              </span>
            </button>
          ))}
        </div>
        {!visibleProjects.length ? (
          <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <p className="text-2xl font-black text-[#071427]">No projects match those filters yet.</p>
            <p className="mt-2 font-semibold text-slate-600">Clear one filter or choose another project type, product, or city.</p>
          </div>
        ) : null}
        {visibleCount < filteredProjects.length ? (
          <div className="mt-10 text-center">
            <button
              className="rounded-full bg-[#0b3b75] px-7 py-4 font-black text-white shadow-lg shadow-blue-950/20 transition hover:-translate-y-1 hover:bg-[#f59f22] hover:text-[#071427]"
              onClick={() => setVisibleCount((count) => count + 18)}
            >
              Load More Projects ({filteredProjects.length - visibleCount} remaining)
            </button>
          </div>
        ) : null}
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-[#071427]/85 p-4 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#071427]" onClick={() => setActive(null)} aria-label="Close image">
              <X className="h-5 w-5" />
            </button>
            <motion.div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white lg:grid-cols-[1fr_0.42fr]" initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}>
              <div className="relative h-[72vh] min-h-[420px] bg-slate-900">
                <Image
                  src={failedProjectImages.has(active.id) ? projectImageFallbacks[0] : activePhoto}
                  alt={active.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  onError={() => {
                    setFailedProjectImages((current) => new Set(current).add(active.id));
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0b3b75]">{active.projectType}</p>
                <h3 className="mt-3 text-3xl font-black text-[#071427]">{active.title}</h3>
                <p className="mt-4 flex items-center gap-2 text-sm font-bold text-slate-600">
                  <MapPin className="h-4 w-4 text-[#f59f22]" />
                  {active.city} · {active.date}
                </p>
                {active.description ? (
                  <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                    {active.description}
                  </p>
                ) : null}
                {activePhotos.length > 1 ? (
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {activePhotos.slice(0, 12).map((photo, photoIndex) => (
                      <button
                        className={`relative h-16 overflow-hidden rounded-xl bg-slate-100 ring-2 ${
                          activePhotoIndex === photoIndex ? "ring-[#f59f22]" : "ring-transparent"
                        }`}
                        key={`${active.id}-modal-thumb-${photoIndex}`}
                        onClick={() => setActivePhotoIndex(photoIndex)}
                      >
                        <Image
                          src={photo}
                          alt={`${active.title} project photo ${photoIndex + 1}`}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
                <div className="mt-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Products Used</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.products.map((product) => (
                      <span className="rounded-full bg-amber-50 px-3 py-2 text-xs font-black text-[#071427] ring-1 ring-amber-100" key={product}>
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                {active.reviewBody ? (
                  <blockquote className="mt-6 rounded-2xl bg-[#071427] p-4 text-sm font-bold leading-6 text-white">
                    <span className="block text-[#f59f22]">
                      {active.reviewRating ? `${active.reviewRating}-star project review` : "Project review"}
                    </span>
                    &quot;{active.reviewBody}&quot;
                    {active.reviewerName ? <span className="mt-2 block text-white/70">- {active.reviewerName}</span> : null}
                  </blockquote>
                ) : null}
                <a className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b3b75] px-5 py-3 font-black text-white" href={active.href} target="_blank" rel="noreferrer">
                  Open Public Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <section className="py-16">
      <div className="container-xl rounded-[2.25rem] bg-[#0b3b75] p-8 text-white md:p-12">
        <SectionHeading eyebrow="Testimonials" title="Review-style social proof for the proposal." text="Use live Google or Facebook reviews in production once the client approves final copy." light />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.5fr]">
          <AnimatePresence mode="wait">
            <motion.blockquote key={active.quote} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="rounded-[2rem] bg-white p-8 text-[#071427] shadow-2xl shadow-blue-950/20">
              <div className="flex gap-1 text-[#f59f22]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star className="h-5 w-5 fill-current" key={starIndex} />
                ))}
              </div>
              <p className="mt-5 text-2xl font-black leading-snug">&quot;{active.quote}&quot;</p>
              <footer className="mt-6 font-bold text-slate-600">{active.name}</footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="grid content-center gap-3">
            {testimonials.map((item, itemIndex) => (
              <button className={`rounded-2xl px-5 py-4 text-left font-bold transition ${itemIndex === index ? "bg-[#f59f22] text-[#071427]" : "bg-white/10 text-white hover:bg-white/15"}`} key={item.name} onClick={() => setIndex(itemIndex)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OnlineReviewsSection() {
  const [reviews, setReviews] = useState<ReviewCard[]>(onlineReviewHighlights);
  const [activeReview, setActiveReview] = useState<ReviewCard | null>(null);
  const [reviewStatus, setReviewStatus] = useState("Checking the latest public review highlights...");

  useEffect(() => {
    let mounted = true;

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/google-reviews", { cache: "no-store" });
        const data = (await response.json()) as {
          configured?: boolean;
          reviews?: ReviewCard[];
          updatedAt?: string;
          error?: string;
        };

        if (!mounted) {
          return;
        }

        if (data.configured && data.reviews?.length) {
          setReviews(data.reviews);
          setReviewStatus(`Updated from Google on ${new Date(data.updatedAt ?? Date.now()).toLocaleDateString()}`);
        } else {
          setReviewStatus("Showing published Google review highlights from ASAP Fence & Gates customers.");
        }
      } catch {
        if (mounted) {
          setReviewStatus("Showing published Google review highlights from ASAP Fence & Gates customers.");
        }
      }
    }

    loadGoogleReviews();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container-xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Public Review Highlights"
            title="4.5-star rating from 249 published Google reviews."
            text="Review snippets are pulled from the published ASAP Fence & Gates gallery/review page and presented as conversion-focused trust signals."
          />
          <a
            className="inline-flex items-center gap-2 rounded-full bg-[#0b3b75] px-5 py-3 font-black text-white [&_*]:text-white"
            href="https://g.page/ASAPFence?share"
            target="_blank"
            rel="noreferrer"
          >
            See Reviews on Google <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-5 rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-[#071427] ring-1 ring-amber-100">
          {reviewStatus}
        </p>
        <div className="mt-6 inline-flex flex-wrap items-center gap-3 rounded-[1.5rem] bg-[#071427] px-5 py-4 text-white shadow-xl shadow-blue-950/15">
          <span className="text-3xl font-black text-[#f59f22]">4.5</span>
          <span className="flex gap-1 text-[#f59f22]">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star className="h-5 w-5 fill-current" key={starIndex} />
            ))}
          </span>
          <span className="text-sm font-black uppercase tracking-[0.16em] text-white">249 reviews</span>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {reviews.map((review) => (
            <button
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#f59f22] hover:bg-white hover:shadow-xl hover:shadow-blue-950/10"
              key={review.title}
              onClick={() => setActiveReview(review)}
            >
              <div className="flex gap-1 text-[#f59f22]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star className="h-4 w-4 fill-current" key={starIndex} />
                ))}
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#0b3b75]">{review.source}</p>
              <h3 className="mt-3 text-xl font-black text-[#071427]">{review.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{review.text}</p>
              {review.author ? <p className="mt-4 text-sm font-black text-[#071427]">{review.author}</p> : null}
              <p className="mt-5 rounded-full bg-white px-3 py-2 text-xs font-black text-slate-600 ring-1 ring-slate-200">
                {review.rating}
              </p>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeReview ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-[#071427]/85 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-[#071427]"
              onClick={() => setActiveReview(null)}
              aria-label="Close review"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.article
              className="relative w-full max-w-2xl rounded-[2rem] bg-white p-8 shadow-2xl"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
            >
              <button
                className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-[#071427] text-white shadow-lg shadow-blue-950/20 transition hover:bg-[#f59f22] hover:text-[#071427]"
                onClick={() => setActiveReview(null)}
                aria-label="Close review"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex gap-1 text-[#f59f22]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star className="h-6 w-6 fill-current" key={starIndex} />
                ))}
              </div>
              <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#0b3b75]">{activeReview.source}</p>
              <h3 className="mt-3 text-3xl font-black text-[#071427]">{activeReview.title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">{activeReview.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-[#071427] ring-1 ring-amber-100">
                  {activeReview.rating}
                </span>
                {activeReview.author ? (
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-[#0b3b75]">
                    {activeReview.author}
                  </span>
                ) : null}
                {activeReview.relativeTime ? (
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-600">
                    {activeReview.relativeTime}
                  </span>
                ) : null}
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export function ServiceAreaSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-xl grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Local Service Areas" title="Serving Bradenton, Sarasota, Orlando area, and nearby Florida communities." text="Local SEO content is structured around the city and county names customers search before calling." />
          <div className="mt-6 flex items-center gap-3 rounded-3xl bg-blue-50 p-5 font-bold text-[#0b3b75]">
            <MapPin className="h-5 w-5" />
            Bradenton office and Orlando-area support
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <div
              className="group relative min-h-20 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f59f22] hover:bg-[#f59f22] hover:text-[#071427] hover:shadow-xl hover:shadow-amber-500/20"
              key={area}
            >
              <span
                className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-300 group-hover:opacity-35"
                style={{ backgroundImage: `url(${serviceAreaImages[area]})` }}
              />
              <span className="absolute inset-0 bg-gradient-to-r from-[#f59f22]/95 via-[#f59f22]/80 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex h-full items-center">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MapsSection() {
  return (
    <section className="py-16">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Find Us"
          title="Bradenton office and Orlando-area service support."
          text="Customers can call the office closest to their project or open the location in Google Maps for directions."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {mapLocations.map((location) => (
            <article className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-blue-950/10 ring-1 ring-slate-200" key={location.name}>
              <div className="aspect-[16/10] bg-slate-100">
                <iframe
                  className="h-full w-full border-0"
                  title={`${location.name} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b3b75]">{location.label}</p>
                <h3 className="mt-2 text-2xl font-black text-[#071427]">{location.name}</h3>
                <p className="mt-3 flex gap-2 leading-7 text-slate-600">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#f59f22]" />
                  {location.address}
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b3b75] px-5 py-3 font-black text-white" href={location.href}>
                    <Phone className="h-4 w-4" /> {location.phone}
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f59f22] px-5 py-3 font-black text-[#071427]"
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Maps <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16">
      <div className="container-xl">
        <SectionHeading eyebrow="FAQs" title="Answers to common fence and gate questions." text="This section captures long-tail SEO questions while reducing friction before a quote request." />
        <div className="mt-10 grid gap-3">
          {faqs.map((faq, index) => (
            <div
              className={`overflow-hidden rounded-3xl border transition ${
                open === index ? "border-[#f59f22] bg-[#f59f22] shadow-lg shadow-amber-500/20" : "border-slate-200 bg-white"
              }`}
              key={faq.question}
            >
              <button
                className={`flex w-full items-center justify-between gap-4 p-5 text-left font-black transition ${
                  open === index ? "bg-[#f59f22] text-[#071427]" : "text-[#071427]"
                }`}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                {faq.question}
                <ChevronDown className={`h-5 w-5 transition ${open === index ? "rotate-180 text-[#071427]" : ""}`} />
              </button>
              {open === index ? <p className="bg-[#f59f22] px-5 pb-5 pt-4 font-semibold leading-7 text-[#071427]">{faq.answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 py-16">
      <div className="container-xl rounded-[2.25rem] bg-[#071427] p-8 text-center text-white shadow-2xl shadow-blue-950/25 md:p-14">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">Ready for a better fence?</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-4xl font-black md:text-5xl">Ready to Secure and Upgrade Your Property?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Get a professional estimate for fence installation, gate installation, automatic gates, repairs, or commercial fencing.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            className="inline-flex min-w-56 items-center justify-center rounded-full bg-[#f59f22] px-8 py-4 font-black text-[#071427] shadow-xl shadow-amber-500/25 ring-2 ring-[#f59f22]"
            href="/contact"
          >
            <span className="text-[#071427]">Request Estimate</span>
          </Link>
          <a
            className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#071427] shadow-xl shadow-white/10 ring-2 ring-white"
            href={company.bradentonHref}
          >
            <Phone className="h-5 w-5 text-[#0b3b75]" />
            <span className="text-[#071427]">Call Now</span>
          </a>
          <a
            className="inline-flex min-w-56 items-center justify-center gap-2 rounded-full bg-[#0b3b75] px-8 py-4 font-black text-white shadow-xl shadow-blue-950/20 ring-2 ring-white/35 transition hover:bg-[#124b8f]"
            href={company.facebookUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-white">View Facebook</span>
            <ExternalLink className="h-5 w-5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text: string; light?: boolean }) {
  return (
    <div>
      <p className={`text-sm font-black uppercase tracking-[0.22em] ${light ? "text-[#f59f22]" : "text-[#0b3b75]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 max-w-3xl text-balance text-3xl font-black tracking-tight md:text-5xl ${light ? "text-white" : "text-[#071427]"}`}>{title}</h2>
      <p className={`mt-4 max-w-2xl leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>{text}</p>
    </div>
  );
}

export function SimplePageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-[#071427] py-20 text-white">
      <div className="absolute inset-0 metal-grid opacity-40" />
      <div className="container-xl relative">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{text}</p>
      </div>
    </section>
  );
}

export function ContactFormBlock() {
  return (
    <section className="py-16">
      <div className="container-xl">
        <EstimateSection />
      </div>
    </section>
  );
}

export function ServicesPageContent() {
  const featured = useMemo(() => services.slice(0, 6), []);
  return (
    <>
      <SimplePageHero eyebrow="Services" title="Professional fence and gate installation services." text="Explore vinyl, aluminum, chain link, wood, gates, automatic gates, repairs, commercial fencing, privacy fencing, pool fencing, and temporary construction fencing." />
      <ServicesGrid />
      <ServiceEducationSection />
      <WhyChooseSection />
      <FinalCta />
      <div className="hidden">{featured.length}</div>
    </>
  );
}

export function ServiceEducationSection() {
  return (
    <section className="bg-white py-16">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Fence Buying Guide"
          title="How to choose the right fence for a Florida property."
          text="This expanded guide turns common research topics into helpful sales content, so visitors can compare materials, understand prep work, and request a better estimate."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {[
            {
              title: "Vinyl vs. Wood vs. Aluminum vs. Chain Link",
              text: "Vinyl is strong for low-maintenance privacy; wood gives a classic custom look but needs more care; aluminum is refined and open, especially around pools or front yards; chain link is practical for security, construction, pets, and larger budget-conscious perimeters."
            },
            {
              title: "Florida Weather Matters",
              text: "Sun, humidity, salt air, storms, termites, mildew, and irrigation patterns all affect fence performance. The right material and hardware should match the property location and how the fence will be used every day."
            },
            {
              title: "Permits, Property Lines & Easements",
              text: "Fence rules vary by city and county. Some projects may require permits, site plans, pool-barrier review, corner-lot visibility checks, HOA approval, easement review, or utility marking before digging."
            },
            {
              title: "Gates Are Part of the Design",
              text: "Walk gates, double drive gates, pool gates, access-control gates, and commercial gates should be planned early. Gate width, swing, latch hardware, operator needs, and daily traffic patterns can change the best fence layout."
            }
          ].map((item) => (
            <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6" key={item.title}>
              <h3 className="text-2xl font-black text-[#071427]">{item.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-[#071427] p-8 text-white md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">Estimate Checklist</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Approximate linear footage, fence height, property photos, survey or plot plan if available.",
              "Material preference, color/style, privacy needs, pool/pet/security needs, and gate locations.",
              "City/county, HOA, timeline, repair concerns, access constraints, and whether utilities need marking."
            ].map((item) => (
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5" key={item}>
                <CheckCircle2 className="h-5 w-5 text-[#f59f22]" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
