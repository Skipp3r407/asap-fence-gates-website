import { NextResponse } from "next/server";

const TRUSTY_PORTFOLIO_URL = "https://trusty.app/companies/asap-fence-gates-llc";
const MONTHS =
  "January|February|March|April|May|June|July|August|September|October|November|December";

type Project = {
  id: string;
  title: string;
  href: string;
  image: string;
  date: string;
  city: string;
  projectType: string;
  products: string[];
  photoCount: number;
};

const fallbackImages = [
  "https://img.companycam.com/H_hE7-hHQ5HsegWQ6br1SYdIsbNKRs1eIO2NWXvwpj8/rs:fit:4032:4032/q:80/aHR0cHM6Ly9jb21w/YW55Y2FtLXBlbmRp/bmcuczMuYW1hem9u/YXdzLmNvbS85ZWM0/Njg3NS1kYmFiLTRj/NTEtYTI0My0wYTkz/MGQ1NWI1ZjMuanBn.jpg",
  "https://img.companycam.com/OdSzNwISZYiKCV5fPBP-uB1FnunvuFDDki24aKdw5XE/rs:fit:4032:4032/q:80/aHR0cHM6Ly9jb21w/YW55Y2FtLXBlbmRp/bmcuczMuYW1hem9u/YXdzLmNvbS82MWEy/NDViNC1iMjBmLTQz/MGUtYmVmZi0wOTI5/MzdiMjI5YjIuanBn.jpg",
  "https://img.companycam.com/VYSBY5lymh1TLKbquJUX8L0GiGncQNVyvii07ERLXDo/rs:fit:4032:4032/q:80/aHR0cHM6Ly9jb21w/YW55Y2FtLXBlbmRp/bmcuczMuYW1hem9u/YXdzLmNvbS84OWUx/YTIwNC0xOGFlLTQ2/ZTktYTI5YS0wMTQz/ZmU4NDdlYjguanBn.jpg"
];

const fallbackProjects: Project[] = [
  {
    id: "durafence-installation-with-estate-gate",
    title: "Durafence Installation With Estate Gate",
    href: "https://trusty.app/companies/asap-fence-gates-llc/durafence-installation-with-estate-gate",
    image: fallbackImages[0],
    date: "October 2025",
    city: "Bradenton, FL",
    projectType: "Estate Gates Installation",
    products: ["Durafence", "Durafence Installation", "Estate Gates Installation"],
    photoCount: 12
  },
  {
    id: "3-rail-black-aluminum-in-lakewood-ranches",
    title: "3 Rail Black Aluminum In Lakewood Ranches",
    href: "https://trusty.app/companies/asap-fence-gates-llc/3-rail-black-aluminum-in-lakewood-ranches",
    image: fallbackImages[1],
    date: "October 2025",
    city: "Bradenton, FL",
    projectType: "Aluminum Fence Installation",
    products: ["3 Rail Aluminum Fence", "Aluminum Fence Installation"],
    photoCount: 12
  }
];

export async function GET() {
  try {
    const html = await fetch(TRUSTY_PORTFOLIO_URL, {
      next: {
        revalidate: 3600
      }
    }).then((response) => response.text());

    const projects = extractProjects(html);
    const images = extractImages(html);
    const hydratedProjects = projects.slice(0, 164).map((project, index) => ({
      ...project,
      image: images[index % Math.max(images.length, 1)] ?? fallbackImages[index % fallbackImages.length]
    }));

    return NextResponse.json({
      source: TRUSTY_PORTFOLIO_URL,
      updatedAt: new Date().toISOString(),
      totalProjects: hydratedProjects.length || fallbackProjects.length,
      totalImages: images.length || fallbackImages.length,
      projects: hydratedProjects.length ? hydratedProjects : fallbackProjects
    });
  } catch {
    return NextResponse.json({
      source: TRUSTY_PORTFOLIO_URL,
      updatedAt: new Date().toISOString(),
      totalProjects: fallbackProjects.length,
      totalImages: fallbackImages.length,
      projects: fallbackProjects
    });
  }
}

