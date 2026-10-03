"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MousePointerClick,
  Users,
  Eye,
  TrendingUp,
  ArrowUpRight,
  Globe,
  Smartphone,
  Laptop,
  Calendar,
  Sparkles,
  ExternalLink,
  Activity,
  CheckCircle2,
  RefreshCw,
  PlusCircle,
  ShieldCheck,
  ArrowLeft,
  Lock,
} from "lucide-react";
import {
  getAnalyticsSummary,
  recordClick,
  AnalyticsSummary,
  DailyStat,
  ClickEvent,
} from "@/lib/analytics";

export default function StandaloneAnalyticsPage() {
  const [rangeDays, setRangeDays] = useState<7 | 14 | 30>(7);
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [activeMetric, setActiveMetric] = useState<"clicks" | "visitors" | "pageViews">("clicks");
  const [hoveredDay, setHoveredDay] = useState<DailyStat | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [testNotification, setTestNotification] = useState<string | null>(null);

  const loadData = () => {
    setSummary(getAnalyticsSummary(rangeDays));
  };

  useEffect(() => {
    loadData();

    // Listen to real-time updates dispatched by recordClick
    const onUpdated = () => {
      loadData();
    };
    window.addEventListener("briizz_analytics_updated", onUpdated);
    return () => window.removeEventListener("briizz_analytics_updated", onUpdated);
  }, [rangeDays]);

  const handleTestClick = () => {
    const testTargets = [
      { label: "WhatsApp Concierge (01964 468626)", url: "https://wa.me/8801964468626", cat: "cta" as const },
      { label: "Tell Us What You Need (Hero CTA)", url: "/needs/new", cat: "cta" as const },
      { label: "Official Facebook Page", url: "https://www.facebook.com/profile.php?id=61593908348405", cat: "social" as const },
      { label: "Emergency Blood Bank Request", url: "/free-help#blood-bank", cat: "emergency" as const },
      { label: "One Network, 64 Districts", url: "/districts", cat: "nav" as const },
      { label: "LinkedIn Company Feed", url: "https://www.linkedin.com/feed/update/urn:li:activity:7509465949624864768", cat: "social" as const },
    ];
    const picked = testTargets[Math.floor(Math.random() * testTargets.length)];
    recordClick(picked.label, picked.url, picked.cat);

    setTestNotification(`Live click simulated: "${picked.label}"!`);
    setTimeout(() => setTestNotification(null), 3500);
  };

  if (!summary) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex items-center gap-3 text-blue-400 font-semibold text-lg">
          <RefreshCw className="w-6 h-6 animate-spin" /> Loading BRIIZZ Analytics Engine...
        </div>
      </div>
    );
  }

  // Calculate chart max value for scaling
  const maxChartVal = Math.max(
    ...summary.dailyStats.map((d) =>
      activeMetric === "clicks" ? d.clicks : activeMetric === "visitors" ? d.visitors : d.pageViews
    ),
    100
  );

  const filteredLinks =
    filterCategory === "all"
      ? summary.topLinks
      : summary.topLinks.filter((l) => l.category === filterCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4 sm:px-6 lg:px-12 selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Secret Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Live Platform Intelligence
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-400 border border-slate-700/60">
                <Lock className="w-3.5 h-3.5 text-amber-400" /> Private Direct Access (/analytics)
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                BRIIZZ Analytics
              </span>
              <span className="text-sm font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-xl border border-slate-700">
                v1.0 Live
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
              Real-time monitoring of website traffic, user link clicks, WhatsApp concierge usage, and high-conversion actions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Range Filter */}
            <div className="flex items-center bg-slate-800/90 p-1.5 rounded-2xl border border-slate-700/80 shadow-inner">
              {[
                { label: "Last 7 Days", val: 7 as const },
                { label: "Last 14 Days", val: 14 as const },
                { label: "Last 30 Days", val: 30 as const },
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => setRangeDays(item.val)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    rangeDays === item.val
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Test Click Simulator */}
            <button
              onClick={handleTestClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="Simulate a real-time click to verify tracking"
            >
              <PlusCircle className="w-4 h-4" /> Simulate Click
            </button>

            {/* Link back to Home */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to BriizZ
            </Link>
          </div>
        </div>

        {/* Live Event Notification */}
        {testNotification && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium flex items-center justify-between shadow-lg animate-fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{testNotification} Graph & metrics incremented in real-time.</span>
            </div>
            <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/20 px-2 py-0.5 rounded-md">
              Live Feed
            </span>
          </div>
        )}

        {/* 4 Hero Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Total Clicks */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider">Total Link Clicks</span>
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <MousePointerClick className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
              {summary.totalClicks.toLocaleString()}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+{summary.growthRate}% vs previous period</span>
            </div>
          </div>

          {/* Card 2: Unique Visitors */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider">Unique Visitors</span>
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
              {summary.uniqueVisitors.toLocaleString()}
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <span>Avg {Math.round(summary.uniqueVisitors / rangeDays)} visitors/day</span>
            </div>
          </div>

          {/* Card 3: Today's Live Clicks */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider">Today's Live Clicks</span>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
              {summary.todayClicks.toLocaleString()}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Active today ({summary.todayVisitors} visitors)</span>
            </div>
          </div>

          {/* Card 4: Top Performing CTA */}
          <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-700/80 shadow-xl relative overflow-hidden group hover:border-amber-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="flex items-center justify-between text-slate-400 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider">Top Performing CTA</span>
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="text-base sm:text-lg font-black text-white line-clamp-1 mb-1" title={summary.topLinks[0]?.label}>
              {summary.topLinks[0]?.label || "WhatsApp Concierge"}
            </div>
            <div className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
              <span>{summary.topLinks[0]?.clicks.toLocaleString()} clicks</span>
              <span className="text-slate-500">({summary.topLinks[0]?.percent}% share)</span>
            </div>
          </div>
        </div>

        {/* Main Interactive Graph Section */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700/80 p-6 lg:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">Click & Traffic Trends Graph</h2>
                {hoveredDay && (
                  <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-3 py-1 rounded-xl border border-blue-500/30 animate-fade-in">
                    {hoveredDay.day} ({hoveredDay.date}): {hoveredDay.clicks} Clicks · {hoveredDay.visitors} Visitors
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Visualizing daily link engagement and platform interaction over the last {rangeDays} days.
              </p>
            </div>

            {/* Metric Switcher */}
            <div className="flex items-center bg-slate-900/90 p-1.5 rounded-2xl border border-slate-700">
              <button
                onClick={() => setActiveMetric("clicks")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeMetric === "clicks" ? "bg-blue-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Clicks
              </button>
              <button
                onClick={() => setActiveMetric("visitors")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeMetric === "visitors" ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Unique Visitors
              </button>
              <button
                onClick={() => setActiveMetric("pageViews")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeMetric === "pageViews" ? "bg-emerald-600 text-white shadow-md" : "text-slate-400 hover:text-white"
                }`}
              >
                Page Views
              </button>
            </div>
          </div>

          {/* Visual Graph with Bars & Tooltips */}
          <div className="relative pt-6">
            {/* Y-Axis Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-10">
              {[1, 0.75, 0.5, 0.25, 0].map((ratio) => (
                <div key={ratio} className="w-full flex items-center gap-3 border-b border-slate-700/50">
                  <span className="text-[10px] font-bold text-slate-500 w-10 text-right">
                    {Math.round(maxChartVal * ratio)}
                  </span>
                </div>
              ))}
            </div>

            {/* Bars Container */}
            <div className="h-64 sm:h-76 flex items-end justify-between gap-1.5 sm:gap-3 pl-12 relative z-10">
              {summary.dailyStats.map((stat, idx) => {
                const currentVal =
                  activeMetric === "clicks"
                    ? stat.clicks
                    : activeMetric === "visitors"
                    ? stat.visitors
                    : stat.pageViews;
                const heightPercent = Math.max(12, Math.round((currentVal / maxChartVal) * 100));
                const isHovered = hoveredDay?.date === stat.date;

                return (
                  <div
                    key={stat.date}
                    onMouseEnter={() => setHoveredDay(stat)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className="relative flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                  >
                    {/* Floating tooltip */}
                    <div
                      className={`absolute bottom-full mb-3 bg-slate-950 text-white text-[11px] font-medium px-3 py-2 rounded-xl shadow-2xl border border-slate-700 pointer-events-none whitespace-nowrap transition-all z-30 ${
                        isHovered ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-1 group-hover:opacity-100"
                      }`}
                    >
                      <div className="font-bold text-blue-400 mb-0.5">
                        {stat.day}, {stat.date}
                      </div>
                      <div className="text-slate-200">Clicks: <strong className="text-white">{stat.clicks}</strong></div>
                      <div className="text-slate-300">Visitors: {stat.visitors}</div>
                      <div className="text-slate-400">Page Views: {stat.pageViews}</div>
                    </div>

                    {/* Bar */}
                    <div className="w-full max-w-[44px] flex items-end justify-center h-[calc(100%-28px)]">
                      <div
                        className={`w-full rounded-t-xl transition-all duration-500 relative ${
                          isHovered
                            ? "bg-blue-400 shadow-lg shadow-blue-500/50 scale-105"
                            : activeMetric === "clicks"
                            ? "bg-gradient-to-t from-blue-700 via-blue-600 to-cyan-400 hover:brightness-110"
                            : activeMetric === "visitors"
                            ? "bg-gradient-to-t from-purple-700 via-indigo-600 to-indigo-400"
                            : "bg-gradient-to-t from-emerald-700 via-teal-600 to-emerald-400"
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        <div className="absolute top-0 inset-x-0 h-1 bg-white/40 rounded-t-xl"></div>
                      </div>
                    </div>

                    {/* Day label */}
                    <div
                      className={`text-[11px] font-bold mt-2 transition-colors ${
                        isHovered ? "text-blue-400" : "text-slate-400"
                      }`}
                    >
                      {rangeDays === 30 ? (idx % 4 === 0 ? stat.day : "") : stat.day}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend & Insights */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-700/60 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 font-bold text-slate-300">
                  <span className="w-3 h-3 rounded-md bg-blue-500"></span> Total Clicks
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-300">
                  <span className="w-3 h-3 rounded-md bg-indigo-400"></span> Unique Visitors
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Peak activity concentrated around weekend campaigns (Friday / Saturday)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Section: Top Clicked Links & Traffic Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Top Clicked Links Table */}
          <div className="lg:col-span-2 bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700/80 p-6 lg:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">Top Clicked Links & Buttons</h2>
                <p className="text-sm text-slate-400 mt-0.5">Which buttons and links visitors are clicking the most</p>
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl text-xs font-bold text-slate-400 border border-slate-700">
                {[
                  { label: "All", val: "all" },
                  { label: "CTAs", val: "cta" },
                  { label: "Social", val: "social" },
                  { label: "Nav", val: "nav" },
                ].map((c) => (
                  <button
                    key={c.val}
                    onClick={() => setFilterCategory(c.val)}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      filterCategory === c.val ? "bg-blue-600 text-white shadow-sm" : "hover:text-white"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Links List */}
            <div className="space-y-3.5">
              {filteredLinks.map((item, index) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/60 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div className="w-7 h-7 rounded-xl bg-slate-800 text-slate-300 font-extrabold text-xs flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-700">
                      #{index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-white text-sm truncate">{item.label}</span>
                        <span
                          className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                            item.category === "cta"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : item.category === "social"
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : item.category === "emergency"
                              ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                              : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono truncate block mt-0.5">
                        {item.url}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 sm:justify-end shrink-0">
                    <div className="w-28 hidden sm:block">
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          style={{ width: `${item.percent}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-extrabold text-white">
                        {item.clicks.toLocaleString()}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-400">
                        {item.percent}% share
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources & Device Breakdown */}
          <div className="space-y-6">
            {/* Traffic Sources */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700/80 p-6 lg:p-7 shadow-xl">
              <h2 className="text-lg font-bold text-white mb-1">Traffic Sources</h2>
              <p className="text-xs text-slate-400 mb-5">Where visitors clicked to reach BriizZ</p>

              <div className="space-y-4">
                {summary.sources.map((src) => (
                  <div key={src.source} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">{src.source}</span>
                      <span className="text-white font-bold">{src.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${src.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device & Regional Breakdown */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700/80 p-6 lg:p-7 shadow-xl">
              <h2 className="text-lg font-bold text-white mb-1">Device Breakdown</h2>
              <p className="text-xs text-slate-400 mb-5">Mobile vs Desktop link interactions</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-white">{summary.devices.mobile}%</div>
                    <div className="text-xs font-bold text-blue-300">Mobile Clicks</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700 flex items-center gap-3">
                  <Laptop className="w-6 h-6 text-slate-400 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-white">{summary.devices.desktop}%</div>
                    <div className="text-xs font-bold text-slate-400">Desktop Clicks</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/60">
                <div className="text-xs font-bold text-slate-300 mb-3 flex items-center justify-between">
                  <span>Top Regional Traffic</span>
                  <span className="text-blue-400 font-semibold">64 Districts</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {summary.districts.slice(0, 5).map((d) => (
                    <span
                      key={d.name}
                      className="text-xs font-medium bg-slate-900 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700"
                    >
                      {d.name}: <strong className="font-bold text-white">{d.count}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Recent Click Events Stream */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl border border-slate-700/80 p-6 lg:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <h2 className="text-xl font-bold text-white">Live Click Stream (Real-Time Feed)</h2>
            </div>
            <span className="text-xs text-slate-400 font-medium">Automatic recording as users click links</span>
          </div>

          <div className="divide-y divide-slate-700/60">
            {summary.recentEvents.slice(0, 8).map((evt) => (
              <div key={evt.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <MousePointerClick className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{evt.target}</span>
                      <span className="text-[10px] font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                        {evt.device}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>Via {evt.referrer}</span>
                      <span>•</span>
                      <span>District: {evt.district}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-mono sm:text-right shrink-0">
                  {new Date(evt.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
