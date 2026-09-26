"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Box, 
  Package, 
  Code, 
  TrendingUp, 
  ArrowRight, 
  Settings, 
  Globe, 
  Smartphone, 
  Home, 
  Hammer, 
  Briefcase, 
  Scale, 
  Megaphone, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Cpu, 
  ShoppingBag, 
  Truck,
  Filter,
  ChevronDown
} from "lucide-react";

// Icon mapper
const IconMap = {
  Package: <Package className="w-8 h-8" />,
  Box: <Box className="w-8 h-8" />,
  Settings: <Settings className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  Briefcase: <Briefcase className="w-8 h-8" />,
  Scale: <Scale className="w-8 h-8" />,
  Megaphone: <Megaphone className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />
};

export interface SubSolutionItem {
  en: string;
  bn: string;
  descEn: string;
  descBn: string;
  image: string;
  tag: string;
}

const solutionData: Record<string, Record<string, any>> = {
  "wholesale": {
    "gpus-electronics": {
      title: "GPUs & PC Hardware Wholesale",
      bnTitle: "জিপিইউ ও কম্পিউটার হার্ডওয়্যার পাইকারি",
      icon: "Cpu",
      desc: "Bulk wholesale of graphic cards, server hardware, mining/rendering equipment, and IT components.",
      bnDesc: "এনভিডিয়া ও এএমডি জিপিইউ গ্রাফিক্স কার্ড, সার্ভার প্রসেসর ও কম্পিউটার হার্ডওয়্যার পাইকারি সাপ্লাই।",
      reqs: [
        {
          en: "Nvidia RTX 4090/4080 GPUs",
          bn: "এনভিডিয়া RTX ৪০৯০/৪০৮০ জিপিইউ",
          descEn: "Top tier gaming & AI rendering graphic cards with official distributor warranty.",
          descBn: "অফিসিয়াল ডিস্ট্রিবিউটর ওয়ারেন্টি সহ এআই ও গেমিং গ্রাফিক্স কার্ডের পাইকারি সরবরাহ।",
          image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80",
          tag: "Hardware"
        },
        {
          en: "Mid-Tier Gaming GPUs (RTX 4070/4060)",
          bn: "মিড-রেঞ্জ গেমিং জিপিইউ",
          descEn: "Cost-effective high-volume graphic card supplies for retail PC shops and cyber cafes.",
          descBn: "রিটেইল কম্পিউটার শপের জন্য আকর্ষণীয় পাইকারি মূল্যে মিড-রেঞ্জ জিপিইউ।",
          image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
          tag: "Retail Bulk"
        },
        {
          en: "Server Processors & ECC RAM",
          bn: "সার্ভার প্রসেসর ও মেমোরি",
          descEn: "Intel Xeon, AMD EPYC CPUs, and high-speed ECC server memory modules.",
          descBn: "ডাটা সেন্টার ও এন্টারপ্রাইজ সার্ভারের জন্য প্রসেসর ও সার্ভার র‍্যাম মডিউল।",
          image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600&q=80",
          tag: "Enterprise"
        },
        {
          en: "Mining & AI Compute Hardware",
          bn: "এআই ও কম্পিউট রিগস",
          descEn: "Custom multi-GPU server chassis, mining motherboards, and power supplies.",
          descBn: "মাল্টি-জিপিইউ সার্ভার চ্যাসিস, হাই-ওয়াট পাওয়ার সাপ্লাই ও কম্পিউটিং মাদারবোর্ড।",
          image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80",
          tag: "Compute"
        }
      ]
    },
    "clothing": {
      title: "Clothing & Boutique Dresses",
      bnTitle: "গার্মেন্টস ও পোশাক পাইকারি",
      icon: "ShoppingBag",
      desc: "Authentic Pakistani lawn, luxury embroidered boutique 3-pieces, and ready-to-wear apparel wholesale.",
      bnDesc: "অরিজিনাল পাকিস্তানি লন, প্রিমিয়াম থ্রি-পিস, কাতান এবং বুটিক ড্রেসের বিশাল পাইকারি কালেকশন।",
      reqs: [
        {
          en: "Pakistani Lawn 3-Piece Collections",
          bn: "পাকিস্তানি লন ৩-পিস কালেকশন",
          descEn: "Luxury embroidered lawn suits with chiffon/silk dupattas from top Pakistani brands.",
          descBn: "প্রিমিয়াম ব্র্যান্ডের অরজিনাল পাকিস্তানি ডিজিটাল প্রিন্ট ও এমব্রয়ডারি লন থ্রি-পিস।",
          image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
          tag: "Boutique"
        },
        {
          en: "Ready-to-Wear Kurtis & Tunics",
          bn: "রেডিমেড কুর্তি ও টিউনিক",
          descEn: "Cotton, georgette, and linen designer kurtis in wholesale bundle lots.",
          descBn: "আধুনিক ডিজাইনের রেডিমেড সুতি ও জর্জেট কুর্তি পাইকারি বান্ডেল প্যাকেজ।",
          image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=600&q=80",
          tag: "Apparel"
        },
        {
          en: "Bridal & Party Wear Gowns",
          bn: "ব্রাইডাল ও পার্টি গাউন",
          descEn: "Heavy stonework, zardozi work, and organza party gowns for boutique showrooms.",
          descBn: "জারদৌসি ও স্টোন ওয়ার্কের এক্সক্লুসিভ পার্টি ড্রেস এবং ব্রাইডাল গাউন পাইকারি।",
          image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
          tag: "Luxury"
        },
        {
          en: "Men's Panjabi & Casual Shirts",
          bn: "মেনস পাঞ্জাবি ও ক্যাজুয়াল শার্ট",
          descEn: "Premium cotton panjabis, formal and casual shirts for men's fashion retail.",
          descBn: "উন্নত সুতি কাপড়ের এক্সক্লুসিভ পাঞ্জাবি, ফরমাল ও ক্যাজুয়াল শার্টের পাইকারি লট।",
          image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80",
          tag: "Men's Wear"
        }
      ]
    },
    "china-sourcing": {
      title: "China Factory Sourcing & Import",
      bnTitle: "চায়না সরাসরি আমদানি ও সোর্সিং",
      icon: "Truck",
      desc: "Direct factory procurement from Guangzhou & Yiwu, quality checks, customs clearance, and shipping.",
      bnDesc: "চায়না ফ্যাক্টরি থেকে সরাসরি প্রোডাক্ট সোর্সিং, কোয়ালিটি চেকিং ও ঝামেলাহীন কাস্টমস ক্লিয়ারেন্স।",
      reqs: [
        {
          en: "Guangzhou & Yiwu Product Sourcing",
          bn: "গুয়াংজু ও ইইউ মার্কেট সোর্সিং",
          descEn: "Direct manufacturer connections, sample verification, and OEM price negotiations.",
          descBn: "সরাসরি প্রস্তুতকারকদের সাথে যোগাযোগ, স্যাম্পল টেস্ট এবং ফ্যাক্টরি রেট নিশ্চিতকরণ।",
          image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80",
          tag: "Sourcing"
        },
        {
          en: "Air & Sea Cargo Shipping",
          bn: "এয়ার ও সি কার্গো শিপিং",
          descEn: "Full container (FCL) and consolidated (LCL) freight with real-time port tracking.",
          descBn: "এফসিএল ও এলসিএল কার্গো শিপিং সুবিধা এবং কন্টেইনার ট্র্যাকিং সাপোর্ট।",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
          tag: "Freight"
        },
        {
          en: "Customs Clearance & LC Support",
          bn: "কাস্টমস ক্লিয়ারেন্স ও এলসি",
          descEn: "Complete port documentation, tariff advisory, and legal banking LC processing.",
          descBn: "চট্টগ্রাম ও ঢাকা বিমানবন্দর কাস্টমস ডকুমেন্টস ও ব্যাংক এলসি সহায়তা।",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
          tag: "Customs"
        },
        {
          en: "Pre-Shipment Quality Inspection",
          bn: "প্রি-শিপমেন্ট কোয়ালিটি টেস্ট",
          descEn: "On-site factory quality audits, defect checks, and packaging compliance reports.",
          descBn: "ফ্যাক্টরিতে সরাসরি উপস্থিত থেকে পণ্যের মান ও প্যাকিং কোয়ালিটি যাচাই রিপোর্ট।",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
          tag: "Inspection"
        }
      ]
    },
    "raw-materials": { 
      title: "Raw Materials", 
      bnTitle: "কাঁচামাল", 
      icon: "Package", 
      desc: "Source high-quality raw materials for your manufacturing, industrial, and business operations.", 
      bnDesc: "আপনার উৎপাদন, শিল্প এবং ব্যবসার কার্যক্রমের জন্য উচ্চ মানের কাঁচামাল সংগ্রহ করুন।", 
      reqs: [
        {
          en: "Textiles & Fabrics", 
          bn: "টেক্সটাইল ও ফেব্রিক্স",
          descEn: "Premium natural, synthetic yarn, cotton, denim, and processed industrial fabrics.",
          descBn: "উচ্চমানের কটন, সিন্থেটিক সুতা, ডেনিম এবং প্রক্রিয়াজাত ইন্ডাস্ট্রিয়াল ফেব্রিক্স।",
          image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
          tag: "Manufacturing"
        },
        {
          en: "Metals & Alloys", 
          bn: "ধাতু ও সংকর ধাতু",
          descEn: "Industrial grade steel, aluminum, copper, brass ingots, and specialty metal sheets.",
          descBn: "ইন্ডাস্ট্রিয়াল গ্রেড স্টিল, অ্যালুমিনিয়াম, কপার, ব্রাস এবং বিশেষ মেটাল শিট।",
          image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80",
          tag: "Industrial"
        },
        {
          en: "Chemicals & Compounds", 
          bn: "রাসায়নিক পদার্থ ও কম্পাউন্ড",
          descEn: "Certified industrial chemicals, pigments, solvents, and specialty processing compounds.",
          descBn: "সার্টিফাইড ইন্ডাস্ট্রিয়াল কেমিক্যাল, রঞ্জক, দ্রাবক এবং স্পেশালিটি প্রসেসিং কম্পাউন্ড।",
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
          tag: "Chemicals"
        },
        {
          en: "Plastics & Polymers", 
          bn: "প্লাস্টিক ও পলিমার",
          descEn: "Virgin and recycled plastic granules, resin, masterbatch, and molded polymer supplies.",
          descBn: "ভার্জিন ও রিসাইকেল্ড প্লাস্টিক দানা, রেজিন, মাস্টারব্যাচ এবং পলিমার কাঁচামাল।",
          image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
          tag: "Polymers"
        }
      ] 
    },
    "packaging": { 
      title: "Packaging Solutions", 
      bnTitle: "প্যাকেজিং সমাধান", 
      icon: "Box", 
      desc: "Get custom, durable, and eco-friendly packaging for your retail and wholesale products.", 
      bnDesc: "আপনার রিটেইল এবং হোলসেল পণ্যের জন্য কাস্টম, টেকসই এবং পরিবেশবান্ধব প্যাকেজিং পান।", 
      reqs: [
        {
          en: "Custom Corrugated Boxes", 
          bn: "কাস্টম কার্টুন বক্স",
          descEn: "Branded shipping cartons, master cartons, and die-cut retail packaging boxes.",
          descBn: "ব্র্যান্ডেড শিপিং কার্টন, মাস্টার কার্টন এবং ডাই-কাট রিটেইল প্যাকেজিং বক্স।",
          image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
          tag: "Shipping"
        },
        {
          en: "Eco-friendly Packaging", 
          bn: "পরিবেশবান্ধব প্যাকেজিং",
          descEn: "Biodegradable paper bags, compostable mailers, and sustainable packaging solutions.",
          descBn: "বায়োডিগ্রেডেবল পেপার ব্যাগ, কম্পোস্টেবল মেইলার এবং পরিবেশবান্ধব প্যাকেজিং।",
          image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80",
          tag: "Sustainable"
        },
        {
          en: "Labels, Foils & Tags", 
          bn: "লেবেল, ফয়েল ও ট্যাগ",
          descEn: "High-resolution printed labels, metallic foil branding, barcode and price tags.",
          descBn: "হাই-রেজোলিউশন প্রিন্টেড স্টিকার লেবেল, মেটালিক ফয়েল এবং বারকোড ট্যাগ।",
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
          tag: "Branding"
        },
        {
          en: "Bulk Shipping Supplies", 
          bn: "বাল্ক শিপিং সরবরাহ",
          descEn: "Stretch wraps, pallet strapping, bubble wraps, and heavy-duty shipping tapes.",
          descBn: "স্ট্রেচ ফিল্ম র‍্যাপ, প্যালেট স্ট্র্যাপ, বাবল র‍্যাপ এবং সিকিউরিটি শিপিং টেপ।",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
          tag: "Logistics"
        }
      ] 
    },
    "machinery": { 
      title: "Machinery & Equipment", 
      bnTitle: "মেশিনারিজ ও ইকুইপমেন্ট", 
      icon: "Settings", 
      desc: "Procure and maintain industrial machinery, heavy equipment, and commercial tools.", 
      bnDesc: "আপনার অপারেশনের জন্য শিল্প যন্ত্রপাতি, ভারী সরঞ্জাম এবং বাণিজ্যিক টুলস সংগ্রহ করুন।", 
      reqs: [
        {
          en: "Manufacturing Machines", 
          bn: "উৎপাদন মেশিনারি",
          descEn: "Automated assembly line machinery, CNC milling, cutting, and processing plants.",
          descBn: "অটোমেটেড অ্যাসেম্বলি লাইন মেশিনারি, সিএনসি মিলিং, কাটিং ও প্রসেসিং প্ল্যান্ট।",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
          tag: "Factory"
        },
        {
          en: "Commercial Equipment", 
          bn: "বাণিজ্যিক অফিস সরঞ্জাম",
          descEn: "Heavy-duty commercial printers, generators, UPS systems, and workspace hardware.",
          descBn: "হেভি-ডিউটি প্রিন্টার, ব্যাকআপ জেনারেটর, অনলাইন ইউপিএস এবং অফিস হার্ডওয়্যার।",
          image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80",
          tag: "Hardware"
        },
        {
          en: "Heavy Duty Tools", 
          bn: "ভারী টুলস ও যন্ত্রপাতি",
          descEn: "Hydraulic presses, precision power tools, welding units, and industrial toolkits.",
          descBn: "হাইড্রলিক প্রেস, প্রিসিশন পাওয়ার টুলস, ওয়েল্ডিং ইউনিট এবং ইন্ডাস্ট্রিয়াল টুলকিট।",
          image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
          tag: "Tools"
        },
        {
          en: "Maintenance & Automation", 
          bn: "রক্ষণাবেক্ষণ ও অটোমেশন",
          descEn: "PLC automation systems, sensors, spare parts, and predictive maintenance tools.",
          descBn: "পিএলসি অটোমেশন সিস্টেম, সেন্সর, স্পেয়ার পার্টস এবং প্রিভেন্টিভ মেইনটেন্যান্স।",
          image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
          tag: "Automation"
        }
      ] 
    },
  },
  "tech": {
    "web": { 
      title: "Web Development", 
      bnTitle: "ওয়েব ডেভেলপমেন্ট", 
      icon: "Globe", 
      desc: "Build powerful, scalable, and modern websites to establish your commanding digital presence.", 
      bnDesc: "আপনার ডিজিটাল উপস্থিতি প্রতিষ্ঠা করতে শক্তিশালী, স্কেলেবল এবং আধুনিক ওয়েবসাইট তৈরি করুন।", 
      reqs: [
        {
          en: "Corporate & Enterprise Websites", 
          bn: "কর্পোরেট ও এন্টারপ্রাইজ ওয়েবসাইট",
          descEn: "Fast, secure, and modern corporate portals built with Next.js and high SEO performance.",
          descBn: "নেক্সট জেএস এবং আধুনিক টেকনোলজিতে তৈরি দ্রুত ও সিকিউর কর্পোরেট ওয়েব পোর্টাল।",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
          tag: "Web"
        },
        {
          en: "E-Commerce Platforms", 
          bn: "ই-কমার্স প্ল্যাটফর্ম ও শপ",
          descEn: "Custom online stores with payment gateways, inventory sync, and multi-vendor support.",
          descBn: "পেমেন্ট গেটওয়ে, ইনভেন্টরি ট্র্যাকিং এবং মাল্টি-ভেন্ডর সুবিধা সহ সম্পূর্ণ ই-কমার্স স্টোর।",
          image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
          tag: "E-Commerce"
        },
        {
          en: "High-Converting Landing Pages", 
          bn: "ল্যান্ডিং পেজ ডেভেলপমেন্ট",
          descEn: "Ultra-fast sales pages designed specifically for lead generation and paid marketing.",
          descBn: "পেইড অ্যাডস এবং লিড জেনারেশনের জন্য অপ্টিমাইজড হাই-কনভার্সন সেলস ল্যান্ডিং পেজ।",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
          tag: "Marketing"
        },
        {
          en: "Web Portals & Dashboards", 
          bn: "কাস্টম ওয়েব পোর্টাল ও ড্যাশবোর্ড",
          descEn: "Interactive web applications, customer portals, and dynamic real-time data panels.",
          descBn: "ইন্টারেক্টিভ ওয়েব অ্যাপ্লিকেশন, কাস্টমার পোর্টাল এবং রিয়েল-টাইম ডাটা ম্যানেজমেন্ট ড্যাশবোর্ড।",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
          tag: "SaaS"
        }
      ] 
    },
    "app": { 
      title: "App Development", 
      bnTitle: "অ্যাপ ডেভেলপমেন্ট", 
      icon: "Smartphone", 
      desc: "Create seamless, intuitive, and responsive mobile applications for iOS and Android.", 
      bnDesc: "আইওএস এবং অ্যান্ড্রয়েডের জন্য দৃষ্টিনন্দন, দ্রুতগতির এবং আধুনিক মোবাইল অ্যাপ্লিকেশন তৈরি করুন।", 
      reqs: [
        {
          en: "iOS App Development", 
          bn: "আইওএস (iOS) অ্যাপ ডেভেলপমেন্ট",
          descEn: "Native Swift applications optimized for Apple ecosystem with smooth performance.",
          descBn: "অ্যাপল ইকোসিস্টেমের জন্য নেটিভ সুইফট দিয়ে তৈরি সুরক্ষিত ও আকর্ষণীয় আইওএস অ্যাপ।",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
          tag: "iOS"
        },
        {
          en: "Android App Development", 
          bn: "অ্যান্ড্রয়েড (Android) অ্যাপ",
          descEn: "Native Kotlin & Android SDK applications for high compatibility across all devices.",
          descBn: "সকল অ্যান্ড্রয়েড ডিভাইসে স্মুথভাবে চলার মতো হাই-পারফরম্যান্স কাস্টম অ্যান্ড্রয়েড অ্যাপ।",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=600&q=80",
          tag: "Android"
        },
        {
          en: "Cross-Platform Flutter/React Native", 
          bn: "ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ",
          descEn: "Single codebase apps for both iOS and Android that save development cost and time.",
          descBn: "ফ্লাটার বা রিঅ্যাক্ট নেটিভে তৈরি অ্যাপ যা একই সাথে আইওএস ও অ্যান্ড্রয়েডে চলে।",
          image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=600&q=80",
          tag: "Cross-Platform"
        },
        {
          en: "Mobile UI/UX Design & Prototyping", 
          bn: "ইউআই/ইউএক্স ডিজাইন ও প্রোটোটাইপ",
          descEn: "Figma wireframes, modern user journeys, and interactive clickable mobile prototypes.",
          descBn: "ইউজার-ফ্রেন্ডলি ইন্টারফেস, ফিগমা প্রোটোটাইপ এবং আকর্ষণীয় মোবাইল ডিজাইন।",
          image: "https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=600&q=80",
          tag: "Design"
        }
      ] 
    },
    "software": { 
      title: "Custom Software", 
      bnTitle: "কাস্টম সফটওয়্যার", 
      icon: "Code", 
      desc: "Develop tailored software systems to automate, streamline, and scale your business operations.", 
      bnDesc: "আপনার ব্যবসার কার্যক্রম স্বয়ংক্রিয় ও সম্প্রসারণ করতে কাস্টমাইজড সফটওয়্যার সল্যুশন নিন।", 
      reqs: [
        {
          en: "Enterprise ERP Systems", 
          bn: "এন্টারপ্রাইজ ইআরপি (ERP) সিস্টেম",
          descEn: "All-in-one management of finance, procurement, sales, supply chain, and human resources.",
          descBn: "ফাইন্যান্স, প্রকিউরমেন্ট, সাপ্লাই চেইন ও রিসোর্স ম্যানেজমেন্টের সমন্বিত ইআরপি সফটওয়্যার।",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
          tag: "ERP"
        },
        {
          en: "Cloud CRM Solutions", 
          bn: "ক্লাউড সিআরএম (CRM) সফটওয়্যার",
          descEn: "Lead tracking, customer communications, sales pipelines, and automated follow-ups.",
          descBn: "কাস্টমার ডাটাবেজ, সেলস পাইপলাইন ট্র্যাকিং এবং স্বয়ংক্রিয় ফলো-আপের জন্য সিআরএম।",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
          tag: "CRM"
        },
        {
          en: "Inventory & POS Automation", 
          bn: "ইনভেন্টরি ও পিওএস বিলিং",
          descEn: "Real-time stock tracking, multi-branch POS billing, barcode, and invoice generation.",
          descBn: "মাল্টি-ব্রাঞ্চ বিলিং, রিয়েল-টাইম স্টক আপডেট এবং বারকোড ভিত্তিক পিওএস সফটওয়্যার।",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
          tag: "POS"
        },
        {
          en: "Custom APIs & Microservices", 
          bn: "কাস্টম এপিআই ও মাইক্রোসার্ভিস",
          descEn: "High-scale backend architectures, third-party integrations, and cloud deployments.",
          descBn: "সিকিউর ব্যাকএন্ড এপিআই, থার্ড-পার্টি সার্ভিস ইন্টিগ্রেশন ও ক্লাউড ডেপ্লয়মেন্ট।",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
          tag: "Cloud"
        }
      ] 
    },
  },
  "real-estate": {
    "interior": { 
      title: "Interior Design", 
      bnTitle: "ইন্টেরিয়র ডিজাইন", 
      icon: "Home", 
      desc: "Design and furnish your office, retail outlet, or commercial space with modern aesthetics.", 
      bnDesc: "আধুনিক নান্দনিকতা ও কার্যকারিতা দিয়ে আপনার অফিস বা বাণিজ্যিক স্পেস সাজিয়ে নিন।", 
      reqs: [
        {
          en: "Corporate Office Layout & Fitouts", 
          bn: "কর্পোরেট অফিস লেআউট ও ফিটআউট",
          descEn: "Modern executive cubicles, conference rooms, acoustic ceilings, and smart workspaces.",
          descBn: "এক্সিকিউটিভ ক্যাবিন, কনফারেন্স রুম, অ্যাকোস্টিক সিলিং এবং মডার্ন ওয়ার্কস্পেস ডিজাইন।",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
          tag: "Corporate"
        },
        {
          en: "Custom Commercial Furniture", 
          bn: "বাণিজ্যিক ফার্নিচার ও ডেকোর",
          descEn: "Ergonomic chairs, executive desks, custom workstations, and lounge seating.",
          descBn: "আরামদায়ক এরগনোমিক চেয়ার, এক্সিকিউটিভ ডেস্ক এবং কাস্টম ওয়ার্কস্টেশন ফার্নিচার।",
          image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
          tag: "Furniture"
        },
        {
          en: "Architectural Lighting & Decor", 
          bn: "আর্কিটেকচারাল লাইটিং ও ডেকোর",
          descEn: "LED profile lighting, accent fixtures, luxury wall paneling, and indoor landscaping.",
          descBn: "মডার্ন প্রোফাইল লাইটিং, লাক্সারি ওয়াল প্যানেলিং এবং নান্দনিক অফিস ডেকরেশন।",
          image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
          tag: "Lighting"
        },
        {
          en: "3D Space Planning & Rendering", 
          bn: "থ্রিডি (3D) স্পেস প্ল্যানিং ও রেন্ডার",
          descEn: "Photorealistic 3D interior visualization, space optimization, and architectural blueprints.",
          descBn: "বাস্তবসম্মত থ্রিডি রেন্ডারিং, স্পেস অপ্টিমাইজেশন এবং বিস্তারিত ব্লু-প্রিন্ট নকশা।",
          image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
          tag: "3D Plan"
        }
      ] 
    },
    "materials": { 
      title: "Construction Materials", 
      bnTitle: "নির্মাণ সামগ্রী", 
      icon: "Hammer", 
      desc: "Source certified high-grade construction materials directly from verified manufacturers.", 
      bnDesc: "যাচাইকৃত প্রস্তুতকারকদের কাছ থেকে সার্টিফাইড নির্মাণ সামগ্রী ও রড-সিমেন্ট সংগ্রহ করুন।", 
      reqs: [
        {
          en: "Cement & Steel Rebar", 
          bn: "সিমেন্ট, রড ও স্টিল",
          descEn: "500W grade TMT rebar, Portland composite cement, and structural steel beams.",
          descBn: "৫০০W গ্রেডের টিএমটি রড, পোর্টল্যান্ড কম্পোজিট সিমেন্ট ও স্ট্রাকচারাল স্টিল।",
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
          tag: "Structure"
        },
        {
          en: "Bricks, AAC Blocks & Tiles", 
          bn: "ইট, ব্লক ও প্রিমিয়াম টাইলস",
          descEn: "Eco-friendly autowall AAC blocks, red clay bricks, and porcelain floor tiles.",
          descBn: "পরিবেশবান্ধব এএসি ব্লক, ফার্স্ট ক্লাস লাল ইট এবং প্রিমিয়াম ফ্লোর ও ওয়াল টাইলস।",
          image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
          tag: "Masonry"
        },
        {
          en: "Industrial Paints & Coatings", 
          bn: "পেইন্টস, প্রাইমার ও কোটিং",
          descEn: "Weather-resistant exterior paint, epoxy floor coatings, and protective primers.",
          descBn: "ওয়েদারকোট পেইন্ট, ওয়াটারপ্রুফিং কোটিং এবং ইন্ডাস্ট্রিয়াল ইপোক্সি ফ্লোরিং।",
          image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80",
          tag: "Finishes"
        },
        {
          en: "Electrical & Plumbing Systems", 
          bn: "ইলেকট্রিক্যাল ও প্লাম্বিং সামগ্রী",
          descEn: "PVC conduits, copper wiring cables, CPVC pipes, sanitary fittings, and pumps.",
          descBn: "উচ্চমানের কপার ক্যাবল, পিভিসি পাইপ, স্যানিটারি ফিটিংস এবং ওয়াটার পাম্প।",
          image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80",
          tag: "Utilities"
        }
      ] 
    },
    "consulting": { 
      title: "Property Consulting", 
      bnTitle: "প্রপার্টি কনসাল্টিং", 
      icon: "Briefcase", 
      desc: "Get expert advice and verified assistance on finding, leasing, and managing properties.", 
      bnDesc: "বাণিজ্যিক সম্পত্তি খোঁজা, লিজ এবং ভেরিফিকেশনের বিষয়ে বিশেষজ্ঞদের পরামর্শ নিন।", 
      reqs: [
        {
          en: "Commercial Space Search", 
          bn: "বাণিজ্যিক স্পেস ও অফিস সোর্সিং",
          descEn: "Verified office spaces, commercial showrooms, and warehouse locations in prime spots.",
          descBn: "প্রধান বাণিজ্যিক এলাকায় অফিস স্পেস, শোরুম এবং গুদামঘরের সন্ধান ও বুকিং।",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
          tag: "Sourcing"
        },
        {
          en: "Lease Negotiation & Legal", 
          bn: "লিজ চুক্তি ও নেগোসিয়েশন",
          descEn: "Tenancy agreements, rent negotiations, landlord terms review, and renewal management.",
          descBn: "ভাড়া ও লিজের শর্তাবলী মূল্যায়ন, চুক্তিপত্র তৈরি এবং আইনগত সুরক্ষা নিশ্চিতকরণ।",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
          tag: "Legal"
        },
        {
          en: "Property Valuation & Feasibility", 
          bn: "সম্পত্তির মূল্যায়ন ও সম্ভাব্যতা",
          descEn: "Fair market valuation, ROI analysis, footfall studies, and commercial feasibility reports.",
          descBn: "সঠিক বাজার মূল্য নির্ধারণ, রিটার্ন অন ইনভেস্টমেন্ট এবং সম্ভাব্যতা যাচাই রিপোর্ট।",
          image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80",
          tag: "Valuation"
        },
        {
          en: "Title Verification & Due Diligence", 
          bn: "দলিল ভেরিফিকেশন ও নিরাপত্তা",
          descEn: "Land deed verification, mutation checks, tax clearances, and ownership records.",
          descBn: "দলিল যাচাই, নামজারি ও খাজনা রশিদ ভেরিফিকেশন এবং মালিকানার আইনি সত্যতা পরীক্ষা।",
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
          tag: "Security"
        }
      ] 
    },
  },
  "business": {
    "legal": { 
      title: "Legal & Compliance", 
      bnTitle: "লিগ্যাল ও কমপ্লায়েন্স", 
      icon: "Scale", 
      desc: "Ensure your business complies with all government regulations, licensing, and legal standards.", 
      bnDesc: "নিশ্চিত করুন যে আপনার ব্যবসা সমস্ত আইনি প্রয়োজনীয়তা, লাইসেন্স এবং প্রবিধান মেনে চলে।", 
      reqs: [
        {
          en: "Company Registration & Trade License", 
          bn: "কোম্পানি নিবন্ধন ও ট্রেড লাইসেন্স",
          descEn: "RJSC incorporation, trade licenses, TIN, VAT registration, and startup structuring.",
          descBn: "আরজেএসসি কোম্পানি নিবন্ধন, ট্রেড লাইসেন্স, ই-টিন, ভ্যাট চালান ও বিজনেস সেটআপ।",
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80",
          tag: "Registration"
        },
        {
          en: "Tax & VAT Consulting", 
          bn: "ট্যাক্স ও ভ্যাট কনসাল্টিং",
          descEn: "Corporate income tax filing, monthly VAT returns, audit support, and compliance planning.",
          descBn: "কর্পোরেট আয়কর রিটার্ন, মাসিক ভ্যাট দাখিল এবং ট্যাক্স প্ল্যানিং পরামর্শ।",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
          tag: "Taxation"
        },
        {
          en: "Trademark, Copyright & IP", 
          bn: "ট্রেডমার্ক, কপিরাইট ও আইপি",
          descEn: "Brand name protection, logo trademark registration, patent filing, and IP security.",
          descBn: "ব্র্যান্ড নাম ও লোগোর ট্রেডমার্ক রেজিস্ট্রেশন, কপিরাইট এবং মেধা স্বত্ব সুরক্ষা।",
          image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80",
          tag: "IP Law"
        },
        {
          en: "Corporate Legal Contracts", 
          bn: "চুক্তিপত্র ও আইনি খসড়া",
          descEn: "Vendor agreements, NDA drafts, partnership deeds, employee contracts, and litigation.",
          descBn: "পার্টনারশিপ চুক্তি, এনডিএ (NDA), ভেন্ডর কন্ট্রাক্ট এবং লিগ্যাল নোটিশ ড্রাফটিং।",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
          tag: "Contracts"
        }
      ] 
    },
    "marketing": { 
      title: "Marketing & Branding", 
      bnTitle: "মার্কেটিং ও ব্র্যান্ডিং", 
      icon: "Megaphone", 
      desc: "Grow your brand visibility and scale your revenue with targeted nationwide marketing campaigns.", 
      bnDesc: "আপনার ব্র্যান্ডের পরিচিতি বাড়ান এবং কার্যকর মার্কেটিং স্ট্র্যাটেজির মাধ্যমে কাঙ্ক্ষিত ক্রেতা পান।", 
      reqs: [
        {
          en: "Social Media Marketing & Ads", 
          bn: "সোশ্যাল মিডিয়া ম্যানেজমেন্ট ও অ্যাডস",
          descEn: "Facebook, Instagram, LinkedIn paid ads, creative copywriting, and community management.",
          descBn: "টার্গেটেড ফেসবুক ও ইনস্টাগ্রাম পেইড বুস্টিং, কনটেন্ট তৈরি ও সোশ্যাল মিডিয়া হ্যান্ডলিং।",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
          tag: "Social"
        },
        {
          en: "Search Engine Optimization (SEO)", 
          bn: "এসইও (SEO) অপ্টিমাইজেশন",
          descEn: "Rank on Google page 1 for high-intent keywords, technical audits, and link building.",
          descBn: "গুগল সার্চ র‍্যাংকিং বৃদ্ধি, টেকনিক্যাল এসইও অডিট এবং হাই-কোয়ালিটি ব্যাকলিংক।",
          image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80",
          tag: "SEO"
        },
        {
          en: "Brand Identity & Graphic Design", 
          bn: "ব্র্যান্ড আইডেন্টিটি ও লোগো ডিজাইন",
          descEn: "Professional logo design, brand guidelines, brochure, packaging, and marketing collaterals.",
          descBn: "প্রফেশনাল লোগো, ব্র্যান্ড কালার গাইডলাইন, ব্রোশিউর ও সোশ্যাল মিডিয়া ক্রিয়েটিভ ডিজাইন।",
          image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
          tag: "Branding"
        },
        {
          en: "Performance Marketing & Funnels", 
          bn: "পারফরম্যান্স মার্কেটিং ও সেলস ফানেল",
          descEn: "Google Search & Display ads, high-converting sales funnels, and data analytics.",
          descBn: "গুগল সার্চ অ্যাডস, আরওআই ভিত্তিক সেলস ফানেল এবং কনভার্সন ট্র্যাকিং অ্যানালিটিক্স।",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
          tag: "Growth"
        }
      ] 
    },
    "hr": { 
      title: "HR & Recruitment", 
      bnTitle: "এইচআর ও রিক্রুটমেন্ট", 
      icon: "Users", 
      desc: "Find verified talent, build high-performing teams, and manage human resources effortlessly.", 
      bnDesc: "যোগ্য ও দক্ষ কর্মী খুঁজুন এবং আপনার মানবসম্পদ ব্যবস্থাপনা আরও কার্যকর করুন।", 
      reqs: [
        {
          en: "Talent Acquisition & Headhunting", 
          bn: "ট্যালেন্ট সোর্সিং ও রিক্রুটমেন্ট",
          descEn: "Executive headhunting, tech & sales recruitment, candidate screening, and onboarding.",
          descBn: "দক্ষ এক্সিকিউটিভ ও টিম মেম্বার হায়ার, ইন্টারভিউ স্ক্রিনিং এবং দ্রুত রিক্রুটমেন্ট সেবা।",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
          tag: "Hiring"
        },
        {
          en: "Payroll & Attendance Management", 
          bn: "পেরোল ও স্যালারি ম্যানেজমেন্ট",
          descEn: "Automated monthly payroll processing, tax deductions, provident funds, and pay slips.",
          descBn: "স্বয়ংক্রিয় বেতন হিসাব, ট্যাক্স কর্তন, প্রভিডেন্ট ফান্ড এবং অনলাইন পে-স্লিপ সিস্টেম।",
          image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80",
          tag: "Payroll"
        },
        {
          en: "Corporate Training & Upskilling", 
          bn: "কর্মী প্রশিক্ষণ ও স্কিল ডেভেলপমেন্ট",
          descEn: "Leadership workshops, technical upskilling, customer support training, and soft skills.",
          descBn: "লিডারশিপ ওয়ার্কশপ, সেলস ও কাস্টমার সার্ভিস ট্রেনিং এবং টিম দক্ষতা বৃদ্ধি প্রোগ্রাম।",
          image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=600&q=80",
          tag: "Training"
        },
        {
          en: "HR Policy & Compliance Setup", 
          bn: "এইচআর পলিসি ও কমপ্লায়েন্স",
          descEn: "Employee handbook drafting, labor law compliance, KPI frameworks, and appraisal systems.",
          descBn: "অফিস এইচআর ম্যানুয়াল, শ্রম আইন কমপ্লায়েন্স, কেপিআই (KPI) ও পারফরম্যান্স ফ্রেমওয়ার্ক।",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
          tag: "Compliance"
        }
      ] 
    },
  }
};