function extractProjects(html: string): Project[] {
  const hrefRegex = /https:\/\/trusty\.app\/companies\/asap-fence-gates-llc\/([a-z0-9-]+)/g;
  const seen = new Set<string>();
  const projects: Project[] = [];

  for (const match of html.matchAll(hrefRegex)) {
    const slug = match[1];

    if (!slug || seen.has(slug) || slug === "asap-fence-gates-llc") {
      continue;
    }

    seen.add(slug);
    const windowText = stripHtml(html.slice(Math.max(0, match.index - 600), Math.min(html.length, match.index + 600)));
    const date = windowText.match(new RegExp(`(${MONTHS})\\s+20\\d{2}`))?.[0] ?? inferDate(slug);
    const title = cleanTitle(windowText, slug, date);
    const products = inferProducts(title);

    projects.push({
      id: slug,
      title,
      href: `${TRUSTY_PORTFOLIO_URL}/${slug}`,
      image: fallbackImages[projects.length % fallbackImages.length],
      date,
      city: inferCity(`${title} ${slug}`),
      projectType: inferProjectType(title),
      products,
      photoCount: Number(title.match(/^(\d+)/)?.[1] ?? products.length + 5)
    });
  }

  return projects;
}

function extractImages(html: string) {
  const urls = [...html.matchAll(/https:\/\/img\.companycam\.com\/[^"'<>\\ ]+\.(?:jpg|jpeg|png)/g)]
    .map((match) => match[0].replace(/\\$/, ""))
    .filter((url) => !url.includes("/logos/") && !url.endsWith(".png"));

  return [...new Set(urls)].filter((url) => url.includes("rs:fit:400:400") || url.includes("rs:fit:4032:4032"));
}

function stripHtml(value: string) {
  return value
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanTitle(windowText: string, slug: string, date: string) {
  const dateIndex = windowText.indexOf(date);
  const beforeDate = dateIndex > 0 ? windowText.slice(Math.max(0, dateIndex - 140), dateIndex) : "";
  const candidate =
    beforeDate
      .replace(/\b\d+\b/g, " ")
      .replace(/Our Work|ASAP Fence & Gates, LLC|Contact|Options/g, " ")
      .replace(/\s+/g, " ")
      .trim() || titleize(slug);

  return candidate.length > 8 ? candidate : titleize(slug);
}

function titleize(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ")
    .replace(/\bFl\b/g, "FL")
    .replace(/\bFt\b/g, "Ft");
}

function inferDate(text: string) {
  return text.match(new RegExp(`(${MONTHS})-?20\\d{2}`, "i"))?.[0].replace("-", " ") ?? "Recent Project";
}

function inferCity(text: string) {
  const cities = ["Bradenton", "Sarasota", "Palmetto", "Lakewood Ranch", "Longboat Key", "North Port", "Venice", "Punta Gorda", "Parrish", "Apollo Beach", "Zephyrhills", "Myakka City", "Bonita"];
  return cities.find((city) => text.toLowerCase().includes(city.toLowerCase())) ?? "Bradenton, FL";
}

function inferProjectType(title: string) {
  if (/gate|operator/i.test(title)) return "Gate Installation";
  if (/aluminum/i.test(title)) return "Aluminum Fence Installation";
  if (/chain/i.test(title)) return "Chain-link Fence Installation";
  if (/wood|shadowbox|board/i.test(title)) return "Wood Fence Installation";
  if (/vinyl|privacy|picket/i.test(title)) return "Vinyl Fence Installation";
  return "Fence Installation";
}

function inferProducts(title: string) {
  const products = [
    "Vinyl Privacy Fence",
    "6Ft White Vinyl Privacy Fence",
    "3 Rail Aluminum Fence",
    "Black 3 Rail Aluminum Fence",
    "Chain-link Fence",
    "Shadowbox Wood Fence",
    "Pressure Treated Wood Fence",
    "Estate Gates Installation",
    "Puppy Picket",
    "Durafence"
  ].filter((product) => title.toLowerCase().includes(product.toLowerCase().replace("6ft ", "")));

  return products.length ? products : [inferProjectType(title)];
}
