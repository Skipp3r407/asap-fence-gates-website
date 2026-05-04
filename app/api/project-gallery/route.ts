import { NextResponse } from "next/server";

const TRUSTY_PORTFOLIO_URL = "https://trusty.app/companies/asap-fence-gates-llc";
const DURAFENCE_PROJECT_URL = `${TRUSTY_PORTFOLIO_URL}/durafence-installation-with-estate-gate`;
const MONTHS =
  "January|February|March|April|May|June|July|August|September|October|November|December";

type Project = {
  id: string;
  title: string;
  href: string;
  image: string;
  imageSource: string;
  date: string;
  city: string;
  projectType: string;
  products: string[];
  photoCount: number;
};

const companyCamFallbackImages = [
  "https://img.companycam.com/H_hE7-hHQ5HsegWQ6br1SYdIsbNKRs1eIO2NWXvwpj8/rs:fit:4032:4032/q:80/aHR0cHM6Ly9jb21w/YW55Y2FtLXBlbmRp/bmcuczMuYW1hem9u/YXdzLmNvbS85ZWM0/Njg3NS1kYmFiLTRj/NTEtYTI0My0wYTkz/MGQ1NWI1ZjMuanBn.jpg",
  "https://img.companycam.com/OdSzNwISZYiKCV5fPBP-uB1FnunvuFDDki24aKdw5XE/rs:fit:4032:4032/q:80/aHR0cHM6Ly9jb21w/YW55Y2FtLXBlbmRp/bmcuczMuYW1hem9u/YXdzLmNvbS82MWEy/NDViNC1iMjBmLTQz/MGUtYmVmZi0wOTI5/MzdiMjI5YjIuanBn.jpg",
  "https://img.companycam.com/VYSBY5lymh1TLKbquJUX8L0GiGncQNVyvii07ERLXDo/rs:fit:4032:4032/q:80/aHR0cHM6Ly9jb21w/YW55Y2FtLXBlbmRp/bmcuczMuYW1hem9u/YXdzLmNvbS84OWUx/YTIwNC0xOGFlLTQ2/ZTktYTI5YS0wMTQz/ZmU4NDdlYjguanBn.jpg"
];

const royaltyFreeFallbackImages = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=90",
  "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=1400&q=90"
];

const fallbackProjects: Project[] = [
  {
    id: "durafence-installation-with-estate-gate",
    title: "Durafence Installation With Estate Gate",
    href: DURAFENCE_PROJECT_URL,
    image: companyCamFallbackImages[0],
    imageSource: "Actual public CompanyCam project photo",
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
    image: companyCamFallbackImages[1],
    imageSource: "Actual public CompanyCam project photo",
    date: "October 2025",
    city: "Bradenton, FL",
    projectType: "Aluminum Fence Installation",
    products: ["3 Rail Aluminum Fence", "Aluminum Fence Installation"],
    photoCount: 12
  },
  {
    id: "vinyl-privacy-fence-installation-bradenton",
    title: "White Vinyl Privacy Fence Installation",
    href: "https://asapfenceandgate.com/gallery/",
    image: royaltyFreeFallbackImages[1],
    imageSource: "Royalty-free fallback inspiration",
    date: "Recent Project",
    city: "Bradenton, FL",
    projectType: "Vinyl Fence Installation",
    products: ["Vinyl Privacy Fence", "White Vinyl Fence", "Privacy Fencing"],
    photoCount: 8
  },
  {
    id: "pool-aluminum-fence-sarasota",
    title: "Pool-Safe Aluminum Fence Layout",
    href: "https://asapfenceandgate.com/gallery/",
    image: royaltyFreeFallbackImages[0],
    imageSource: "Royalty-free fallback inspiration",
    date: "Recent Project",
    city: "Sarasota, FL",
    projectType: "Aluminum Fence Installation",
    products: ["Aluminum Fence", "Pool Fencing", "Residential Fence"],
    photoCount: 7
  },
  {
    id: "wood-privacy-fence-venice",
    title: "Wood Privacy Fence For Backyard Upgrade",
    href: "https://asapfenceandgate.com/gallery/",
    image: royaltyFreeFallbackImages[3],
    imageSource: "Royalty-free fallback inspiration",
    date: "Recent Project",
    city: "Venice, FL",
    projectType: "Wood Fence Installation",
    products: ["Wood Privacy Fence", "Backyard Fencing", "Gate Layout"],
    photoCount: 9
  },
  {
    id: "commercial-chain-link-fence",
    title: "Commercial Chain Link Security Fence",
    href: "https://asapfenceandgate.com/gallery/",
    image: royaltyFreeFallbackImages[5],
    imageSource: "Royalty-free fallback inspiration",
    date: "Recent Project",
    city: "Orlando Area",
    projectType: "Chain-link Fence Installation",
    products: ["Chain-link Fence", "Commercial Security", "Access Planning"],
    photoCount: 10
  }
];

