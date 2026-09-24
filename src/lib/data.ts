export interface ServiceItem {
  id: string;
  slug: string;
  category: 'technology' | 'creative' | 'hardware' | 'business' | 'digital' | 'professional';
  name: { en: string; bn: string };
  short: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: string;
  keywords: string[];
  deliverables: string[];
  estimatedDays: string;
  startingPrice: string;
  popular?: boolean;
}

export interface SolutionItem {
  slug: string;
  en: string;
  bn: string;
  taglineEn: string;
  taglineBn: string;
  descEn: string;
  descBn: string;
  services: string[];
  features: string[];
  idealFor: string;
  icon: string;
}

export interface DistrictItem {
  en: string;
  bn: string;
  division: 'Dhaka' | 'Chattogram' | 'Rajshahi' | 'Khulna' | 'Barishal' | 'Sylhet' | 'Rangpur' | 'Mymensingh';
}

export interface HelpCategory {
  key: string;
  en: string;
  bn: string;
  icon: string;
  badge: string;
  itemsEn: string[];
  itemsBn: string[];
  contacts: { title: string; number: string; type: string }[];
}

export const BRIZZ_SERVICES: ServiceItem[] = [
  {
    id: "srv-1",
    slug: "software-web-development",
    category: "technology",
    name: { en: "Software & Web Development", bn: "সফটওয়্যার ও ওয়েব ডেভেলপমেন্ট" },
    short: {
      en: "Custom websites, platforms, dashboards, and web applications built around your goals.",
      bn: "আপনার লক্ষ্য অনুযায়ী কাস্টম ওয়েবসাইট, প্ল্যাটফর্ম, ড্যাশবোর্ড ও ওয়েব অ্যাপ্লিকেশন।"
    },
    description: {
      en: "Enterprise-grade web systems, responsive corporate sites, SaaS applications, and custom admin portals crafted with Next.js, React, Node.js, and high-performance databases.",
      bn: "নেক্সট জেএস, রিয়্যাক্ট এবং আধুনিক ডাটাবেস দিয়ে তৈরি এন্টারপ্রাইজ গ্রেড ওয়েবসাইট, কাস্টম পোর্টাল ও বিজনেস সফটওয়্যার।"
    },
    icon: "Code2",
    keywords: ["website", "web", "software", "portal", "dashboard", "landing page", "development", "saas"],
    deliverables: ["Custom Business Websites", "Interactive Dashboards & Portals", "API Integrations & Auth", "SEO & Speed Optimization"],
    estimatedDays: "7 - 21 Days",
    startingPrice: "৳25,000",
    popular: true
  },
  {
    id: "srv-2",
    slug: "mobile-app-development",
    category: "technology",
    name: { en: "Mobile App Development", bn: "মোবাইল অ্যাপ ডেভেলপমেন্ট" },
    short: {
      en: "iOS and Android applications, from concept and interface to launch and support.",
      bn: "কনসেপ্ট ও ইন্টারফেস থেকে লঞ্চ ও সাপোর্ট পর্যন্ত iOS ও Android অ্যাপ্লিকেশন।"
    },
    description: {
      en: "Cross-platform Flutter and native React Native mobile apps featuring smooth animations, offline capabilities, push notifications, and payment gateways.",
      bn: "ফ্লাটার ও রিয়্যাক্ট নেটিভ দিয়ে দ্রুতগতির মোবাইল অ্যাপ, পুশ নোটিফিকেশন এবং পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।"
    },
    icon: "Smartphone",
    keywords: ["app", "mobile", "android", "ios", "flutter", "react native"],
    deliverables: ["iOS & Android Apps", "Play Store & App Store Deployment", "Push Notifications & Analytics", "6 Months Maintenance Support"],
    estimatedDays: "20 - 45 Days",
    startingPrice: "৳45,000",
    popular: true
  },
  {
    id: "srv-3",
    slug: "ai-automation",
    category: "technology",
    name: { en: "AI & Automation", bn: "এআই ও অটোমেশন" },
    short: {
      en: "AI assistants, workflow automation, and integrations that reduce repetitive work.",
      bn: "পুনরাবৃত্ত কাজ কমাতে এআই সহকারী, ওয়ার্কফ্লো অটোমেশন ও ইন্টিগ্রেশন।"
    },
    description: {
      en: "Smart AI agents, custom OpenAI/Claude integrations, n8n/Zapier automations for CRM lead capture, auto-replies, and intelligent business data processing.",
      bn: "এআই চ্যাটবট, এনএইটন ও জ্যাপিয়ার দিয়ে ব্যবসায়িক প্রক্রিয়া অটোমেশন ও সময় সাশ্রয়।"
    },
    icon: "Sparkles",
    keywords: ["ai", "automation", "chatbot", "agent", "workflow", "n8n", "zapier", "make"],
    deliverables: ["WhatsApp & Web AI Chatbots", "Automated Lead Funnels", "CRM & Google Sheet Auto-Sync", "Internal Workflow Pipelines"],
    estimatedDays: "5 - 14 Days",
    startingPrice: "৳18,000",
    popular: true
  },
  {
    id: "srv-4",
    slug: "it-infrastructure",
    category: "technology",
    name: { en: "IT Infrastructure & Cloud", bn: "আইটি ইনফ্রাস্ট্রাকচার ও ক্লাউড" },
    short: {
      en: "Reliable office systems, servers, cloud environments, and business technology foundations.",
      bn: "নির্ভরযোগ্য অফিস সিস্টেম, সার্ভার, ক্লাউড পরিবেশ ও ব্যবসায়িক প্রযুক্তি ভিত্তি।"
    },
    description: {
      en: "Cloud migrations (AWS/Azure/DigitalOcean), VPS configurations, firewall setup, centralized storage, and domain/email management.",
      bn: "ক্লাউড সার্ভার সেটআপ, ব্যাকআপ সলিউশন, ফায়ারওয়াল এবং অফিস প্রযুক্তি ব্যবস্থাপনা।"
    },
    icon: "Server",
    keywords: ["it", "infrastructure", "server", "cloud", "office setup", "aws", "vps"],
    deliverables: ["Cloud & VPS Deployment", "Automated Data Backup", "Enterprise Email Setup (GSuite/M365)", "Security Hardening"],
    estimatedDays: "3 - 10 Days",
    startingPrice: "৳15,000"
  },
  {
    id: "srv-5",
    slug: "hardware-devices",
    category: "hardware",
    name: { en: "Hardware & Devices Procurement", bn: "হার্ডওয়্যার ও ডিভাইস সংগ্রহ" },
    short: {
      en: "Computers, laptops, peripherals, and business equipment sourced to fit your requirement.",
      bn: "আপনার প্রয়োজন অনুযায়ী কম্পিউটার, ল্যাপটপ, পেরিফেরাল ও ব্যবসায়িক যন্ত্রপাতি।"
    },
    description: {
      en: "Authentic hardware sourcing at verified wholesale and corporate pricing with official brand warranty and deployment testing.",
      bn: "ব্র্যান্ড ওয়ারেন্টিসহ পাইকারি মূল্যে অফিস কম্পিউটার, ল্যাপটপ এবং হার্ডওয়্যার সরবরাহ।"
    },
    icon: "Monitor",
    keywords: ["hardware", "computer", "laptop", "pc", "monitor", "printer", "device", "equipment"],
    deliverables: ["Custom Office Desktop Builds", "Brand Laptops (Dell/HP/Lenovo/Apple)", "Commercial Printers & Projectors", "Warranty & Hardware Replacement Support"],
    estimatedDays: "2 - 5 Days",
    startingPrice: "৳30,000"
  },
  {
    id: "srv-6",
    slug: "networking",
    category: "hardware",
    name: { en: "Office Networking & Structured Cabling", bn: "নেটওয়ার্কিং ও ক্যাবলিং" },
    short: {
      en: "High-speed Wi-Fi, LAN, routing, and secure connectivity for offices and commercial spaces.",
      bn: "অফিস ও প্রতিষ্ঠানের জন্য হাই-স্পিড Wi-Fi, LAN, রাউটিং ও নিরাপদ কানেক্টিভিটি।"
    },
    description: {
      en: "MikroTik, Cisco, and Ubiquiti UniFi network architecture, mesh Wi-Fi design, band-width throttling, and seamless guest Wi-Fi portals.",
      bn: "মাইক্রোটিক, রাউটার কনফিগারেশন, মেস ওয়াইফাই এবং নিরবচ্ছিন্ন ইন্টারনেট নেটওয়ার্ক।"
    },
    icon: "Network",
    keywords: ["network", "networking", "wifi", "router", "lan", "internet", "mikrotik", "cabling"],
    deliverables: ["Structured Cat6 Cabling", "Bandwidth Management & Load Balancing", "Multi-Floor Mesh Wi-Fi Coverage", "VPN & Remote Access Gateway"],
    estimatedDays: "3 - 7 Days",
    startingPrice: "৳12,000"
  },
  {
    id: "srv-7",
    slug: "cctv-security",
    category: "hardware",
    name: { en: "CCTV & Access Control Security", bn: "সিসিটিভি ও অ্যাক্সেস কন্ট্রোল" },
    short: {
      en: "Surveillance, biometric access, and 24/7 monitoring solutions for secure environments.",
      bn: "নিরাপদ ব্যবসায়িক পরিবেশের জন্য নজরদারি, অ্যাক্সেস ও মনিটরিং সমাধান।"
    },
    description: {
      en: "IP / HD CCTV surveillance systems with mobile live streaming, NVR/DVR storage redundancy, biometric fingerprint attendance, and smart door locks.",
      bn: "মোবাইলে লাইভ দেখার সুবিধাসহ এইচডি সিসিটিভি ক্যামেরা, বায়োমেট্রিক অ্যাটেনডেন্স ও ডোর এক্সেস কন্ট্রোল।"
    },
    icon: "ShieldAlert",
    keywords: ["cctv", "camera", "security", "surveillance", "access control", "attendance"],
    deliverables: ["HD/IP Night-Vision Cameras", "Mobile App Live Stream Access", "Biometric Fingerprint/Card Terminals", "Clean Conduit Wiring & Setup"],
    estimatedDays: "2 - 5 Days",
    startingPrice: "৳15,000"
  },
  {
    id: "srv-8",
    slug: "graphic-design",
    category: "creative",
    name: { en: "Graphic & Brand Asset Design", bn: "গ্রাফিক ও ব্র্যান্ড ডিজাইন" },
    short: {
      en: "Professional visual assets for campaigns, presentations, print, and digital use.",
      bn: "ক্যাম্পেইন, প্রেজেন্টেশন, প্রিন্ট ও ডিজিটালের জন্য পেশাদার ভিজ্যুয়াল অ্যাসেট।"
    },
    description: {
      en: "High-impact social media creatives, corporate brochures, company profiles, pitch decks, and print-ready vector graphics.",
      bn: "সোশ্যাল মিডিয়া পোস্ট, ব্যানার, ব্রোশার, প্রেজেন্টেশন এবং আধুনিক গ্রাফিক্স ডিজাইন।"
    },
    icon: "Palette",
    keywords: ["graphic", "design", "poster", "brochure", "flyer", "social post", "illustrator"],
    deliverables: ["Social Media Kit (Post & Story)", "Company Profile PDF", "Pitch Deck Design", "Print Ready Vector Files"],
    estimatedDays: "3 - 7 Days",
    startingPrice: "৳8,000"
  },
  {
    id: "srv-9",
    slug: "ui-ux-design",
    category: "creative",
    name: { en: "UI/UX & Product Design", bn: "ইউআই/ইউএক্স ডিজাইন" },
    short: {
      en: "Clear, usable interfaces and digital experiences designed around real users.",
      bn: "বাস্তব ব্যবহারকারীর জন্য পরিষ্কার, ব্যবহারযোগ্য ইন্টারফেস ও ডিজিটাল অভিজ্ঞতা।"
    },
    description: {
      en: "User research, wireframing, high-fidelity Figma components, interactive clickable prototypes, and developer-friendly design systems.",
      bn: "ফিগমায় আধুনিক ওয়েবসাইট ও অ্যাপ ইন্টারফেস ডিজাইন এবং ক্লিকযোগ্য প্রোটোটাইপ।"
    },
    icon: "Layers",
    keywords: ["ui", "ux", "figma", "interface", "prototype", "wireframe", "product design"],
    deliverables: ["Figma Design Files with Auto-layout", "Design System & Color Tokens", "Interactive Prototype", "User Journey Flowcharts"],
    estimatedDays: "7 - 18 Days",
    startingPrice: "৳20,000",
    popular: true
  },
  {
    id: "srv-10",
    slug: "branding",
    category: "creative",
    name: { en: "Complete Brand Identity", bn: "ব্র্যান্ড আইডেন্টিটি ও লোগো" },
    short: {
      en: "Identity systems that make your business recognizable, consistent, and credible.",
      bn: "আপনার ব্যবসাকে পরিচিত, সামঞ্জস্যপূর্ণ ও বিশ্বাসযোগ্য করে এমন ব্র্যান্ড আইডেন্টিটি।"
    },
    description: {
      en: "Distinctive logo concepts, typography hierarchy, brand color psychology, stationary sets (business card, letterhead, envelope), and brand guideline books.",
      bn: "আকর্ষণীয় লোগো, ব্র্যান্ড কালার প্যালেট, ভিজিটিং কার্ড ও ব্র্যান্ড গাইডলাইন বুক।"
    },
    icon: "Crown",
    keywords: ["branding", "logo", "brand identity", "identity", "brand guideline"],
    deliverables: ["Logo Concept Suite (Vector/SVG)", "Brand Guidelines Manual", "Stationery Pack (Card, Letterhead)", "Social Media Branding Kit"],
    estimatedDays: "5 - 12 Days",
    startingPrice: "৳15,000"
  },
  {
    id: "srv-11",
    slug: "photography",
    category: "creative",
    name: { en: "Commercial & Event Photography", bn: "কমার্শিয়াল ও ইভেন্ট ফটোগ্রাফি" },
    short: {
      en: "Professional photography for events, brands, products, teams, and campaigns.",
      bn: "ইভেন্ট, ব্র্যান্ড, পণ্য, টিম ও ক্যাম্পেইনের জন্য পেশাদার ফটোগ্রাফি।"
    },
    description: {
      en: "High-resolution studio photography for e-commerce products, executive corporate portraits, factory/office facility shoots, and grand event coverage.",
      bn: "ই-কমার্স প্রোডাক্ট ফটোশুট, কর্পোরেট টিম পোর্ট্রেট এবং যেকোনো ইভেন্ট কাভারেজ।"
    },
    icon: "Camera",
    keywords: ["photo", "photography", "photographer", "event photo", "product photo"],
    deliverables: ["Full Resolution Edited Photos", "Color Graded JPGs & RAW Access", "Studio Lighting Setup", "Fast 48-Hour Turnaround"],
    estimatedDays: "1 - 3 Days",
    startingPrice: "৳10,000"
  },
  {
    id: "srv-12",
    slug: "videography",
    category: "creative",
    name: { en: "Videography & Commercial Films", bn: "ভিডিওগ্রাফি ও প্রোডাকশন" },
    short: {
      en: "Video production for events, products, brands, social media, and corporate use.",
      bn: "ইভেন্ট, পণ্য, ব্র্যান্ড, সোশ্যাল মিডিয়া ও কর্পোরেট ব্যবহারের জন্য ভিডিও প্রোডাকশন।"
    },
    description: {
      en: "4K cinematic video production, brand story commercials, viral short-form Reels/TikToks, documentary-style corporate showcases, and event aftermovies.",
      bn: "৪কে সিনেমাটিক বিজ্ঞাপন, সোশ্যাল মিডিয়া রিলস এবং কর্পোরেট ভিডিও মেকিং।"
    },
    icon: "Video",
    keywords: ["video", "videography", "videographer", "film", "reel", "production"],
    deliverables: ["4K Edited Master Video", "Social Cutdowns (9:16 Reels)", "Sound Design & Licensed Music", "Motion Graphics & Subtitles"],
    estimatedDays: "4 - 10 Days",
    startingPrice: "৳18,000"
  },
  {
    id: "srv-13",
    slug: "digital-marketing",
    category: "digital",
    name: { en: "Targeted Digital Marketing & Ads", bn: "ডিজিটাল মার্কেটিং ও অ্যাডস" },
    short: {
      en: "Practical digital campaigns designed to improve reach, leads, and business growth.",
      bn: "রিচ, লিড ও ব্যবসায়িক প্রবৃদ্ধি বাড়াতে কার্যকর ডিজিটাল ক্যাম্পেইন।"
    },
    description: {
      en: "Meta Ads (Facebook & Instagram), Google Search & YouTube Ads, conversion pixel tracking, A/B audience targeting, and high-ROI lead generation funnels.",
      bn: "টার্গেটেড ফেসবুক ও গুগল অ্যাড ক্যাম্পেইন, সেলস ফানেল এবং লিড জেনারেশন।"
    },
    icon: "Megaphone",
    keywords: ["marketing", "ads", "seo", "campaign", "lead generation", "google ads", "meta ads"],
    deliverables: ["Campaign Strategy & Copywriting", "Audience Targeting Setup", "Conversion Tracking / Pixel Setup", "Weekly Performance Analytics"],
    estimatedDays: "Ongoing / Monthly",
    startingPrice: "৳12,000/mo"
  },
  {
    id: "srv-14",
    slug: "social-media-management",
    category: "digital",
    name: { en: "Social Media Growth & Management", bn: "সোশ্যাল মিডিয়া ম্যানেজমেন্ট" },
    short: {
      en: "Planning, publishing, and managing brand communication across social channels.",
      bn: "সোশ্যাল চ্যানেলে ব্র্যান্ড যোগাযোগের পরিকল্পনা, প্রকাশ ও ব্যবস্থাপনা।"
    },
    description: {
      en: "End-to-end social management: monthly content calendar, graphic design, caption writing, comment/inbox moderation, and audience engagement growth.",
      bn: "মাসিক কনটেন্ট প্ল্যান, নিয়মিত পোস্ট, ক্যাপশন এবং ইনবক্স রেসপন্স ম্যানেজমেন্ট।"
    },
    icon: "Share2",
    keywords: ["social media", "facebook", "instagram", "linkedin", "posting", "social management"],
    deliverables: ["15-30 Branded Posts Monthly", "Community Engagement & Replies", "Hashtag & Growth Strategy", "Monthly Growth Report"],
    estimatedDays: "Monthly Retainer",
    startingPrice: "৳15,000/mo"
  },
  {
    id: "srv-15",
    slug: "business-consulting",
    category: "business",
    name: { en: "Business Strategy & Consulting", bn: "বিজনেস স্ট্র্যাটেজি ও কনসাল্টিং" },
    short: {
      en: "Specialist guidance for business decisions, operations, planning, and improvement.",
      bn: "ব্যবসায়িক সিদ্ধান্ত, অপারেশন, পরিকল্পনা ও উন্নতির জন্য বিশেষজ্ঞ পরামর্শ।"
    },
    description: {
      en: "Feasibility audits, operational bottleneck removal, cost optimization, go-to-market roadmaps, and business model validation from industry veterans.",
      bn: "ব্যবসায়িক মডেল যাচাই, খরচ কমানোর উপায় ও মার্কেট স্ট্র্যাটেজি পরামর্শ।"
    },
    icon: "Briefcase",
    keywords: ["business", "consulting", "consultant", "strategy", "operations", "planning"],
    deliverables: ["Business Audit Document", "Step-by-Step Action Roadmap", "1-on-1 Strategy Advisory Calls", "Resource Optimization Plan"],
    estimatedDays: "5 - 14 Days",
    startingPrice: "৳20,000"
  },
  {
    id: "srv-16",
    slug: "ecommerce-solutions",
    category: "business",
    name: { en: "Complete E-commerce Launchpad", bn: "ই-কমার্স সলিউশন ও স্টোর" },
    short: {
      en: "Online stores, payment flows, product systems, and supporting digital operations.",
      bn: "অনলাইন স্টোর, পেমেন্ট ফ্লো, প্রোডাক্ট সিস্টেম ও সহায়ক ডিজিটাল অপারেশন।"
    },
    description: {
      en: "High-converting online store with bKash/Nagad/SSLCommerz payment gateway, Pathao/Steadfast courier API auto-sync, and automated SMS notifications.",
      bn: "বিকাশ/নগদ পেমেন্ট এবং পাঠাও/স্টেডফাস্ট কুরিয়ার ইন্টিগ্রেশনসহ সম্পূর্ণ ই-কমার্স ওয়েবসাইট।"
    },
    icon: "ShoppingCart",
    keywords: ["ecommerce", "shop", "store", "shopify", "woocommerce", "online store", "bkash"],
    deliverables: ["Fast Mobile-First Storefront", "bKash / Nagad / Card Payment Setup", "Courier Automated Dispatch Integration", "Inventory & Order Management"],
    estimatedDays: "10 - 20 Days",
    startingPrice: "৳35,000",
    popular: true
  },
  {
    id: "srv-17",
    slug: "event-services",
    category: "professional",
    name: { en: "Corporate & Private Event Coordination", bn: "ইভেন্ট ম্যানেজমেন্ট ও সার্ভিসেস" },
    short: {
      en: "Creative and operational support for business, private, and organizational events.",
      bn: "ব্যবসায়িক, ব্যক্তিগত ও সাংগঠনিক ইভেন্টের জন্য সৃজনশীল ও অপারেশনাল সহায়তা।"
    },
    description: {
      en: "Sound systems, stage setup, LED video walls, event photography/videography, registration desk tech, and guest coordination under single management.",
      bn: "সাউন্ড সিস্টেম, স্টেজ ও এলইডি স্ক্রিন, ফটো/ভিডিও এবং ইভেন্ট সমন্বয়।"
    },
    icon: "CalendarCheck",
    keywords: ["event", "event service", "venue", "photographer", "corporate event", "sound"],
    deliverables: ["Audio/Visual & LED Wall Setup", "Live Multi-Camera Streaming", "Photo & Video Crew", "On-Site Management Team"],
    estimatedDays: "Event Date Based",
    startingPrice: "৳25,000"
  },
  {
    id: "srv-18",
    slug: "custom-requirements",
    category: "professional",
    name: { en: "Custom Special Requirements", bn: "কাস্টম বিশেষ প্রয়োজন" },
    short: {
      en: "If it is not listed, tell us anyway. We will identify the right route and people for it.",
      bn: "তালিকায় না থাকলেও বলুন, আমরা সঠিক পথ ও প্রয়োজনীয় মানুষ খুঁজে দেব।"
    },
    description: {
      en: "Cross-disciplinary solutions: factory IoT monitoring, custom hardware fabrication, bespoke legal and trade licensing matching, or specialized vendor sourcing.",
      bn: "যেকোনো বিশেষ বা জটিল প্রয়োজন—আমরা সঠিক বিশেষজ্ঞ ও নির্ভরযোগ্য সরবরাহকারী খুঁজে সমন্বয় করব।"
    },
    icon: "HelpCircle",
    keywords: ["custom", "other", "not listed", "anything", "help", "solution", "special"],
    deliverables: ["Requirement Discovery Assessment", "Curated Vendor Vetting", "Single Point Project Management", "Escrow & Quality Guarantee"],
    estimatedDays: "Flexible",
    startingPrice: "Custom Quote",
    popular: true
  }
];

