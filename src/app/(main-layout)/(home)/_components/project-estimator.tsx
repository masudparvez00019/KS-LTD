"use client";

import React, { useState } from "react";
import {
  Calculator,
  Sparkles,
  ArrowRight,
  Code2,
  Smartphone,
  Bot,
  Cloud,
  Layers,
  Check,
  Zap,
  Users,
  Clock,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/shared/main/inquiry-modal";

interface PlatformOption {
  id: string;
  name: string;
  basePrice: number;
  baseWeeks: number;
  icon: any;
}

const platforms: PlatformOption[] = [
  { id: "saas", name: "SaaS & Web App", basePrice: 12000, baseWeeks: 5, icon: Code2 },
  { id: "mobile", name: "Mobile App (iOS/Android)", basePrice: 15000, baseWeeks: 6, icon: Smartphone },
  { id: "ai", name: "Autonomous AI Agent & RAG", basePrice: 14000, baseWeeks: 4, icon: Bot },
  { id: "cloud", name: "Cloud & DevOps Architecture", basePrice: 10000, baseWeeks: 3, icon: Cloud },
  { id: "full", name: "Full-Suite (Web + Mobile + AI)", basePrice: 28000, baseWeeks: 10, icon: Layers },
];

const tiers = [
  { id: "mvp", name: "MVP / Beta Launch", multiplier: 1.0, weeksBonus: 0, desc: "Fast-to-market essentials for user validation" },
  { id: "scale", name: "Growth & Scale Ready", multiplier: 1.6, weeksBonus: 3, desc: "High concurrency, automated tests & integrations" },
  { id: "enterprise", name: "Enterprise Hardened", multiplier: 2.3, weeksBonus: 6, desc: "SOC2 compliance, multi-region failover & custom SLAs" },
];

const addons = [
  { id: "figma", name: "Full Figma Design System & Tokens", price: 3500, weeks: 1.5 },
  { id: "ai_bot", name: "Custom AI Assistant & Knowledge RAG", price: 5000, weeks: 2 },
  { id: "multicloud", name: "Multi-Region Kubernetes Cloud Mesh", price: 4500, weeks: 2 },
  { id: "qa_audit", name: "Automated E2E QA & Penetration Audit", price: 3000, weeks: 1 },
];

export const ProjectEstimator = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("saas");
  const [selectedTier, setSelectedTier] = useState<string>("scale");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["figma"]);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const platform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];
  const tier = tiers.find((t) => t.id === selectedTier) || tiers[1];

  const addonsPrice = selectedAddons.reduce((acc, id) => {
    const item = addons.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const addonsWeeks = selectedAddons.reduce((acc, id) => {
    const item = addons.find((a) => a.id === id);
    return acc + (item ? item.weeks : 0);
  }, 0);

  const calculatedBasePrice = Math.round(platform.basePrice * tier.multiplier + addonsPrice);
  const minPrice = Math.round(calculatedBasePrice * 0.9);
  const maxPrice = Math.round(calculatedBasePrice * 1.15);
  const totalWeeks = Math.round(platform.baseWeeks + tier.weeksBonus + addonsWeeks);

  return (
    <>
      <section id="estimator" className="py-24 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Scope & Budget Calculator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Calculate Your Project Scope
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Select your product parameters to obtain a real-time architectural estimate, recommended engineering squad, and development sprint duration.
            </p>
          </div>

          {/* Calculator Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls (8 cols) */}
            <div className="lg:col-span-7 space-y-8 bg-card/60 p-6 sm:p-8 rounded-2xl border border-border/60 backdrop-blur-xl shadow-lg">
              {/* Step 1: Select Platform */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground block">
                  1. Choose Core Platform / Architecture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {platforms.map((p) => {
                    const Icon = p.icon;
                    const isSelected = selectedPlatform === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPlatform(p.id)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-primary/10 border-primary text-foreground ring-1 ring-primary/40 font-medium"
                            : "bg-muted/30 border-border/60 hover:bg-muted/60 text-muted-foreground"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-xs sm:text-sm font-semibold">{p.name}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Complexity & Scale */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground block">
                  2. Choose Product Maturity & Scale Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {tiers.map((t) => {
                    const isSelected = selectedTier === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTier(t.id)}
                        className={`p-4 rounded-xl border text-left transition-all space-y-1.5 ${
                          isSelected
                            ? "bg-primary/10 border-primary text-foreground ring-1 ring-primary/40"
                            : "bg-muted/30 border-border/60 hover:bg-muted/60 text-muted-foreground"
                        }`}
                      >
                        <div className="font-bold text-xs sm:text-sm text-foreground">
                          {t.name}
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          {t.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Optional Add-ons */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground block">
                  3. Key Architectural Add-ons
                </label>
                <div className="space-y-2">
                  {addons.map((a) => {
                    const isSelected = selectedAddons.includes(a.id);
                    return (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => toggleAddon(a.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "bg-primary/10 border-primary text-foreground font-medium"
                            : "bg-muted/20 border-border/50 hover:bg-muted/40 text-muted-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border ${
                              isSelected
                                ? "bg-primary border-primary text-primary-foreground"
                                : "border-border/80 bg-background"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span>{a.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-primary">
                          +${a.price.toLocaleString()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Output Card (5 cols) */}
            <div className="lg:col-span-5 sticky top-28 bg-gradient-to-br from-card via-card to-muted/50 p-6 sm:p-8 rounded-2xl border border-primary/30 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Engineering Scope Summary
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  Fixed-Scope or Retainer
                </span>
              </div>

              {/* Price Range Display */}
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground block">
                  Estimated Investment Range:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  ${minPrice.toLocaleString()} – ${maxPrice.toLocaleString()}
                </div>
                <p className="text-[11px] text-muted-foreground">
                  *Includes architecture, full codebase IP transfer, QA testing & deployment.
                </p>
              </div>

              {/* Squad & Timeline metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-muted/50 border border-border/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>Sprint Duration</span>
                  </div>
                  <div className="text-base font-extrabold text-foreground">
                    {totalWeeks} – {totalWeeks + 2} Weeks
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-muted/50 border border-border/50 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <span>Allocated Squad</span>
                  </div>
                  <div className="text-base font-extrabold text-foreground">
                    3 – 5 Engineers
                  </div>
                </div>
              </div>

              {/* Squad Composition Breakdown */}
              <div className="space-y-2 text-xs border-t border-border/40 pt-4">
                <span className="font-semibold text-foreground/90 block">
                  Included Squad Resources:
                </span>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>1 Principal Solutions Architect & Tech Lead</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>2 Senior Full-Stack / AI Engineers</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>1 UI/UX & Design Systems Specialist</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>1 Automated QA & SecOps Engineer</span>
                  </li>
                </ul>
              </div>

              {/* Action Button (Shimmer Modern Style) */}
              <button
                onClick={() => setInquiryOpen(true)}
                className="relative group overflow-hidden rounded-xl p-[1.5px] focus:outline-none w-full"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-xl animate-pulse-glow" />
                <span className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] bg-zinc-950 dark:bg-zinc-900 text-zinc-100 font-semibold text-sm tracking-wide transition-all duration-200 group-hover:bg-zinc-900 shadow-xl">
                  <Sparkles className="w-4 h-4 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                  <span>Lock Estimate & Book Technical Call</span>
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        prefilledService={selectedPlatform}
      />
    </>
  );
};
