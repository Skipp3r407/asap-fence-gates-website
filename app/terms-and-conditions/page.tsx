import type { Metadata } from "next";
import { FinalCta, SimplePageHero } from "@/components/home-sections";

export const metadata: Metadata = {
  title: "Terms and Conditions | ASAP Fence & Gates",
  description:
    "Read the website terms and conditions for ASAP Fence & Gates, including use license, disclaimers, limitations, links, privacy, and governing law."
};

const terms = [
  {
    title: "1. Terms",
    body: [
      "By accessing this website, accessible from https://asapfenceandgate.com/, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws.",
      "If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this website are protected by copyright and trademark law."
    ]
  },
  {
    title: "2. Use License",
    body: [
      "Permission is granted to temporarily download one copy of the materials on ASAP Fence and Gates's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
      "Under this license you may not modify or copy the materials, use the materials for any commercial purpose or public display, attempt to reverse engineer any software contained on the website, remove copyright or proprietary notations, transfer the materials to another person, or mirror the materials on another server.",
      "ASAP Fence and Gates may terminate this license upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether printed or electronic."
    ]
  },
  {
    title: "3. Disclaimer",
    body: [
      "All materials on ASAP Fence and Gates's website are provided as is. ASAP Fence and Gates makes no warranties, expressed or implied, and negates all other warranties.",
      "ASAP Fence and Gates does not make representations concerning the accuracy or reliability of the use of the materials on its website or otherwise relating to such materials or any sites linked to this website."
    ]
  },
  {
    title: "4. Limitations",
    body: [
      "ASAP Fence and Gates or its suppliers will not be held accountable for any damages that arise from the use or inability to use the materials on ASAP Fence and Gates's website, even if ASAP Fence and Gates or an authorized representative has been notified orally or in writing of the possibility of such damage.",
      "Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental damages, so these limitations may not apply to you."
    ]
  },
  {
    title: "5. Revisions and Errata",
    body: [
      "The materials appearing on ASAP Fence and Gates's website may include technical, typographical, or photographic errors. ASAP Fence and Gates does not promise that any of the materials on this website are accurate, complete, or current.",
      "ASAP Fence and Gates may change the materials contained on its website at any time without notice and does not make any commitment to update the materials."
    ]
  },
  {
    title: "6. Links",
    body: [
      "ASAP Fence and Gates has not reviewed all of the sites linked to its website and is not responsible for the contents of any linked site.",
      "The presence of any link does not imply endorsement by ASAP Fence and Gates. Use of any linked website is at the user's own risk."
    ]
  },
  {
    title: "7. Site Terms of Use Modifications",
    body: [
      "ASAP Fence and Gates may revise these Terms of Use for its website at any time without prior notice. By using this website, you agree to be bound by the current version of these Terms and Conditions of Use."
    ]
  },
  {
    title: "8. Your Privacy",
    body: ["Please review the company's Privacy Policy for more information about privacy practices."]
  },
  {
    title: "9. Governing Law",
    body: [
      "Any claim related to ASAP Fence and Gates's website shall be governed by applicable law without regard to its conflict of law provisions."
    ]
  }
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <SimplePageHero
        eyebrow="Website Terms"
        title="Terms and Conditions"
        text="Website terms adapted from the published ASAP Fence & Gates terms page for a complete, client-ready legal route."
      />
      <section className="bg-white py-16">
        <div className="container-xl">
          <div className="grid gap-5">
            {terms.map((section) => (
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f59f22] hover:shadow-xl hover:shadow-blue-950/10 md:p-8" key={section.title}>
                <h2 className="text-2xl font-black text-[#071427]">{section.title}</h2>
                <div className="mt-4 grid gap-4 text-sm font-semibold leading-7 text-slate-600 md:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}

