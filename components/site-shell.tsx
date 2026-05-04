"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ChevronDown, ExternalLink, Menu, Phone, Sparkles, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navItems, sectionPages, serviceAreas, services } from "@/lib/site-data";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className="group inline-flex shrink-0 items-center" href="/" aria-label="ASAP Fence & Gates home">
      <Image
        src="/images/logo.png"
        alt="ASAP Fence & Gates"
        width={900}
        height={332}
        priority
        className={`h-auto w-[260px] max-w-none object-contain transition duration-300 group-hover:scale-[1.02] sm:w-[340px] lg:w-[430px] ${
          inverse ? "rounded-2xl bg-white p-2 shadow-xl shadow-black/20" : "mix-blend-multiply"
        }`}
      />
    </Link>
  );
}

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 3200);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-white text-[#071427]">
      <div className="absolute inset-0 fence-pattern opacity-40" />
      <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#d9ebff]/70 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#f59f22]/15 blur-3xl" />
      <div className="relative grid place-items-center gap-7">
        <div className="animate-[logo-grow_3.2s_ease-in-out_forwards]">
          <Image
            src="/images/logo.png"
            alt="ASAP Fence & Gates loading"
            width={520}
            height={192}
            priority
            className="h-auto w-[210px] max-w-[80vw] object-contain sm:w-[294px]"
          />
        </div>
        <div className="h-1.5 w-52 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-full origin-left animate-[load-bar_3.2s_ease-in-out_forwards] rounded-full bg-[#f59f22]" />
        </div>
      </div>
    </div>
  );
}

