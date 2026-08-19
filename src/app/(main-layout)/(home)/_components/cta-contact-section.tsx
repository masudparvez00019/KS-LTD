"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Send,
  Mail,
  Phone,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { InquiryModal } from "@/components/shared/main/inquiry-modal";

export const CtaContactSection = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please provide your name and email address.");
      return;
    }
    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSending(false);
    toast.success("Direct Message Sent!", {
      description: "Our engineering leadership will get back to you within 2 business hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden bg-background">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/15 via-primary/20 to-cyan-500/15 blur-[140px] pointer-events-none -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-b from-card/90 via-card/80 to-muted/40 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & Value props */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready for High Velocity?</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                  Let&apos;s Build Your Next Breakthrough Product
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Whether you need an end-to-end SaaS MVP, an autonomous AI workflow, or an enterprise-grade cloud revamp, our senior engineering squad is ready to execute.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-foreground/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Free 30-Minute Architecture & Scoping Session with our CTO</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-foreground/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Detailed Technical Blueprint & Milestone-Based Fixed Proposal</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-foreground/90 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>100% Codebase & IP Ownership with Zero Vendor Lock-in</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setInquiryOpen(true)}
                    className="relative group overflow-hidden rounded-full p-[1.5px] focus:outline-none"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full animate-pulse-glow" />
                    <span className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-zinc-950 dark:bg-zinc-900 text-zinc-100 font-semibold text-sm tracking-wide transition-all duration-200 group-hover:bg-zinc-900 shadow-xl shadow-indigo-500/10">
                      <Calendar className="w-4 h-4 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                      <span>Book Discovery Consultation</span>
                      <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Direct Quick Contact Form */}
              <div className="lg:col-span-5 bg-card/80 p-6 sm:p-8 rounded-2xl border border-border/70 shadow-xl space-y-4">
                <div className="space-y-1">
                  <h3 className="font-bold text-lg text-foreground">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Directly reaches our engineering triage team.
                  </p>
                </div>

                <form onSubmit={handleQuickSubmit} className="space-y-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground/80">
                      Your Name
                    </label>
                    <Input
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/40 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground/80">
                      Work Email
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/40 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground/80">
                      Tell us what you&apos;re building
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="Describe your tech requirements, timeline, or current bottlenecks..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-muted/40 text-xs resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs py-5 rounded-xl gap-2 shadow-md"
                  >
                    {isSending ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message to Engineers</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
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
