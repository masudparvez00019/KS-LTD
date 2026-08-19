"use client";

import React from "react";
import {
  Compass,
  Layers,
  Code2,
  ShieldAlert,
  Rocket,
  Headphones,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & System Architecture",
    tagline: "Week 1",
    icon: Compass,
    description:
      "We dissect your business goals, user personas, data models, and performance benchmarks. We produce technical specifications and system architecture diagrams before writing code.",
    deliverables: ["Product Requirements Document (PRD)", "System Architecture Blueprint", "Database Schema & API Contracts"],
  },
  {
    step: "02",
    title: "UI/UX & Interactive Prototyping",
    tagline: "Week 2 - 3",
    icon: Layers,
    description:
      "We create atomic design systems, high-fidelity Figma components, and clickable user flows. Every micro-interaction is mapped for optimal conversion and accessibility.",
    deliverables: ["Figma Enterprise Design System", "Interactive Prototype", "Design Token Library"],
  },
  {
    step: "03",
    title: "Agile Sprint Engineering & AI",
    tagline: "Week 3 - 7",
    icon: Code2,
    description:
      "Our senior engineers build your product in bi-weekly sprints with continuous integration. We integrate autonomous LLM workflows, backend pipelines, and frontends in parallel.",
    deliverables: ["Bi-weekly staging demo builds", "Clean, documented Git repositories", "Autonomous AI Agents integration"],
  },
  {
    step: "04",
    title: "Rigorous QA & Security Pen-Testing",
    tagline: "Week 8",
    icon: ShieldAlert,
    description:
      "Zero compromises on quality. We execute automated end-to-end testing, OWASP security penetration audits, load testing up to 100,000 requests/sec, and cross-browser verification.",
    deliverables: ["Automated Playwright test suite", "SOC2 / HIPAA compliance audit", "Lighthouse 95+ Core Web Vitals"],
  },
  {
    step: "05",
    title: "Zero-Downtime Global Deployment",
    tagline: "Week 9",
    icon: Rocket,
    description:
      "We configure your production cloud environments with Terraform, container orchestration, SSL/TLS, and global edge CDNs for seamless public launch.",
    deliverables: ["AWS / GCP Kubernetes Cluster", "ArgoCD GitOps pipeline", "Edge CDN & WAF configuration"],
  },
  {
    step: "06",
    title: "24/7 Monitoring & Scaling Squad",
    tagline: "Continuous",
    icon: Headphones,
    description:
      "Post-launch, our dedicated engineering squad provides continuous monitoring, automated incident response, feature roadmap expansion, and ongoing optimizations.",
    deliverables: ["Prometheus & Grafana alerting", "Guaranteed 15-minute emergency SLA", "Continuous feature iteration"],
  },
];

export const ProcessTimeline = () => {
  return (
    <section id="process" className="py-24 relative bg-card/20 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Delivery Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            How We Turn Vision into Production
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            A transparent, battle-tested engineering framework designed to eliminate friction, eliminate technical debt, and ensure on-time delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-7 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-primary/40 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {item.tagline}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-muted border border-border/60 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-5 mt-5 border-t border-border/40 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/80 block">
                    Key Deliverables:
                  </span>
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
