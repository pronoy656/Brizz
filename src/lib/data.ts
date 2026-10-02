export interface ServiceItem {
  id: string;
  slug: string;
  category: 'technology' | 'creative' | 'hardware' | 'business' | 'digital' | 'professional' | 'wholesale';
  name: { en: string; bn: string };
  short: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: string;
  keywords: string[];
  deliverables: string[];
  estimatedDays: string;
  startingPrice: string;
  popular?: boolean;
  comingSoon?: boolean;
  stats?: {
    providersCount: { en: string; bn: string };
    experienceYears: { en: string; bn: string };
    completedProjects: { en: string; bn: string };
    satisfactionRate: string;
    onTimeDelivery: string;
  };
  trustHighlights?: {
    en: string[];
    bn: string[];
  };
  subTracks?: {
    nameEn: string;
    nameBn: string;
    descEn: string;
    descBn: string;
    count?: string;
  }[];
}

export interface NetworkSubSector {
  id: string;
  title: { en: string; bn: string };
  desc: { en: string; bn: string };
  originOrHub?: { en: string; bn: string };
  tags: string[];
  providersCount: { en: string; bn: string };
  turnaround: { en: string; bn: string };
  highlights: { en: string[]; bn: string[] };
  inquiryNeed: string;
}

export interface NetworkSector {
  id: string;
  slug: string;
  name: { en: string; bn: string };
  badge: { en: string; bn: string };
  description: { en: string; bn: string };
  color: string;
  icon: string;
  stats: {
    providersCount: { en: string; bn: string };
    experienceYears: { en: string; bn: string };
    completedVolume: { en: string; bn: string };
    slaRate: string;
  };
  subSectors: NetworkSubSector[];
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
  // 1. Software & Web Development (Active)
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
    popular: true,
    stats: {
      providersCount: { en: "48+ Verified Senior Developers & Architects", bn: "৪৮+ ভেরিফায়েড ডেভেলপার ও সফটওয়্যার আর্কিটেক্ট" },
      experienceYears: { en: "8+ Years Average Engineering Experience", bn: "৮+ বছরের গড় ইন্ডাস্ট্রি অভিজ্ঞতা" },
      completedProjects: { en: "150+ Enterprise & Custom Platforms Delivered", bn: "১৫০+ সফলভাবে বাস্তবায়িত সিস্টেম" },
      satisfactionRate: "99.4%",
      onTimeDelivery: "98.8%"
    },
    trustHighlights: {
      en: [
        "Escrow Milestone Protection: 100% money-back safety; funds released only upon your milestone approval",
        "Zero Code Debt & Security Audits: Direct code review by BRIIZZ Lead Solution Architects before delivery",
        "100% Commercial IP & Source Code Ownership: Complete GitHub repository and copyright transferred to you",
        "Dedicated Technical Project Manager assigned for daily progress and clear communication",
        "6 Months Free Post-Launch Bug Fixing & Server Maintenance SLA"
      ],
      bn: [
        "এসক্রো মাইলস্টোন সুরক্ষা: ১০০% সুরক্ষিত পেমেন্ট; কাজ টেস্ট করে সন্তুষ্ট হলেই কেবল টাকা রিলিজ",
        "সিকিউরিটি ও কোড অডিট: ডেলিভারির পূর্বে BRIIZZ চিফ আর্কিটেক্ট দ্বারা পুঙ্খানুপুঙ্খ কোড রিভিউ",
        "১০০% কমার্শিয়াল আইপি ও সোর্স কোড মালিকানা: সম্পূর্ণ গিটহাব রিপোজিটরি ও কপিরাইট আপনার নামে হস্তান্তর",
        "ডেডিকেটেড টেকনিক্যাল প্রজেক্ট ম্যানেজার: সার্বক্ষণিক অগ্রগতি ট্র্যাকিং ও মসৃণ সমন্বয়",
        "৬ মাস ফ্রি পোস্ট-লঞ্চ ওয়ারেন্টি ও মেইনটেন্যান্স সাপোর্ট"
      ]
    },
    subTracks: [
      {
        nameEn: "Custom Enterprise SaaS Platforms",
        nameBn: "কাস্টম এন্টারপ্রাইজ SaaS প্ল্যাটফর্ম",
        descEn: "Scalable multi-tenant architectures built with Next.js, Node.js, and PostgreSQL.",
        descBn: "নেক্সট জেএস ও নোড জেএস দিয়ে স্কেলেবল মাল্টি-টেন্যান্ট সফটওয়্যার প্ল্যাটফর্ম।",
        count: "18+ Teams"
      },
      {
        nameEn: "Corporate Websites & Customer Portals",
        nameBn: "কর্পোরেট ওয়েবসাইট ও কাস্টমার পোর্টাল",
        descEn: "Ultra-fast, SEO-optimized business websites with interactive client dashboards.",
        descBn: "উচ্চগতির এসইও-বান্ধব বিজনেস সাইট ও ক্লায়েন্ট সেলফ-সার্ভিস পোর্টাল।",
        count: "20+ Teams"
      },
      {
        nameEn: "E-Commerce & High-Volume Marketplaces",
        nameBn: "ই-কমার্স ও হাই-ভলিউম মার্কেটপ্লেস",
        descEn: "Custom headless stores with payment gateways, inventory auto-sync, and courier APIs.",
        descBn: "বিকাশ/নগদ পেমেন্ট এবং কুরিয়ার অটোমেশনসহ কাস্টম অনলাইন শপ।",
        count: "15+ Teams"
      },
      {
        nameEn: "Microservices & High-Speed REST/GraphQL APIs",
        nameBn: "মাইক্রোসার্ভিসেস ও হাই-স্পিড এপিআই",
        descEn: "Robust backend engines capable of handling 50k+ requests per minute.",
        descBn: "উচ্চ ধারণক্ষমতাসম্পন্ন ব্যাকএন্ড ও নিরাপদ এপিআই ইন্টিগ্রেশন।",
        count: "14+ Teams"
      },
      {
        nameEn: "Cloud Deployment & DevOps Architecture",
        nameBn: "ক্লাউড ডিপ্লয়মেন্ট ও ডেভঅপস",
        descEn: "AWS, Docker, Kubernetes setup with automated CI/CD deployment pipelines.",
        descBn: "এডব্লিউএস ক্লাউড, ডকার ও নিরবচ্ছিন্ন সিআই/সিডি অটোমেশন পাইপলাইন।",
        count: "12+ Teams"
      }
    ]
  },

  // 2. Mobile App Development (Active)
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
    popular: true,
    stats: {
      providersCount: { en: "32+ Verified Mobile Engineers & Flutter Specialists", bn: "৩২+ ভেরিফায়েড মোবাইল অ্যাপ বিশেষজ্ঞ" },
      experienceYears: { en: "7+ Years Mobile App Architecture", bn: "৭+ বছরের মোবাইল অ্যাপ অভিজ্ঞতা" },
      completedProjects: { en: "85+ Published iOS & Android Store Apps", bn: "৮৫+ অ্যাপ স্টোর ও প্লে স্টোর লাইভ অ্যাপ" },
      satisfactionRate: "99.2%",
      onTimeDelivery: "98.5%"
    },
    trustHighlights: {
      en: [
        "App Store & Google Play Guaranteed Approval: We manage submission until 100% accepted",
        "Native-Grade Performance: Smooth 60fps animations with Flutter and React Native",
        "Integrated Payment Gateways: Ready bKash, Nagad, Card, SSLCommerz, and Stripe integration",
        "Offline-First Architecture & Push Notification infrastructure ready out of the box",
        "6 Months Free Store Updates & Crash Monitoring Support"
      ],
      bn: [
        "প্লে স্টোর ও অ্যাপ স্টোর অ্যাপ্রুভাল গ্যারান্টি: লাইভ অনুমোদন না হওয়া পর্যন্ত পুরো দায়িত্ব আমাদের",
        "দ্রুতগতির পারফরম্যান্স: ফ্লাটার ও রিয়্যাক্ট নেটিভ দিয়ে স্মুথ ৬০fps ইউজার এক্সপেরিয়েন্স",
        "পেমেন্ট গেটওয়ে রেডি: বিকাশ, নগদ, কার্ড ও আন্তর্জাতিক পেমেন্ট সরাসরি সংযুক্ত",
        "অফলাইন সিঙ্ক ও পুশ নোটিফিকেশন সিস্টেম রেডি",
        "৬ মাস ফ্রি স্টোর আপডেট ও ক্র্যাশ মনিটরিং সহায়তা"
      ]
    },
    subTracks: [
      {
        nameEn: "Cross-Platform Flutter Mobile Apps",
        nameBn: "ক্রস-প্ল্যাটফর্ম ফ্লাটার মোবাইল অ্যাপ",
        descEn: "One unified codebase that compiles to blazing fast native iOS and Android apps.",
        descBn: "একই কোডবেস দিয়ে দ্রুতগতির আইওএস ও অ্যান্ড্রয়েড অ্যাপ।",
        count: "14+ Specialists"
      },
      {
        nameEn: "FinTech & Secure Mobile Wallets",
        nameBn: "ফিনটেক ও নিরাপদ মোবাইল ওয়ালেট",
        descEn: "Biometric auth, tokenized payment storage, and end-to-end encrypted transactions.",
        descBn: "বায়োমেট্রিক সিকিউরিটি ও এনক্রিপ্টেড ট্রানজ্যাকশন সুবিধাসহ ফিনটেক অ্যাপ।",
        count: "8+ Specialists"
      },
      {
        nameEn: "On-Demand Delivery & Live GPS Tracking",
        nameBn: "অন-ডিমান্ড ডেলিভারি ও লাইভ ট্র্যাকিং",
        descEn: "Real-time driver/rider location tracking with WebSockets and Google Maps API.",
        descBn: "গুগল ম্যাপস ও রিয়েলটাইম জিপিএস ট্র্যাকিংসহ অন-ডিমান্ড ডেলিভারি অ্যাপ।",
        count: "9+ Specialists"
      },
      {
        nameEn: "E-Commerce Shopping & Marketplace Apps",
        nameBn: "ই-কমার্স শপিং মোবাইল অ্যাপ",
        descEn: "Fast checkout, cart recovery, push notifications, and dynamic flash sales.",
        descBn: "অর্ডার নোটিফিকেশন ও দ্রুতগতির চেকআউটসহ শপিং অ্যাপ।",
        count: "12+ Specialists"
      }
    ]
  },

  // 3. AI & Automation (Active)
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
    popular: true,
    stats: {
      providersCount: { en: "24+ AI Engineers & Workflow Automation Specialists", bn: "২৪+ এআই ইঞ্জিনিয়ার ও অটোমেশন স্পেশালিস্ট" },
      experienceYears: { en: "6+ Years in Machine Learning & Process Automation", bn: "৬+ বছরের অটোমেশন অভিজ্ঞতা" },
      completedProjects: { en: "450,000+ Monthly Automated Operations Handled", bn: "৪,৫০,০০০+ মাসিক স্বয়ংক্রিয় অপারেশন" },
      satisfactionRate: "99.6%",
      onTimeDelivery: "99.0%"
    },
    trustHighlights: {
      en: [
        "Enterprise Data Privacy: Zero LLM training on your proprietary data or customer chats",
        "Up to 90% Operational Cost Reduction by automating repetitive manual back-office tasks",
        "Multi-Channel Bot Integration: WhatsApp Business API, Facebook Messenger, Website & CRM",
        "Fail-Safe Architecture: Automated retry logic, error alerting, and human fallback triggers",
        "Comprehensive Staff Handover: Video documentation and 30-day live shadowing"
      ],
      bn: [
        "এন্টারপ্রাইজ ডাটা প্রাইভেসি: আপনার বাণিজ্যিক ডাটা বা গ্রাহকের তথ্য সুরক্ষিত ও গোপন রাখা হয়",
        "অপারেশনাল খরচ ৯০% পর্যন্ত হ্রাস: পুনরাবৃত্তিমূলক ম্যানুয়াল কাজ স্বয়ংক্রিয়ভাবে সম্পন্ন",
        "মাল্টি-চ্যানেল চ্যাটবট: হোয়াটসঅ্যাপ বিজনেস, মেসেঞ্জার, ওয়েবসাইট ও সিআরএম একসাথে",
        "ফেইল-সেফ আর্কিটেকচার: স্বয়ংক্রিয় রিট্রাই এবং রিয়েলটাইম এরর নোটিফিকেশন অ্যালার্ট",
        "টিম ট্রেনিং ও হ্যান্ডওভার: ভিডিও ডকুমেন্টেশন ও ৩০ দিন সার্বক্ষণিক মনিটরিং"
      ]
    },
    subTracks: [
      {
        nameEn: "WhatsApp & Web Conversational AI Agents",
        nameBn: "হোয়াটসঅ্যাপ ও ওয়েব এআই চ্যাটবট",
        descEn: "24/7 intelligent customer support agents trained on your business documents.",
        descBn: "আপনার বিজনেসের তথ্যে ট্রেনকৃত ২৪/৭ স্বয়ংক্রিয় কাস্টমার সাপোর্ট চ্যাটবট।",
        count: "11+ Specialists"
      },
      {
        nameEn: "n8n, Make & Zapier Enterprise Workflow Pipelines",
        nameBn: "এনএইটন ও জ্যাপিয়ার অটোমেশন পাইপলাইন",
        descEn: "Zero-code and low-code integrations syncing lead generation, sales, and accounts.",
        descBn: "লিড ক্যাপচার, ইনভয়েস ও সেলস স্বয়ংক্রিয়ভাবে সিঙ্ক করার শক্তিশালী পাইপলাইন।",
        count: "10+ Specialists"
      },
      {
        nameEn: "AI Document Parsing, Invoice Processing & OCR",
        nameBn: "এআই ডকুমেন্ট পার্সিং ও ইনভয়েস ওওসিআর",
        descEn: "Extract data automatically from PDFs, bills, scans, and emails into your CRM.",
        descBn: "পিডিএফ ও বিল থেকে স্বয়ংক্রিয়ভাবে ডাটা সংগ্রহ করে সিস্টেমে এন্ট্রি।",
        count: "7+ Specialists"
      },
      {
        nameEn: "Custom LLM Fine-Tuning & Knowledge Base Agents",
        nameBn: "কাস্টম এলএলএম মডেল ও নলেজ বেস এজেন্ট",
        descEn: "Proprietary AI intelligence models with strict security fences and audit logs.",
        descBn: "কোম্পানির নিজস্ব নলেজ বেসের ওপর নির্মিত প্রাইভেট এআই মডেল।",
        count: "8+ Specialists"
      }
    ]
  },

  // 4. Hardware & Devices / Processors (Active)
  {
    id: "srv-5",
    slug: "hardware-devices",
    category: "hardware",
    name: { en: "Hardware & Devices / Processors", bn: "হার্ডওয়্যার ও ডিভাইস / প্রসেসর" },
    short: {
      en: "Computers, processors, laptops, peripherals, and commercial IT equipment sourced at wholesale prices.",
      bn: "আপনার প্রয়োজন অনুযায়ী কম্পিউটার, প্রসেসর, ল্যাপটপ, পেরিফেরাল ও ব্যবসায়িক যন্ত্রপাতি পাইকারি মূল্যে।"
    },
    description: {
      en: "Authentic hardware sourcing at verified wholesale and corporate pricing with official brand warranty, custom workstation assembly, and Intel/AMD processor procurement.",
      bn: "ব্র্যান্ড ওয়ারেন্টিসহ পাইকারি মূল্যে অফিস কম্পিউটার, হাই-এন্ড প্রসেসর, ল্যাপটপ এবং হার্ডওয়্যার সরঞ্জাম সরবরাহ।"
    },
    icon: "Monitor",
    keywords: ["hardware", "computer", "processor", "laptop", "pc", "monitor", "printer", "device", "intel", "amd"],
    deliverables: ["Custom Workstation & Processor Assembly", "Brand Laptops (Dell/HP/Lenovo/Apple)", "Commercial Printers & Projectors", "Official Brand Warranty & Replacement Support"],
    estimatedDays: "2 - 5 Days",
    startingPrice: "৳30,000",
    popular: true,
    stats: {
      providersCount: { en: "22+ Certified Hardware Engineers & Authorized Brand Distributors", bn: "২২+ হার্ডওয়্যার ইঞ্জিনিয়ার ও অথোরাইজড ডিলার" },
      experienceYears: { en: "10+ Years in Hardware Procurement & Infrastructure", bn: "১০+ বছরের টেকনিক্যাল ও হার্ডওয়্যার অভিজ্ঞতা" },
      completedProjects: { en: "3,200+ Workstations, Processors & Office Systems Deployed", bn: "৩,২০০+ ডেলিভারিকৃত কম্পিউটার ও ডিভাইস" },
      satisfactionRate: "98.9%",
      onTimeDelivery: "99.2%"
    },
    trustHighlights: {
      en: [
        "100% Genuine Brand Warranty: Sourced strictly via authorized national distributor channels",
        "Pre-Delivery Thermal & Burn-In Testing: 24-hour stress test before dispatch with test report",
        "Corporate Tier Bulk Discounts directly passed from tier-1 importers to your business",
        "On-Site Deployment & Structured Setup across all 64 districts in Bangladesh",
        "Instant Component Replacement Warranty for critical corporate workstation faults"
      ],
      bn: [
        "১০০% অরিজিনাল অফিশিয়াল ব্র্যান্ড ওয়ারেন্টি: অনুমোদিত ন্যাশনাল ডিস্ট্রিবিউটর থেকে সরাসরি সংগ্রহ",
        "ডেলিভারির পূর্বে ২৪-ঘণ্টা স্ট্রেস ও থার্মাল টেস্ট রিপোর্ট প্রদান",
        "কর্পোরেট বাল্ক প্রাইসিং: ডিলার রেটে সরাসরি পাইকারি সাশ্রয়",
        "৬৪ জেলায় অন-সাইট ইনস্টলেশন ও অফিস সেটআপ সেবা",
        "জরুরি ক্ষেত্রে তাৎক্ষণিক কম্পোনেন্ট রিপ্লেসমেন্ট সাপোর্ট"
      ]
    },
    subTracks: [
      {
        nameEn: "High-End Processor & Chipset Sourcing",
        nameBn: "হাই-এন্ড প্রসেসর ও চিপসেট সরবরাহ",
        descEn: "Intel Core 14th Gen, AMD Ryzen 9000 series, and Apple Silicon chips at genuine bulk rates.",
        descBn: "ইনটেল ও এএমডি রাইজেন প্রসেসর অনুমোদিত ডিলার মূল্যে সরাসরি সংগ্রহ।",
        count: "8+ Partners"
      },
      {
        nameEn: "Custom Office Workstations & Video Editing Rigs",
        nameBn: "কাস্টম অফিস ওয়ার্কস্টেশন ও এডিটিং পিসি",
        descEn: "Tailored GPU & RAM configurations built for 4K video rendering and 3D architectural CAD.",
        descBn: "গ্রাফিক্স ও ভিডিও এডিটিংয়ের জন্য অপ্টিমাইজড হাই-পারফরম্যান্স পিসি সেটআপ।",
        count: "10+ Specialists"
      },
      {
        nameEn: "Commercial Corporate Laptop Fleets",
        nameBn: "কর্পোরেট ল্যাপটপ বহর সরবরাহ",
        descEn: "Dell Latitude, HP ProBook, Lenovo ThinkPad, and Apple MacBooks with corporate imaging.",
        descBn: "অফিসিয়াল ওয়ারেন্টিসহ ব্র্যান্ড ল্যাপটপ বাল্ক সাপ্লাই।",
        count: "7+ Partners"
      },
      {
        nameEn: "Enterprise Rack Servers & Centralized Network Storage",
        nameBn: "এন্টারপ্রাইজ সার্ভার ও কেন্দ্রীয় স্টোরেজ",
        descEn: "Synology NAS, Dell PowerEdge, and HP Enterprise servers configured with RAID redundancy.",
        descBn: "অফিসের ডাটা ব্যাকআপ ও কেন্দ্রীয় ফাইল শেয়ারিং সার্ভার সলিউশন।",
        count: "6+ Specialists"
      }
    ]
  },

  // 5. Wholesale & Global Sourcing (Active)
  {
    id: "srv-wholesale",
    slug: "wholesale-sourcing",
    category: "wholesale",
    name: { en: "Wholesale & Global Sourcing", bn: "হোলসেল ও গ্লোবাল ইমপোর্ট" },
    short: {
      en: "Bulk sourcing for Pakistani dresses, China imports, computer components, and international goods.",
      bn: "পাকিস্তানি ড্রেস, চায়না পণ্য আমদানি, কম্পিউটার পার্টস এবং আন্তর্জাতিক মালামালের পাইকারি সরবরাহ।"
    },
    description: {
      en: "Direct factory wholesale sourcing from Karachi, Lahore, Guangzhou, Yiwu, and Shenzhen. We handle supplier vetting, sample verification, customs clearance, and door-to-door bulk cargo delivery.",
      bn: "করাচি, লাহোর, গুয়াংজু ও শেনজেন থেকে সরাসরি কারখানা মূল্যে মালামাল আমদানি। কাস্টমস ক্লিয়ারেন্স ও ডোর-টু-ডোর ডেলিভারিসহ শতভাগ নিরাপদ হোলসেল সাপ্লাই চেইন।"
    },
    icon: "Box",
    keywords: ["wholesale", "import", "pakistani dress", "china import", "bulk supply", "sourcing", "foreign goods", "computer parts"],
    deliverables: ["Factory-Direct Bulk Price Quotation", "On-Ground Quality & Sample Verification", "Air & Sea Freight Customs Clearance", "Door-to-Door Delivery Across 64 Districts"],
    estimatedDays: "5 - 25 Days",
    startingPrice: "Custom Bulk Quote",
    popular: true,
    stats: {
      providersCount: { en: "65+ Verified Global Importers, Factory Agents & Bulk Wholesalers", bn: "৬৫+ ভেরিফায়েড গ্লোবাল ইমপোর্টার ও হোলসেলার" },
      experienceYears: { en: "12+ Years in Cross-Border Trade & Customs Clearance", bn: "১২+ বছরের আন্তর্জাতিক বাণিজ্য ও কাস্টমস ক্লিয়ারেন্স অভিজ্ঞতা" },
      completedProjects: { en: "85,000+ kg Bulk Cargo Imported & Cleared", bn: "৮৫,০০০+ কেজি পণ্য সফলভাবে আমদানিকৃত" },
      satisfactionRate: "99.1%",
      onTimeDelivery: "97.8%"
    },
    trustHighlights: {
      en: [
        "On-Ground Origin Quality Inspection: In-person QA checking in China (Guangzhou/Yiwu) & Pakistan (Karachi)",
        "Escrow Advance Protection: Full refund protection if goods do not match approved master sample",
        "End-to-End Customs Clearance & Legal Documentation: Sea & Air freight handled completely by BRIIZZ",
        "Factory-Direct Pricing: Eliminates multiple middleman markups for maximum retail profit margins",
        "Door-to-Door Delivery across all 64 districts of Bangladesh with live cargo tracking"
      ],
      bn: [
        "চায়না ও পাকিস্তানে অন-গ্রাউন্ড মান যাচাই: শিপমেন্টের পূর্বে আমাদের নিজস্ব প্রতিনিধি দ্বারা ইন্সপেকশন",
        "এসক্রো প্রোটেকশন: অনুমোদিত স্যাম্পলের সাথে অমিল থাকলে মানিব্যাক নিশ্চয়তা",
        "সম্পূর্ণ কাস্টমস ও ট্যাক্স হ্যান্ডলিং: এয়ার ও সি কার্গো ক্লিয়ারেন্স আমরা নিজেরাই সম্পন্ন করি",
        "ফ্যাক্টরি ডিরেক্ট প্রাইসিং: কোনো মধ্যস্বত্বভোগী ছাড়া সর্বোচ্চ প্রফিট মার্জিনের নিশ্চয়তা",
        "লাইভ কার্গো ট্র্যাকিংসহ ৬৪ জেলার যেকোনো ঠিকানায় ডোর-টু-ডোর ডেলিভারি"
      ]
    },
    subTracks: [
      {
        nameEn: "Pakistani Designer Dresses & Lawn Wholesale",
        nameBn: "পাকিস্তানি ডিজাইনার ড্রেস ও লন হোলসেল",
        descEn: "Original Karachi & Lahore designer suits (Maria B, Sana Safinaz, Festive Boutique) at bulk factory rates.",
        descBn: "করাচি ও লাহোর থেকে অরিজিনাল ডিজাইনার পাকিস্তানি থ্রি-পিস ও লন সরাসরি পাইকারি সরবরাহ।",
        count: "28+ Partners"
      },
      {
        nameEn: "China Factory Sourcing & Import (Guangzhou & Yiwu)",
        nameBn: "চায়না ফ্যাক্টরি সোর্সিং ও পণ্য আমদানি",
        descEn: "Direct factory procurement for electronics, bags, consumer goods, and factory inspection with clearance.",
        descBn: "গুয়াংজু, শেনজেন ও ইইউ থেকে গ্যাজেট ও কনজিউমার পণ্য সরাসরি আমদানি ও কাস্টমস ছাড়।",
        count: "35+ Forwarders"
      },
      {
        nameEn: "Foreign Goods & Global Sourcing (Dubai / Thailand / UK / USA)",
        nameBn: "আন্তর্জাতিক ব্র্যান্ড ও পণ্য আমদানি",
        descEn: "Authentic cosmetics, skincare, perfumes, and branded consumer items with certificate of origin.",
        descBn: "দুবাই ও থাইল্যান্ড থেকে অরিজিনাল কসমেটিকস ও আন্তর্জাতিক ব্র্যান্ডের মালামাল পাইকারি সরবরাহ।",
        count: "20+ Partners"
      },
      {
        nameEn: "Computer Parts & Hardware Wholesale",
        nameBn: "কম্পিউটার পার্টস ও হার্ডওয়্যার হোলসেল",
        descEn: "Processors, GPUs, motherboards, RAM, NVMe SSDs, and brand monitors at tier-1 distributor pricing.",
        descBn: "পাইকারি ডিলার মূল্যে প্রসেসর, গ্রাফিক্স কার্ড, মাদারবোর্ড ও কম্পিউটার এক্সেসরিজ।",
        count: "25+ Dealers"
      },
      {
        nameEn: "B2B Packaging Materials & E-Commerce Courier Supplies",
        nameBn: "প্যাকেজিং সামগ্রী ও কুরিয়ার সিকিউরিটি ব্যাগ",
        descEn: "Custom printed shipping cartons, poly mailers, bubble wrap, and barcode labels.",
        descBn: "ই-কমার্স শপ ও ফ্যাক্টরির জন্য কাস্টম প্রিন্টেড বক্স ও ডেলিভারি প্যাকেজিং ম্যাটেরিয়াল।",
        count: "18+ Manufacturers"
      }
    ]
  },

  // Remaining Services (Coming Soon - clearly flagged as requested)
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
      en: "Distinctive logo concepts, typography hierarchy, brand color psychology, stationery sets (business card, letterhead, envelope), and brand guideline books.",
      bn: "আকর্ষণীয় লোগো, ব্র্যান্ড কালার প্যালেট, ভিজিটিং কার্ড ও ব্র্যান্ড গাইডলাইন বুক।"
    },
    icon: "Crown",
    keywords: ["branding", "logo", "brand identity", "identity", "brand guideline"],
    deliverables: ["Logo Concept Suite (Vector/SVG)", "Brand Guidelines Manual", "Stationery Pack (Card, Letterhead)", "Social Media Branding Kit"],
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
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
    estimatedDays: "Coming Soon",
    startingPrice: "Coming Soon",
    comingSoon: true
  }
];

