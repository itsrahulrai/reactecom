import React from "react";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/Timeline";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-white-100">
      <HeroSection />
      <TimelineSection />
      <TeamSection />
       <Footer />
    </div>
  );
};

export default About;
