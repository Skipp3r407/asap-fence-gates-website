import { NextResponse } from "next/server";

const TRUSTY_PORTFOLIO_URL = "https://trusty.app/companies/asap-fence-gates-llc";
const ASAP_SHOWCASES_URL = "https://asapfenceinstallations.com/showcases";
const DURAFENCE_PROJECT_URL = `${TRUSTY_PORTFOLIO_URL}/durafence-installation-with-estate-gate`;
const LAKEWOOD_ALUMINUM_PROJECT_URL = `${TRUSTY_PORTFOLIO_URL}/3-rail-black-aluminum-in-lakewood-ranches`;
const MONTHS =
  "January|February|March|April|May|June|July|August|September|October|November|December";

const featuredTrustyProjects = [
  {
    slug: "durafence-installation-with-estate-gate",
    url: DURAFENCE_PROJECT_URL,
    title: "Durafence Installation With Estate Gate",
    city: "Bradenton, FL",
    projectType: "Estate Gates Installation",
    products: ["Durafence", "Durafence Installation", "Estate Gates Installation"]
  },
  {
    slug: "3-rail-black-aluminum-in-lakewood-ranches",
    url: LAKEWOOD_ALUMINUM_PROJECT_URL,
    title: "3 Rail Black Aluminum In Lakewood Ranches",
    city: "Bradenton, FL",
    projectType: "Aluminum Fence Installation",
    products: ["3 Rail Aluminum Fence", "Aluminum Fence Installation"]
  }
];

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
  photos: string[];
  description?: string;
  reviewerName?: string;
  reviewRating?: string;
  reviewBody?: string;
};

type ShowcaseProject = {
  id?: string;
  url_slug?: string;
  project_date?: string;
  reviewer_name?: string;
  review_rating?: string;
  review_body?: string;
  title?: string;
  subtitle?: string;
  formatted_location?: string;
  location?: string;
  photos?: string[];
  featured_photo?: string;
  detailed_description?: string;
  service?: string;
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
    photoCount: 12,
    photos: [companyCamFallbackImages[0]]
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
    photoCount: 12,
    photos: [companyCamFallbackImages[1]]
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
    photoCount: 8,
    photos: [royaltyFreeFallbackImages[1]]
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
    photoCount: 7,
    photos: [royaltyFreeFallbackImages[0]]
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
    photoCount: 9,
    photos: [royaltyFreeFallbackImages[3]]
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
    photoCount: 10,
    photos: [royaltyFreeFallbackImages[5]]
  }
];

export async function GET() {
  try {
    const [showcaseHtml, portfolioHtml, ...featuredProjectHtml] = await Promise.all([
      fetchPage(ASAP_SHOWCASES_URL),
      fetchPage(TRUSTY_PORTFOLIO_URL),
      ...featuredTrustyProjects.map((project) => fetchTrustyPage(project.url))
    ]);

    const showcaseProjects = extractShowcaseProjects(showcaseHtml);
    const featuredSlugs = new Set(featuredTrustyProjects.map((project) => project.slug));
    const projects = extractProjects(portfolioHtml).filter((project) => !featuredSlugs.has(project.id));
    const portfolioImages = extractImages(portfolioHtml);
    const featuredGalleries = featuredProjectHtml.map((html, index) =>
      createFeaturedProjectGallery(featuredTrustyProjects[index], extractImages(html))
    );
    const actualPhotoCount =
      showcaseProjects.reduce((total, project) => total + project.photoCount, 0) +
      featuredGalleries.reduce((total, project) => total + project.photoCount, 0);
    const hydratedProjects = projects.slice(0, Math.max(0, 164 - showcaseProjects.length - featuredGalleries.length)).map((project, index) => ({
      ...project,
      image: portfolioImages.length ? portfolioImages[index % portfolioImages.length] : getRoyaltyFreeImage(project.projectType, index),
      imageSource: portfolioImages.length ? "Actual public CompanyCam project photo" : "Royalty-free fallback inspiration",
      photos: portfolioImages.length ? [portfolioImages[index % portfolioImages.length]] : [getRoyaltyFreeImage(project.projectType, index)]
    }));
    const galleryProjects = [...showcaseProjects, ...featuredGalleries, ...hydratedProjects];

    return NextResponse.json({
      source: ASAP_SHOWCASES_URL,
      featuredSources: [ASAP_SHOWCASES_URL, ...featuredTrustyProjects.map((project) => project.url)],
      updatedAt: new Date().toISOString(),
      totalProjects: galleryProjects.length || fallbackProjects.length,
      totalImages: actualPhotoCount + portfolioImages.length || royaltyFreeFallbackImages.length,
      actualPhotoCount,
      showcaseProjectCount: showcaseProjects.length,
      imageMode: actualPhotoCount || portfolioImages.length ? "actual-project-photos" : "royalty-free-fallbacks",
      projects: galleryProjects.length ? galleryProjects : fallbackProjects
    });
  } catch {
    return NextResponse.json({
      source: ASAP_SHOWCASES_URL,
      updatedAt: new Date().toISOString(),
      totalProjects: fallbackProjects.length,
      totalImages: royaltyFreeFallbackImages.length,
      imageMode: "royalty-free-fallbacks",
      projects: fallbackProjects
    });
  }
}

