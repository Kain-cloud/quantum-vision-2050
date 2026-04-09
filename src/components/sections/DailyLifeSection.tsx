import { useScrollReveal } from "@/hooks/useScrollReveal";

const features = [
  {
    icon: "🏠",
    title: "Shtëpi inteligjente",
    desc: "Shtëpitë kontrollohen me zë ose mendim. Dritat, temperatura dhe muzika përshtaten automatikisht sipas humorit tënd.",
  },
  {
    icon: "🎓",
    title: "Mësim virtual",
    desc: "Nxënësit mësojnë përmes realitetit virtual — vizitojnë planete, eksplorojnë oqeanet, dhe bëjnë eksperimente pa rrezik.",
  },
  {
    icon: "💼",
    title: "Punë nga distanca",
    desc: "Teknologjia e avancuar mundëson punën nga kudo në botë, me hologramë 3D që të bëjnë të ndihesh sikur je aty.",
  },
  {
    icon: "🪐",
    title: "Lidhje me Marsin",
    desc: "Familjet komunikojnë me miqtë në Mars përmes video-thirrjeve hapësinore. Distanca nuk është më pengesë!",
  },
];

export default function DailyLifeSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32 px-4" id="daily-life">
      <div ref={ref} className={`max-w-5xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 border border-accent/20 text-accent mb-4">
            Seksioni 3
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Si do të ndryshojë jeta e përditshme?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Në vitin 2050, çdo ditë do të jetë e mbushur me teknologji që sot duket si fantashkencë.
          </p>
        </div>

        {/* Smart home illustration */}
        <div className="relative glass-card rounded-2xl p-8 mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          <div className="relative grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/20 transition-colors group">
                <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center glass-card rounded-xl p-6">
          <p className="text-sm text-muted-foreground">
            🌟 Në vitin 2050, teknologjia nuk do të jetë lukse — do të jetë pjesë e natyrshme e jetës sonë të përditshme.
            E ardhmja po ndërtohet <strong className="text-accent">sot</strong>!
          </p>
        </div>
      </div>
    </section>
  );
}