export const BRIZZ_SOLUTIONS: SolutionItem[] = [
  {
    slug: "start-a-business",
    en: "Start a Business",
    bn: "ব্যবসা শুরু করুন",
    taglineEn: "Turn your idea into an operational business in days.",
    taglineBn: "আপনার আইডিয়াকে দ্রুত একটি কার্যকর ব্যবসায় রূপান্তর করুন।",
    descEn: "Brand identity, high-converting website, marketing setup, invoicing systems, and launch support coordinated seamlessly.",
    descBn: "ব্র্যান্ডিং, ওয়েবসাইট, মার্কেটিং, সিস্টেম ও লঞ্চ সাপোর্ট একসাথে সমন্বিত।",
    services: ["branding", "software-web-development", "digital-marketing", "ai-automation"],
    features: [
      "Logo & Complete Brand Identity Kit",
      "High-Conversion Business Website",
      "Meta & Google Ads Strategy",
      "WhatsApp & Invoicing Automation"
    ],
    idealFor: "New Founders, Entrepreneurs, Retail & Service Startups",
    icon: "Rocket"
  },
  {
    slug: "online-presence",
    en: "Build an Online Presence",
    bn: "অনলাইন উপস্থিতি তৈরি করুন",
    taglineEn: "Get found by customers and build massive credibility.",
    taglineBn: "গ্রাহকের কাছে সহজে পৌঁছান এবং ব্র্যান্ড ভ্যালু বাড়ান।",
    descEn: "Clean modern website, active social media, compelling video content, and Google Maps business listing managed as one ecosystem.",
    descBn: "ব্র্যান্ড, ওয়েবসাইট, সোশ্যাল মিডিয়া, কনটেন্ট ও ভিজিবিলিটি একসাথে তৈরি করুন।",
    services: ["branding", "software-web-development", "social-media-management", "videography"],
    features: [
      "Modern Responsive Website",
      "Social Media Setup & Content Calendar",
      "Short-Form Video Production (Reels)",
      "Google My Business & SEO Ranking"
    ],
    idealFor: "Local Businesses, Consultants, Creators, Agencies",
    icon: "Globe"
  },
  {
    slug: "develop-an-app",
    en: "Develop an App",
    bn: "মোবাইল অ্যাপ তৈরি করুন",
    taglineEn: "From wireframe to App Store / Play Store launch.",
    taglineBn: "পরিকল্পনা থেকে গুগল প্লে ও অ্যাপ স্টোরে প্রকাশ।",
    descEn: "Product research, intuitive Figma UI/UX, robust cross-platform mobile development, backend APIs, and guaranteed store approvals.",
    descBn: "প্রোডাক্ট ডিজাইন, মোবাইল ডেভেলপমেন্ট, ব্যাকএন্ড এপিআই ও স্টোর পাবলিশ।",
    services: ["ui-ux-design", "mobile-app-development", "it-infrastructure"],
    features: [
      "Figma Prototype & Design System",
      "Cross-Platform iOS & Android App",
      "Cloud Database & Scalable Backend",
      "Official Store Publishing Assistance"
    ],
    idealFor: "Tech Startups, Delivery Apps, Booking Systems, Communities",
    icon: "Smartphone"
  },
  {
    slug: "automate-operations",
    en: "Automate Operations & AI",
    bn: "অপারেশন ও এআই অটোমেশন",
    taglineEn: "Eliminate repetitive tasks and 10x your team efficiency.",
    taglineBn: "অপ্রয়োজনীয় কাজ বাদ দিয়ে টিমের উৎপাদনশীলতা কয়েকগুণ বাড়ান।",
    descEn: "AI customer support agents, automated CRM lead capture, invoice generation, and custom software integrations around your existing stack.",
    descBn: "আপনার ব্যবসাকে ঘিরে এআই, ওয়ার্কফ্লো, ইন্টিগ্রেশন ও অপারেশনাল অটোমেশন।",
    services: ["ai-automation", "software-web-development", "it-infrastructure"],
    features: [
      "24/7 AI Customer Support Bot",
      "Automated Order & Invoice Dispatch",
      "CRM & Spreadsheet Multi-Sync",
      "Zero-Code & Custom API Pipelines"
    ],
    idealFor: "Growing Businesses, E-commerce, Customer Service Teams",
    icon: "Cpu"
  },
  {
    slug: "equip-an-office",
    en: "Equip a New Office",
    bn: "নতুন অফিস প্রস্তুত করুন",
    taglineEn: "Computers, networking, CCTV, and IT setup under one requirement.",
    taglineBn: "একটি রিকোয়ারমেন্টে কম্পিউটার, নেটওয়ার্কিং, সিসিটিভি ও আইটি সাপোর্ট।",
    descEn: "Why deal with 6 different vendors? BRIZZ coordinates workstations, mesh Wi-Fi, biometric access, security cameras, and IT support under one contract.",
    descBn: "একাধিক ভেন্ডর ছাড়া একটি জায়গা থেকেই অফিসের সমস্ত টেক ও হার্ডওয়্যার রেডি করুন।",
    services: ["hardware-devices", "networking", "cctv-security", "it-infrastructure"],
    features: [
      "Office PCs & Workstations Sourcing",
      "Structured High-Speed Wi-Fi & LAN",
      "CCTV Surveillance & Door Access",
      "On-Site IT Setup & Maintenance"
    ],
    idealFor: "New Offices, Corporate Expansions, Co-working Spaces, Clinics",
    icon: "Building"
  },
  {
    slug: "improve-marketing",
    en: "Scale Marketing & Sales",
    bn: "মার্কেটিং ও সেলস বৃদ্ধি করুন",
    taglineEn: "Generate real leads and build an authentic brand.",
    taglineBn: "প্রকৃত গ্রাহক ও বিক্রয় বাড়ানোর জন্য সমন্বিত ডিজিটাল ক্যাম্পেইন।",
    descEn: "Creative ad visuals, high-converting copy, targeted Meta & Google ad management, commercial video clips, and ongoing data-driven optimization.",
    descBn: "ক্যাম্পেইন, কনটেন্ট, সোশ্যাল মিডিয়া, ফটোগ্রাফি, ভিডিও ও ক্রিয়েটিভ এক্সিকিউশন।",
    services: ["digital-marketing", "graphic-design", "videography", "photography"],
    features: [
      "Targeted Meta & Google Ad Campaigns",
      "High-Converting Ad Creatives & Video",
      "Conversion Pixel & Funnel Audit",
      "Transparent Weekly ROAS Reports"
    ],
    idealFor: "E-commerce Brands, Real Estate, Education, Service Companies",
    icon: "TrendingUp"
  },
  {
    slug: "organize-an-event",
    en: "Organize an Event",
    bn: "ইভেন্ট আয়োজন ও টেক সাপোর্ট",
    taglineEn: "Sound, visuals, stage, cameras, and media covered seamlessly.",
    taglineBn: "সাউন্ড, ডিসপ্লে, ফটো-ভিডিও এবং ইভেন্ট সমন্বয়।",
    descEn: "Complete technical and creative orchestration for corporate summits, product launches, galas, seminars, and special celebrations.",
    descBn: "ক্রিয়েটিভ, ফটোগ্রাফি, ভিডিওগ্রাফি, টেকনিক্যাল ও প্রফেশনাল ইভেন্ট সাপোর্ট।",
    services: ["event-services", "photography", "videography", "graphic-design"],
    features: [
      "Pro Sound System & LED Wall Display",
      "Live 4K Multi-Camera Production",
      "Event Branding & Registration Badges",
      "Same-Day Teaser Photo/Video Edit"
    ],
    idealFor: "Corporates, Universities, Conferences, Brand Launches",
    icon: "Sparkle"
  },
  {
    slug: "find-a-specialist",
    en: "Find a Specialist",
    bn: "বিশেষজ্ঞ পেশাজীবী খুঁজুন",
    taglineEn: "Verified doctors, developers, engineers, and consultants.",
    taglineBn: "যাচাইকৃত ডাক্তার, ডেভেলপার, ইঞ্জিনিয়ার ও পরামর্শক।",
    descEn: "Tell us the exact expertise, timeline, and location you need. We match and supervise vetted professionals tailored to your requirements.",
    descBn: "আপনার কী ধরনের দক্ষতা ও লোকেশন দরকার বলুন, আমরা সেরা প্রফেশনাল খুঁজে দেব।",
    services: ["business-consulting", "software-web-development", "custom-requirements"],
    features: [
      "Direct Vetted Professional Matching",
      "Clear Scope & Fixed Pricing",
      "Escrow Milestone Protection",
      "Managed Delivery by BRIZZ"
    ],
    idealFor: "Individuals, Project Owners, Companies Needing Niche Talent",
    icon: "UserCheck"
  },
  {
    slug: "custom-requirement",
    en: "Custom Requirement",
    bn: "কাস্টম বিশেষ সমাধান",
    taglineEn: "If it's unusual, complex, or unlisted, start here.",
    taglineBn: "তালিকায় না থাকলেও বলুন, আমরা সমাধান বের করব।",
    descEn: "Don't let complex multi-vendor problems slow you down. Our solution engineers analyze your need and structure the entire execution plan.",
    descBn: "প্রয়োজনটি কোনো ক্যাটাগরিতে না মিললে BRIZZ সেটি বুঝে সঠিক সমাধান তৈরি করে।",
    services: ["custom-requirements", "hardware-devices", "it-infrastructure"],
    features: [
      "Direct Requirement Discovery Call",
      "Tailored Feasibility & Quotation",
      "Single Agreement & Multi-Party Delivery",
      "Guaranteed Milestone Completion"
    ],
    idealFor: "Special Projects, Government Tenders, Hybrid Tech Requirements",
    icon: "Compass"
  }
];

