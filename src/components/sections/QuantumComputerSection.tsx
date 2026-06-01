import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import AudioButton from "@/components/AudioButton";

const audioMap: Record<string, string> = {
  qubit: "/audio/kubiti.mp3",
  dilution: "/audio/ftohesi-dilution.mp3",
  control: "/audio/elektronika-e-kontrollit.mp3",
  wiring: "/audio/kabllot-koaksiale.mp3",
  readout: "/audio/rezonatoret-e-leximit.mp3",
  shield: "/audio/mburoja-magnetike.mp3",
};

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
    position: { top: "28%", left: "72%" },
    title: "Kubiti — Zemra e Kompjuterit",
    description:
      "Kubiti (qubit) është njësia bazë e informacionit kuantik — ekuivalenti i 'bitit' në kompjuterët normalë. Ndërsa një bit është ose 0 ose 1, kubiti falë superpozicionit mund të jetë 0, 1, ose të dyja njëkohësisht.",
    funFact: "💡 Vetëm 300 kubite mund të ruajnë më shumë gjendje sesa ka atome në univers!",
  },
  {
    id: "dilution",
    label: "Ftohësi",
    emoji: "❄️",
    color: "secondary",
    position: { top: "10%", left: "22%" },
    title: "Ftohësi Dilution — Temperatura Absolute",
    description:
      "Kubitet duhet të mbahen shumë pranë zeros absolute (−273.15 °C). Ftohësi dilution arrin −273.14 °C — më i ftohtë se hapësira e jashtme! Kjo parandalon 'dekoherencën' — shkatërrimin e informacionit kuantik nga nxehtësia.",
    funFact: "🌡️ Temperatura brenda është 150 herë më e ftohtë se hapësira ndërgalaktike.",
  },
  {
    id: "control",
    label: "Elektronika e Kontrollit",
    emoji: "🎛️",
    color: "accent",
    position: { top: "10%", left: "68%" },
    title: "Elektronika e Kontrollit",
    description:
      "Sinjaletë e mikrovalëve kontrollojnë çdo kubit individualisht — si tastiera e kompjuterit tënd, por në frekuenca shumë të larta. Çdo 'portë kuantike' (operacion) kryhet duke dërguar impulse precize mikrovalësh.",
    funFact: "📡 Frekuencat e kontrollit janë 5–7 GHz — e njëjta brez si Wi-Fi 5GHz!",
  },
  {
    id: "wiring",
    label: "Kabllot Koaksiale",
    emoji: "🔌",
    color: "secondary",
    position: { top: "62%", left: "18%" },
    title: "Kabllot Koaksiale — Sinjalet e Ftohtë",
    description:
      "Kabllot speciale koaksiale transferojnë sinjale nga temperatura e dhomës drejt kubiteve të ftohtë. Ato janë të blinduara për të bllokuar zhurmën elektromagnetike që do të shkatërronte kubitet.",
    funFact: "🧊 Kabllot filtrojnë nxehtësinë në çdo nivel — nga 300K deri në 10 millikelvin.",
  },
  {
    id: "readout",
    label: "Leximi",
    emoji: "📡",
    color: "primary",
    position: { top: "62%", left: "73%" },
    title: "Rezonatorët e Leximit",
    description:
      "Pas llogaritjes, rezonatorët 'masin' kubitet për të lexuar rezultatin. Ky është momenti i vëzhgimit — kur kubitët dalin nga superpozicioni dhe japin një përgjigje klasike (0 ose 1).",
    funFact: "👁️ Leximi shkatërron superpozicionin — ashtu si efekti i vëzhguesit!",
  },
  {
    id: "shield",
    label: "Mburoja Magnetike",
    emoji: "🛡️",
    color: "accent",
    position: { top: "82%", left: "44%" },
    title: "Mburoja Magnetike — Mbrojtja e Kubiteve",
    description:
      "Fushat magnetike të jashtme mund të shkatërrojnë kubitet. Shtresat e metalit superpërcjellës bllokojnë plotësisht çdo fushë magnetike të jashtme, duke krijuar një mjedis perfekt izolues.",
    funFact: "🔮 Materiali përdorur, Mu-metali, zvogëlon fushat magnetike me 1000 herë.",
  },
];

