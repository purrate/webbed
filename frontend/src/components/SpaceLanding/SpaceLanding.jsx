import React from "react";
import "./SpaceLanding.css";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { TechnologySection } from "./TechnologySection";
import { AdventureSection } from "./AdventureSection";
import { DestinationSection } from "./DestinationSection";
import { WorldsSection } from "./WorldsSection";
import { Footer } from "./Footer";

export const SpaceLanding = () => {
  return (
    <div className="space-landing">
      <div className="space-landing__content">
        <div className="space-landing__main">
          <div className="space-landing__hero-container">
            <div className="space-landing__hero-wrapper">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/184758861a3dc8da6236fd31614caab6726dd756528753774afe909f424766d3?placeholderIfAbsent=true"
                className="space-landing__hero-bg"
                alt="Space background"
              />
              <Header />
              <HeroSection />
            </div>
          </div>
          <TechnologySection />
          <AdventureSection />
          <DestinationSection />
          <WorldsSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};
