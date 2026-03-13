import Navbar from "@/components/electi/Navbar";
import Footer from "@/components/electi/Footer";
import AElectiHero from "@/components/electi/AElectiHero";
import AElectiInfoBanner from "@/components/electi/AElectiInfoBanner";
import AElectiPillars from "@/components/electi/AElectiPillars";
import AElectiImpacts from "@/components/electi/AElectiImpacts";
import AElectiHowSection from "@/components/electi/AElectiHowSection";

export default function AElecti() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero – yellow bg, title + 4 category cards */}
        <AElectiHero />

        {/* 2. Purple info banner */}
        <AElectiInfoBanner />

        {/* 3. White pillar cards */}
        <AElectiPillars />

        {/* 4. Full-width classroom photo */}
        <img
          src="/images/f80668706c074f3936f1820cfa6c78852f3f767a.webp"
          alt="Sala de aula Electi"
          className="w-full h-[320px] md:h-[420px] lg:h-[521px] object-cover"
        />

        {/* 5. Purple impacts section */}
        <AElectiImpacts />

        {/* 6. Green "Como fazemos" accordion */}
        <AElectiHowSection />

        {/* Yellow divider */}
        <div className="h-4 bg-[#FAB834]" />
      </main>
      <Footer />
    </div>
  );
}
