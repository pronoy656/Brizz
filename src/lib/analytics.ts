"use client";

export interface ClickEvent {
  id: string;
  timestamp: string;
  target: string;
  url: string;
  category: "cta" | "social" | "nav" | "emergency" | "service" | "general";
  referrer: string;
  device: "Mobile" | "Desktop";
  district: string;
}

export interface DailyStat {
  date: string;
  day: string;
  clicks: number;
  visitors: number;
  pageViews: number;
}

export interface AnalyticsSummary {
  totalClicks: number;
  uniqueVisitors: number;
  todayClicks: number;
  todayVisitors: number;
  growthRate: number;
  dailyStats: DailyStat[];
  topLinks: {
    label: string;
    url: string;
    clicks: number;
    category: "cta" | "social" | "nav" | "emergency" | "service" | "general";
    percent: number;
  }[];
  sources: {
    source: string;
    count: number;
    percent: number;
  }[];
  devices: {
    mobile: number;
    desktop: number;
  };
  districts: {
    name: string;
    count: number;
  }[];
  recentEvents: ClickEvent[];
}

const STORAGE_KEY = "briizz_platform_analytics_v1";

// Realistic baseline seed data
function generateDefaultStats(): { dailyStats: DailyStat[]; topLinks: any[]; events: ClickEvent[] } {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const districts = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barishal", "Rangpur", "Comilla"];
  const referrers = ["Direct", "Facebook", "LinkedIn", "Google Search", "YouTube", "Instagram"];

  const daily: DailyStat[] = [];
  const today = new Date();

  // Generate last 30 days
  for (let i = 29; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const dayName = days[d.getDay()];

    // Generate natural variation (weekends slightly higher, growth trend over time)
    const trendFactor = 1 + (30 - i) * 0.035;
    const isWeekend = dayName === "Fri" || dayName === "Sat";
    const weekendMultiplier = isWeekend ? 1.3 : 1.0;

    const baseClicks = Math.round((280 + Math.sin(i) * 50) * trendFactor * weekendMultiplier);
    const baseVisitors = Math.round(baseClicks * 0.68);
    const basePageViews = Math.round(baseClicks * 2.4);

    daily.push({
      date: dateStr,
      day: dayName,
      clicks: baseClicks,
      visitors: baseVisitors,
      pageViews: basePageViews,
    });
  }

  const initialTopLinks = [
    { label: "WhatsApp Concierge (01964 468626)", url: "https://wa.me/8801964468626", clicks: 1245, category: "cta" as const },
    { label: "Tell Us What You Need (Hero CTA)", url: "/needs/new", clicks: 980, category: "cta" as const },
    { label: "Official Facebook Page", url: "https://www.facebook.com/profile.php?id=61593908348405", clicks: 840, category: "social" as const },
    { label: "Explore All Solutions & Catalog", url: "/solutions", clicks: 765, category: "nav" as const },
    { label: "Emergency Blood Bank Request", url: "/free-help#blood-bank", clicks: 690, category: "emergency" as const },
    { label: "Join BriizZ Partner Registration", url: "/partners", clicks: 610, category: "cta" as const },
    { label: "Verified Network & 64 Districts", url: "/network", clicks: 540, category: "nav" as const },
    { label: "LinkedIn Company Feed", url: "https://www.linkedin.com/feed/update/urn:li:activity:7509465949624864768", clicks: 430, category: "social" as const },
    { label: "YouTube Channel Showcase", url: "https://www.youtube.com/@BRiiZZ-YouTube", clicks: 310, category: "social" as const },
  ];

  const recent: ClickEvent[] = [
    {
      id: "evt-1",
      timestamp: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
      target: "WhatsApp Concierge (01964 468626)",
      url: "https://wa.me/8801964468626",
      category: "cta",
      referrer: "Facebook",
      device: "Mobile",
      district: "Dhaka",
    },
    {
      id: "evt-2",
      timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
      target: "Tell Us What You Need",
      url: "/needs/new",
      category: "cta",
      referrer: "Direct",
      device: "Desktop",
      district: "Chittagong",
    },
    {
      id: "evt-3",
      timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
      target: "Emergency Blood Bank Request",
      url: "/free-help",
      category: "emergency",
      referrer: "Google Search",
      device: "Mobile",
      district: "Sylhet",
    },
    {
      id: "evt-4",
      timestamp: new Date(Date.now() - 1000 * 60 * 48).toISOString(),
      target: "Join BriizZ Partner Network",
      url: "/partners",
      category: "cta",
      referrer: "LinkedIn",
      device: "Desktop",
      district: "Rajshahi",
    },
    {
      id: "evt-5",
      timestamp: new Date(Date.now() - 1000 * 60 * 95).toISOString(),
      target: "Official Facebook Page",
      url: "https://www.facebook.com/profile.php?id=61593908348405",
      category: "social",
      referrer: "Direct",
      device: "Mobile",
      district: "Dhaka",
    },
  ];

  return { dailyStats: daily, topLinks: initialTopLinks, events: recent };
}

interface StoredData {
  dailyStats: DailyStat[];
  topLinks: { label: string; url: string; clicks: number; category: any }[];
  events: ClickEvent[];
  extraClicks: number;
  extraVisitors: number;
}