export const BRIZZ_DISTRICTS: DistrictItem[] = [
  // Dhaka Division
  { en: "Dhaka", bn: "ঢাকা", division: "Dhaka" },
  { en: "Gazipur", bn: "গাজীপুর", division: "Dhaka" },
  { en: "Narayanganj", bn: "নারায়ণগঞ্জ", division: "Dhaka" },
  { en: "Tangail", bn: "টাঙ্গাইল", division: "Dhaka" },
  { en: "Faridpur", bn: "ফরিদপুর", division: "Dhaka" },
  { en: "Gopalganj", bn: "গোপালগঞ্জ", division: "Dhaka" },
  { en: "Kishoreganj", bn: "কিশোরগঞ্জ", division: "Dhaka" },
  { en: "Madaripur", bn: "মাদারীপুর", division: "Dhaka" },
  { en: "Manikganj", bn: "মানিকগঞ্জ", division: "Dhaka" },
  { en: "Munshiganj", bn: "মুন্সীগঞ্জ", division: "Dhaka" },
  { en: "Narsingdi", bn: "নরসিংদী", division: "Dhaka" },
  { en: "Rajbari", bn: "রাজবাড়ী", division: "Dhaka" },
  { en: "Shariatpur", bn: "শরীয়তপুর", division: "Dhaka" },

  // Chattogram Division
  { en: "Chattogram", bn: "চট্টগ্রাম", division: "Chattogram" },
  { en: "Cox's Bazar", bn: "কক্সবাজার", division: "Chattogram" },
  { en: "Cumilla", bn: "কুমিল্লা", division: "Chattogram" },
  { en: "Brahmanbaria", bn: "ব্রাহ্মণবাড়িয়া", division: "Chattogram" },
  { en: "Chandpur", bn: "চাঁদপুর", division: "Chattogram" },
  { en: "Feni", bn: "ফেনী", division: "Chattogram" },
  { en: "Lakshmipur", bn: "লক্ষ্মীপুর", division: "Chattogram" },
  { en: "Noakhali", bn: "নোয়াখালী", division: "Chattogram" },
  { en: "Bandarban", bn: "বান্দরবান", division: "Chattogram" },
  { en: "Khagrachhari", bn: "খাগড়াছড়ি", division: "Chattogram" },
  { en: "Rangamati", bn: "রাঙ্গামাটি", division: "Chattogram" },

  // Khulna Division
  { en: "Khulna", bn: "খুলনা", division: "Khulna" },
  { en: "Jashore", bn: "যশোর", division: "Khulna" },
  { en: "Kushtia", bn: "কুষ্টিয়া", division: "Khulna" },
  { en: "Bagerhat", bn: "বাগেরহাট", division: "Khulna" },
  { en: "Chuadanga", bn: "চুয়াডাঙ্গা", division: "Khulna" },
  { en: "Jhenaidah", bn: "ঝিনাইদহ", division: "Khulna" },
  { en: "Magura", bn: "মাগুরা", division: "Khulna" },
  { en: "Meherpur", bn: "মেহেরপুর", division: "Khulna" },
  { en: "Narail", bn: "নড়াইল", division: "Khulna" },
  { en: "Satkhira", bn: "সাতক্ষীরা", division: "Khulna" },

  // Rajshahi Division
  { en: "Rajshahi", bn: "রাজশাহী", division: "Rajshahi" },
  { en: "Bogura", bn: "বগুড়া", division: "Rajshahi" },
  { en: "Pabna", bn: "পাবনা", division: "Rajshahi" },
  { en: "Sirajganj", bn: "সিরাজগঞ্জ", division: "Rajshahi" },
  { en: "Naogaon", bn: "নওগাঁ", division: "Rajshahi" },
  { en: "Natore", bn: "নাটোর", division: "Rajshahi" },
  { en: "Chapainawabganj", bn: "চাঁপাইনবাবগঞ্জ", division: "Rajshahi" },
  { en: "Joypurhat", bn: "জয়পুরহাট", division: "Rajshahi" },

  // Sylhet Division
  { en: "Sylhet", bn: "সিলেট", division: "Sylhet" },
  { en: "Moulvibazar", bn: "মৌলভীবাজার", division: "Sylhet" },
  { en: "Habiganj", bn: "হবিগঞ্জ", division: "Sylhet" },
  { en: "Sunamganj", bn: "সুনামগঞ্জ", division: "Sylhet" },

  // Rangpur Division
  { en: "Rangpur", bn: "রংপুর", division: "Rangpur" },
  { en: "Dinajpur", bn: "দিনাজপুর", division: "Rangpur" },
  { en: "Gaibandha", bn: "গাইবান্ধা", division: "Rangpur" },
  { en: "Kurigram", bn: "কুড়িগ্রাম", division: "Rangpur" },
  { en: "Lalmonirhat", bn: "লালমনিরহাট", division: "Rangpur" },
  { en: "Nilphamari", bn: "নীলফামারী", division: "Rangpur" },
  { en: "Panchagarh", bn: "পঞ্চগড়", division: "Rangpur" },
  { en: "Thakurgaon", bn: "ঠাকুরগাঁও", division: "Rangpur" },

  // Mymensingh Division
  { en: "Mymensingh", bn: "ময়মনসিংহ", division: "Mymensingh" },
  { en: "Jamalpur", bn: "জামালপুর", division: "Mymensingh" },
  { en: "Netrokona", bn: "নেত্রকোণা", division: "Mymensingh" },
  { en: "Sherpur", bn: "শেরপুর", division: "Mymensingh" },

  // Barishal Division
  { en: "Barishal", bn: "বরিশাল", division: "Barishal" },
  { en: "Bhola", bn: "ভোলা", division: "Barishal" },
  { en: "Barguna", bn: "বরগুনা", division: "Barishal" },
  { en: "Jhalakathi", bn: "ঝালকাঠি", division: "Barishal" },
  { en: "Patuakhali", bn: "পটুয়াখালী", division: "Barishal" },
  { en: "Pirojpur", bn: "পিরোজপুর", division: "Barishal" },
];