// Rich Network Sector Directory Data (used by /network page)
export const BRIZZ_NETWORK_SECTORS: NetworkSector[] = [
  {
    id: "software-tech",
    slug: "software-tech",
    name: { en: "Software & Technology Network", bn: "সফটওয়্যার ও টেকনোলজি নেটওয়ার্ক" },
    badge: { en: "Verified Engineering Talent", bn: "ভেরিফায়েড সফটওয়্যার নেটওয়ার্ক" },
    description: {
      en: "Pre-screened software development agencies, senior freelance architects, mobile specialists, and automation engineers across Bangladesh.",
      bn: "৬৪ জেলার শীর্ষস্থানীয় সফটওয়্যার এজেন্সি, সিনিয়র ইঞ্জিনিয়ার ও এআই বিশেষজ্ঞদের ভেরিফায়েড নেটওয়ার্ক।"
    },
    color: "from-blue-600 via-indigo-600 to-cyan-500",
    icon: "Code2",
    stats: {
      providersCount: { en: "110+ Vetted Engineers & Studios", bn: "১১০+ ভেরিফায়েড ইঞ্জিনিয়ার ও স্টুডিও" },
      experienceYears: { en: "8+ Years Average Lead Expertise", bn: "৮+ বছরের গড় সিনিয়র অভিজ্ঞতা" },
      completedVolume: { en: "350+ Live Projects Deployed", bn: "৩৫০+ সফলভাবে বাস্তবায়িত প্রজেক্ট" },
      slaRate: "99.4%"
    },
    subSectors: [
      {
        id: "web-dev",
        title: { en: "Web Development Network", bn: "ওয়েব ডেভেলপমেন্ট নেটওয়ার্ক" },
        desc: {
          en: "Enterprise SaaS, corporate portals, and high-performance web systems crafted with Next.js, React, Node.js, and cloud databases.",
          bn: "নেক্সট জেএস, রিয়্যাক্ট ও ক্লাউড ডাটাবেস দিয়ে নির্মিত স্কেলেবল কর্পোরেট ওয়েব প্ল্যাটফর্ম ও ড্যাশবোর্ড।"
        },
        originOrHub: { en: "Dhaka & Remote Nationwide", bn: "ঢাকা ও সারাদেশব্যাপী রিমোট" },
        tags: ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "Tailwind CSS"],
        providersCount: { en: "48+ Verified Teams", bn: "৪৮+ ভেরিফায়েড টিম" },
        turnaround: { en: "7 - 21 Days", bn: "৭ - ২১ দিন" },
        highlights: {
          en: ["Full GitHub source ownership", "Code audit by BRIIZZ architects", "Escrow milestone release"],
          bn: ["সম্পূর্ণ গিটহাব সোর্স কোড মালিকানা", "চিফ আর্কিটেক্ট দ্বারা কোড অডিট", "এসক্রো মাইলস্টোন পেমেন্ট"]
        },
        inquiryNeed: "Web Development"
      },
      {
        id: "mobile-app",
        title: { en: "Mobile App Development Network", bn: "মোবাইল অ্যাপ ডেভেলপমেন্ট নেটওয়ার্ক" },
        desc: {
          en: "Smooth cross-platform Flutter and React Native mobile applications with backend APIs, real-time push, and in-app payments.",
          bn: "ফ্লাটার ও রিয়্যাক্ট নেটিভ দিয়ে দ্রুতগতির আইওএস ও অ্যান্ড্রয়েড অ্যাপ, পেমেন্ট ও পুশ নোটিফিকেশন।"
        },
        originOrHub: { en: "Dhaka, Chattogram & Sylhet", bn: "ঢাকা, চট্টগ্রাম ও সিলেট" },
        tags: ["Flutter", "React Native", "iOS Swift", "Android Kotlin", "bKash / Nagad SDK"],
        providersCount: { en: "32+ Verified Teams", bn: "৩২+ ভেরিফায়েড টিম" },
        turnaround: { en: "20 - 45 Days", bn: "২০ - ৪৫ দিন" },
        highlights: {
          en: ["Google Play & App Store approval", "60fps native feel", "6 Months crash monitoring support"],
          bn: ["প্লে স্টোর ও অ্যাপ স্টোর লাইভ নিশ্চয়তা", "৬০fps মসৃণ পারফরম্যান্স", "৬ মাস ফ্রি টেকনিক্যাল সাপোর্ট"]
        },
        inquiryNeed: "Mobile App Development"
      },
      {
        id: "ai-automation",
        title: { en: "AI & Workflow Automation Network", bn: "এআই ও অটোমেশন নেটওয়ার্ক" },
        desc: {
          en: "Custom OpenAI and Claude agents, WhatsApp Business chatbots, n8n/Zapier multi-app workflows, and intelligent business pipelines.",
          bn: "হোয়াটসঅ্যাপ ও ওয়েব এআই চ্যাটবট, এনএইটন ও জ্যাপিয়ার দিয়ে লিড ক্যাপচার ও ব্যবসায়িক অটোমেশন।"
        },
        originOrHub: { en: "Dhaka & Rajshahi Tech Hubs", bn: "ঢাকা ও রাজশাহী টেক হাব" },
        tags: ["n8n", "OpenAI GPT-4", "Claude", "WhatsApp API", "Zapier", "Python"],
        providersCount: { en: "24+ Specialists", bn: "২৪+ অটোমেশন বিশেষজ্ঞ" },
        turnaround: { en: "5 - 14 Days", bn: "৫ - ১৪ দিন" },
        highlights: {
          en: ["Proprietary data privacy guarantee", "24/7 automated operations", "Zero-downtime webhook failovers"],
          bn: ["বাণিজ্যিক তথ্যের শতভাগ গোপনীয়তা", "২৪/৭ স্বয়ংক্রিয় কাস্টমার রেসপন্স", "ফেইল-সেফ অটোমেশন পাইপলাইন"]
        },
        inquiryNeed: "AI & Automation"
      },
      {
        id: "cloud-devops",
        title: { en: "Cloud, DevOps & Cyber Security", bn: "ক্লাউড, ডেভঅপস ও সাইবার সিকিউরিটি" },
        desc: {
          en: "AWS, Azure, DigitalOcean server hardening, Docker container orchestration, CI/CD automated deployment, and automated off-site backups.",
          bn: "এডব্লিউএস ও ভিপিএস সার্ভার কনফিগারেশন, ডকার, সিআই/সিডি অটোমেশন এবং ডাটা ব্যাকআপ।"
        },
        originOrHub: { en: "Dhaka & Remote Certified Pool", bn: "ঢাকা ও সার্টিফাইড ইঞ্জিনিয়ার পুল" },
        tags: ["AWS", "Docker", "Kubernetes", "Linux", "Nginx", "PostgreSQL"],
        providersCount: { en: "16+ Certified Engineers", bn: "১৬+ সার্টিফাইড ইঞ্জিনিয়ার" },
        turnaround: { en: "3 - 10 Days", bn: "৩ - ১০ দিন" },
        highlights: {
          en: ["99.9% uptime architecture", "Automated daily snapshot backups", "SSL & DDoS protection"],
          bn: ["৯৯.৯% আপটাইম আর্কিটেকচার", "দৈনিক স্বয়ংক্রিয় ব্যাকআপ", "এসএসএল ও ডিডিওএস প্রোটেকশন"]
        },
        inquiryNeed: "Cloud & DevOps"
      }
    ]
  },
  {
    id: "wholesale-sourcing",
    slug: "wholesale-sourcing",
    name: { en: "Wholesale & Global Sourcing Supply Chain", bn: "হোলসেল ও গ্লোবাল ইমপোর্ট সাপ্লাই চেইন" },
    badge: { en: "Direct Factory & Customs Network", bn: "সরাসরি ফ্যাক্টরি ও কাস্টমস নেটওয়ার্ক" },
    description: {
      en: "Cross-border factory sourcing, bulk product procurement, on-ground inspection, and customs clearance for consumer merchandise, apparel, and hardware.",
      bn: "চীন, পাকিস্তান, দুবাই ও থাইল্যান্ড থেকে সরাসরি কারখানা মূল্যে পণ্য আমদানি, কাস্টমস ক্লিয়ারেন্স ও ডোর-টু-ডোর বাল্ক ডেলিভারি।"
    },
    color: "from-amber-500 via-orange-600 to-rose-600",
    icon: "Box",
    stats: {
      providersCount: { en: "85+ Verified Wholesalers & Importers", bn: "৮৫+ ভেরিফায়েড ইমপোর্টার ও হোলসেলার" },
      experienceYears: { en: "12+ Years Customs & Logistics Track", bn: "১২+ বছরের কাস্টমস ও কার্গো অভিজ্ঞতা" },
      completedVolume: { en: "85,000+ kg Bulk Cargo Delivered", bn: "৮৫,০০০+ কেজি পণ্য সফলভাবে আমদানিকৃত" },
      slaRate: "99.1%"
    },
    subSectors: [
      {
        id: "pakistani-dresses",
        title: { en: "Pakistani Designer Dresses & Lawn Wholesale", bn: "পাকিস্তানি ড্রেস ও লন হোলসেল" },
        desc: {
          en: "Direct factory sourcing from Karachi, Lahore, and Faisalabad. Original luxury lawn collections (Maria B, Sana Safinaz, Baroque, Master Replicas) at wholesale prices.",
          bn: "করাচি ও লাহোর থেকে অরিজিনাল ডিজাইনার পাকিস্তানি থ্রি-পিস, মাস্টার রেপ্লিকা ও বুটিক লন সরাসরি ফ্যাক্টরি মূল্যে সরবরাহ।"
        },
        originOrHub: { en: "Karachi & Lahore Direct Air Cargo", bn: "করাচি ও লাহোর ডিরেক্ট এয়ার কার্গো" },
        tags: ["Pakistani Lawn", "Maria B", "Sana Safinaz", "Boutique Collections", "3-Piece Stitched/Unstitched"],
        providersCount: { en: "28+ Importers & Exporters", bn: "২৮+ ভেরিফায়েড ইমপোর্টার" },
        turnaround: { en: "5 - 9 Days (Air)", bn: "৫ - ৯ দিন (এয়ার)" },
        highlights: {
          en: ["Direct Karachi warehouse dispatch", "100% fabric & embroidery quality check", "Custom bundle MOQs for boutiques"],
          bn: ["করাচি ওয়্যারহাউজ থেকে সরাসরি ডিসপ্যাচ", "কাপড় ও এমব্রয়ডারির শতভাগ মান যাচাই", "বুটিক শপের জন্য সুবিধাজনক এমওকিউ"]
        },
        inquiryNeed: "Pakistani Dresses Wholesale"
      },
      {
        id: "china-import",
        title: { en: "China Factory Sourcing & Import (Guangzhou / Yiwu / Shenzhen)", bn: "চায়না ফ্যাক্টরি সোর্সিং ও বাল্ক আমদানি" },
        desc: {
          en: "Direct factory manufacturing liaison in Guangzhou (bags/shoes/apparel), Shenzhen (electronics/smart gadgets), and Yiwu (wholesale novelties) with air and sea customs clearance.",
          bn: "গুয়াংজু, শেনজেন ও ইইউ কারখানা থেকে সরাসরি গ্যাজেট, ব্যাগ, প্রসাধন সামগ্রী ও পণ্য আমদানি এবং কাস্টমস ক্লিয়ারেন্স।"
        },
        originOrHub: { en: "Guangzhou, Yiwu & Shenzhen to Dhaka", bn: "গুয়াংজু, ইইউ ও শেনজেন থেকে ঢাকা" },
        tags: ["Factory Sourcing", "Smart Gadgets", "Bags & Accessories", "Air & Sea Cargo", "Customs Clearance"],
        providersCount: { en: "35+ Forwarders & Sourcing Agents", bn: "৩৫+ ফরওয়ার্ডার ও সোর্সিং এজেন্ট" },
        turnaround: { en: "7-10 Days (Air) / 25-30 Days (Sea)", bn: "৭-১০ দিন (এয়ার) / ২৫-৩০ দিন (সি)" },
        highlights: {
          en: ["On-ground sample checking in China", "Guaranteed customs clearance handling", "Doorstep delivery to all 64 districts"],
          bn: ["চায়না অফিসে স্যাম্পল ফিজিক্যাল ভেরিফিকেশন", "সম্পূর্ণ কাস্টমস ও ট্যাক্স ঝামেলামুক্ত ডেলিভারি", "৬৪ জেলার যেকোনো গোডাউনে পৌঁছানো"]
        },
        inquiryNeed: "China Factory Sourcing & Import"
      },
      {
        id: "foreign-goods",
        title: { en: "Foreign Goods & International Sourcing (Dubai / Thailand / UK / USA)", bn: "আন্তর্জাতিক ব্র্যান্ড ও পণ্য আমদানি" },
        desc: {
          en: "Authentic imported skincare, branded cosmetics, perfumes, packaged consumer lifestyle goods, and supplements sourced directly from overseas retail distributors.",
          bn: "দুবাই, থাইল্যান্ড, যুক্তরাজ্য ও যুক্তরাষ্ট্র থেকে খাঁটি কসমেটিকস, পারফিউম ও লাইফস্টাইল পণ্য পাইকারি সংগ্রহ।"
        },
        originOrHub: { en: "Dubai, Bangkok & London Hubs", bn: "দুবাই, ব্যাংকক ও লন্ডন হাব" },
        tags: ["Skincare", "Cosmetics", "Perfumes", "Lifestyle Goods", "Original Brand Guarantee"],
        providersCount: { en: "20+ Sourcing Partners", bn: "২০+ গ্লোবাল সোর্সিং পার্টনার" },
        turnaround: { en: "6 - 12 Days", bn: "৬ - ১২ দিন" },
        highlights: {
          en: ["100% authenticity certificate", "Air cargo temperature protection", "Wholesale tier discounts for retailers"],
          bn: ["অরিজিনাল ব্র্যান্ডের শতভাগ নিশ্চয়তা", "তাপমাত্রা নিয়ন্ত্রিত এয়ার কার্গো শিপমেন্ট", "রিটেইলারদের জন্য পাইকারি সাশ্রয়"]
        },
        inquiryNeed: "Foreign Goods Import"
      },
      {
        id: "computer-wholesale",
        title: { en: "Computer Parts & Hardware Wholesale", bn: "কম্পিউটার পার্টস ও হার্ডওয়্যার হোলসেল" },
        desc: {
          en: "Bulk procurement of Intel Core and AMD processors, GPUs, motherboards, SSDs, RAM, and brand monitors at tier-1 distributor pricing for IT shops and corporate setups.",
          bn: "ইনটেল ও এএমডি প্রসেসর, গ্রাফিক্স কার্ড, মাদারবোর্ড, র‍্যাম ও এসএসডি সরাসরি ডিলার পাইকারি মূল্যে সরবরাহ।"
        },
        originOrHub: { en: "Dhaka & Chattogram Port Distributors", bn: "ঢাকা ও চট্টগ্রাম পোর্ট ডিস্ট্রিবিউটর" },
        tags: ["Processors", "Intel / AMD", "GPUs", "Motherboards", "NVMe SSDs", "Distributor Rate"],
        providersCount: { en: "25+ Certified Importers", bn: "২৫+ অনুমোদিত ডিলার ও ইমপোর্টার" },
        turnaround: { en: "1 - 3 Days", bn: "১ - ৩ দিন" },
        highlights: {
          en: ["100% official brand replacement warranty", "Bulk box pack discount", "Instant dispatch across 64 districts"],
          bn: ["১০০% অফিশিয়াল ব্র্যান্ড রিপ্লেসমেন্ট ওয়ারেন্টি", "বক্স প্যাক বাল্ক ডিসকাউন্ট", "৬৪ জেলায় তাৎক্ষণিক কুরিয়ার ডিসপ্যাচ"]
        },
        inquiryNeed: "Computer Parts Wholesale"
      },
      {
        id: "garments-wholesale",
        title: { en: "Garments & Export Surplus Apparel Wholesale", bn: "গার্মেন্টস ও পোশাক পাইকারি" },
        desc: {
          en: "Export surplus knitwear, premium combed cotton blank t-shirts, polo shirts, denim jeans, and activewear supplied in bulk for fashion retailers and online stores.",
          bn: "এক্সপোর্ট কোয়ালিটি টি-শার্ট, পোলো শার্ট, ডেনিম ও জিন্স প্যান্ট সরাসরি গার্মেন্টস স্টক থেকে পাইকারি মূল্যে সরবরাহ।"
        },
        originOrHub: { en: "Dhaka, Gazipur & Narayanganj Factories", bn: "ঢাকা, গাজীপুর ও নারায়ণগঞ্জ ফ্যাক্টরি" },
        tags: ["Blank T-Shirts", "Export Surplus", "Denim Jeans", "Polo Shirts", "B2B Apparel"],
        providersCount: { en: "30+ Garment Stockists", bn: "৩০+ গার্মেন্টস ফ্যাক্টরি ও স্টকিষ্ট" },
        turnaround: { en: "2 - 5 Days", bn: "২ - ৫ দিন" },
        highlights: {
          en: ["GSM certified fabric quality", "Custom tag & embroidery options", "Consistent inventory availability"],
          bn: ["জিএসএম সার্টিফাইড ফেব্রিক কোয়ালিটি", "কাস্টম ব্র্যান্ড ট্যাগ ও এমব্রয়ডারি সুবিধা", "নিয়মিত স্টক পাওয়ার নিশ্চয়তা"]
        },
        inquiryNeed: "Garments Wholesale"
      },
      {
        id: "packaging-supplies",
        title: { en: "B2B Packaging & E-Commerce Logistics Supplies", bn: "প্যাকেজিং সামগ্রী ও কুরিয়ার সাপ্লাই" },
        desc: {
          en: "Custom branded corrugated carton boxes, security poly mailers, bubble wrap, barcode labels, and automated dispatch supplies for e-commerce brands.",
          bn: "কাস্টম প্রিন্টেড কার্টন বক্স, কুরিয়ার সিকিউরিটি পলি ব্যাগ ও বাবল র‍্যাপ সরাসরি ফ্যাক্টরি মূল্যে সরবরাহ।"
        },
        originOrHub: { en: "Dhaka & Chattogram Packaging Hubs", bn: "ঢাকা ও চট্টগ্রাম প্যাকেজিং হাব" },
        tags: ["Shipping Cartons", "Poly Mailers", "Bubble Wrap", "Custom Printing", "E-Commerce"],
        providersCount: { en: "18+ Verified Manufacturers", bn: "১৮+ উৎপাদনকারী কারখানা" },
        turnaround: { en: "3 - 7 Days", bn: "৩ - ৭ দিন" },
        highlights: {
          en: ["Heavy-duty crush resistant ply", "Tamper-evident security seals", "Free sample dispatch for testing"],
          bn: ["টেকসই ক্রাশ-প্রতিরোধী কার্টন বোর্ড", "টেম্পার-প্রুফ সিকিউরিটি লক পলি ব্যাগ", "টেস্টিংয়ের জন্য ফ্রি স্যাম্পল সুবিধা"]
        },
        inquiryNeed: "Packaging Supplies"
      }
    ]
  },
  {
    id: "hardware-devices",
    slug: "hardware-devices",
    name: { en: "Hardware, Devices & IT Infrastructure Network", bn: "হার্ডওয়্যার, ডিভাইস ও আইটি ইনফ্রাস্ট্রাকচার নেটওয়ার্ক" },
    badge: { en: "Genuine Brand Hardware", bn: "অরিজিনাল ব্র্যান্ড হার্ডওয়্যার" },
    description: {
      en: "Certified computer hardware assemblers, office IT networking engineers, processor technicians, and commercial device distributors.",
      bn: "কর্পোরেট কম্পিউটার ওয়ার্কস্টেশন, সার্ভার, প্রসেসর এবং অফিস আইটি ইকুইপমেন্টের ভেরিফায়েড ডিলার ও টেকনিশিয়ান।"
    },
    color: "from-emerald-600 via-teal-600 to-cyan-600",
    icon: "Monitor",
    stats: {
      providersCount: { en: "35+ Certified Hardware Engineers & Dealers", bn: "৩৫+ সার্টিফাইড ইঞ্জিনিয়ার ও ডিলার" },
      experienceYears: { en: "10+ Years IT Hardware Experience", bn: "১০+ বছরের হার্ডওয়্যার টেকনিক্যাল অভিজ্ঞতা" },
      completedVolume: { en: "3,200+ Systems & Devices Deployed", bn: "৩,২০০+ ডেলিভারিকৃত কম্পিউটার ও ডিভাইস" },
      slaRate: "98.9%"
    },
    subSectors: [
      {
        id: "workstation-assembly",
        title: { en: "Workstation & High-End PC Assembly", bn: "ওয়ার্কস্টেশন ও হাই-এন্ড পিসি অ্যাসেম্বলি" },
        desc: {
          en: "Custom assembled rigs for 3D modeling, 4K video rendering, software development, and deep learning with genuine warranty.",
          bn: "৩ডি আর্কিটেকচার, ভিডিও এডিটিং ও সফটওয়্যার ফার্মের জন্য হাই-পারফরম্যান্স কাস্টম পিসি সেটআপ।"
        },
        originOrHub: { en: "Dhaka Central IT Market & 64 Districts", bn: "ঢাকা সেন্ট্রাল মার্কেট ও ৬৪ জেলা" },
        tags: ["Intel Core i9/i7", "AMD Ryzen 9/7", "NVIDIA RTX", "DDR5 RAM", "Liquid Cooling"],
        providersCount: { en: "14+ Assembly Labs", bn: "১৪+ স্পেশালাইজড ল্যাব" },
        turnaround: { en: "1 - 3 Days", bn: "১ - ৩ দিন" },
        highlights: {
          en: ["24-Hour thermal stress testing", "Clean cable routing & airflow", "1-to-1 component replacement warranty"],
          bn: ["২৪-ঘণ্টা থার্মাল ও স্ট্রেস টেস্টিং", "ক্লিন ক্যাবল ম্যানেজমেন্ট", "জরুরি কম্পোনেন্ট রিপ্লেসমেন্ট ওয়ারেন্টি"]
        },
        inquiryNeed: "Workstation PC Assembly"
      },
      {
        id: "corporate-laptops",
        title: { en: "Corporate Laptop Fleets & MacBooks", bn: "কর্পোরেট ল্যাপটপ ও ম্যাকবুক সরবরাহ" },
        desc: {
          en: "Dell Latitude, HP EliteBook, Lenovo ThinkPad, and Apple MacBooks procured at corporate discounts with custom OS imaging.",
          bn: "অফিস ও রিমোট কর্মীদের জন্য অফিসিয়াল ওয়ারেন্টিসহ ব্র্যান্ড ল্যাপটপ পাইকারি মূল্যে সরবরাহ।"
        },
        originOrHub: { en: "Authorized National Importers", bn: "অনুমোদিত ন্যাশনাল ইমপোর্টার" },
        tags: ["Dell", "HP", "Lenovo ThinkPad", "Apple MacBook", "Corporate Warranty"],
        providersCount: { en: "12+ Brand Dealers", bn: "১২+ অফিশিয়াল ডিলার" },
        turnaround: { en: "2 - 5 Days", bn: "২ - ৫ দিন" },
        highlights: {
          en: ["Official Bangladesh brand warranty", "Corporate invoicing with VAT/Tax", "Bulk delivery to multiple office branches"],
          bn: ["অফিশিয়াল বাংলাদেশ ব্র্যান্ড ওয়ারেন্টি", "ভ্যাট ও ট্যাক্স কমপ্লায়েন্ট চালান", "একাধিক ব্রাঞ্চে একযোগে ডেলিভারি সুবিধা"]
        },
        inquiryNeed: "Corporate Laptops Procurement"
      },
      {
        id: "cctv-networking",
        title: { en: "Office Surveillance & Networking Systems", bn: "সিসিটিভি সার্ভেইল্যান্স ও নেটওয়ার্কিং" },
        desc: {
          en: "Enterprise Wi-Fi mesh, MikroTik routers, structured Cat6 cabling, night-vision IP cameras, and biometric fingerprint access control.",
          bn: "অফিসের মেস ওয়াইফাই, মাইক্রোটিক রাউটিং, এইচডি সিসিটিভি ক্যামেরা ও বায়োমেট্রিক এক্সেস কন্ট্রোল।"
        },
        originOrHub: { en: "All 64 Districts Deployment Crew", bn: "৬৪ জেলায় অন-সাইট টেকনিশিয়ান" },
        tags: ["MikroTik", "Cisco", "IP Cameras", "Biometrics", "Structured Cabling"],
        providersCount: { en: "16+ Network Crews", bn: "১৬+ টেকনিক্যাল টিম" },
        turnaround: { en: "2 - 5 Days", bn: "২ - ৫ দিন" },
        highlights: {
          en: ["Mobile live stream streaming setup", "Biometric attendance software sync", "Neat conduit cabling standard"],
          bn: ["মোবাইলে লাইভ দেখার কনফিগারেশন", "উপস্থিতি সফটওয়্যারের সাথে অটো-সিঙ্ক", "পরিপাটি ওয়্যারিং ও অন-সাইট সাপোর্ট"]
        },
        inquiryNeed: "CCTV & Office Networking"
      }
    ]
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

export const BRIZZ_SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61593908348405",
  linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7509465949624864768",
  youtube: "https://www.youtube.com/@BRiiZZ-YouTube",
  instagram: "https://www.instagram.com/briizz.network/",
  whatsappNumber: "01964 468626",
  whatsappInternational: "8801964468626",
  whatsappUrl: "https://wa.me/8801964468626",
};
