import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "@/Components/StarBackground";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import AboutMe from "@/Components/AboutMe";
import SkillsSection from "@/Components/SkillsSection";
import ProjectsSection from "@/Components/ProjectsSection";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection/>
        <ProjectsSection/>
        <Contact/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
