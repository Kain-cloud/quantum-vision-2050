import HeroSection from "@/components/sections/HeroSection";
import QuantumSection from "@/components/sections/QuantumSection";
import QuantumComputerSection from "@/components/sections/QuantumComputerSection";
import InnovationsSection from "@/components/sections/InnovationsSection";
import DailyLifeSection from "@/components/sections/DailyLifeSection";
import SpaceSection from "@/components/sections/SpaceSection";
import ConclusionSection from "@/components/sections/ConclusionSection";
import NavDots from "@/components/NavDots";
import ParticleField from "@/components/ParticleField";
import AIChatWidget from "@/components/AIChatWidget";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleField count={20} />
      <NavDots />
      <AIChatWidget />
      
      <div id="hero">
        <HeroSection />
      </div>
      <QuantumSection />
      <QuantumComputerSection />
      <InnovationsSection />
      <DailyLifeSection />
      <SpaceSection />
      <ConclusionSection />

      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border/30">
        <p>© 2050 — Jeta në vitin 2050: Fizika kuantike dhe inovacionet e reja</p>
      </footer>
    </div>
  );
};

export default Index;