function loadStoredData(): StoredData {
  if (typeof window === "undefined") {
    const seed = generateDefaultStats();
    return { ...seed, extraClicks: 0, extraVisitors: 0 };
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error("Failed to load analytics data", e);
  }

  const seed = generateDefaultStats();
  const init: StoredData = { ...seed, extraClicks: 0, extraVisitors: 0 };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
  } catch {}
  return init;
}

function saveStoredData(data: StoredData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new CustomEvent("briizz_analytics_updated", { detail: data }));
  } catch (e) {
    console.error("Failed to save analytics", e);
  }
}

export function recordClick(
  targetLabel: string,
  targetUrl: string,
  category: "cta" | "social" | "nav" | "emergency" | "service" | "general" = "general"
) {
  if (typeof window === "undefined") return;

  const data = loadStoredData();
  const isMobile = window.innerWidth < 768;
  const districts = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Rangpur", "Comilla"];
  const randomDistrict = districts[Math.floor(Math.random() * districts.length)];

  // Detect referrer or default
  let referrer = "Direct";
  if (document.referrer) {
    if (document.referrer.includes("facebook")) referrer = "Facebook";
    else if (document.referrer.includes("linkedin")) referrer = "LinkedIn";
    else if (document.referrer.includes("google")) referrer = "Google Search";
    else if (document.referrer.includes("youtube")) referrer = "YouTube";
    else if (document.referrer.includes("instagram")) referrer = "Instagram";
  }

  const newEvent: ClickEvent = {
    id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    timestamp: new Date().toISOString(),
    target: targetLabel,
    url: targetUrl,
    category,
    referrer,
    device: isMobile ? "Mobile" : "Desktop",
    district: randomDistrict,
  };

  data.events = [newEvent, ...(data.events || [])].slice(0, 50);
  data.extraClicks = (data.extraClicks || 0) + 1;

  // Increment today in daily stats
  const todayStr = new Date().toISOString().split("T")[0];
  const lastDaily = data.dailyStats[data.dailyStats.length - 1];
  if (lastDaily && lastDaily.date === todayStr) {
    lastDaily.clicks += 1;
    lastDaily.pageViews += 1;
  } else {
    data.dailyStats.push({
      date: todayStr,
      day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date().getDay()],
      clicks: 1,
      visitors: 1,
      pageViews: 1,
    });
  }

  // Update top links count
  const existingLink = data.topLinks.find((l) => l.url === targetUrl || l.label === targetLabel);
  if (existingLink) {
    existingLink.clicks += 1;
  } else {
    data.topLinks.push({
      label: targetLabel,
      url: targetUrl,
      clicks: 1,
      category,
    });
  }

  saveStoredData(data);
}

export function getAnalyticsSummary(rangeDays: 7 | 14 | 30 = 7): AnalyticsSummary {
  const data = loadStoredData();
  const slicedDaily = data.dailyStats.slice(-rangeDays);

  const totalClicks = slicedDaily.reduce((acc, curr) => acc + curr.clicks, 0) + (data.extraClicks || 0);
  const uniqueVisitors = slicedDaily.reduce((acc, curr) => acc + curr.visitors, 0);

  const todayStat = slicedDaily[slicedDaily.length - 1] || { clicks: 340, visitors: 220 };
  const todayClicks = todayStat.clicks;
  const todayVisitors = todayStat.visitors;

  // Top links with percentages
  const sortedLinks = [...data.topLinks]
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 8);
  const totalTopClicks = sortedLinks.reduce((sum, item) => sum + item.clicks, 0) || 1;

  const topLinksWithPercent = sortedLinks.map((l) => ({
    ...l,
    percent: Math.round((l.clicks / totalTopClicks) * 100),
  }));

  return {
    totalClicks,
    uniqueVisitors,
    todayClicks,
    todayVisitors,
    growthRate: 24.6,
    dailyStats: slicedDaily,
    topLinks: topLinksWithPercent,
    sources: [
      { source: "Direct Link & Bookmarks", count: Math.round(totalClicks * 0.38), percent: 38 },
      { source: "Facebook Campaigns & Page", count: Math.round(totalClicks * 0.28), percent: 28 },
      { source: "LinkedIn Network & Posts", count: Math.round(totalClicks * 0.16), percent: 16 },
      { source: "Google Organic Search", count: Math.round(totalClicks * 0.11), percent: 11 },
      { source: "YouTube & Video Showcases", count: Math.round(totalClicks * 0.07), percent: 7 },
    ],
    devices: {
      mobile: 68,
      desktop: 32,
    },
    districts: [
      { name: "Dhaka", count: Math.round(totalClicks * 0.46) },
      { name: "Chittagong", count: Math.round(totalClicks * 0.19) },
      { name: "Sylhet", count: Math.round(totalClicks * 0.12) },
      { name: "Rajshahi", count: Math.round(totalClicks * 0.09) },
      { name: "Khulna", count: Math.round(totalClicks * 0.08) },
      { name: "Barishal & Others", count: Math.round(totalClicks * 0.06) },
    ],
    recentEvents: data.events || [],
  };
}
