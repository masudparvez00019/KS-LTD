"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Terminal,
  ArrowUpRight,
  Send,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Globe,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubscribed(true);
    toast.success("Subscribed to Tech Dispatch!", {
      description: "You'll receive quarterly architectural insights and case studies.",
    });
    setEmail("");
  };

  return (
    <footer className="relative border-t border-border/60 bg-card/60 backdrop-blur-xl text-card-foreground pt-16 pb-12 overflow-hidden">
      {/* Decorative gradient background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/50">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black text-sm tracking-tighter shadow-md transition-transform group-hover:scale-105 duration-200 border border-zinc-800 dark:border-zinc-200">
                <span className="font-mono">KS</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-background" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                  KS LTD
                </span>
                <span className="text-[10px] font-semibold text-muted-foreground/80 px-2 py-0.5 rounded-full bg-muted/60 border border-border/40">
                  Agency
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              KS LTD is an elite engineering agency building enterprise software, autonomous AI systems, and high-velocity web platforms for market leaders.
            </p>

            {/* System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Production Systems Operational (99.98% SLA)</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: FaGithub, href: "https://github.com", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Globe, href: "#", label: "Global Presence" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-xl border border-border/60 bg-muted/40 hover:bg-primary/10 hover:text-primary hover:border-primary/40 flex items-center justify-center text-muted-foreground transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links 1: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Web & SaaS Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  AI Agents & RAG Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Cloud & Kubernetes DevOps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  UI/UX & Design Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Security & Speed Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2: Agency */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Agency & Work
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-primary transition-colors">
                  Technology Matrix
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors">
                  Engineering Lifecycle
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-primary transition-colors">
                  Project Cost Calculator
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Squad & Retainer Models
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Client Reviews & NPS
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 3: Newsletter & Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Technical Dispatch
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Receive quarterly whitepapers on distributed systems, AI scaling, and architecture.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="tech-lead@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-muted/40 border-border/60 text-xs pr-10 rounded-xl"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7 bg-primary text-primary-foreground rounded-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>
            </form>

            <div className="pt-2 text-xs text-muted-foreground space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>contact@ks-ltd.tech</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Global HQ & Distributed Engineering</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KS LTD. All rights reserved. Built with precision & Next.js.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Security Compliance (SOC2 Ready)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
