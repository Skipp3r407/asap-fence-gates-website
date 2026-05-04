import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Drill,
  Fence,
  Hammer,
  HelpCircle,
  Home,
  Images,
  KeyRound,
  MapPinned,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Trees,
  Wrench,
  Zap
} from "lucide-react";

export const company = {
  name: "ASAP Fence & Gates",
  domain: "asapfenceandgate.com",
  email: "info@asapfenceandgate.com",
  bradentonPhone: "(941) 229-1789",
  bradentonHref: "tel:+19412291789",
  orlandoPhone: "(321) 486-6414",
  orlandoHref: "tel:+13214866414",
  addressBradenton: "2219 63rd Ave E, Unit C, Bradenton, FL 34203",
  addressOrlandoArea: "2215 Griffin Rd, Leesburg, FL 34748",
  fenceBuilderUrl: "https://asapfenceandgate.com/fence-builder/",
  facebookUrl: "https://www.facebook.com/asapfence/about",
  facebookFollowers: "553 followers",
  facebookRecommendation: "78% recommend",
  facebookReviews: "33 Facebook reviews",
  priceRange: "$$"
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const sectionPages = [
  {
    label: "Fence Builder Tool",
    href: "/fence-builder",
    icon: ClipboardCheck,
    description: "Plan your fence layout before requesting help from the ASAP team."
  },
  {
    label: "Recent Work",
    href: "/recent-work",
    icon: Images,
    description: "View project inspiration by material, property type, and use case."
  },
  {
    label: "Why Choose Us",
    href: "/why-choose-us",
    icon: ThumbsUp,
    description: "See what makes ASAP Fence & Gates easy to trust and easy to work with."
  },
  {
    label: "Our Process",
    href: "/process",
    icon: Route,
    description: "Understand estimates, style selection, permits, prep, and installation."
  },
  {
    label: "Service Areas",
    href: "/service-areas",
    icon: MapPinned,
    description: "Find core cities and counties served across Southwest Florida and Orlando area."
  },
  {
    label: "Reviews",
    href: "/reviews",
    icon: Star,
    description: "Read public review highlights from Google, Facebook, BBB, and listing sources."
  },
  {
    label: "Locations & Maps",
    href: "/locations",
    icon: MapPinned,
    description: "Open Bradenton and Orlando-area office locations with map and phone links."
  },
  {
    label: "FAQs",
    href: "/faq",
    icon: HelpCircle,
    description: "Answers about privacy fences, gates, permits, timelines, and estimates."
  }
];

export const trustBadges = [
  { label: "Licensed & Insured", icon: ShieldCheck },
  { label: "Fast Scheduling", icon: CalendarCheck },
  { label: "Quality Materials", icon: BadgeCheck },
  { label: "Residential & Commercial", icon: Building2 }
];

export const services = [
  {
    title: "Vinyl Fence Installation",
    slug: "vinyl-fence-installation",
    icon: Fence,
    metaTitle: "Vinyl Fence Installation Florida | ASAP Fence & Gates",
    metaDescription:
      "Premium vinyl privacy fence installation in Bradenton, Sarasota, Orlando area, Manatee County, and surrounding Florida communities.",
    summary:
      "Low-maintenance vinyl privacy, picket, and pool fencing installed with clean lines and durable materials.",
    hero:
      "Create privacy, security, and curb appeal with vinyl fencing built for Florida sun, rain, and busy family life.",
    bullets: ["HOA-friendly privacy styles", "Up to 750 ft/day capacity", "Clean, low-maintenance finish"]
  },
  {
    title: "Aluminum Fence Installation",
    slug: "aluminum-fence-installation",
    icon: ShieldCheck,
    metaTitle: "Aluminum Fence Installation Bradenton FL | ASAP Fence & Gates",
    metaDescription:
      "Decorative and secure aluminum fence installation for homes, pools, communities, and commercial properties across Southwest Florida.",
    summary:
      "Elegant, rust-resistant aluminum fencing for pools, front yards, communities, and waterfront properties.",
    hero:
      "Get a refined perimeter with aluminum fencing that adds visibility, security, and long-term durability.",
    bullets: ["Pool-code conscious layouts", "Rust-resistant finishes", "Modern residential and commercial styles"]
  },
  {
    title: "Chain Link Fence Installation",
    slug: "chain-link-fence-installation",
    icon: Drill,
    metaTitle: "Chain Link Fence Installation Florida | ASAP Fence & Gates",
    metaDescription:
      "Chain link fence installation and repairs for homes, construction sites, commercial yards, and property managers in Florida.",
    summary:
      "Cost-effective security fencing for backyards, commercial lots, construction sites, and utility areas.",
    hero:
      "Protect large areas efficiently with professionally installed chain link fencing and secure access points.",
    bullets: ["Galvanized and coated options", "Residential and commercial grades", "Great for temporary and permanent use"]
  },
  {
    title: "Wood Fence Installation",
    slug: "wood-fence-installation",
    icon: Trees,
    metaTitle: "Wood Fence Installation Bradenton | ASAP Fence & Gates",
    metaDescription:
      "Custom wood fence installation for privacy, curb appeal, and classic Florida property boundaries.",
    summary:
      "Classic wood privacy and decorative fencing customized to fit your property, budget, and style.",
    hero:
      "Bring warmth and privacy to your yard with wood fencing installed by a detail-focused local team.",
    bullets: ["Privacy and shadowbox styles", "Custom gates available", "Great for yards and side returns"]
  },
  {
    title: "Gate Installation & Repairs",
    slug: "gate-installation-repairs",
    icon: KeyRound,
    metaTitle: "Gate Installation Bradenton | Gate Repairs | ASAP Fence & Gates",
    metaDescription:
      "Professional gate installation, gate repairs, access upgrades, and automatic gate options in Bradenton, Sarasota, and Orlando area.",
    summary:
      "Reliable walk gates, driveway gates, automatic gates, operators, and repairs for smoother access.",
    hero:
      "Upgrade your entrance with a gate that looks sharp, swings cleanly, and supports the way your property is used.",
    bullets: ["Driveway and walk gates", "Automatic and electric gates", "Repair and operator support"]
  },
  {
    title: "Automatic / Electric Gates",
    slug: "automatic-electric-gates",
    icon: Zap,
    metaTitle: "Automatic Electric Gates Florida | ASAP Fence & Gates",
    metaDescription:
      "Automatic and electric gate installation for homes, communities, commercial properties, farms, and managed facilities.",
    summary:
      "Access control, convenience, and security with electric gate installation and operator-ready layouts.",
    hero:
      "Make daily access easier while strengthening your property entrance with electric gate solutions.",
    bullets: ["Operator-ready gate layouts", "Residential and commercial access", "Secure, convenient entrances"]
  },
  {
    title: "Commercial Fence Installation",
    slug: "commercial-fencing",
    icon: Building2,
    metaTitle: "Commercial Fence Company Florida | ASAP Fence & Gates",
    metaDescription:
      "Commercial fencing for contractors, property managers, businesses, associations, industrial sites, and construction projects.",
    summary:
      "Dependable fencing for businesses, contractors, HOAs, property managers, industrial sites, and farms.",
    hero:
      "Keep projects moving with a fence company that understands commercial schedules, access, safety, and documentation.",
    bullets: ["Property managers and GCs", "Construction and temporary fencing", "Industrial and agricultural options"]
  },
  {
    title: "Privacy Fencing",
    slug: "privacy-fencing",
    icon: Home,
    metaTitle: "Privacy Fence Installation Florida | ASAP Fence & Gates",
    metaDescription:
      "Privacy fence installation with vinyl, wood, and other durable materials for Florida homes and commercial properties.",
    summary:
      "Create a more private yard, pool area, rental property, or commercial boundary with the right fence height and material.",
    hero:
      "Turn exposed outdoor areas into comfortable, secure spaces with privacy fencing designed around your property.",
    bullets: ["Vinyl and wood options", "HOA and neighborhood awareness", "Great for pools, yards, and rentals"]
  },
  {
    title: "Pool Fencing",
    slug: "pool-fencing",
    icon: Sparkles,
    metaTitle: "Pool Fencing Bradenton Sarasota | ASAP Fence & Gates",
    metaDescription:
      "Pool fence installation with clean aluminum, vinyl, and privacy options for Florida homeowners and communities.",
    summary:
      "Attractive pool enclosures and perimeter fencing designed with safety, visibility, and style in mind.",
    hero:
      "Protect your pool area without sacrificing the clean Florida outdoor look homeowners want.",
    bullets: ["Aluminum and vinyl layouts", "Self-closing gate planning", "Clean sightlines and durable materials"]
  },
  {
    title: "Fence Repairs",
    slug: "fence-repairs",
    icon: Wrench,
    metaTitle: "Fence Repair Bradenton FL | ASAP Fence & Gates",
    metaDescription:
      "Fence repair and gate repair services for damaged vinyl, wood, aluminum, chain link, and access gates.",
    summary:
      "Storm damage, leaning posts, broken sections, gate issues, and practical repairs that extend fence life.",
    hero:
      "When replacement is not the right answer, get honest repair guidance and clean workmanship from a local team.",
    bullets: ["Repair vs. replacement guidance", "Gate alignment and hardware", "Storm and wear damage support"]
  },
  {
    title: "Temporary / Construction Fencing",
    slug: "temporary-construction-fencing",
    icon: Hammer,
    metaTitle: "Temporary Construction Fencing Florida | ASAP Fence & Gates",
    metaDescription:
      "Temporary and construction fencing for contractors, job sites, events, and controlled access projects in Florida.",
    summary:
      "Secure job sites, active projects, and temporary access points with practical fencing solutions.",
    hero:
      "Protect people, materials, and schedules with temporary fencing support for construction and commercial projects.",
    bullets: ["Job site boundaries", "Contractor-friendly scheduling", "Commercial access planning"]
  }
];

export const serviceAreas = [
  "Bradenton",
  "Sarasota",
  "Palmetto",
  "Lakewood Ranch",
  "Anna Maria",
  "Longboat Key",
  "Venice",
  "North Port",
  "Punta Gorda",
  "Port Charlotte",
  "Orlando",
  "Manatee County",
  "Sarasota County",
  "Charlotte County",
  "Hillsborough County"
];

export const galleryImages = [
  {
    title: "Vinyl privacy fence",
    category: "Residential privacy",
    src: "https://images.unsplash.com/photo-1604014237744-0f9917e219c4?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Aluminum pool fencing",
    category: "Pool and yard security",
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Driveway gate entry",
    category: "Gate installation",
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Wood privacy fence",
    category: "Classic backyard fencing",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Commercial perimeter fence",
    category: "Business and job sites",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Chain link security fence",
    category: "Security and utility areas",
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Modern property fence",
    category: "Curb appeal",
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=90"
  },
  {
    title: "Construction fencing",
    category: "Temporary and commercial",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=90"
  }
];

export const testimonials = [
  {
    name: "Homeowner in Bradenton",
    quote: "Excellent service, fast responses, and a seamless installation process from estimate to final walkthrough."
  },
  {
    name: "Property Manager in Sarasota",
    quote: "ASAP Fence & Gates kept the project organized, communicated clearly, and delivered a clean professional result."
  },
  {
    name: "General Contractor",
    quote: "Reliable scheduling, fair pricing, and a crew that understands how to work around active job sites."
  }
];

export const onlineReviewHighlights = [
  {
    source: "Google review themes",
    rating: "5-star feedback",
    title: "Professional installation",
    text: "Public review summaries consistently mention professional fence installation, friendly crews, and clean project communication."
  },
  {
    source: "Google review themes",
    rating: "5-star feedback",
    title: "Fast responses and fair pricing",
    text: "Customers frequently praise fast service, competitive pricing, timely scheduling, and a smooth estimate-to-installation experience."
  },
  {
    source: "Public listing themes",
    rating: "Mixed across platforms",
    title: "Helpful project updates",
    text: "Review summaries mention progress photos, follow-up, and installers who keep customers informed during the job."
  },
  {
    source: "BBB public listing",
    rating: "A rating listed",
    title: "Established local business",
    text: "Public business listings identify ASAP Fence & Gates as a Bradenton fence contractor with service history dating back to 2019."
  },
  {
    source: "Facebook public profile",
    rating: "78% recommend",
    title: "Verified fence & gate contractor",
    text: "The Facebook About page lists ASAP Fence & Gates as a verified Fence & Gate Contractor with 553 followers, 33 reviews, and a $$ price range."
  }
];

export const mapLocations = [
  {
    name: "ASAP Fence & Gates - Bradenton Office",
    label: "Bradenton Office",
    address: company.addressBradenton,
    phone: company.bradentonPhone,
    href: company.bradentonHref,
    mapQuery: "ASAP Fence and Gates 2219 63rd Ave E Unit C Bradenton FL 34203",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=ASAP%20Fence%20and%20Gates%202219%2063rd%20Ave%20E%20Unit%20C%20Bradenton%20FL%2034203"
  },
  {
    name: "ASAP Fence & Gates - Orlando Area",
    label: "Orlando Area Office",
    address: company.addressOrlandoArea,
    phone: company.orlandoPhone,
    href: company.orlandoHref,
    mapQuery: "ASAP Fence and Gates 2215 Griffin Rd Leesburg FL 34748",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=ASAP%20Fence%20and%20Gates%202215%20Griffin%20Rd%20Leesburg%20FL%2034748"
  }
];

export const faqs = [
  {
    question: "What type of fence is best for privacy?",
    answer:
      "Vinyl privacy fencing is a strong choice for low maintenance and clean curb appeal, while wood privacy fencing offers a classic look and flexible styling."
  },
  {
    question: "Do you install vinyl fences?",
    answer:
      "Yes. ASAP Fence & Gates installs vinyl privacy, picket, pool, and perimeter fencing for residential and commercial properties."
  },
  {
    question: "Do you repair gates?",
    answer:
      "Yes. The team handles gate repairs, hardware issues, alignment problems, access upgrades, and automatic gate support."
  },
  {
    question: "Do you handle commercial fence projects?",
    answer:
      "Yes. They serve businesses, property managers, general contractors, industrial sites, agricultural properties, and construction projects."
  },
  {
    question: "Do you help with permits?",
    answer:
      "Yes. ASAP Fence & Gates can help coordinate building permits, property line questions, and utility checks before digging begins."
  },
  {
    question: "How long does fence installation take?",
    answer:
      "Timeline depends on layout, fence type, permitting, and material availability. For vinyl privacy fence, the company highlights installation capacity up to 750 feet per day on suitable projects."
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. The company highlights licensed and insured service for homeowners, businesses, property managers, and contractors."
  },
  {
    question: "Do you serve Sarasota and Manatee County?",
    answer:
      "Yes. Service areas include Bradenton, Sarasota, Palmetto, Lakewood Ranch, Venice, North Port, Charlotte County, Orlando area, and nearby Florida communities."
  },
  {
    question: "Do you install automatic gates?",
    answer:
      "Yes. Automatic and electric gate installation options are available for homes, commercial properties, communities, and controlled access areas."
  },
  {
    question: "Can I request a free estimate?",
    answer:
      "Yes. You can request an estimate online or call the Bradenton or Orlando office directly for help."
  }
];

export const whyChoose = [
  "Professional team",
  "Wide selection",
  "Quality materials",
  "Licensed and insured",
  "On-time service",
  "Fair and honest estimates",
  "Warranty-backed work",
  "Residential, commercial, industrial, and agricultural fencing"
];

export const processSteps = [
  {
    title: "Request Estimate",
    description:
      "Tell us about your property, goals, preferred material, and timeline so the team can recommend the right next step."
  },
  {
    title: "Choose Fence Style",
    description:
      "Compare vinyl, aluminum, chain link, wood, gates, privacy, pool, temporary, and commercial solutions."
  },
  {
    title: "Permits & Prep",
    description:
      "The team helps with permit needs, property line concerns, and utility checks before installation starts."
  },
  {
    title: "Professional Installation",
    description:
      "A licensed and insured crew installs your fence or gate with clean workmanship and warranty-backed care."
  }
];

export const stats = [
  { value: "750", suffix: " ft/day", label: "Vinyl privacy fence capacity" },
  { value: "2", suffix: " offices", label: "Bradenton and Orlando area" },
  { value: "100%", suffix: "", label: "Licensed and insured focus" }
];