export const BRIZZ_HELP_SECTIONS: HelpCategory[] = [
  {
    key: "emergency",
    en: "National Emergency Services",
    bn: "জাতীয় জরুরি সেবা",
    icon: "AlertOctagon",
    badge: "24/7 Toll-Free",
    itemsEn: [
      "National Emergency Service (Police, Fire, Ambulance)",
      "National Help Desk & Cyber Support",
      "Women & Children Emergency Helpline",
      "Disaster Early Warning & Relief Info"
    ],
    itemsBn: [
      "জাতীয় জরুরি সেবা (পুলিশ, ফায়ার সার্ভিস, অ্যাম্বুলেন্স)",
      "জাতীয় হেল্প ডেস্ক ও সাইবার সাপোর্ট",
      "নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইন",
      "দুর্যোগ পূর্বাভাস ও ত্রাণ তথ্য"
    ],
    contacts: [
      { title: "National Emergency", number: "999", type: "All-in-One Emergency" },
      { title: "Women Helpline", number: "109", type: "Toll-Free" },
      { title: "Child Helpline", number: "1098", type: "Toll-Free" },
      { title: "National Info Helpline", number: "333", type: "Govt Services" }
    ]
  },
  {
    key: "healthcare",
    en: "Healthcare & Doctor Directory",
    bn: "স্বাস্থ্যসেবা ও ডাক্তার তথ্য",
    icon: "HeartPulse",
    badge: "Verified Medical",
    itemsEn: [
      "Find Government & Private Hospitals by District",
      "Specialist Doctor Consultation Finder",
      "24-Hour Pharmacy & Oxygen Cylinder Contacts",
      "Diagnostic & Pathology Center Locator"
    ],
    itemsBn: [
      "জেলা অনুযায়ী সরকারি ও বেসরকারি হাসপাতাল",
      "বিশেষজ্ঞ ডাক্তার ও চেম্বারের তথ্য",
      "২৪ ঘণ্টা খোলা ফার্মেসি ও অক্সিজেন সিলিন্ডার",
      "ডায়াগনস্টিক ও প্যাথলজি সেন্টার ডিরেক্টরি"
    ],
    contacts: [
      { title: "Shastho Batayan", number: "16263", type: "24/7 Medical Advice" },
      { title: "IEDCR Hotline", number: "10655", type: "Health Directorate" }
    ]
  },
  {
    key: "blood",
    en: "Blood Banks & Donor Registry",
    bn: "রক্তদান ও ব্লাড ব্যাংক",
    icon: "Droplets",
    badge: "Life Saving",
    itemsEn: [
      "Red Crescent Society Blood Centers",
      "Quantum Blood Bank Network",
      "Thalassemia Patient Support & Donors",
      "District-wise Verified Volunteer Groups"
    ],
    itemsBn: [
      "রেড ক্রিসেন্ট ব্লাড সেন্টার নেটওয়ার্ক",
      "কোয়ান্টাম ব্লাড ব্যাংক",
      "থ্যালাসেমিয়া পেশেন্ট সাপোর্ট ও রক্তদাতা",
      "জেলা ভিত্তিক ভেরিফায়েড স্বেচ্ছাসেবী গ্রুপ"
    ],
    contacts: [
      { title: "Quantum Blood Bank", number: "+88029351424", type: "24/7 Blood Line" },
      { title: "Red Crescent Blood", number: "+88029330188", type: "Central Bank" }
    ]
  },
  {
    key: "education",
    en: "Education & Skills Resources",
    bn: "শিক্ষা ও স্কলারশিপ তথ্য",
    icon: "GraduationCap",
    badge: "Public Resources",
    itemsEn: [
      "Public & Private University Portals",
      "Government Scholarship Circulars",
      "Free Tech & Vocational Training Programs",
      "NCTB Online Textbooks & Materials"
    ],
    itemsBn: [
      "পাবলিক ও প্রাইভেট বিশ্ববিদ্যালয় পোর্টাল",
      "সরকারি ও আন্তর্জাতিক স্কলারশিপ তথ্য",
      "ফ্রি আইটি ও ভোকেশনাল স্কিলস ট্রেনিং",
      "জাতীয় শিক্ষাক্রমের অনলাইন ই-বুক"
    ],
    contacts: [
      { title: "Teacher Helpline", number: "16654", type: "Govt Education" },
      { title: "BTEB Technical Help", number: "02-55006525", type: "Vocational" }
    ]
  },
  {
    key: "government",
    en: "Government Digital Services",
    bn: "সরকারি ডিজিটাল সেবা",
    icon: "Landmark",
    badge: "Citizen Services",
    itemsEn: [
      "NID Card Correction & Download Portal",
      "Birth & Death Certificate Verification",
      "E-Passport & Machine Readable Status",
      "Land Record (E-Porcha) & Mutation"
    ],
    itemsBn: [
      "জাতীয় পরিচয়পত্র (NID) সংশোধন ও অনলাইন কপি",
      "জন্ম ও মৃত্যু নিবন্ধন অনলাইন যাচাই",
      "ই-পাসপোর্ট আবেদন ও স্ট্যাটাস ট্র্যাকিং",
      "অনলাইন খতিয়ান (ই-পর্চা) ও নামজারি তথ্য"
    ],
    contacts: [
      { title: "NID Wing Call Center", number: "105", type: "Election Commission" },
      { title: "Passport Helpline", number: "16445", type: "Immigration" }
    ]
  }
];

