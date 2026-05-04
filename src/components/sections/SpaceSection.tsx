import { useScrollReveal } from "@/hooks/useScrollReveal";
import ParticleField from "../ParticleField";
import marsBaseImg from "@/assets/mars-base.jpg";

const facts = [
  "Drita nga Dielli arrin në Tokë për rreth 8 minuta",
  "Ka më shumë yje në univers sesa kokrra rëre në Tokë",
  "Një ditë në Venusi është më e gjatë se një vit i tij",
  "Disa yje që shohim mund të mos ekzistojnë më",
  "Mars ka dy hëna të vogla: Phobos dhe Deimos",
  "Zëri nuk udhëton në hapësirë — ajo është krejtësisht e heshtur",
  "Temperatura në Mars varion nga -125°C deri në +20°C",
  "Në 2050 udhëtimi për në Mars zgjat vetëm 3 muaj",
];

export default function SpaceSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-36 px-4 overflow-hidden" id="space">
      <ParticleField count={60} />
      
      <div ref={ref} className={`relative z-10 max-w-5xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-secondary/10 border border-secondary/20 text-secondary mb-4 tracking-wider uppercase">
            Seksioni 5
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
            Hapësira
          </h2>
        </div>

        {/* Mars base hero image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 group">
          <img
            src={marsBaseImg}
            alt="Baza njerëzore në Mars"
            className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-foreground font-semibold text-lg">🔴 Baza njerëzore në Mars — e ardhmja e eksplorimit hapësinor</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Main text */}
          <div className="glass-card rounded-2xl p-8">
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

          {/* Facts */}
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-5 border border-secondary/20 hover:border-secondary/40 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_20px_hsl(187,80%,55%,0.15)]"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg">✨</span>
                  <p className="text-sm text-muted-foreground">{fact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mars base details */}
          <div className="glass-card rounded-2xl p-8 border border-accent/20 holographic-border">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🔴</span>
              <h3 className="text-xl font-black text-foreground">Baza njerëzore në Mars</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Në vitin 2050, njerëzit kanë ndërtuar baza në Mars me ajër dhe ujë artificiale. Udhëtimi hapësinor po bëhet gjë e zakonshme, dhe shkencëtarët po kërkojnë jetë jashtëtokësore.
            </p>
            <div className="flex flex-wrap gap-3">
              {["🏗️ Baza e Marsit", "💨 Ajri artificial", "💧 Uji artificial", "🛸 Udhëtime hapësinore"].map((tag, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 border border-accent/20 text-accent">
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
