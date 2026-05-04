"use client";

import { useMemo, useState } from "react";
import { Calculator, CheckCircle2, ClipboardCheck, Fence, MapPin, Phone, Ruler, Send, ShieldCheck } from "lucide-react";
import { company } from "@/lib/site-data";

const materialOptions = [
  {
    label: "Vinyl Privacy Fence",
    value: "Vinyl Privacy Fence",
    description: "Best for low-maintenance privacy, clean curb appeal, and HOA-friendly neighborhoods.",
    pace: 750,
    products: ["6ft white vinyl privacy", "Vinyl picket accents", "Walk gates"]
  },
  {
    label: "Aluminum Fence",
    value: "Aluminum Fence",
    description: "Best for pools, waterfront views, decorative perimeters, and communities.",
    pace: 350,
    products: ["3 rail aluminum", "Pool-safe layouts", "Puppy picket options"]
  },
  {
    label: "Wood Fence",
    value: "Wood Fence",
    description: "Best for classic privacy, custom looks, and board-on-board layouts.",
    pace: 250,
    products: ["Board-on-board", "Shadowbox", "Pressure treated wood"]
  },
  {
    label: "Chain Link Fence",
    value: "Chain Link Fence",
    description: "Best for economical security, commercial yards, pet areas, and construction fencing.",
    pace: 500,
    products: ["Galvanized chain link", "Commercial security", "Temporary layouts"]
  },
  {
    label: "Automatic / Estate Gate",
    value: "Automatic / Estate Gate",
    description: "Best for driveway access, controlled entry, communities, and premium entrances.",
    pace: 180,
    products: ["Estate gates", "Operators", "Access controls"]
  }
];

const purposeOptions = ["Privacy", "Pool Safety", "Pet Containment", "Security", "HOA / Community", "Commercial Site"];
const terrainOptions = ["Mostly Flat", "Slight Slope", "Heavy Slope", "Trees / Tight Access", "Unsure"];