// Mock Database for Partner, Admin, and Owner Dashboards
export interface PartnerProfile {
  id: string;
  name: string;
  category: string;
  rating: number;
  completedProjects: number;
  totalEarnings: number;
  pendingBalance: number;
  commissionRate: number; // percentage partner keeps, e.g., 85%
  status: "Active" | "Under Review" | "Verified";
  district: string;
  avatar: string;
  email: string;
  phone: string;
  skills: string[];
}

export interface ClientRequirement {
  id: string;
  trackingCode: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  company?: string;
  district: string;
  serviceCategory: string;
  serviceTitle: string;
  budgetRange: string;
  estimatedBudget: number;
  timeline: string;
  status: "Pending Triage" | "Matched" | "In Progress" | "Delivered" | "Completed";
  submittedAt: string;
  assignedPartnerId?: string;
  assignedPartnerName?: string;
  commissionAmount: number;
  partnerPayout: number;
  description: string;
}

export interface PlatformOwner {
  id: string;
  name: string;
  role: string;
  equityPercentage: number;
  monthlyPayout: number;
  email: string;
  avatar: string;
}

export const INITIAL_OWNERS: PlatformOwner[] = [
  {
    id: "own-1",
    name: "Founder & CEO",
    role: "Chief Executive & Strategy",
    equityPercentage: 35,
    monthlyPayout: 420000,
    email: "ceo@briizz.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "own-2",
    name: "Co-Founder & CTO",
    role: "Chief Technology & Infrastructure",
    equityPercentage: 25,
    monthlyPayout: 300000,
    email: "cto@briizz.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "own-3",
    name: "Co-Founder & COO",
    role: "Operations & Partner Network",
    equityPercentage: 20,
    monthlyPayout: 240000,
    email: "coo@briizz.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "own-4",
    name: "Co-Founder & CMO",
    role: "Growth & Brand Marketing",
    equityPercentage: 10,
    monthlyPayout: 120000,
    email: "cmo@briizz.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "own-5",
    name: "Managing Partner",
    role: "Legal & Strategic Expansion",
    equityPercentage: 10,
    monthlyPayout: 120000,
    email: "legal@briizz.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
  }
];

