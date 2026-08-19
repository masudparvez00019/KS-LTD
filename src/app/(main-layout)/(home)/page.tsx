import React from "react";
import { HeroSection } from "./_components/hero-section";
import { ClientMarquee } from "./_components/client-marquee";
import { ServicesBento } from "./_components/services-bento";
import { TechStackShowcase } from "./_components/tech-stack-showcase";
import { PortfolioShowcase } from "./_components/portfolio-showcase";
import { ProcessTimeline } from "./_components/process-timeline";
import { ProjectEstimator } from "./_components/project-estimator";
import { PricingPlans } from "./_components/pricing-plans";
import { TestimonialsSection } from "./_components/testimonials-section";
import { CtaContactSection } from "./_components/cta-contact-section";

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <ClientMarquee />
      <ServicesBento />
      <TechStackShowcase />
      <PortfolioShowcase />
      <ProcessTimeline />
      <ProjectEstimator />
      <PricingPlans />
      <TestimonialsSection />
      <CtaContactSection />
    </div>
  );
};

export default HomePage;