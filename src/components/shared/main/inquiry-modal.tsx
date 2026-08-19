"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Sparkles,
  Send,
  CheckCircle2,
  Code2,
  Smartphone,
  Bot,
  Cloud,
  Layers,
  ShieldCheck,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

const serviceOptions = [
  { id: "web-saas", label: "Web App & SaaS", icon: Code2 },
  { id: "mobile-app", label: "Mobile App (iOS/Android)", icon: Smartphone },
  { id: "ai-automation", label: "AI Agent & ML Systems", icon: Bot },
  { id: "cloud-devops", label: "Cloud & DevOps Architecture", icon: Cloud },
  { id: "ui-ux", label: "UI/UX & Design Systems", icon: Layers },
  { id: "security-audit", label: "Enterprise Security & Scale", icon: ShieldCheck },
];

const budgetRanges = [
  "<$5,000",
  "$5,000 - $15,000",
  "$15,000 - $35,000",
  "$35,000 - $75,000",
  "$75,000+",
];

const timelineOptions = [
  "Immediately (Within 1-2 weeks)",
  "Next Month",
  "Flexible / Q3-Q4",
  "Exploring & Consulting",
];

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState<string>(
    prefilledService || "web-saas"
  );
  const [selectedBudget, setSelectedBudget] = useState<string>("$15,000 - $35,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>(
    "Immediately (Within 1-2 weeks)"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please provide at least your name and email address.");
      return;
    }

    setIsSubmitting(true);
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Consultation Request Received!", {
      description:
        "Our engineering director will review your brief and contact you within 4 hours.",
    });
  };

  const handleResetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        description: "",
      });
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleResetAndClose()}>
      <DialogContent className="max-w-2xl bg-card border-border/60 text-card-foreground shadow-2xl p-6 sm:p-8 rounded-2xl overflow-hidden backdrop-blur-xl">
        {isSuccess ? (
          <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto ring-8 ring-primary/5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold tracking-tight">
                Project Brief Shipped Successfully!
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Our technical leads are reviewing your project parameters and will send a custom sprint proposal to <span className="font-semibold text-foreground">{formData.email}</span>.
              </p>
            </div>

            <div className="p-4 bg-muted/40 rounded-xl text-left border border-border/40 text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between text-muted-foreground">
                <span>Selected Track:</span>
                <span className="font-medium text-foreground capitalize">
                  {serviceOptions.find((s) => s.id === selectedService)?.label}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Target Budget:</span>
                <span className="font-medium text-foreground">{selectedBudget}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Target Timeline:</span>
                <span className="font-medium text-foreground">{selectedTimeline}</span>
              </div>
            </div>

            <Button
              onClick={handleResetAndClose}
              className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg"
            >
              Done & Return to Site
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KS LTD Discovery & Estimate</span>
              </div>
              <DialogTitle className="text-2xl font-bold tracking-tight">
                Let&apos;s Build Your Next High-Impact System
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-xs sm:text-sm">
                Fill out the quick project brief below to get an architectural scope, team allocation, and estimated sprint timeline.
              </DialogDescription>
            </DialogHeader>

            {/* Step Indicators */}
            <div className="flex items-center gap-3 py-2 border-b border-border/40 text-xs">
              <div
                className={`flex items-center gap-2 font-medium cursor-pointer transition-colors ${
                  step === 1 ? "text-primary font-bold" : "text-muted-foreground"
                }`}
                onClick={() => setStep(1)}
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-primary/15 text-primary text-[11px]">
                  1
                </span>
                <span>Project Scope & Budget</span>
              </div>
              <ArrowRight className="w-3 h-3 text-muted-foreground/40" />
              <div
                className={`flex items-center gap-2 font-medium ${
                  step === 2 ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-muted text-muted-foreground text-[11px]">
                  2
                </span>
                <span>Contact & Brief</span>
              </div>
            </div>

            {step === 1 ? (
              <form onSubmit={handleNextStep} className="space-y-5 pt-2">
                {/* Services Grid */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Select Primary Domain
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedService === opt.id;
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => setSelectedService(opt.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm transition-all duration-200 ${
                            isSelected
                              ? "border-primary bg-primary/10 text-foreground font-medium shadow-sm ring-1 ring-primary/40"
                              : "border-border/60 bg-card/60 hover:bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          <div
                            className={`p-1.5 rounded-lg ${
                              isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Anticipated Budget Range
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgetRanges.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setSelectedBudget(b)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          selectedBudget === b
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-muted/40 border-border/60 text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                    Desired Kickoff Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timelineOptions.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTimeline(t)}
                        className={`p-2.5 rounded-lg text-xs text-left border transition-all flex items-center gap-2 ${
                          selectedTimeline === t
                            ? "bg-primary/10 border-primary text-foreground font-medium"
                            : "bg-muted/30 border-border/50 text-muted-foreground hover:bg-muted/50"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                        <span className="truncate">{t}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6"
                  >
                    <span>Proceed to Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/30 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/30 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">
                      Company / Organization
                    </label>
                    <Input
                      placeholder="e.g. Apex Scale Labs"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-muted/30 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-foreground">
                      Phone / WhatsApp (Optional)
                    </label>
                    <Input
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-muted/30 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-foreground">
                    Project Brief & Goals
                  </label>
                  <Textarea
                    rows={3}
                    placeholder="Tell us about the problem you're solving, tech preferences, or required integrations..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="bg-muted/30 text-sm resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setStep(1)}
                    className="text-xs"
                  >
                    Back to Scope
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