export async function GET() {
  try {
    const [portfolioHtml, durafenceHtml] = await Promise.all([
      fetchTrustyPage(TRUSTY_PORTFOLIO_URL),
      fetchTrustyPage(DURAFENCE_PROJECT_URL)
    ]);

    const projects = extractProjects(portfolioHtml).filter((project) => project.id !== "durafence-installation-with-estate-gate");
    const portfolioImages = extractImages(portfolioHtml);
    const durafencePhotos = extractImages(durafenceHtml);
    const durafenceGallery = createDurafenceGallery(durafencePhotos);
    const hydratedProjects = projects.slice(0, 155).map((project, index) => ({
      ...project,
      image: portfolioImages.length ? portfolioImages[index % portfolioImages.length] : getRoyaltyFreeImage(project.projectType, index),
      imageSource: portfolioImages.length ? "Actual public CompanyCam project photo" : "Royalty-free fallback inspiration"
    }));
    const galleryProjects = [...durafenceGallery, ...hydratedProjects];

    return NextResponse.json({
      source: TRUSTY_PORTFOLIO_URL,
      featuredSource: DURAFENCE_PROJECT_URL,
      updatedAt: new Date().toISOString(),
      totalProjects: galleryProjects.length || fallbackProjects.length,
      totalImages: durafencePhotos.length + portfolioImages.length || royaltyFreeFallbackImages.length,
      featuredPhotoCount: durafencePhotos.length,
      imageMode: durafencePhotos.length || portfolioImages.length ? "actual-project-photos" : "royalty-free-fallbacks",
      projects: galleryProjects.length ? galleryProjects : fallbackProjects
    });
  } catch {
    return NextResponse.json({
      source: TRUSTY_PORTFOLIO_URL,
      updatedAt: new Date().toISOString(),
      totalProjects: fallbackProjects.length,
      totalImages: royaltyFreeFallbackImages.length,
      imageMode: "royalty-free-fallbacks",
      projects: fallbackProjects
    });
  }
}

function fetchTrustyPage(url: string) {
  return fetch(url, {
    next: {
      revalidate: 3600
    }
  }).then((response) => response.text());
}

function createDurafenceGallery(photos: string[]): Project[] {
  return photos.map((image, index) => ({
    id: `durafence-installation-with-estate-gate-photo-${index + 1}`,
    title: index === 0 ? "Durafence Installation With Estate Gate" : `Durafence Estate Gate Project Photo ${index + 1}`,
    href: DURAFENCE_PROJECT_URL,
    image,
    imageSource: "Actual Trusty project photo",
    date: "October 2025",
    city: "Bradenton, FL",
    projectType: "Estate Gates Installation",
    products: ["Durafence", "Durafence Installation", "Estate Gates Installation"],
    photoCount: photos.length
  }));
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
      image: getRoyaltyFreeImage(inferProjectType(title), projects.length),
      imageSource: "Royalty-free fallback inspiration",
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

function getRoyaltyFreeImage(projectType: string, index: number) {
  if (/aluminum|pool/i.test(projectType)) return royaltyFreeFallbackImages[index % 2 === 0 ? 0 : 7];
  if (/wood/i.test(projectType)) return royaltyFreeFallbackImages[3];
  if (/chain|commercial|temporary/i.test(projectType)) return royaltyFreeFallbackImages[5];
  if (/gate/i.test(projectType)) return royaltyFreeFallbackImages[2];
  if (/vinyl|privacy/i.test(projectType)) return royaltyFreeFallbackImages[1];
  return royaltyFreeFallbackImages[index % royaltyFreeFallbackImages.length];
}
