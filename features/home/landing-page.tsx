import React from "react";
import HeroSection from "./components/hero";
import WhySection from "./components/why";
import TeamSection from "./components/team";
import FooterSection from "./components/footer";

function LandingPage() {
  return (
    <div className=" flex flex-col">
      <HeroSection />
      <WhySection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}

export default LandingPage;