export function FenceBuilderTool() {
  const [material, setMaterial] = useState(materialOptions[0].value);
  const [length, setLength] = useState(180);
  const [height, setHeight] = useState("6 ft");
  const [gates, setGates] = useState(1);
  const [propertyType, setPropertyType] = useState("Residential");
  const [purpose, setPurpose] = useState("Privacy");
  const [terrain, setTerrain] = useState("Mostly Flat");
  const [city, setCity] = useState("Bradenton");
  const [permitHelp, setPermitHelp] = useState(true);
  const [copied, setCopied] = useState(false);

  const selectedMaterial = materialOptions.find((option) => option.value === material) ?? materialOptions[0];

  const plan = useMemo(() => {
    const cleanLength = Math.max(24, Number(length) || 24);
    const panels = Math.ceil(cleanLength / 8);
    const posts = panels + gates + 1;
    const estimatedDays = Math.max(1, Math.ceil(cleanLength / selectedMaterial.pace));
    const complexity =
      terrain === "Heavy Slope" || terrain === "Trees / Tight Access" || gates >= 3 || propertyType !== "Residential"
        ? "Higher planning"
        : terrain === "Slight Slope" || gates === 2
          ? "Moderate planning"
          : "Straightforward";

    return {
      panels,
      posts,
      estimatedDays,
      complexity,
      cleanLength
    };
  }, [gates, length, propertyType, selectedMaterial.pace, terrain]);

  const summary = `ASAP Fence & Gates project planner
City: ${city}
Property type: ${propertyType}
Fence type: ${material}
Primary goal: ${purpose}
Approximate length: ${plan.cleanLength} linear feet
Preferred height: ${height}
Gates needed: ${gates}
Terrain/access: ${terrain}
Permit/utility help: ${permitHelp ? "Yes" : "Not sure / no"}
Planning estimate: ${plan.panels} sections, ${plan.posts} posts, ${plan.estimatedDays} day(s) on a straightforward schedule
Notes: Please verify final measurements, property lines, utilities, HOA rules, and permit needs.`;

  const copySummary = async () => {
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="bg-white py-16">
      <div className="container-xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] bg-[#071427] p-6 text-white shadow-2xl shadow-blue-950/25 md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-[#f59f22]">
              <Calculator className="h-4 w-4" />
              Interactive fence planner
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight">Build a quick fence plan before you call.</h2>
            <p className="mt-4 leading-7 text-slate-300">
              Use this tool to organize the same details ASAP Fence & Gates needs for a cleaner estimate conversation:
              material, length, gates, property type, terrain, city, permits, and project goal.
            </p>

            <div className="mt-8 grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">Fence Type</span>
                <select
                  className="rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-[#071427]"
                  value={material}
                  onChange={(event) => setMaterial(event.target.value)}
                >
                  {materialOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">Linear Feet</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-[#071427]"
                    min={24}
                    max={3000}
                    type="number"
                    value={length}
                    onChange={(event) => setLength(Number(event.target.value))}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">Height</span>
                  <select
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-[#071427]"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                  >
                    {["4 ft", "5 ft", "6 ft", "8 ft", "Unsure"].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">Gates</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-[#071427]"
                    min={0}
                    max={10}
                    type="number"
                    value={gates}
                    onChange={(event) => setGates(Number(event.target.value))}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">City</span>
                  <input
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-[#071427]"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">Property Type</span>
                  <select
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-[#071427]"
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                  >
                    {["Residential", "Commercial", "Property Manager", "General Contractor", "Agricultural"].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">Terrain / Access</span>
                  <select
                    className="rounded-2xl border border-white/10 bg-white px-4 py-3 font-bold text-[#071427]"
                    value={terrain}
                    onChange={(event) => setTerrain(event.target.value)}
                  >
                    {terrainOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div>
                <span className="text-sm font-black uppercase tracking-[0.16em] text-[#f59f22]">Project Goal</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {purposeOptions.map((option) => (
                    <button
                      className={`rounded-full px-4 py-2 text-sm font-black transition ${
                        purpose === option ? "bg-[#f59f22] text-[#071427]" : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                      key={option}
                      onClick={() => setPurpose(option)}
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm font-bold leading-6 text-slate-200">
                <input
                  className="mt-1 h-4 w-4 accent-[#f59f22]"
                  checked={permitHelp}
                  type="checkbox"
                  onChange={(event) => setPermitHelp(event.target.checked)}
                />
                I want help with permits, property lines, utility checks, or HOA requirements.
              </label>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-blue-950/10 md:p-8">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0b3b75]">Recommended Plan</p>
                  <h3 className="mt-2 text-3xl font-black text-[#071427]">{selectedMaterial.label}</h3>
                  <p className="mt-3 max-w-2xl font-semibold leading-7 text-slate-600">{selectedMaterial.description}</p>
                </div>
                <span className="rounded-full bg-[#f59f22] px-4 py-2 text-sm font-black text-[#071427]">{plan.complexity}</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Approx. Sections", value: plan.panels, icon: Fence },
                  { label: "Approx. Posts", value: plan.posts, icon: Ruler },
                  { label: "Gates", value: gates, icon: ShieldCheck },
                  { label: "Schedule", value: `${plan.estimatedDays} day${plan.estimatedDays === 1 ? "" : "s"}`, icon: ClipboardCheck }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-100" key={item.label}>
                      <Icon className="h-6 w-6 text-[#f59f22]" />
                      <p className="mt-4 text-3xl font-black text-[#071427]">{item.value}</p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-100">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Products To Discuss</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedMaterial.products.map((product) => (
                      <span className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black text-[#0b3b75]" key={product}>
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl bg-white p-5 ring-1 ring-slate-100">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">Next Step</p>
                  <p className="mt-4 font-bold leading-7 text-slate-700">
                    Call ASAP Fence & Gates with this summary so the team can verify measurements, gates, materials,
                    permits, utility checks, and scheduling.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] bg-[#0b3b75] p-6 text-white shadow-2xl shadow-blue-950/20 md:p-8">
              <div className="flex items-center gap-2 text-[#f59f22]">
                <MapPin className="h-5 w-5" />
                <p className="text-sm font-black uppercase tracking-[0.16em]">Project Summary</p>
              </div>
              <pre className="mt-5 max-h-[320px] overflow-auto whitespace-pre-wrap rounded-3xl bg-white/10 p-5 text-sm font-semibold leading-7 text-slate-100">
                {summary}
              </pre>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f59f22] px-6 py-3 font-black text-[#071427]"
                  onClick={copySummary}
                  type="button"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  {copied ? "Copied" : "Copy Summary"}
                </button>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-black text-[#071427]"
                  href={company.bradentonHref}
                >
                  <Phone className="h-5 w-5 text-[#0b3b75]" />
                  Call Bradenton
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#071427] px-6 py-3 font-black text-white ring-1 ring-white/20"
                  href={`mailto:${company.email}?subject=Fence Builder Plan&body=${encodeURIComponent(summary)}`}
                >
                  <Send className="h-5 w-5" />
                  Email Plan
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

