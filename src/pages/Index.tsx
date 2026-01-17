import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AcademicsSection } from "@/components/sections/AcademicsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ManagementSection } from "@/components/sections/ManagementSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <GallerySection />
        <ResultsSection />
        <ManagementSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
