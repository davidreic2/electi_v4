import Navbar from "@/components/electi/Navbar";
import HeroSection from "@/components/electi/HeroSection";
import TestimonialsCarousel from "@/components/electi/TestimonialsCarousel";
import AboutSection from "@/components/electi/AboutSection";
import PillarsSection from "@/components/electi/PillarsSection";
import StatsBanner from "@/components/electi/StatsBanner";
import PartnersSection from "@/components/electi/PartnersSection";
import SocialProofSection from "@/components/electi/SocialProofSection";
import VideoSection from "@/components/electi/VideoSection";
import TeamSection from "@/components/electi/TeamSection";
import Footer from "@/components/electi/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TestimonialsCarousel />
        {/* Yellow divider */}
        <div className="h-4 bg-[#FAB834]" />
        <AboutSection />
        <PillarsSection />
        <StatsBanner />
        <PartnersSection />
        <SocialProofSection />
        <VideoSection />
        <TeamSection />
        {/* Yellow accent bar */}
        <div className="h-4 bg-[#FAB834]" />
      </main>
      <Footer />
    </div>
  );
}