export const INITIAL_PARTNERS: PartnerProfile[] = [
  {
    id: "prt-101",
    name: "Apex IT Solutions & Cloud",
    category: "technology",
    rating: 4.95,
    completedProjects: 42,
    totalEarnings: 885000,
    pendingBalance: 74000,
    commissionRate: 85,
    status: "Active",
    district: "Dhaka",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80",
    email: "contact@apexitsolutions.com",
    phone: "+8801711223344",
    skills: ["Next.js", "React Native", "AWS Cloud", "Fast APIs"]
  },
  {
    id: "prt-102",
    name: "Studio Prism Visuals",
    category: "creative",
    rating: 4.9,
    completedProjects: 38,
    totalEarnings: 460000,
    pendingBalance: 32000,
    commissionRate: 85,
    status: "Active",
    district: "Chattogram",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    email: "info@studioprism.com",
    phone: "+8801811556677",
    skills: ["Commercial 4K Video", "Brand Identity", "Figma UI/UX"]
  },
  {
    id: "prt-103",
    name: "ByteTech Hardware & Surveillance",
    category: "hardware",
    rating: 4.88,
    completedProjects: 65,
    totalEarnings: 1420000,
    pendingBalance: 115000,
    commissionRate: 88,
    status: "Active",
    district: "Dhaka",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&auto=format&fit=crop&q=80",
    email: "sales@bytetech.bd",
    phone: "+8801911889900",
    skills: ["Office Hardware", "Hikvision CCTV", "MikroTik Routing", "LAN Cabling"]
  },
  {
    id: "prt-104",
    name: "GrowthWave Digital & Ads",
    category: "digital",
    rating: 4.92,
    completedProjects: 29,
    totalEarnings: 395000,
    pendingBalance: 28000,
    commissionRate: 85,
    status: "Active",
    district: "Sylhet",
    avatar: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=150&auto=format&fit=crop&q=80",
    email: "hello@growthwave.com",
    phone: "+8801611334455",
    skills: ["Meta Ads", "Google Ads ROAS", "Social Media Growth", "E-commerce Funnels"]
  }
];

