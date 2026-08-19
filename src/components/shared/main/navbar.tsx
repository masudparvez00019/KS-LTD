"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Sparkles,
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "./inquiry-modal";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Tech Matrix", href: "#tech-stack" },
  { name: "Case Studies", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Estimator", href: "#estimator" },
  { name: "Pricing", href: "#pricing" },
  { name: "Reviews", href: "#testimonials" },
];

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full pointer-events-auto transition-all duration-300 border ${
            scrolled
              ? "backdrop-blur-2xl bg-card/85 border-border/80 shadow-2xl shadow-black/10 dark:shadow-indigo-950/20 ring-1 ring-white/10"
              : "backdrop-blur-xl bg-card/60 border-border/40 shadow-lg shadow-black/5"
          }`}
        >
          {/* Minimalist Tech Agency Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none select-none"
          >
            {/* Minimal Geometric Logo Mark */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black text-sm tracking-tighter shadow-md transition-transform group-hover:scale-105 duration-200 border border-zinc-800 dark:border-zinc-200">
              <span className="font-mono">KS</span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-background" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                KS LTD
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground/80 px-2 py-0.5 rounded-full bg-muted/60 border border-border/40 hidden sm:inline-block">
                Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 px-3 py-1 rounded-full border border-border/50 bg-muted/30 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full border border-border/60 bg-muted/30 hover:bg-muted text-foreground transition-all"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-zinc-700" />
                )}
              </Button>
            )}

            {/* Start a Project Modern Luxury Shimmer Button */}
            <button
              onClick={() => setInquiryOpen(true)}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none hidden sm:inline-flex"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 dark:bg-zinc-900 text-zinc-100 text-xs font-medium tracking-wide transition-colors duration-200 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-800/90 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 group-hover:text-cyan-300 transition-colors" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 rounded-full border border-border/60 text-foreground"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-7xl mx-auto p-4 rounded-3xl bg-card/95 backdrop-blur-2xl border border-border/80 shadow-2xl space-y-3 pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-border/60">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setInquiryOpen(true);
                }}
                className="w-full bg-gradient-to-r from-indigo-600 via-primary to-cyan-500 text-white text-xs font-semibold py-2.5 rounded-2xl shadow-md gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>Book Technical Consultation</span>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global Project Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </>
  );
};

