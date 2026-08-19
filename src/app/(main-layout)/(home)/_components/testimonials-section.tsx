"use client";

import React from "react";
import {
  Star,
  Quote,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
} from "lucide-react";

const testimonials = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "ApexScale AI",
    avatar: "MV",
    rating: 5,
    quote:
      "KS LTD restructured our entire data pipeline and Next.js frontend in just 6 weeks. Our query latency dropped by 80%, and we handled our highest ever traffic spike during our Series A announcement without a single hiccup.",
  },
  {
    name: "Elena Rostova",
    role: "Head of Product",
    company: "FinVeloce Bank",
    avatar: "ER",
    rating: 5,
    quote:
      "The engineering discipline at KS LTD is world-class. They built our React Native mobile banking app with biometric security and instant fiat-to-crypto bridging. The app currently holds a 4.9-star rating on the App Store.",
  },
  {
    name: "Dr. Jonathan Hayes",
    role: "VP of Medical Informatics",
    company: "OmniHealth Labs",
    avatar: "JH",
    rating: 5,
    quote:
      "Finding an engineering agency that genuinely understands HIPAA compliance, zero-logging inference, and vector search seemed impossible until we partnered with KS LTD. They delivered our AI diagnostic agent ahead of schedule.",
  },
  {
    name: "Samantha Lin",
    role: "Founder & CEO",
    company: "Aura Commerce",
    avatar: "SL",
    rating: 5,
    quote:
      "KS LTD replaced our slow Shopify monolith with a custom headless Next.js architecture. Our conversion rate increased by 42% in month one, and our page load time is now under 600ms globally.",
  },
  {
    name: "David Sterling",
    role: "Director of Infrastructure",
    company: "Vortex Cloud",
    avatar: "DS",
    rating: 5,
    quote:
      "Their DevOps engineers orchestrated our multi-region Kubernetes clusters with Terraform and ArgoCD. We now deploy to production 15 times a day with automated canary rollouts and zero downtime.",
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Chief Information Security Officer",
    company: "CyberFortress",
    avatar: "TA",
    rating: 5,
    quote:
      "The security rigor and attention to detail from KS LTD is rare in the agency world. Every pull request had thorough automated test coverage and zero vulnerabilities. They are our go-to engineering squad.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Praise & Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Trusted by Leaders at Scale
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Read what CTOs, Founders, and VP of Products have to say about partnering with KS LTD for mission-critical software engineering.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-border/60 bg-card/60 p-6 sm:p-7 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star
                        key={rIdx}
                        className="w-4 h-4 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/30" />
                </div>

                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-border/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-cyan-500 flex items-center justify-center text-primary-foreground font-bold text-xs shadow-sm">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">
                    {item.name}
                  </h4>
                  <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <span>{item.role}</span>
                    <span>•</span>
                    <span className="font-medium text-foreground/80">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
