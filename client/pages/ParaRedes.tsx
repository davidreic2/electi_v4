import Navbar from "@/components/electi/Navbar";
import Footer from "@/components/electi/Footer";
import ParaRedesHero from "@/components/electi/ParaRedesHero";
import ParaRedesAbordagem from "@/components/electi/ParaRedesAbordagem";
import ParaRedesPillars from "@/components/electi/ParaRedesPillars";
import ParaRedesImpacts from "@/components/electi/ParaRedesImpacts";
import ParaRedesEspecialistas from "@/components/electi/ParaRedesEspecialistas";
import ParaRedesTreinamentos from "@/components/electi/ParaRedesTreinamentos";

export default function ParaRedes() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-1">
        {/* 1. Orange hero with title + 4 icon cards */}
        <ParaRedesHero />

        {/* 2. Yellow "Uma Abordagem Personalizada" banner */}
        <ParaRedesAbordagem />

        {/* 3. White 4-pillar cards */}
        <ParaRedesPillars />

        {/* 4. Purple "Impactos esperados" section */}
        <ParaRedesImpacts />

        {/* 5. Workshop photo + Specialists + Org chart */}
        <ParaRedesEspecialistas />

        {/* 6. Treinamentos iniciais with 3 training cards */}
        <ParaRedesTreinamentos />

        {/* 7. Pandinha board game image */}
        <img
          src="/images/2b71bc03758f10515c4f3d6bbfd8981477ad5764.webp"
          alt="Jogo Pandinha Electi"
          className="w-full h-[320px] md:h-[480px] lg:h-[600px] object-cover"
        />
      </main>
      <Footer />
    </div>
  );
}
