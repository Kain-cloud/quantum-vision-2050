import { useScrollReveal } from "@/hooks/useScrollReveal";
import futureCityImg from "@/assets/future-city.jpg";

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
  {
    icon: "🥗",
    title: "Ushqim i ardhshëm",
    desc: "Ushqimi rritet në fabrika vertikale të ndriçuara me lazerë kuantikë, ose printohet 3D nga proteina të pastra.",
  },
  {
    icon: "👕",
    title: "Veshje inteligjente",
    desc: "Rrobat matin shëndetin tënd, ndryshojnë ngjyrë me humorin dhe rregullojnë temperaturën e trupit automatikisht.",
  },
  {
    icon: "🎮",
    title: "Argëtim holografik",
    desc: "Filmat dhe lojërat shfaqen si hologramë 3D në dhomë. Karakteret kontrollohen me mendim — ti je brenda skenës!",
  },
];

export default function DailyLifeSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-36 px-4" id="daily-life">
      <div ref={ref} className={`max-w-5xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/10 border border-accent/20 text-accent mb-4 tracking-wider uppercase">
            Seksioni 4
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
            Si do të ndryshojë jeta e përditshme?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Në vitin 2050, çdo ditë do të jetë e mbushur me teknologji që sot duket si fantashkencë.
          </p>
        </div>

        {/* City image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 group">
          <img
            src={futureCityImg}
            alt="Qyteti i së ardhmes 2050"
            className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-foreground font-semibold text-lg">Qyteti i së ardhmes — makina fluturuese, robotë dhe energji e pastër</p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {features.map((f, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 flex gap-4 hover:scale-[1.02] transition-all duration-300 group border border-border/30 hover:border-accent/30">
              <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">{f.icon}</div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass-card rounded-2xl p-8 holographic-border">
          <p className="text-muted-foreground leading-relaxed">
            🌟 Në vitin 2050, teknologjia nuk do të jetë lukse — do të jetë pjesë e natyrshme e jetës sonë të përditshme.
            E ardhmja po ndërtohet <strong className="text-accent">sot</strong>!
          </p>
        </div>
      </div>
    </section>
  );
}