const colorClasses = {
  primary: {
    ring: "border-primary/60 shadow-[0_0_20px_hsl(263,70%,50%,0.5)]",
    dot: "bg-primary",
    badge: "bg-primary/10 border-primary/30 text-primary",
    title: "text-primary",
    line: "border-primary/40",
  },
  secondary: {
    ring: "border-secondary/60 shadow-[0_0_20px_hsl(187,80%,55%,0.5)]",
    dot: "bg-secondary",
    badge: "bg-secondary/10 border-secondary/30 text-secondary",
    title: "text-secondary",
    line: "border-secondary/40",
  },
  accent: {
    ring: "border-accent/60 shadow-[0_0_20px_hsl(45,96%,56%,0.5)]",
    dot: "bg-accent",
    badge: "bg-accent/10 border-accent/30 text-accent",
    title: "text-accent",
    line: "border-accent/40",
  },
};

export default function QuantumComputerSection() {
  const { ref, visible } = useScrollReveal();
  const [selected, setSelected] = useState<Component | null>(null);

  return (
    <section className="relative py-24 md:py-36 px-4" id="quantum-computer">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${visible ? "section-visible" : "section-hidden"}`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary mb-4 tracking-wider uppercase">
            Bonus
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
            Kompjuteri Kuantik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Kliko mbi çdo komponent për të zbuluar se çfarë bën dhe pse është i rëndësishëm.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Diagram */}
          <div className="relative w-full aspect-square max-w-md mx-auto select-none">
            {/* Outer rings */}
            <div className="absolute inset-[4%] rounded-full border border-primary/10 animate-spin" style={{ animationDuration: "30s" }} />
            <div className="absolute inset-[12%] rounded-full border border-secondary/10 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
            <div className="absolute inset-[20%] rounded-full border border-accent/10 animate-spin" style={{ animationDuration: "15s" }} />

            {/* Core glow */}
            <div
              className="absolute inset-[38%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, hsl(263 70% 50% / 0.35) 0%, hsl(187 80% 55% / 0.15) 60%, transparent 100%)",
              }}
            />

            {/* Component dots */}
            {components.map((comp) => {
              const colors = colorClasses[comp.color];
              const isSelected = selected?.id === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelected(isSelected ? null : comp)}
                  className="absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2 group z-10"
                  style={{ top: comp.position.top, left: comp.position.left }}
                  aria-label={comp.label}
                >
                  <div
                    className={`w-12 h-12 rounded-full border-2 glass-card flex items-center justify-center text-xl transition-all duration-300 group-hover:scale-125 ${
                      isSelected
                        ? `scale-125 ${colors.ring}`
                        : "border-border/40 hover:border-white/30"
                    }`}
                  >
                    {comp.emoji}
                  </div>
                  <span
                    className={`text-[10px] font-semibold whitespace-nowrap px-2 py-0.5 rounded-full border transition-all duration-300 ${
                      isSelected ? colors.badge : "bg-background/60 border-border/30 text-muted-foreground"
                    }`}
                  >
                    {comp.label}
                  </span>
                </button>
              );
            })}

            {/* Center label */}
            <div className="absolute inset-[38%] flex items-center justify-center pointer-events-none">
              <span className="text-2xl">💻</span>
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col gap-4">
            {selected ? (
              <div
                key={selected.id}
                className={`glass-card rounded-2xl p-7 border transition-all duration-500 holographic-border ${colorClasses[selected.color].line} animate-fade-in`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{selected.emoji}</span>
                  <h3 className={`text-xl font-black flex-1 ${colorClasses[selected.color].title}`}>
                    {selected.title}
                  </h3>
                  {audioMap[selected.id] && (
                    <AudioButton src={audioMap[selected.id]} label={selected.label} />
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                  {selected.description}
                </p>
                <div className={`rounded-xl p-4 border text-sm font-medium ${colorClasses[selected.color].badge}`}>
                  {selected.funFact}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-5 text-xs text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  ✕ Mbyll
                </button>
              </div>
            ) : (
              <div className="glass-card rounded-2xl p-8 border border-border/30 flex flex-col items-center justify-center text-center gap-4 min-h-[280px]">
                <div className="text-5xl animate-pulse">👆</div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  Kliko mbi një komponent në diagramë për të mësuar se çfarë bën atë pjesë të veçantë të kompjuterit kuantik.
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {components.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelected(c)}
                      className={`px-3 py-1 rounded-full text-xs border transition-all hover:scale-105 ${colorClasses[c.color].badge}`}
                    >
                      {c.emoji} {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "−273°C", label: "Temperatura", color: "secondary" },
                { value: "1000×", label: "Shpejtësia", color: "primary" },
                { value: "300+", label: "Kubite sot", color: "accent" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`glass-card rounded-xl p-3 text-center border ${colorClasses[stat.color as "primary" | "secondary" | "accent"].line}`}
                >
                  <p className={`text-lg font-black ${colorClasses[stat.color as "primary" | "secondary" | "accent"].title}`}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
