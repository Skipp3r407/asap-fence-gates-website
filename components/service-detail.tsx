import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { company, galleryImages, processSteps, serviceAreas, services } from "@/lib/site-data";
import { FinalCta, FaqSection, GalleryPreview, SectionHeading } from "@/components/home-sections";

type Service = (typeof services)[number];

export function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon;
  const serviceIndex = services.findIndex((item) => item.slug === service.slug);
  const image = galleryImages[Math.max(serviceIndex, 0) % galleryImages.length];
  const maintenance = getMaintenanceGuidance(service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#071427] py-20 text-white">
        <div className="absolute inset-0 metal-grid opacity-40" />
        <div className="container-xl relative grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f59f22]">Florida Fence Specialists</p>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.hero}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="rounded-full bg-[#f59f22] px-7 py-4 text-center font-black text-[#071427]" href="/contact">
                Request Free Estimate
              </Link>
              <a className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-[#0b3b75]" href={company.bradentonHref}>
                <Phone className="h-4 w-4" /> Call Bradenton
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-[#0b3b75]">
              <Icon className="h-8 w-8" />
            </div>
            <h2 className="mt-5 text-2xl font-black">Project-ready installation</h2>
            <div className="mt-5 grid gap-3">
              {service.bullets.map((bullet) => (
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4" key={bullet}>
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f59f22]" />
                  <span className="font-bold">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-xl grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Service Overview"
            title={`${service.title} that fits your property, schedule, and budget.`}
            text="ASAP Fence & Gates combines local experience, licensed and insured service, fair estimates, and clean installation planning for homeowners, property managers, general contractors, and commercial buyers."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Professional material recommendations",
              "Building permit and utility check support",
              "Residential, commercial, industrial, and agricultural options",
              "Warranty-backed workmanship and honest communication"
            ].map((item) => (
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100" key={item}>
                <CheckCircle2 className="h-6 w-6 text-[#f59f22]" />
                <p className="mt-4 font-bold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-xl grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Detailed Planning Guide"
              title={`What to know before scheduling ${service.title.toLowerCase()}.`}
              text="Great fence projects start before posts are set. ASAP Fence & Gates can help customers think through privacy, access, local requirements, long-term maintenance, and how the finished fence should support the property."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Confirm the purpose: privacy, pool safety, pet containment, access control, security, curb appeal, or job-site protection.",
                "Review HOA expectations, city or county rules, easements, corner-lot visibility, and whether a permit or site plan may be needed.",
                "Plan gates early so daily access, lawn equipment, vehicles, pool entries, and commercial traffic are not an afterthought.",
                "Ask about material durability in Florida heat, humidity, storms, salt air, mildew, termites, and high-use areas."
              ].map((item) => (
                <div className="rounded-3xl bg-slate-50 p-5" key={item}>
                  <CheckCircle2 className="h-6 w-6 text-[#f59f22]" />
                  <p className="mt-4 text-sm font-bold leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/15">
            <Image
              src={image.src}
              alt={`${service.title} project inspiration`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-xl">
          <SectionHeading
            eyebrow="What This Service Covers"
            title="Clear scope, cleaner expectations, better finished results."
            text="Each service page is structured to help visitors understand what matters before requesting an estimate, while reinforcing ASAP Fence & Gates as a practical local expert."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Estimate Preparation",
                text: "Approximate fence length, access points, photos, survey or plot plan details, fence style, height goals, and preferred timeline help the team quote more accurately."
              },
              {
                title: "Permits, Lines & Utilities",
                text: "Florida requirements vary by city and county. Many projects benefit from confirming property lines, easements, utility markings, HOA rules, and permit requirements before digging."
              },
              {
                title: "Installation & Warranty Mindset",
                text: "The current ASAP site emphasizes licensed and insured service, quality materials, fair pricing, high workmanship standards, and warranty-backed work."
              }
            ].map((card) => (
              <article className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-100" key={card.title}>
                <h3 className="text-xl font-black text-[#071427]">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#071427] py-16 text-white">
        <div className="container-xl grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Maintenance & Florida Conditions"
            title={maintenance.title}
            text={maintenance.intro}
            light
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {maintenance.points.map((point) => (
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5" key={point}>
                <CheckCircle2 className="h-5 w-5 text-[#f59f22]" />
                <p className="mt-3 text-sm font-bold leading-6 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-xl">
          <SectionHeading eyebrow="How It Works" title="A clear process from estimate to installation." text="The team keeps the buying experience simple while handling the details that can slow a fence project down." />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6" key={step.title}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0b3b75] font-black text-white">{index + 1}</span>
                <h3 className="mt-5 text-lg font-black text-[#071427]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading eyebrow="Related Services" title="Need a different fence or gate solution?" text="Browse other popular services and guide visitors toward the best fit for their property." />
            <Link className="inline-flex items-center gap-2 font-black text-[#0b3b75]" href="/services">
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => {
                const RelatedIcon = item.icon;

                return (
                  <Link className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl" href={`/${item.slug}`} key={item.slug}>
                    <RelatedIcon className="h-7 w-7 text-[#0b3b75]" />
                    <h3 className="mt-4 text-xl font-black text-[#071427]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
      <section className="bg-[#071427] py-16 text-white">
        <div className="container-xl">
          <SectionHeading eyebrow="Service Areas" title="Local fence service across Southwest Florida and the Orlando area." text="ASAP Fence & Gates supports homeowners, commercial clients, property managers, and contractors in these core markets." light />
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
      <GalleryPreview />
      <FaqSection />
      <FinalCta />
    </>
  );
}

function getMaintenanceGuidance(slug: string) {
  const guidance: Record<string, { title: string; intro: string; points: string[] }> = {
    "vinyl-fence-installation": {
      title: "Vinyl is popular because it is clean, private, and low maintenance.",
      intro:
        "In Florida, vinyl is often selected for privacy and long-term curb appeal because it resists rot, termites, and frequent painting or staining.",
      points: [
        "Wash periodically to remove mildew, pollen, lawn debris, and sprinkler staining.",
        "Choose quality vinyl with UV resistance for Florida sun exposure.",
        "Inspect posts, caps, rails, hinges, and gate hardware after storms or heavy use.",
        "Great fit for privacy, HOA communities, side yards, pools, and rental properties."
      ]
    },
    "aluminum-fence-installation": {
      title: "Aluminum works well when visibility, style, and corrosion resistance matter.",
      intro:
        "Aluminum fencing is a strong choice for pools, waterfront properties, front yards, communities, and commercial areas that need a refined open look.",
      points: [
        "Powder-coated finishes help resist corrosion and daily weather exposure.",
        "Open picket designs preserve visibility while defining the property line.",
        "Pool layouts should plan gate swing, self-closing hardware, and latch placement.",
        "Useful when the property needs security without a full privacy barrier."
      ]
    },
    "chain-link-fence-installation": {
      title: "Chain link is practical, economical, and useful for large areas.",
      intro:
        "Chain link remains a dependable option for commercial yards, construction boundaries, pet areas, utilities, and cost-conscious perimeter security.",
      points: [
        "Galvanized or coated options improve durability and appearance.",
        "Works well for large runs where visibility and affordability are priorities.",
        "Damaged sections and hardware can often be repaired without replacing the whole fence.",
        "Privacy slats, gates, and access control can improve function where needed."
      ]
    },
    "wood-fence-installation": {
      title: "Wood delivers a classic look but needs thoughtful care in Florida.",
      intro:
        "Wood fencing is chosen for warmth and flexibility, but humidity, termites, rot, and storms make material selection and maintenance especially important.",
      points: [
        "Plan for periodic staining, sealing, board replacement, and hardware checks.",
        "Good for classic privacy, shadowbox styles, side-yard screens, and custom gates.",
        "Drainage, sprinkler patterns, and ground contact affect long-term performance.",
        "Best when customers want a natural look and understand ongoing upkeep."
      ]
    },
    "pool-fencing": {
      title: "Pool fencing should balance safety, visibility, and code-aware planning.",
      intro:
        "Florida pool barriers commonly involve height, openings, gate swing, self-closing hardware, and self-latching access details.",
      points: [
        "Pool gates should be planned for self-closing and self-latching hardware.",
        "Barrier layouts should avoid climbable gaps, weak access points, and awkward entries.",
        "Aluminum and vinyl are common choices for clean pool-area designs.",
        "Local code and inspection requirements should be confirmed before installation."
      ]
    }
  };

  return (
    guidance[slug] ?? {
      title: "A better fence lasts longer when the details are planned early.",
      intro:
        "Every fence and gate project should account for material choice, access, local requirements, daily use, weather, and long-term repair needs.",
      points: [
        "Confirm layout, access, gates, material, height, and project purpose before installation.",
        "Check permits, easements, property lines, HOA requirements, and utility markings.",
        "Choose hardware and materials that fit Florida weather and daily use.",
        "Ask when repair is practical and when replacement is the better investment."
      ]
    }
  );
}
