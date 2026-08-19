"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  ExternalLink,
  CheckCircle,
  Layers,
  Code2,
  Bot,
  Smartphone,
  Globe,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "all" | "saas" | "mobile" | "ai" | "cloud";
  categoryLabel: string;
  metric: string;
  metricLabel: string;
  summary: string;
  fullDescription: string;
  deliverables: string[];
  techStack: string[];
  accentColor: string;
  liveUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "apex-saas",
    title: "Enterprise Revenue Intelligence & Forecasting SaaS",
    client: "ApexScale Global",
    category: "saas",
    categoryLabel: "SaaS & Web App",
    metric: "+340% ARR",
    metricLabel: "Growth in 6 Months",
    summary:
      "Engineered an automated B2B analytics platform handling 10M+ daily telemetry events with sub-second aggregate queries.",
    fullDescription:
      "ApexScale required a complete architecture rebuild from an unscalable legacy monolith to a Next.js 16 + Go microservice infrastructure with ClickHouse analytical database. We delivered an enterprise-grade web application with real-time dashboards, role-based access control, and automated billing.",
    deliverables: [
      "Custom Next.js 16 Edge SSR Web Dashboard",
      "Go microservices pipeline processing 10M events/day",
      "ClickHouse columnar DB integration for instantaneous charts",
      "Multi-tenant Stripe billing with meter-based usage",
    ],
    techStack: ["Next.js 16", "Go", "ClickHouse", "PostgreSQL", "Tailwind CSS", "AWS ECS"],
    accentColor: "from-blue-600/20 to-indigo-600/10",
  },
  {
    id: "neuro-ai",
    title: "Autonomous Medical Knowledge RAG & Triage Agent",
    client: "OmniHealth Labs",
    category: "ai",
    categoryLabel: "AI & Automation",
    metric: "88% Faster",
    metricLabel: "Clinical Triage Speed",
    summary:
      "Built a HIPAA-compliant autonomous clinical assistant utilizing hybrid vector search and Claude 3.7 reasoning models.",
    fullDescription:
      "OmniHealth needed to assist physician networks with real-time clinical guidelines and diagnostic literature search. KS LTD developed a zero-data-retention RAG system that ingests over 200,000 peer-reviewed papers, answering complex differential diagnostic queries with 99.4% factual accuracy.",
    deliverables: [
      "Hybrid Vector Search (Pinecone + BM25) pipeline",
      "HIPAA-compliant zero-logging inference gateway",
      "Doctor-facing real-time streaming chat with citations",
      "Evaluation suite testing 1,000+ medical scenarios",
    ],
    techStack: ["Python", "FastAPI", "Claude 3.7", "Pinecone", "Next.js", "Docker"],
    accentColor: "from-purple-600/20 to-pink-600/10",
  },
  {
    id: "velo-mobile",
    title: "Cross-Platform Neobank & Crypto Wallet",
    client: "FinVeloce Bank",
    category: "mobile",
    categoryLabel: "Mobile Engineering",
    metric: "4.9 ★ Rating",
    metricLabel: "Across 250k+ App Downloads",
    summary:
      "Designed and launched a lightning-fast React Native fintech mobile app with biometric security and instant fiat transfers.",
    fullDescription:
      "FinVeloce needed a modern consumer mobile app that could seamlessly bridge traditional banking (ACH/Wire) with instant digital asset payments. We engineered an offline-first mobile app featuring 120Hz micro-interactions, hardware enclave biometric encryption, and multi-currency ledgers.",
    deliverables: [
      "Universal React Native codebase for iOS & Android",
      "Biometric FaceID & Secure Enclave key storage",
      "Sub-second websocket push notifications for transactions",
      "Integrated Plaid & banking API webhooks",
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Redis", "AWS Lambda"],
    accentColor: "from-cyan-600/20 to-teal-600/10",
  },
  {
    id: "vortex-cloud",
    title: "Multi-Region Kubernetes Edge Mesh & DevOps Overhaul",
    client: "Vortex Cloud Infra",
    category: "cloud",
    categoryLabel: "Cloud & Scale",
    metric: "99.999%",
    metricLabel: "Observed Uptime SLA",
    summary:
      "Automated global infrastructure orchestration with Terraform, ArgoCD, and Istio Service Mesh across 3 continents.",
    fullDescription:
      "Vortex suffered from recurring deployment outages and manual server provisioning. KS LTD orchestrated an automated GitOps deployment pipeline with automated rollbacks, distributed Prometheus metrics, and automated disaster recovery failover.",
    deliverables: [
      "Modular Terraform infrastructure across AWS & GCP",
      "GitOps automated deployments with ArgoCD",
      "Zero-downtime Blue/Green rolling release mechanism",
      "Custom Grafana alerting for anomaly detection",
    ],
    techStack: ["Kubernetes", "AWS EKS", "Terraform", "ArgoCD", "Prometheus", "Cloudflare"],
    accentColor: "from-amber-600/20 to-orange-600/10",
  },
  {
    id: "aura-commerce",
    title: "Headless High-Volume B2B E-Commerce Marketplace",
    client: "Aura Commerce Group",
    category: "saas",
    categoryLabel: "SaaS & Web App",
    metric: "$22M GMV",
    metricLabel: "Processed in Year 1",
    summary:
      "Engineered a headless Next.js e-commerce storefront with instantaneous search and bulk inventory synchronization.",
    fullDescription:
      "Aura required an enterprise-grade wholesale platform capable of handling complex tier-pricing, dynamic VAT calculation, and thousands of simultaneous checkout requests during flash sales.",
    deliverables: [
      "Sub-80ms Algolia neural catalog search",
      "Custom bulk quoting and invoice generation engine",
      "ERP integration with SAP and Microsoft Dynamics",
      "100/100 Google Lighthouse Core Web Vitals score",
    ],
    techStack: ["Next.js 16", "PostgreSQL", "Algolia", "Redis", "Stripe Connect", "Tailwind CSS"],
    accentColor: "from-emerald-600/20 to-green-600/10",
  },
  {
    id: "cyber-sentinel",
    title: "AI-Powered Threat Detection & Automated SecOps",
    client: "CyberFortress Inc",
    category: "ai",
    categoryLabel: "AI & Automation",
    metric: "94% Reduction",
    metricLabel: "In Incident Response Time",
    summary:
      "Deployed autonomous AI SOC agents that analyze SIEM log streams in real-time, blocking zero-day intrusions automatically.",
    fullDescription:
      "CyberFortress needed an intelligent tier-1 SOC responder to filter noise from millions of daily firewall alerts. KS LTD built an autonomous agent cluster that investigates anomalies, correlates threat intelligence, and executes isolation playbooks in seconds.",
    deliverables: [
      "Real-time Kafka event streaming ingestion",
      "Fine-tuned anomaly detection neural network",
      "Automated Slack/PagerDuty playbook triggers",
      "Compliance audit reporting generator",
    ],
    techStack: ["Python", "Kafka", "FastAPI", "OpenAI", "Docker", "AWS Security Hub"],
    accentColor: "from-rose-600/20 to-red-600/10",
  },
];

