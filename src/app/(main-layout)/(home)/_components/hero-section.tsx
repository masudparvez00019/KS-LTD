"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Bot,
  Zap,
  Globe,
  Star,
  Activity,
  CheckCircle2,
  Play,
  RotateCcw,
  ShieldCheck,
  Server,
  Layers,
} from "lucide-react";
import { InquiryModal } from "@/components/shared/main/inquiry-modal";

const rotatingWords = [
  "SaaS Platforms",
  "Autonomous AI Agents",
  "Distributed Cloud Mesh",
  "Cross-Platform Apps",
];

export const HeroSection = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(3);
  const [simulatedLatency, setSimulatedLatency] = useState("8.4ms");

  // Rotating words effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Live Agent Simulation Run
  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    setTimeout(() => setActiveStep(1), 500);
    setTimeout(() => setActiveStep(2), 1100);
    setTimeout(() => {
      setActiveStep(3);
      setSimulatedLatency(`${(Math.random() * 4 + 6).toFixed(1)}ms`);
      setIsSimulating(false);
    }, 1700);
  };

  return (
    <>
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-950/30 via-background to-background">
        {/* Vibrant Multi-Color Illuminated Tech Background */}
        {/* 1. Large Top Center Luminous Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-cyan-400/15 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* 2. Side Ambient Color Accents */}
        <div className="absolute top-20 -left-28 w-[450px] h-[450px] bg-indigo-600/25 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
        <div className="absolute top-28 -right-28 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: "2.5s" }} />

        {/* 3. Visible Geometric Tech Grid Lines */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#818cf818_1px,transparent_1px),linear-gradient(to_bottom,#818cf818_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
        />

        {/* 4. Top Horizon Glowing Light Bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent shadow-[0_0_20px_2px_rgba(6,182,212,0.5)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 2-Column Split Hero Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Messaging, CTAs & Social Proof (7 Cols) */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border/60 bg-muted/40 hover:bg-muted/70 backdrop-blur-md transition-all cursor-pointer group shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-foreground/90">
                  Autonomous AI & Enterprise Software Lab
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                  v3.0 Live
                </span>
              </div>

              {/* Main Headline with Dynamic Rotating Highlight */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                We Engineer <br className="hidden sm:block" />
                High-Impact{" "}
                <span className="inline-block relative">
                  <span className="bg-gradient-to-r from-indigo-400 via-primary to-cyan-400 bg-clip-text text-transparent transition-all duration-300">
                    {rotatingWords[wordIndex]}
                  </span>
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-normal">
                KS LTD partners with ambitious founders and enterprise leaders to architect distributed web platforms, autonomous agentic workflows, and zero-downtime cloud systems that scale to millions.
              </p>

              {/* Action CTAs (Modern UI Luxury Shimmer) */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="relative group overflow-hidden rounded-full p-[1.5px] focus:outline-none w-full sm:w-auto"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full animate-pulse-glow" />
                  <span className="relative flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-950 dark:bg-zinc-900 text-zinc-100 font-semibold text-sm tracking-wide transition-all duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-850 shadow-xl shadow-indigo-500/10">
                    <Sparkles className="w-4 h-4 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                    <span>Schedule Discovery Call</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <a
                  href="#portfolio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/30 hover:bg-muted/60 border border-border/60 hover:border-zinc-500/50 backdrop-blur-md transition-all duration-200"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/70" />
                </a>
              </div>

              {/* Founder Social Proof Strip */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/40">
                <div className="flex -space-x-2">
                  {["#6366f1", "#06b6d4", "#a855f7", "#10b981", "#f59e0b"].map(
                    (color, idx) => (
                      <div
                        key={idx}
                        style={{ backgroundColor: color }}
                        className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                      >
                        {["MV", "ER", "JH", "SL", "TA"][idx]}
                      </div>
                    )
                  )}
                </div>

                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-amber-500 fill-amber-500"
                      />
                    ))}
                    <span className="text-xs font-bold text-foreground ml-1">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Trusted by <span className="font-semibold text-foreground">80+ venture-backed</span> founders & tech leaders
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tech Command Center (5 Cols) */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 pointer-events-none" />

              <div className="relative rounded-2xl border border-border/80 bg-zinc-950/90 dark:bg-zinc-950/95 backdrop-blur-2xl shadow-2xl p-5 sm:p-6 space-y-5 text-left ring-1 ring-white/10">
                
                {/* Command Center Top Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono font-bold text-zinc-200 uppercase tracking-wider text-[11px]">
                      KS Telemetry Hub
                    </span>
                  </div>
                  <button
                    onClick={handleRunSimulation}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-mono transition-colors border border-zinc-700/60 disabled:opacity-50"
                  >
                    {isSimulating ? (
                      <RotateCcw className="w-3 h-3 animate-spin text-indigo-400" />
                    ) : (
                      <Play className="w-3 h-3 text-cyan-400" />
                    )}
                    <span>{isSimulating ? "Simulating..." : "Test Pipeline"}</span>
                  </button>
                </div>

                {/* Section 1: Live Agentic Pipeline Simulator */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-400">Agent Pipeline:</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>{simulatedLatency} Response</span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {[
                      { step: 0, label: "1. Ingest Natural Language Intent", tech: "Edge Gateway" },
                      { step: 1, label: "2. Hybrid Neural Search (Qdrant)", tech: "Vector Index" },
                      { step: 2, label: "3. Claude 3.7 Tool Invocations", tech: "Parallel Execution" },
                      { step: 3, label: "4. ACID Verified State Commit", tech: "PostgreSQL Mesh" },
                    ].map((item) => {
                      const isCompleted = activeStep >= item.step;
                      const isCurrent = activeStep === item.step;
                      return (
                        <div
                          key={item.step}
                          className={`flex items-center justify-between p-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                            isCurrent
                              ? "bg-indigo-950/60 border border-indigo-500/50 text-indigo-200"
                              : isCompleted
                              ? "bg-zinc-900/60 border border-zinc-800 text-zinc-300"
                              : "bg-zinc-900/20 border border-zinc-900 text-zinc-600"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isCompleted ? "text-emerald-400" : "text-zinc-700"
                              }`}
                            />
                            <span>{item.label}</span>
                          </div>
                          <span className="text-[10px] text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                            {item.tech}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section 2: Global Edge Latency Matrix */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Multi-Region Edge Network</span>
                    </span>
                    <span className="text-zinc-500">Zero Cold Starts</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { city: "Tokyo, JP", latency: "8.4ms" },
                      { city: "Frankfurt, DE", latency: "11.2ms" },
                      { city: "San Francisco, US", latency: "4.8ms" },
                      { city: "London, UK", latency: "9.1ms" },
                    ].map((node, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between text-xs font-mono"
                      >
                        <div className="flex items-center gap-1.5 text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[11px]">{node.city}</span>
                        </div>
                        <span className="text-[11px] font-bold text-emerald-400">
                          {node.latency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 3: Engineering Health Badges */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-950/40 via-zinc-900 to-cyan-950/40 border border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <div className="text-center">
                    <div className="text-zinc-400 text-[10px]">Uptime SLA</div>
                    <div className="font-bold text-zinc-100">99.99%</div>
                  </div>
                  <div className="w-[1px] h-6 bg-zinc-800" />
                  <div className="text-center">
                    <div className="text-zinc-400 text-[10px]">Lighthouse</div>
                    <div className="font-bold text-emerald-400">100/100</div>
                  </div>
                  <div className="w-[1px] h-6 bg-zinc-800" />
                  <div className="text-center">
                    <div className="text-zinc-400 text-[10px]">Security</div>
                    <div className="font-bold text-indigo-400">SOC2 Ready</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Live Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-8 border-t border-border/50">
            {[
              { label: "Products Shipped", value: "150+", note: "Across 14 industries" },
              { label: "Client Retention", value: "99.8%", note: "Long-term partners" },
              { label: "Value Generated", value: "$60M+", note: "In client ARR growth" },
              { label: "Engineering SLA", value: "99.99%", note: "Zero-downtime standard" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-card/40 border border-border/40 backdrop-blur-sm text-left hover:border-primary/40 transition-all group shadow-xs"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-foreground/80 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </>
  );
};



