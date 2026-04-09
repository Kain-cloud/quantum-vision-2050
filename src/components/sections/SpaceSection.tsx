import { useScrollReveal } from "@/hooks/useScrollReveal";
import ParticleField from "../ParticleField";

const facts = [
  "Drita nga Dielli arrin në Tokë për rreth 8 minuta",
  "Ka më shumë yje në univers sesa kokrra rëre në Tokë",
  "Një ditë në Venusi është më e gjatë se një vit i tij",
  "Disa yje që shohim mund të mos ekzistojnë më",
];

export default function SpaceSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden" id="space">
      <ParticleField count={60} />
      
      <div ref={ref} className={`relative z-10 max-w-5xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 border border-secondary/20 text-secondary mb-4">
            Seksioni 4
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Hapësira
          </h2>
        </div>

        <div className="space-y-8">
          {/* Main text blocks */}
          <div className="glass-card rounded-xl p-6 md:p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hapësira përfshin gjithçka që ekziston: yje, planete, galaktika dhe energji. Ajo u krijua nga <strong className="text-accent">Big Bang</strong> rreth 13.8 miliardë vite më parë dhe vazhdon të zgjerohet edhe sot.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Galaktikat janë sisteme gjigante me miliarda yje. Ne jetojmë në <strong className="text-secondary">Rruga e Qumështit</strong>, ndërsa një galaktikë e afërt është <strong className="text-primary">Andromeda</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vrimat e zeza krijohen kur yje shumë të mëdhenj shemben. Në qendër të galaktikës sonë ndodhet <strong className="text-accent">Sagittarius A*</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Planetet rrotullohen rreth yjeve. <strong className="text-secondary">Toka</strong> është planeti i vetëm i njohur që mbështet jetën.
            </p>
          </div>

          {/* Facts as floating cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-4 border border-secondary/20 hover:border-secondary/40 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg">✨</span>
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mars base */}
          <div className="glass-card rounded-xl p-6 md:p-8 border border-accent/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔴</span>
              <h3 className="text-xl font-bold text-foreground">Baza njerëzore në Mars</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Në vitin 2050, njerëzit kanë ndërtuar baza në Mars me ajër dhe ujë artificiale. Udhëtimi hapësinor po bëhet gjë e zakonshme, dhe shkencëtarët po kërkojnë jetë jashtëtokësore.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {["🏗️ Baza e Marsit", "💨 Ajri artificial", "💧 Uji artificial", "🛸 Udhëtime hapësinore"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs bg-accent/10 border border-accent/20 text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
