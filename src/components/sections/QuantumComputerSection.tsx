import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import coreImg from "@/assets/quantum-computer-core.jpg";

type Component = {
  id: string;
  label: string;
  emoji: string;
  color: "primary" | "secondary" | "accent";
  position: { top: string; left: string };
  title: string;
  description: string;
  funFact: string;
};

const components: Component[] = [
  {
    id: "qubit",
    label: "Kubiti",
    emoji: "⚛️",
    color: "primary",
    position: { top: "8%", left: "44%" },
    title: "Kubiti — Qeliza e informacionit",
    description:
      "Kubiti është njësia bazë e kompjuterit kuantik. Ndryshe nga biti klasik (0 ose 1), kubiti mund të jetë 0, 1 ose të dyja njëkohësisht falë superpozicionit.",
    funFact: "💡 1000 kubitë mund të bëjnë më shumë llogaritje sesa atomet që ka i gjithë universi i njohur!",
  },
  {
    id: "cooling",
    label: "Ftohja",
    emoji: "❄️",
    color: "secondary",
    position: { top: "30%", left: "82%" },
    title: "Sistemi kriogjenik",
    description:
      "Kompjuteri kuantik duhet të ftohet në -273°C — më ftohtë se hapësira! Kjo i mban kubitët të qëndrueshëm nga zhurma termike.",
    funFact: "🥶 Brenda kompjuterit kuantik është më ftohtë se kudo në univers.",
  },
  {
    id: "laser",
    label: "Lazerët",
    emoji: "🔦",
    color: "accent",
    position: { top: "70%", left: "82%" },
    title: "Lazerët kontrollues",
    description:
      "Lazerët precizë manipulojnë kubitët, duke vendosur gjendjet e tyre kuantike dhe ndërvepruar mes tyre.",
    funFact: "🎯 Lazerët veprojnë në mbi 1 milion herë në sekondë me precizitet të perfekt.",
  },
  {
    id: "entanglement",
    label: "Ngatërrimi",
    emoji: "🔗",
    color: "primary",
    position: { top: "92%", left: "44%" },
    title: "Ngatërrimi kuantik",
    description:
      "Kubitët 'lidhen' dhe ndajnë informacionin menjëherë, çfarëdo distancë mes tyre. Kjo i jep kompjuterit kuantik fuqinë e tij.",
    funFact: "✨ Einstein e quante 'veprim i frikshëm nga distanca'.",
  },
  {
    id: "algorithm",
    label: "Algoritmi",
    emoji: "🧮",
    color: "secondary",
    position: { top: "70%", left: "6%" },
    title: "Algoritmet kuantike",
    description:
      "Programe të posaçme si algoritmi i Shor-it ose Grover-it shfrytëzojnë rregullat kuantike për të zgjidhur probleme të pamundura për kompjuterët klasikë.",
    funFact: "⚡ Google zgjidhi në 200 sekonda një problem që do t'i merrte 10,000 vite një superkompjuteri klasik.",
  },
  {
    id: "readout",
    label: "Leximi",
    emoji: "📡",
    color: "accent",
    position: { top: "30%", left: "6%" },
    title: "Leximi i rezultatit",
    description:
      "Sensorët e ndjeshëm matin gjendjen e kubitëve. Kur i vëzhgojmë, ata 'zgjedhin' një gjendje konkrete (0 ose 1) — kjo është përgjigjja jonë.",
    funFact: "👁️ Kjo është efekti i vëzhguesit në veprim — matja ndryshon sistemin!",
  },
];

const colorClasses: Record<Component["color"], { ring: string; badge: string; title: string; glow: string }> = {
  primary: {
    ring: "border-primary/60",
    badge: "bg-primary/20 border-primary/40 text-primary",
    title: "text-primary",
    glow: "shadow-[0_0_20px_hsl(263,70%,50%,0.5)]",
  },
  secondary: {
    ring: "border-secondary/60",
    badge: "bg-secondary/20 border-secondary/40 text-secondary",
    title: "text-secondary",
    glow: "shadow-[0_0_20px_hsl(187,80%,55%,0.5)]",
  },
  accent: {
    ring: "border-accent/60",
    badge: "bg-accent/20 border-accent/40 text-accent",
    title: "text-accent",
    glow: "shadow-[0_0_20px_hsl(45,96%,56%,0.5)]",
  },
};

export default function QuantumComputerSection() {
  const { ref, visible } = useScrollReveal();
  const [selected, setSelected] = useState<Component | null>(null);

  return (
    <section className="relative py-24 md:py-36 px-4" id="quantum-computer">
      <div ref={ref} className={`max-w-6xl mx-auto ${visible ? "section-visible" : "section-hidden"}`}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary mb-4 tracking-wider uppercase">
            Seksioni 2
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-6">
            Kompjuteri kuantik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Kliko mbi pjesët e diagramit për të zbuluar si funksionon makina më e fuqishme e shekullit 21.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 group">
          <img
            src={coreImg}
            alt="Bërthama e kompjuterit kuantik"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1280}
            height={896}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="text-sm text-foreground/80 font-medium">
              Bërthama kuantike — kandelabri i artë i kubitëve i ftohur në -273°C
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Interactive diagram */}
          <div className="relative aspect-square w-full max-w-xl mx-auto">
            {/* Spinning rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "30s" }} />
            <div className="absolute inset-8 rounded-full border border-secondary/20 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
            <div className="absolute inset-16 rounded-full border border-accent/20 animate-spin" style={{ animationDuration: "15s" }} />

            {/* Center core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-4xl md:text-5xl animate-pulse-glow shadow-[0_0_60px_hsl(263,70%,50%,0.5)]">
              <span className="bg-background/40 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center backdrop-blur">
                💎
              </span>
            </div>

            {/* Component dots */}
            {components.map((c) => {
              const isActive = selected?.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelected(isActive ? null : c)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/dot"
                  style={{ top: c.position.top, left: c.position.left }}
                  aria-label={c.label}
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full glass-card flex items-center justify-center text-2xl md:text-3xl border-2 transition-all duration-300 ${
                      isActive
                        ? `${colorClasses[c.color].ring} ${colorClasses[c.color].glow} scale-110`
                        : "border-border/40 hover:scale-110 hover:border-foreground/40"
                    }`}
                  >
                    {c.emoji}
                  </div>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] md:text-xs text-foreground/80 whitespace-nowrap font-medium">
                    {c.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Info panel */}
          <div className="glass-card rounded-2xl p-6 md:p-8 min-h-[320px] holographic-border">
            {selected ? (
              <div className="animate-fade-in">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${colorClasses[selected.color].badge}`}>
                  {selected.emoji} {selected.label}
                </span>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${colorClasses[selected.color].title}`}>
                  {selected.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{selected.description}</p>
                <div className="glass-card rounded-xl p-4 border border-border/40">
                  <p className="text-sm text-foreground/90">{selected.funFact}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Mbyll
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-10">
                <div className="text-5xl mb-4 animate-float">👆</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Eksploro pjesët</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                  Kliko mbi çdo simbol rreth bërthamës për të mësuar si funksionon kompjuteri kuantik nga brenda.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          <div className="glass-card rounded-2xl p-6 text-center border border-secondary/20">
            <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">−273°C</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Temperatura e punës</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center border border-primary/20">
            <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">1000×</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Më i shpejtë se klasikët</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center border border-accent/20">
            <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">300+</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Kubitë në 2050</div>
          </div>
        </div>
      </div>
    </section>
  );
}