function fetchPage(url: string) {
  return fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0"
    },
    next: {
      revalidate: 3600
    }
  }).then((response) => response.text());
}

function fetchTrustyPage(url: string) {
  return fetchPage(url);
}

function createFeaturedProjectGallery(project: (typeof featuredTrustyProjects)[number], photos: string[]): Project {
  const images = photos.length ? photos : [getRoyaltyFreeImage(project.projectType, 0)];

  return {
    id: project.slug,
    title: project.title,
    href: project.url,
    image: images[0],
    imageSource: "Actual Trusty project photo",
    date: "October 2025",
    city: project.city,
    projectType: project.projectType,
    products: project.products,
    photoCount: images.length,
    photos: images,
    description: `${project.title} project photos pulled from the public Trusty / CompanyCam project page.`
  };
}

function extractShowcaseProjects(html: string): Project[] {
  const json = html.match(/<script id="projectShowcases" type="application\/json">([\s\S]*?)<\/script>/)?.[1];

  if (!json) {
    return [];
  }

  try {
    const showcases = JSON.parse(json) as ShowcaseProject[];

    return showcases.map((showcase, index) => {
      const title = cleanText(showcase.title) || `ASAP Fence & Gates Project ${index + 1}`;
      const service = cleanText(showcase.service) || inferProjectType(title);
      const description = cleanText(showcase.detailed_description || showcase.subtitle);
      const photos = normalizePhotos(showcase.photos, showcase.featured_photo, service, index);

      return {
        id: showcase.url_slug || showcase.id || `showcase-${index + 1}`,
        title,
        href: showcase.url_slug ? `${ASAP_SHOWCASES_URL}?id=${showcase.url_slug}` : ASAP_SHOWCASES_URL,
        image: photos[0],
        imageSource: "Actual public ASAP showcase photo",
        date: cleanText(showcase.project_date) || "Recent Project",
        city: cleanText(showcase.formatted_location || showcase.location)?.replace(", US", "") || inferCity(`${title} ${description}`),
        projectType: service,
        products: inferProducts(`${title} ${service} ${description}`),
        photoCount: photos.length,
        photos,
        description,
        reviewerName: cleanText(showcase.reviewer_name),
        reviewRating: cleanText(showcase.review_rating),
        reviewBody: cleanText(showcase.review_body)
      };
    });
  } catch {
    return [];
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
      image: getRoyaltyFreeImage(inferProjectType(title), projects.length),
      imageSource: "Royalty-free fallback inspiration",
      date,
      city: inferCity(`${title} ${slug}`),
      projectType: inferProjectType(title),
      products,
      photoCount: Number(title.match(/^(\d+)/)?.[1] ?? products.length + 5),
      photos: [getRoyaltyFreeImage(inferProjectType(title), projects.length)]
    });
  }

  return projects;
}

function normalizePhotos(photos: string[] | undefined, featuredPhoto: string | undefined, projectType: string, index: number) {
  const projectPhotos = [...new Set([featuredPhoto, ...(photos ?? [])].filter(isValidImageUrl))];

  return projectPhotos.length ? projectPhotos : [getRoyaltyFreeImage(projectType, index)];
}

function isValidImageUrl(url: string | undefined): url is string {
  return typeof url === "string" && isImageUrl(url);
}

function isImageUrl(url: string) {
  return /\.(png|jpe?g|webp|gif)(\?|$)/i.test(url);
}

function cleanText(value: string | undefined) {
  return value
    ?.replace(/<[^>]*>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#x27;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
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
