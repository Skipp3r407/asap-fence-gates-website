import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { services } from "@/lib/site-data";

type Params = {
  service: string;
};

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.service);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const resolvedParams = await params;
  const service = services.find((item) => item.slug === resolvedParams.service);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
