import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "@/Components/StarBackground";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="md:mt-1">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
      </div>
      {/* Main Content */}
      <main>
        <HeroSection />
      </main>
      {/* Footer */}
    </div>
  );
};

export default Home;