export default function SolutionDetailPage() {
  const params = useParams();
  const { t, language } = useLanguage();
  
  const slug = params?.slug as string[] | undefined;
  const rawCategory = slug?.[0];
  let rawItem = slug?.[1];

  // If only 1 slug is provided (e.g. /solutions/wholesale), fallback to the first item
  if (rawCategory && !rawItem && solutionData[rawCategory]) {
    rawItem = Object.keys(solutionData[rawCategory])[0];
  }

  const category = rawCategory || "";
  const item = rawItem || "";

  const solution = solutionData[category]?.[item];

  if (!solution) {
    return notFound();
  }

  const title = language === 'bn' ? solution.bnTitle : solution.title;
  const description = language === 'bn' ? solution.bnDesc : solution.desc;
  const theIcon = IconMap[solution.icon as keyof typeof IconMap] || IconMap.Box;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarCategories = [
    {
      id: "wholesale",
      label: { en: "Wholesale & Supply Chain", bn: "পাইকারি ও সাপ্লাই চেইন" },
      icon: Package,
      items: [
        { id: "gpus-electronics", label: { en: "GPUs & PC Hardware", bn: "জিপিইউ ও কম্পিউটার হার্ডওয়্যার" } },
        { id: "clothing", label: { en: "Pakistani Boutique Dresses", bn: "পাকিস্তানি ড্রেস ও বুটিক পোশাক" } },
        { id: "china-sourcing", label: { en: "China Factory Sourcing", bn: "চায়না সরাসরি ফ্যাক্টরি সোর্সিং" } },
        { id: "raw-materials", label: { en: "Raw Materials (Textile, Steel)", bn: "কাঁচামাল ও টেক্সটাইল ফেব্রিক্স" } },
        { id: "packaging", label: { en: "Custom Packaging & Boxes", bn: "কাস্টম প্যাকেজিং ও কার্টন" } },
        { id: "grocery", label: { en: "Supermarket Setup & Grocery", bn: "সুপারশপ সেটআপ ও গ্রোসারি" } },
      ]
    },
    {
      id: "tech",
      label: { en: "Tech & IT Solutions", bn: "টেক ও আইটি সমাধান" },
      icon: Code,
      items: [
        { id: "web", label: { en: "Web Development & Portals", bn: "ওয়েব ডেভেলপমেন্ট ও পোর্টাল" } },
        { id: "app", label: { en: "Mobile App Development", bn: "মোবাইল অ্যাপ ডেভেলপমেন্ট" } },
        { id: "software", label: { en: "Custom ERP & POS Software", bn: "কাস্টম ইআরপি ও পিওএস সফটওয়্যার" } },
      ]
    },
    {
      id: "real-estate",
      label: { en: "Real Estate & Architecture", bn: "রিয়েল এস্টেট ও নির্মাণ" },
      icon: Home,
      items: [
        { id: "interior", label: { en: "Corporate Office Interior", bn: "কর্পোরেট অফিস ইন্টেরিয়র" } },
        { id: "materials", label: { en: "Construction Materials", bn: "নির্মাণ সামগ্রী (রড, সিমেন্ট)" } },
      ]
    },
    {
      id: "business",
      label: { en: "Business Setup & Advisory", bn: "বিজনেস ও লিগ্যাল সেবা" },
      icon: Briefcase,
      items: [
        { id: "legal", label: { en: "Company Registration & Tax", bn: "কোম্পানি নিবন্ধন ও ট্যাক্স" } },
        { id: "marketing", label: { en: "Digital Marketing & SEO", bn: "ডিজিটাল মার্কেটিং ও এসইও" } },
        { id: "hr", label: { en: "Executive HR & Headhunting", bn: "এইচআর ও রিক্রুটমেন্ট" } },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#070709] transition-colors duration-300">
      
      {/* Dynamic Hero Section */}
      <div className="relative pt-32 pb-14 lg:pt-36 lg:pb-16 overflow-hidden bg-white dark:bg-[#0a0a0e] border-b border-gray-200 dark:border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-brand-500/10 via-indigo-500/10 to-transparent dark:from-brand-500/15 dark:via-purple-600/10 dark:to-transparent rounded-full blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
          
          <div className="flex items-center gap-3 mb-4">
            <Link 
              href="/solutions" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 hover:text-brand-600 dark:text-gray-400 dark:hover:text-brand-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {t("All Solutions Catalog", "সকল সলিউশন ক্যাটালগ")}
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3 border border-brand-100 dark:border-brand-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("Verified Solutions", "ভেরিফাইড সলিউশন")}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight leading-tight">
                {title}
              </h1>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>

            <div className="shrink-0">
              <Link 
                href={`/needs/new?goal=${category}-${item}`} 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-xl shadow-brand-600/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t("Post Custom Requirement", "রিকোয়ারমেন্ট পোস্ট করুন")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content Area: Sidebar + Solution Cards */}
      <div className="py-12 lg:py-16 bg-gray-50 dark:bg-[#070709] transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Mobile Category Toggle Button */}
            <div className="lg:hidden col-span-1 -mb-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/10 rounded-2xl shadow-sm text-sm font-bold text-gray-900 dark:text-white cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Filter className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span>{t("Browse Other Solutions", "অন্যান্য ক্যাটাগরি ও সমাধান")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold px-2.5 py-0.5 rounded-full border border-brand-200 dark:border-brand-500/20">
                    {sidebarCategories.find(c => c.id === category)?.label[language === 'bn' ? 'bn' : 'en'] || t("Menu", "মেনু")}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
            </div>

            {/* LEFT SIDEBAR: Solution Categories & Subcategories Tree */}
            <div className={`lg:col-span-3 bg-white dark:bg-[#121216] border border-gray-200 dark:border-white/10 rounded-3xl p-5 shadow-sm lg:sticky top-28 ${mobileMenuOpen ? 'block animate-in fade-in duration-200' : 'hidden lg:block'}`}>
              
              <div className="flex items-center justify-between pb-3.5 border-b border-gray-100 dark:border-white/10 mb-4">
                <div className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  {t("Solution Categories", "ক্যাটাগরি মেনু")}
                </div>
                <Link
                  href="/solutions"
                  className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  {t("Explorer", "ক্যাটালগ")}
                </Link>
              </div>

              <div className="space-y-3">
                {sidebarCategories.map((cat) => {
                  const Icon = cat.icon;
                  const isCurrentCat = category === cat.id;
                  const catLabel = language === "bn" ? cat.label.bn : cat.label.en;

                  return (
                    <div key={cat.id} className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
                      <Link
                        href={`/solutions/${cat.id}/${cat.items[0].id}`}
                        className={`flex items-center justify-between px-3.5 py-2.5 transition-colors ${
                          isCurrentCat
                            ? "bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-bold"
                            : "bg-gray-50/70 dark:bg-white/[0.03] text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Icon className="w-4 h-4 text-brand-500 shrink-0" />
                          <span className="text-xs font-semibold truncate">{catLabel}</span>
                        </div>
                      </Link>

                      {/* Sub-items */}
                      <div className="px-2 py-1.5 bg-white dark:bg-[#0e0e12] border-t border-gray-100 dark:border-white/5 space-y-0.5">
                        {cat.items.map((sub) => {
                          const isCurrentSub = isCurrentCat && item === sub.id;
                          const subLabel = language === "bn" ? sub.label.bn : sub.label.en;

                          return (
                            <Link
                              key={sub.id}
                              href={`/solutions/${cat.id}/${sub.id}`}
                              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                                isCurrentSub
                                  ? "text-brand-600 dark:text-brand-400 font-bold bg-brand-50 dark:bg-brand-900/20"
                                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isCurrentSub ? "bg-brand-600 dark:bg-brand-400" : "bg-gray-300 dark:bg-gray-700"}`}></span>
                                <span className="truncate">{subLabel}</span>
                              </div>
                              {isCurrentSub && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0 ml-1" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT SIDE: Sub-solutions Compact Cards */}
            <div className="lg:col-span-9">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {t("Included Modules & Options", "উপলব্ধ সমাধান ও অপশন")}
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {t("Verified wholesale supply and services available nationwide", "সারাদেশের ৬৪ জেলায় ভেরিফাইড সাপ্লাই ও সেবা")}
                  </p>
                </div>
              </div>

              {/* Compact Cards Grid: 3 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {solution.reqs.map((req: SubSolutionItem, idx: number) => {
                  const reqTitle = language === 'bn' ? req.bn : req.en;
                  const reqDesc = language === 'bn' ? req.descBn : req.descEn;

                  return (
                    <div
                      key={idx}
                      className="group flex flex-col bg-white dark:bg-[#121216] border border-gray-200/90 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Compact Image with Badges */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <img
                          src={req.image}
                          alt={reqTitle}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>

                        {/* Tag badge */}
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-sm">
                          {req.tag}
                        </span>

                        {/* Verified badge */}
                        <span className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/90 text-white backdrop-blur-md shadow-sm">
                          <ShieldCheck className="w-3 h-3" />
                          <span>{t("Verified", "ভেরিফাইড")}</span>
                        </span>
                      </div>

                      {/* Card Content Body */}
                      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {reqTitle}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed mb-4">
                            {reqDesc}
                          </p>
                        </div>

                        {/* Bottom Action Row */}
                        <div className="pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between mt-auto">
                          <Link
                            href={`/needs/new?goal=${category}-${item}&service=${encodeURIComponent(req.en)}`}
                            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 text-gray-900 dark:text-white font-bold text-xs transition-all duration-200 group/btn"
                          >
                            <span>{t("Request Solution", "সমাধান নিন")}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white dark:bg-[#0a0a0e] border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
              {t("Why Choose BRIZZ?", "কেন ব্রিজ বেছে নিবেন?")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
              {t("We connect you with the best providers for your specific needs across all 64 districts.", "আমরা ৬৪ জেলায় আপনার নির্দিষ্ট প্রয়োজনের জন্য সেরা ও যাচাইকৃত প্রোভাইডারদের সাথে আপনাকে যুক্ত করি।")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-[#121216] border border-gray-200/80 dark:border-white/5 p-6 sm:p-7 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {t("Verified Providers", "ভেরিফাইড প্রোভাইডার")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t("Every provider on our platform goes through a strict verification process to ensure quality and reliability.", "গুণমান এবং নির্ভরযোগ্যতা নিশ্চিত করতে আমাদের প্ল্যাটফর্মের প্রতিটি প্রোভাইডার একটি কঠোর যাচাইকরণ প্রক্রিয়ার মধ্য দিয়ে যায়।")}
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#121216] border border-gray-200/80 dark:border-white/5 p-6 sm:p-7 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-brand-50 dark:bg-brand-900/20 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {t("Best Transparent Pricing", "স্বচ্ছ ও সেরা মূল্য")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t("Get competitive quotes from multiple verified providers and choose the one that fits your budget perfectly.", "একাধিক প্রোভাইডারের কাছ থেকে প্রতিযোগিতামূলক উদ্ধৃতি পান এবং আপনার বাজেটের সাথে পুরোপুরি মানানসই সমাধান বেছে নিন।")}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#121216] border border-gray-200/80 dark:border-white/5 p-6 sm:p-7 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {t("End-to-End Coordination", "সম্পূর্ণ কোঅর্ডিনেশন")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t("Post your requirement in minutes and let our central team coordinate and deliver the perfect result.", "মিনিটের মধ্যে আপনার প্রয়োজন পোস্ট করুন এবং বাকি সম্পূর্ণ সমন্বয়ের দায়িত্ব BRIIZZ টিমের ওপর ছেড়ে দিন।")}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