export const PortfolioShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(
    null
  );

  const filteredProjects = caseStudies.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <>
      <section id="portfolio" className="py-24 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proven Business Impact</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Featured Case Studies
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Take a look at how our engineering and AI systems have accelerated revenue, improved customer retention, and scaled operations for market leaders.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-card border border-border/60 shadow-sm w-fit">
              {[
                { id: "all", label: "All Projects" },
                { id: "saas", label: "SaaS & Web" },
                { id: "ai", label: "AI & Agents" },
                { id: "mobile", label: "Mobile Apps" },
                { id: "cloud", label: "Cloud & DevOps" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === tab.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedCaseStudy(project)}
                className="group relative rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-7 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/40 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${project.accentColor} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                <div>
                  {/* Top Bar with Impact Metric Pill */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-muted/80 text-foreground/80 border border-border/50">
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-extrabold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.metric}</span>
                    </div>
                  </div>

                  {/* Client & Title */}
                  <span className="text-xs font-medium text-muted-foreground block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack & Action Footer */}
                <div className="pt-6 mt-6 border-t border-border/40 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-muted/60 text-muted-foreground text-[10px] font-medium border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-muted/60 text-muted-foreground text-[10px] font-medium border border-border/40">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-primary pt-1">
                    <span>Read Architectural Deep-Dive</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <Dialog
        open={!!selectedCaseStudy}
        onOpenChange={(open) => !open && setSelectedCaseStudy(null)}
      >
        {selectedCaseStudy && (
          <DialogContent className="max-w-2xl bg-card border-border/60 text-card-foreground shadow-2xl p-6 sm:p-8 rounded-2xl">
            <DialogHeader className="space-y-2 text-left">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                  {selectedCaseStudy.categoryLabel}
                </span>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-extrabold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>
                    {selectedCaseStudy.metric} ({selectedCaseStudy.metricLabel})
                  </span>
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight pt-2">
                {selectedCaseStudy.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-xs sm:text-sm">
                Client Partner: <span className="font-semibold text-foreground">{selectedCaseStudy.client}</span>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-5 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  The Problem & Solution
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {selectedCaseStudy.fullDescription}
                </p>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Core Engineering Deliverables
                </h4>
                <div className="space-y-1.5">
                  {selectedCaseStudy.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Deployed */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-muted text-foreground text-xs font-medium border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-border/50">
                <Button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="bg-primary text-primary-foreground font-semibold rounded-xl px-6 text-xs"
                >
                  Close Case Study
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};
