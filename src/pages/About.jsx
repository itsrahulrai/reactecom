import React from "react";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/Timeline";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-100">
      <HeroSection />
      <TimelineSection />
      <TeamSection />
    </div>
  );
};

export default About;