export const INITIAL_REQUIREMENTS: ClientRequirement[] = [
  {
    id: "req-101",
    trackingCode: "BRZ-8831",
    clientName: "Rahim Chowdhury",
    clientEmail: "rahim@bengallogistics.com",
    clientPhone: "01712345678",
    company: "Bengal Logistics Ltd",
    district: "Dhaka",
    serviceCategory: "hardware",
    serviceTitle: "New Office IT Setup & 20 Workstations",
    budgetRange: "৳1,00,000–৳5,00,000",
    estimatedBudget: 350000,
    timeline: "Within 1 Week",
    status: "In Progress",
    submittedAt: "2026-09-18 14:30",
    assignedPartnerId: "prt-103",
    assignedPartnerName: "ByteTech Hardware & Surveillance",
    commissionAmount: 52500,
    partnerPayout: 297500,
    description: "Setting up our new corporate office in Banani with 20 PCs, structured networking, Wi-Fi 6 APs, and 8 CCTV cameras."
  },
  {
    id: "req-102",
    trackingCode: "BRZ-9240",
    clientName: "Nusrat Jahan",
    clientEmail: "nusrat@artisanbakes.com",
    clientPhone: "01898765432",
    company: "Artisan Bakes & Cafe",
    district: "Chattogram",
    serviceCategory: "creative",
    serviceTitle: "Brand Identity, Menu Design & 4K Product Shoot",
    budgetRange: "৳50,000–৳1,00,000",
    estimatedBudget: 75000,
    timeline: "Within 1 Week",
    status: "Matched",
    submittedAt: "2026-09-19 08:15",
    assignedPartnerId: "prt-102",
    assignedPartnerName: "Studio Prism Visuals",
    commissionAmount: 11250,
    partnerPayout: 63750,
    description: "New artisanal bakery launch in Nasirabad. Need full brand guidelines, Instagram templates, printed menu cards, and 25 product photos."
  },
  {
    id: "req-103",
    trackingCode: "BRZ-7104",
    clientName: "Tanvir Ahmed",
    clientEmail: "tanvir@zenithhealth.org",
    clientPhone: "01955443322",
    company: "Zenith Health Care",
    district: "Dhaka",
    serviceCategory: "technology",
    serviceTitle: "Telemedicine Patient Portal & Doctor Dashboard",
    budgetRange: "৳5,00,000+",
    estimatedBudget: 620000,
    timeline: "Within 1 Month",
    status: "In Progress",
    submittedAt: "2026-09-15 11:20",
    assignedPartnerId: "prt-101",
    assignedPartnerName: "Apex IT Solutions & Cloud",
    commissionAmount: 93000,
    partnerPayout: 527000,
    description: "Custom HIPAA-compliant patient consultation portal with video calling, digital prescriptions, and SSLCommerz payment gateway."
  },
  {
    id: "req-104",
    trackingCode: "BRZ-9912",
    clientName: "Karim Uddin",
    clientEmail: "karim@greenagro.bd",
    clientPhone: "01677889900",
    company: "Green Agro Exports",
    district: "Sylhet",
    serviceCategory: "digital",
    serviceTitle: "Export B2B Marketing & Google Lead Ads",
    budgetRange: "৳50,000–৳1,00,000",
    estimatedBudget: 85000,
    timeline: "ASAP",
    status: "Pending Triage",
    submittedAt: "2026-09-19 08:45",
    commissionAmount: 12750,
    partnerPayout: 72250,
    description: "Need overseas buyer lead generation for organic tea and spices export across Middle East & Europe."
  }
];
