"use client";

import React, { useState } from "react";
import {
  Code,
  Server,
  Bot,
  Cloud,
  Database,
  Sparkles,
  Search,
  CheckCircle,
  Zap,
} from "lucide-react";
import { Input } from "@/components/ui/input";

type TechCategory = "all" | "frontend" | "backend" | "ai" | "cloud" | "database";

interface TechItem {
  name: string;
  category: TechCategory;
  role: string;
  badge: string;
  mastery: string;
  iconName: string;
}

const techItems: TechItem[] = [
  // Frontend
  { name: "Next.js 16 (App Router)", category: "frontend", role: "SSR & Edge Framework", badge: "Primary", mastery: "99%", iconName: "▲" },
  { name: "React 19 & Server Actions", category: "frontend", role: "UI Component Library", badge: "Core", mastery: "98%", iconName: "⚛" },
  { name: "TypeScript 6.0", category: "frontend", role: "Type Safety Architecture", badge: "Standard", mastery: "99%", iconName: "TS" },
  { name: "Tailwind CSS v4", category: "frontend", role: "High-Performance Styling", badge: "Design", mastery: "99%", iconName: "🎨" },
  { name: "Framer Motion", category: "frontend", role: "Fluid 60fps Micro-interactions", badge: "Motion", mastery: "95%", iconName: "⚡" },
  { name: "TanStack Query v5", category: "frontend", role: "Asynchronous Server State", badge: "Caching", mastery: "96%", iconName: "🔄" },

  // Backend
  { name: "Node.js & Express", category: "backend", role: "Distributed Microservices", badge: "Runtime", mastery: "98%", iconName: "⬢" },
  { name: "Go (Golang)", category: "backend", role: "Ultra-Low Latency Engines", badge: "High Speed", mastery: "94%", iconName: "GO" },
  { name: "Python FastAPI", category: "backend", role: "AI Services & High Throughput", badge: "AI Backend", mastery: "97%", iconName: "🐍" },
  { name: "GraphQL & RESTful APIs", category: "backend", role: "Schema Federation & Gateways", badge: "Protocols", mastery: "96%", iconName: "◈" },
  { name: "gRPC & Protocol Buffers", category: "backend", role: "Inter-service Binary Comms", badge: "Scale", mastery: "92%", iconName: "📦" },

  // AI & ML
  { name: "Claude 3.7 & Anthropic SDK", category: "ai", role: "Reasoning & Agent Tool Calling", badge: "SOTA", mastery: "98%", iconName: "🧠" },
  { name: "OpenAI GPT-4o & Assistants", category: "ai", role: "Multimodal Generation", badge: "Enterprise", mastery: "98%", iconName: "🤖" },
  { name: "DeepSeek-R1 & Local LLMs", category: "ai", role: "Cost-Optimized Private Inference", badge: "Privacy", mastery: "95%", iconName: "💡" },
  { name: "Pinecone & Qdrant Vector DBs", category: "ai", role: "RAG Embeddings & Hybrid Search", badge: "Vector", mastery: "96%", iconName: "🧬" },
  { name: "LangChain & LlamaIndex", category: "ai", role: "Orchestration & Workflow Agents", badge: "Framework", mastery: "94%", iconName: "🔗" },

  // Cloud & DevOps
  { name: "Amazon Web Services (AWS)", category: "cloud", role: "ECS, Lambda, S3, RDS, CloudFront", badge: "Cloud Leader", mastery: "98%", iconName: "☁" },
  { name: "Kubernetes & Docker", category: "cloud", role: "Container Orchestration & Scaling", badge: "DevOps", mastery: "95%", iconName: "☸" },
  { name: "Cloudflare Workers & Edge", category: "cloud", role: "Zero-Latency Global Routing", badge: "Edge", mastery: "97%", iconName: "🛡" },
  { name: "Terraform IaC", category: "cloud", role: "Automated Infrastructure as Code", badge: "IaC", mastery: "93%", iconName: "🏗" },
  { name: "GitHub Actions CI/CD", category: "cloud", role: "Automated Testing & Deployment", badge: "Automation", mastery: "99%", iconName: "🚀" },

  // Database
  { name: "PostgreSQL & Supabase", category: "database", role: "ACID Relational Data & Row Security", badge: "Relational", mastery: "99%", iconName: "🐘" },
  { name: "Redis & Upstash", category: "database", role: "Sub-millisecond In-memory Caching", badge: "Speed", mastery: "98%", iconName: "⚡" },
  { name: "MongoDB & Prisma ORM", category: "database", role: "Document Storage & Type-Safe Access", badge: "Flexible", mastery: "96%", iconName: "🍃" },
  { name: "ClickHouse & BigQuery", category: "database", role: "Real-time Analytical Warehousing", badge: "Analytics", mastery: "92%", iconName: "📊" },
];

export const TechStackShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = techItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="tech-stack" className="py-24 relative bg-card/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Engineering Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Battle-Tested Modern Stack
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We don&apos;t chase fleeting hype. We build with reliable, enterprise-grade frameworks and AI infrastructures that deliver peak speed, uptime, and maintainability.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-card border border-border/60 shadow-sm">
            {[
              { id: "all", label: "All Technologies" },
              { id: "frontend", label: "Frontend & UI" },
              { id: "backend", label: "Backend & APIs" },
              { id: "ai", label: "AI & Machine Learning" },
              { id: "cloud", label: "Cloud & DevOps" },
              { id: "database", label: "Databases & Cache" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id as TechCategory)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              placeholder="Search stack or tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-card border-border/60 text-xs rounded-xl h-10"
            />
          </div>
        </div>

        {/* Grid of Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((tech, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl border border-border/60 bg-card/60 hover:bg-muted/40 hover:border-primary/40 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs group-hover:scale-105 transition-transform">
                    {tech.iconName}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-muted text-foreground/80 border border-border/40">
                    {tech.badge}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                  {tech.role}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-border/40 flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground">Engineering Rigor:</span>
                <span className="font-bold text-primary flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                  {tech.mastery}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No technologies match your search criteria.
          </div>
        )}
      </div>
    </section>
  );
};
