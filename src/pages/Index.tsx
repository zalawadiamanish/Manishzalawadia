import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import StarfieldBackground from "@/components/StarfieldBackground";
import ScrollProgress from "@/components/ScrollProgress";
import FixedEmail from "@/components/FixedEmail";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Helmet>
        <title>Manish Zalawadia | Assistant Professor - Computer Science</title>
        <meta
          name="description"
          content="Manish Zalawadia - Assistant Professor specializing in Computer Science, IT, and Data Science. 5+ years of teaching experience in systems programming, microprocessors, and computer networks."
        />
        <meta
          name="keywords"
          content="Manish Zalawadia, Assistant Professor, Computer Science, IT, Data Science, Mumbai, Teaching, Microprocessor, Computer Networks"
        />
        <meta name="author" content="Manish Zalawadia" />
        <meta
          property="og:title"
          content="Manish Zalawadia | Assistant Professor - Computer Science"
        />
        <meta
          property="og:description"
          content="Educator and Computer Engineering Specialist with 5+ years of experience mentoring students in IT, CS & Data Science."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://manishzalawadia.com" />
      </Helmet>

      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <>
          <StarfieldBackground />
          <ScrollProgress />
          <CustomCursor />
          <FixedEmail />
          <div className="min-h-screen bg-transparent relative z-10">
            <Navigation />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ExperienceSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
          <BackToTop />
        </>
      )}
    </>
  );
};

export default Index;
