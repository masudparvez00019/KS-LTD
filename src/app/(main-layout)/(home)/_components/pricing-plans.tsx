"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "@/components/shared/main/inquiry-modal";

const pricingTiers = [
  {
    name: "Dedicated Engineering Squad",
    badge: "Most Popular for Startups",
    price: "$8,500",
    period: "/ month",
    description:
      "Your dedicated, high-velocity engineering and design team. Pause or cancel anytime.",
    features: [
      "Dedicated Senior Fullstack + AI Engineer",
      "Dedicated Senior UI/UX Product Designer",
      "Bi-weekly sprint demos & daily async Slack updates",
      "Unlimited task requests & code reviews",
      "Direct CTO & Principal Architect supervision",
      "Zero recruitment overhead or long-term lock-in",
    ],
    highlight: true,
    actionText: "Hire Dedicated Squad",
  },
  {
    name: "Project-Based (Fixed Scope)",
    badge: "Milestone Delivery",
    price: "From $15,000",
    period: "fixed price",
    description:
      "Guaranteed scope, guaranteed timeline, and guaranteed outcome for greenfield builds.",
    features: [
      "Complete Discovery & System Architecture Blueprint",
      "Full Figma Design System & interactive prototype",
      "End-to-end frontend & backend development",
      "Automated testing suite & OWASP security audit",
      "Zero-downtime production cloud deployment",
      "30-day post-launch warranty & bug fixes included",
    ],
    highlight: false,
    actionText: "Get Fixed Scope Proposal",
  },
  {
    name: "Enterprise Transformation",
    badge: "Custom Architecture",
    price: "Custom",
    period: "tailored scope",
    description:
      "Multi-region cloud infrastructure, proprietary AI model fine-tuning, and enterprise compliance.",
    features: [
      "Multi-region Kubernetes & Edge Cloud Orchestration",
      "Custom Private LLMs & Hybrid Vector RAG pipelines",
      "SOC2 Type II, HIPAA & GDPR compliance hardening",
      "Dedicated DevOps & SecOps specialists",
      "Guaranteed 15-minute response time 24/7 SLA",
      "Executive quarterly architecture reviews",
    ],
    highlight: false,
    actionText: "Contact Enterprise Sales",
  },
];

const faqs = [
  {
    question: "How quickly can a KS LTD engineering squad kick off our project?",
    answer:
      "Following our initial technical discovery call and contract sign-off, our dedicated engineering squad can onboard and begin sprint execution in as little as 3 to 5 business days.",
  },
  {
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "You own 100% of all intellectual property, source code, design files, and documentation from day one. Everything is hosted in your private GitHub repositories with zero vendor lock-in.",
  },
  {
    question: "How do you ensure code quality, performance, and security?",
    answer:
      "Every pull request undergoes peer review by a Principal Architect, automated Playwright/Jest testing, SonarQube static analysis, and OWASP vulnerability scans. We target 95+ Google Lighthouse scores by default.",
  },
  {
    question: "Can we transition to in-house developers later?",
    answer:
      "Absolutely. We write clean, self-documenting code with comprehensive READMEs and architectural blueprints. When you are ready to hire in-house, we provide complete handover sessions to ensure a frictionless transition.",
  },
  {
    question: "What communication channels do you use during sprints?",
    answer:
      "We integrate directly into your workflow: dedicated shared Slack/Discord channels, bi-weekly video sprint demonstrations, Jira/Linear sprint tracking, and GitHub project boards.",
  },
];

export const PricingPlans = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <section id="pricing" className="py-24 relative bg-card/20 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Engagement Models</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Predictable Pricing. No Surprises.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Choose the model that fits your stage: a full dedicated squad on flexible monthly retainer, or a fixed-scope milestone engagement.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlight
                    ? "bg-gradient-to-b from-card via-card to-primary/5 border-2 border-primary shadow-2xl shadow-primary/15 scale-[1.02]"
                    : "bg-card/70 border border-border/60 shadow-lg hover:border-border"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  {!tier.highlight && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/50 w-fit block mb-4">
                      {tier.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {tier.name}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-border/50 flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {tier.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground/90 block">
                      What&apos;s Included:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    onClick={() => setInquiryOpen(true)}
                    className={`w-full py-6 rounded-xl font-semibold text-xs sm:text-sm gap-2 ${
                      tier.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                        : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                    }`}
                  >
                    <span>{tier.actionText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto pt-8">
            <div className="text-center space-y-3 mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Got Questions? We&apos;ve Got Answers.
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border/60 bg-card/60 overflow-hidden backdrop-blur-md transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-foreground hover:text-primary transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
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
