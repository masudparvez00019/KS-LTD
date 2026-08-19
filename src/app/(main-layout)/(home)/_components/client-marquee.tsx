"use client";

import React from "react";
import {
  ShieldCheck,
  Star,
  Award,
  Zap,
  Globe2,
  TrendingUp,
} from "lucide-react";

const clients = [
  { name: "ApexScale AI", sector: "Autonomous AI Systems" },
  { name: "FinVeloce Bank", sector: "Next-Gen Fintech" },
  { name: "OmniHealth Labs", sector: "HealthTech & Telehealth" },
  { name: "HyperLogix Global", sector: "Autonomous Logistics" },
  { name: "CyberFortress", sector: "Enterprise SecOps" },
  { name: "Vortex Cloud", sector: "Distributed Cloud Infra" },
  { name: "NeuroLink Dynamics", sector: "Edge Machine Learning" },
  { name: "Aura Commerce", sector: "High-Volume Retail" },
];

export const ClientMarquee = () => {
  return (
    <section className="py-12 border-y border-border/40 bg-card/20 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
          Trusted by Innovative Startups & Global Enterprises
        </p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-10">
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border/40 bg-card/40 hover:bg-muted/50 hover:border-primary/40 transition-all duration-200 group cursor-default shadow-xs shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary/20 to-indigo-500/20 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors block">
                  {client.name}
                </span>
                <span className="text-[10px] text-muted-foreground block -mt-0.5">
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-4xl mx-auto px-4 mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5 font-medium text-foreground/80">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>SOC2 Type II & GDPR Compliant</span>
        </div>
        <div className="flex items-center gap-1.5 font-medium text-foreground/80">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>4.9/5 Rating across 90+ Client Reviews</span>
        </div>
        <div className="flex items-center gap-1.5 font-medium text-foreground/80">
          <Award className="w-4 h-4 text-indigo-500" />
          <span>AWS & Google Cloud Certified Partners</span>
        </div>
      </div>
    </section>
  );
};
