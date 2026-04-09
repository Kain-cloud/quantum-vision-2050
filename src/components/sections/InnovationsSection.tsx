import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const innovations = [
  {
    icon: "💻",
    title: "Kompjuterët kuantikë",
    short: "Zgjidhin probleme komplekse në sekonda",
    detail: "Kompjuterët kuantikë përdorin kubitin në vend të bitit. Ata mund të zgjidhin probleme që kompjuterët e sotëm do t'u duheshin miliona vite! Në 2050, ata ndihmojnë në krijimin e ilaçeve të reja dhe avancimin e inteligjencës artificiale.",
    color: "primary",
  },
  {
    icon: "🔐",
    title: "Siguri më e lartë në internet",
    short: "Mesazhe që nuk mund të përgjohën",
    detail: "Kriptografia kuantike bën të mundur dërgimin e mesazheve që nuk mund të lexohen nga askush tjetër. Nëse dikush përpiqet t'i përgjojë, sistemi e zbulon menjëherë! Bankat dhe të dhënat personale janë maksimalisht të mbrojtura.",
    color: "secondary",
  },
  {
    icon: "🌱",
    title: "Energji dhe mjedis më i pastër",
    short: "Panele diellore ultra-efikase",
    detail: "Panelet diellore kuantike janë shumë më efikase se ato të sotmet. Bateritë kuantike zgjasin shumë më shumë. Qytetet janë pa ndotje, ajri dhe uji janë të pastra. Energjia e pastër është kudo!",
    color: "accent",
  },
  {
    icon: "🚄",
    title: "Transport i avancuar",
    short: "Makina fluturuese dhe trena magnetikë",
    detail: "Makinat elektrike pa shofer, trenat magnetikë shumë të shpejtë, dhe mjete fluturuese personale bëjnë udhëtimin të shpejtë, të sigurt dhe pa ndotje. Mund të udhëtosh nga Tirana në Prishtinë në 15 minuta!",
    color: "secondary",
  },
  {
    icon: "🤖",
    title: "Inteligjencë artificiale dhe robotë",
    short: "Robotë ndihmës kudo",
    detail: "Robotët ndihmojnë në shtëpi me punët e përditshme, në fabrika me prodhimin, dhe në spitale ku asistojnë mjekët gjatë operacioneve. Inteligjenca artificiale parashikon sëmundjet para se të ndodhin.",
    color: "primary",
  },
  {
    icon: "🏥",
    title: "Mjekësi më moderne",
    short: "Zbulim i hershëm i sëmundjeve",
    detail: "Mjekësia kuantike mundëson zbulimin e sëmundjeve shumë herët, trajtime të personalizuara me saktësi të lartë, dhe njerëzit jetojnë më gjatë e më shëndetshëm. Ilaçet krijohen nga kompjuterët kuantikë.",
    color: "accent",
  },
];

const colorMap: Record<string, string> = {
  primary: "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(263,70%,50%,0.2)]",
  secondary: "border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_30px_hsl(187,80%,55%,0.2)]",
  accent: "border-accent/30 hover:border-accent/60 hover:shadow-[0_0_30px_hsl(45,96%,56%,0.2)]",
};

export default function InnovationsSection() {
  const { ref, visible } = useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-32 px-4" id="innovations">
      <div ref={ref} className={`max-w-6xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 border border-secondary/20 text-secondary mb-4">
            Seksioni 2
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Inovacionet kryesore në vitin 2050
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fizika kuantike dhe teknologjia po hapin dyer të reja. Ja cilat janë ndryshimet më të mëdha që na presin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl p-6 border transition-all duration-300 cursor-pointer hover:scale-[1.03] ${colorMap[item.color]}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.short}</p>
              
              {expanded === i && (
                <div className="animate-fade-in">
                  <div className="h-px bg-border my-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              )}
              
              <button className="text-xs text-primary mt-2 hover:underline">
                {expanded === i ? "Mbyll ▲" : "Mëso më shumë ▼"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