export function ThemeCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[120] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#f59f22] mix-blend-multiply transition-transform duration-150 ease-out md:block"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="pointer-events-none fixed z-[121] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b3b75] shadow-[0_0_18px_rgba(245,159,34,0.65)] md:block"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const standardNavItems = navItems.filter((item) => item.label !== "Services");
  const isServicesActive = pathname === "/services" || services.some((service) => pathname === `/${service.slug}`);
  const isExploreActive = sectionPages.some((page) => pathname === page.href);
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_14px_40px_rgba(8,17,31,0.07)]">
      <div className="hidden bg-[#071427] py-2 text-xs text-white md:block">
        <div className="container-xl flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#f59f22]" />
            Licensed & insured fence and gate installation across Southwest Florida and the Orlando area.
          </span>
          <div className="flex items-center gap-5 font-semibold">
            <a className="transition hover:text-[#f59f22]" href={company.bradentonHref}>
              Bradenton: {company.bradentonPhone}
            </a>
            <a className="transition hover:text-[#f59f22]" href={company.orlandoHref}>
              Orlando: {company.orlandoPhone}
            </a>
          </div>
        </div>
      </div>
      <div className="container-xl flex min-h-44 items-center justify-between gap-6 bg-white py-4">
        <Logo />
        <nav className="hidden items-center gap-1 rounded-2xl border border-slate-200/90 bg-white px-2 py-2 text-sm font-black leading-none text-slate-700 shadow-[0_10px_35px_rgba(8,17,31,0.08)] lg:flex">
          <div className="group relative">
            <Link
              className={`inline-flex h-10 items-center justify-center gap-1 rounded-xl px-3.5 transition ${
                isServicesActive ? "bg-[#f59f22] text-[#071427] ring-1 ring-[#f59f22]" : "hover:bg-[#f59f22] hover:text-[#071427]"
              }`}
              href="/services"
            >
              Services <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-[calc(100%-2px)] z-50 w-[680px] -translate-x-1/2 rounded-[1.75rem] border border-slate-200 bg-white p-4 opacity-0 shadow-2xl shadow-blue-950/15 transition duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid gap-2 md:grid-cols-2">
                {services.slice(0, 8).map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      className="group/item rounded-2xl p-4 transition hover:bg-[#fff3df]"
                      href={`/${service.slug}`}
                      key={service.slug}
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0b3b75] text-white transition group-hover/item:bg-[#f59f22] group-hover/item:text-[#071427]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-[0.95rem] font-black text-[#071427]">{service.title}</span>
                          <span className="mt-1 line-clamp-2 block text-sm font-semibold leading-5 text-slate-700">
                            {service.summary}
                          </span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link
                className="mt-3 flex items-center justify-between rounded-2xl bg-[#071427] px-5 py-4 font-black text-white transition hover:bg-[#f59f22] hover:text-[#071427]"
                href="/services"
              >
                View All Fence & Gate Services <ChevronDown className="-rotate-90 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="group relative">
            <button
              className={`inline-flex h-10 items-center justify-center gap-1 rounded-xl px-3.5 transition ${
                isExploreActive ? "bg-[#f59f22] text-[#071427] ring-1 ring-[#f59f22]" : "hover:bg-[#f59f22] hover:text-[#071427]"
              }`}
              type="button"
            >
              Explore <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-[calc(100%-2px)] z-50 w-[560px] -translate-x-1/2 rounded-[1.75rem] border border-slate-200 bg-white p-4 opacity-0 shadow-2xl shadow-blue-950/15 transition duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid gap-2 md:grid-cols-2">
                {sectionPages.map((page) => {
                  const Icon = page.icon;

                  return (
                    <Link
                      className="group/item rounded-2xl p-4 transition hover:bg-[#fff3df]"
                      href={page.href}
                      key={page.href}
                    >
                      <div className="flex items-start gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f59f22] text-[#071427] transition group-hover/item:bg-[#0b3b75] group-hover/item:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-[0.95rem] font-black text-[#071427]">{page.label}</span>
                          <span className="mt-1 block text-sm font-semibold leading-5 text-slate-700">
                            {page.description}
                          </span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {standardNavItems.map((item) => (
            <Link
              className={`inline-flex h-10 items-center justify-center rounded-xl px-3.5 transition ${
                isActive(item.href) ? "bg-[#f59f22] text-[#071427] ring-1 ring-[#f59f22]" : "hover:bg-[#f59f22] hover:text-[#071427]"
              }`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_10px_30px_rgba(8,17,31,0.08)]">
            <a
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3.5 text-sm font-black leading-none text-[#0b3b75] transition hover:bg-[#f59f22] hover:text-[#071427]"
              href={company.bradentonHref}
            >
              <Phone className="h-4 w-4" /> Bradenton
            </a>
            <a
              className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3.5 text-sm font-black leading-none text-[#071427] transition hover:bg-[#f59f22] hover:text-[#071427]"
              href={company.orlandoHref}
            >
              Orlando
            </a>
          </div>
          <Link
            className="inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-2xl bg-[#f59f22] px-5 text-sm font-black leading-none text-[#071427] shadow-lg shadow-amber-500/25 transition hover:-translate-y-0.5 hover:bg-[#ffb13d]"
            href="/contact"
          >
            Request Estimate
          </Link>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-[#071427] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white/96 p-5 shadow-2xl backdrop-blur lg:hidden">
          <div className="container-xl grid gap-4">
            <Link
              className={`rounded-2xl px-4 py-3 font-black ${
                isServicesActive ? "bg-[#f59f22] text-[#071427]" : "bg-slate-50 text-slate-800"
              }`}
              href="/services"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <div className="grid gap-2 pl-3">
              {services.slice(0, 6).map((service) => (
                <Link
                  className="rounded-xl bg-amber-50 px-4 py-2.5 text-sm font-bold text-[#071427]"
                  href={`/${service.slug}`}
                  key={service.slug}
                  onClick={() => setOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Link
              className={`rounded-2xl px-4 py-3 font-black ${
                isExploreActive ? "bg-[#f59f22] text-[#071427]" : "bg-slate-50 text-slate-800"
              }`}
              href="/fence-builder"
              onClick={() => setOpen(false)}
            >
              Explore
            </Link>
            <div className="grid gap-2 pl-3">
              {sectionPages.map((page) => (
                <Link
                  className="rounded-xl bg-amber-50 px-4 py-2.5 text-sm font-bold text-[#071427]"
                  href={page.href}
                  key={page.href}
                  onClick={() => setOpen(false)}
                >
                  {page.label}
                </Link>
              ))}
            </div>
            {standardNavItems.map((item) => (
              <Link
                className={`rounded-2xl px-4 py-3 font-black ${
                  isActive(item.href) ? "bg-[#f59f22] text-[#071427]" : "bg-slate-50 text-slate-800"
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <a className="rounded-2xl bg-[#0b3b75] px-4 py-3 text-center font-bold text-white" href={company.bradentonHref}>
                Bradenton
              </a>
              <a className="rounded-2xl bg-[#071427] px-4 py-3 text-center font-bold text-white" href={company.orlandoHref}>
                Orlando
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#071427] py-16 text-white">
      <div className="container-xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Professional fence and gate installation for homeowners, property managers, contractors, commercial sites,
            industrial properties, and agricultural land across Florida communities.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-slate-300">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.bradentonHref}>Bradenton Office: {company.bradentonPhone}</a>
            <a href={company.orlandoHref}>Orlando Office: {company.orlandoPhone}</a>
            <a className="inline-flex items-center gap-1.5 hover:text-white" href={company.facebookUrl} target="_blank" rel="noreferrer">
              Facebook: {company.facebookFollowers} <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black">Services</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {services.map((service) => (
              <Link className="hover:text-[#f59f22]" href={`/${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black">Service Areas</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="container-xl mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <span>Copyright {new Date().getFullYear()} {company.name}. Demo website concept for client proposal.</span>
        <a
          className="inline-flex items-center gap-1.5 font-semibold text-slate-300 transition hover:text-white"
          href="https://elevatedigitalstudios.net/"
          target="_blank"
          rel="noreferrer"
        >
          Website Design by Elevate Digital Studio <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const chatQuestions = [
    {
      question: "What fence is best for privacy?",
      answer:
        "Vinyl privacy fencing is usually the cleanest low-maintenance choice in Florida. Wood is also an option if you want a warmer custom look and do not mind more upkeep."
    },
    {
      question: "Can I get a free estimate?",
      answer:
        "Yes. Share your city, fence type, approximate length, gate needs, and project photos if available. ASAP Fence & Gates can help you choose the right next step."
    },
    {
      question: "Do you install gates?",
      answer:
        "Yes. The team handles walk gates, driveway gates, gate repairs, automatic gates, electric gates, and access-related upgrades."
    },
    {
      question: "Do you help with permits?",
      answer:
        "ASAP Fence & Gates can help customers think through permits, property line concerns, HOA details, and utility checks before digging starts."
    }
  ];
  const activeChat = chatQuestions[activeQuestion];

  return (
    <>
      <a
        className="fixed bottom-[6.25rem] right-4 z-40 hidden h-12 w-12 place-items-center rounded-full bg-[#f59f22] text-[#071427] shadow-2xl shadow-amber-500/25 ring-1 ring-white/40 transition hover:-translate-y-1 md:grid"
        href="#top"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
      <button
        className="fixed bottom-7 right-4 z-40 hidden h-16 w-16 place-items-center overflow-hidden rounded-full bg-white text-[#0b3b75] shadow-2xl shadow-blue-950/20 ring-1 ring-slate-200 transition hover:-translate-y-1 md:grid"
        aria-label="Open fence questions chatbot"
        onClick={() => setChatOpen((value) => !value)}
      >
        {chatOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Image src="/favicon.png" alt="" width={56} height={56} className="h-14 w-14 rounded-full object-contain" />
        )}
      </button>
      {chatOpen ? (
        <div className="fixed bottom-28 right-4 z-40 hidden w-[380px] overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-blue-950/25 ring-1 ring-slate-200 md:block">
          <div className="bg-[#071427] p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white">
                  <Image src="/favicon.png" alt="" width={44} height={44} className="h-11 w-11 rounded-full object-contain" />
                </span>
                <span>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f59f22]">Fence Help</p>
                <h3 className="mt-2 text-xl font-black">Ask ASAP&apos;s assistant</h3>
                </span>
              </div>
              <button
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                onClick={() => setChatOpen(false)}
                aria-label="Close chatbot"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Choose a common question below, then call or request an estimate when you are ready.
            </p>
          </div>
          <div className="grid gap-3 p-5">
            <div className="rounded-3xl bg-slate-50 p-4">
              <p className="text-sm font-black text-[#071427]">{activeChat.question}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{activeChat.answer}</p>
            </div>
            <div className="grid gap-2">
              {chatQuestions.map((item, index) => (
                <button
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                    activeQuestion === index ? "bg-[#f59f22] text-[#071427]" : "bg-blue-50 text-[#0b3b75] hover:bg-amber-50 hover:text-[#071427]"
                  }`}
                  key={item.question}
                  onClick={() => setActiveQuestion(index)}
                >
                  {item.question}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a className="rounded-2xl bg-[#0b3b75] px-4 py-3 text-center text-sm font-black text-white" href={company.bradentonHref}>
                Call Office
              </a>
              <Link className="rounded-2xl bg-[#f59f22] px-4 py-3 text-center text-sm font-black text-[#071427]" href="/contact">
                Estimate
              </Link>
            </div>
          </div>
        </div>
      ) : null}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/20 bg-[#071427] p-2 text-sm font-black text-white shadow-2xl md:hidden">
        <a className="flex items-center justify-center gap-2 rounded-xl bg-[#0b3b75] py-3" href={company.bradentonHref}>
          <Phone className="h-4 w-4" /> Bradenton
        </a>
        <Link className="ml-2 flex items-center justify-center rounded-xl bg-[#f59f22] py-3 text-[#071427]" href="/contact">
          Free Estimate
        </Link>
      </div>
    </>
  );
}
