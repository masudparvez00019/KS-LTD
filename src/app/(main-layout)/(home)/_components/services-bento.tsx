"use client";

import React, { useState } from "react";
import {
  Code2,
  Bot,
  Smartphone,
  Cloud,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Cpu,
  Server,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/shared/main/inquiry-modal";

const services = [
  {
    id: "web-saas",
    title: "Full-Stack Web & Enterprise SaaS",
    category: "Software Engineering",
    icon: Code2,
    badge: "Core Strength",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderGlow: "group-hover:border-blue-500/50",
    description:
      "We design and build ultra-fast, distributed web platforms and multi-tenant SaaS products using Next.js, React, Node.js, and Go microservices.",
    features: [
      "Sub-second page rendering with Edge SSR/ISR",
      "Multi-tenant SaaS database partitioning",
      "Real-time WebSockets & GraphQL data sync",
      "Custom Stripe, LemonSqueezy & payment billing",
    ],
    tech: ["Next.js 16", "React 19", "Node.js", "Go", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "ai-automation",
    title: "AI Agents & Intelligent Automation",
    category: "Autonomous Systems",
    icon: Bot,
    badge: "High Demand",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    borderGlow: "group-hover:border-purple-500/50",
    description:
      "Empower your business workflows with autonomous AI agents, retrieval-augmented generation (RAG), and fine-tuned LLM models that eliminate repetitive operations.",
    features: [
      "Custom RAG pipelines with Pinecone/Qdrant",
      "Autonomous tool-calling agents & bots",
      "Fine-tuned domain-specific AI models",
      "OCR, Document AI & Predictive analytics",
    ],
    tech: ["Python", "FastAPI", "OpenAI", "Claude 3.7", "LangChain", "Vector DBs"],
  },
  {
    id: "mobile-apps",
    title: "Cross-Platform Mobile Engineering",
    category: "Mobile Solutions",
    icon: Smartphone,
    badge: "iOS & Android",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    borderGlow: "group-hover:border-cyan-500/50",
    description:
      "Delivering native-performance mobile applications on iOS and Android with smooth 120Hz gesture animations, offline-first sync, and biometric security.",
    features: [
      "Smooth 120fps gesture interactions",
      "Offline-first architecture with local SQLite/Watermelon",
      "Push notification engines & in-app purchases",
      "Biometric authentication (FaceID / TouchID)",
    ],
    tech: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud & Reliability",
    icon: Cloud,
    badge: "99.99% SLA",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderGlow: "group-hover:border-amber-500/50",
    description:
      "Enterprise cloud architectures on AWS and Google Cloud. Automated CI/CD pipelines, Kubernetes container orchestration, and zero-downtime blue/green deployments.",
    features: [
      "Terraform Infrastructure as Code (IaC)",
      "Kubernetes (EKS/GKE) autoscaling clusters",
      "GitOps CI/CD with GitHub Actions & ArgoCD",
      "Prometheus & Grafana distributed observability",
    ],
    tech: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "Cloudflare"],
  },
  {
    id: "ui-ux",
    title: "Product UI/UX & Design Systems",
    category: "Design Architecture",
    icon: Layers,
    badge: "Conversion Focused",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderGlow: "group-hover:border-emerald-500/50",
    description:
      "User-centric product design that turns complex enterprise workflows into intuitive, engaging user interfaces with unified design tokens.",
    features: [
      "Comprehensive Figma Design Systems",
      "Interactive high-fidelity prototypes",
      "Usability testing & behavioral heatmaps",
      "Micro-animations & dynamic motion design",
    ],
    tech: ["Figma", "Framer", "Design Tokens", "Radix UI", "Accessibility WCAG"],
  },
  {
    id: "security-audit",
    title: "Cybersecurity & Speed Optimization",
    category: "SecOps & Scale",
    icon: ShieldCheck,
    badge: "SOC2 Ready",
    gradient: "from-rose-500/20 via-red-500/10 to-transparent",
    borderGlow: "group-hover:border-rose-500/50",
    description:
      "Deep security penetration testing, code auditing, vulnerability mitigation, and Core Web Vitals optimization to guarantee sub-second load times.",
    features: [
      "OWASP Top 10 penetration auditing",
      "SOC2, HIPAA & GDPR compliance hardening",
      "Database indexing & query bottleneck elimination",
      "Edge caching & Global CDN optimization",
    ],
    tech: ["Snyk", "SonarQube", "WAF", "Redis", "Lighthouse 100", "SSL/TLS"],
  },
];

export const ServicesBento = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("web-saas");

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setInquiryOpen(true);
  };

  return (
    <>
      <section id="services" className="py-24 relative bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Engineered for Speed, Scale & Intelligence
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We replace fragmented freelancers with a dedicated, battle-tested engineering team capable of delivering complex digital products on time and on budget.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className={`group relative rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-7 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col justify-between overflow-hidden ${service.borderGlow}`}
                >
                  {/* Subtle Top Gradient */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-36 bg-gradient-to-b ${service.gradient} pointer-events-none`}
                  />

                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted border border-border/50 text-foreground/80">
                        {service.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-2 pt-5 border-t border-border/40 mt-5">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags & CTA Button */}
                  <div className="pt-6 mt-6 border-t border-border/40 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-muted/70 text-muted-foreground text-[10px] font-medium border border-border/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleServiceClick(service.id)}
                      variant="outline"
                      className="w-full justify-between text-xs font-semibold rounded-xl border-border/60 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all group/btn"
                    >
                      <span>Inquire About {service.category}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        prefilledService={selectedService}
      />
    </>
  );
};
