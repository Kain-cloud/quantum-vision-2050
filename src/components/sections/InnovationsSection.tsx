import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import quantumComputerImg from "@/assets/quantum-computer.jpg";
import futureHospitalImg from "@/assets/future-hospital.jpg";

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
  {
    icon: "🌐",
    title: "Interneti kuantik",
    short: "Lidhje që nuk mund të hakohet",
    detail: "Informacioni dërgohet si fotone të ngatërruara. Asnjë haker nuk mund ta përgjojë — nëse e prek, shkatërrohet automatikisht. Në 2050, çdo kompjuter është i lidhur me internetin kuantik.",
    color: "primary",
  },
  {
    icon: "🔋",
    title: "Bateritë kuantike",
    short: "Ngarkim në sekonda, jo në orë",
    detail: "Bateritë kuantike ngarkohen mijëra herë më shpejt se ato të sotmet. Një makinë elektrike ngarkohet plotësisht në vetëm 30 sekonda dhe zgjat shumë më gjatë.",
    color: "secondary",
  },
  {
    icon: "📡",
    title: "Sensorët kuantikë",
    short: "Saktësi ekstreme në çdo matje",
    detail: "Sensorët kuantikë zbulojnë sëmundje në fazat më të hershme, minerale të fshehura nën tokë, dhe ndryshime klimatike me një saktësi që sot është e pamundur.",
    color: "accent",
  },
];

const colorMap: Record<string, string> = {
  primary: "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(263,70%,50%,0.3)]",
  secondary: "border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_30px_hsl(187,80%,55%,0.3)]",
  accent: "border-accent/30 hover:border-accent/60 hover:shadow-[0_0_30px_hsl(45,96%,56%,0.3)]",
};

export default function InnovationsSection() {
  const { ref, visible } = useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-36 px-4" id="innovations">
      <div ref={ref} className={`max-w-6xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-secondary/10 border border-secondary/20 text-secondary mb-4 tracking-wider uppercase">
            Seksioni 3
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
            Inovacionet kryesore në vitin 2050
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Fizika kuantike dhe teknologjia po hapin dyer të reja. Ja cilat janë ndryshimet më të mëdha që na presin.
          </p>
        </div>

        {/* Feature images row */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={quantumComputerImg} alt="Kompjuter kuantik" className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={720} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className="text-sm font-semibold text-foreground">💻 Kompjuterët kuantikë</span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden group">
            <img src={futureHospitalImg} alt="Spitali i së ardhmes" className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={720} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5">
              <span className="text-sm font-semibold text-foreground">🏥 Mjekësia e së ardhmes</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 border transition-all duration-500 cursor-pointer hover:scale-[1.03] ${colorMap[item.color]}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.short}</p>
              
              {expanded === i && (
                <div className="animate-fade-in">
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              )}
              
              <button className="text-xs text-primary mt-2 hover:underline font-medium">
                {expanded === i ? "Mbyll ▲" : "Mëso më shumë ▼"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
