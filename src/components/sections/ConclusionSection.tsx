import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroImage from "@/assets/hero-earth-2050.jpg";

export default function ConclusionSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-36 px-4" id="conclusion">
      <div ref={ref} className={`max-w-4xl mx-auto text-center ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="mb-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-8 flex items-center justify-center text-3xl shadow-[0_0_40px_hsl(263,70%,50%,0.4)]">
            🌍
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
            E ardhmja po ndërtohet sot
          </h2>
        </div>

        {/* Earth image */}
        <div className="relative rounded-2xl overflow-hidden mb-10 group">
          <img
            src={heroImage}
            alt="Toka nga hapësira"
            className="w-full h-48 md:h-64 object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/30" />
        </div>

        <div className="glass-card rounded-2xl p-10 mb-10 holographic-border">
          <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
            Fizika kuantike do të luajë një rol shumë të rëndësishëm në zhvillimin e botës. Falë saj, në vitin 2050 do të kemi teknologji më të shpejtë, më të sigurt dhe më miqësore me mjedisin.
          </p>
          <p className="text-foreground font-bold text-xl">
            E ardhmja po ndërtohet sot.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
          {[
            { year: "2024", label: "Sot" },
            { year: "2030", label: "Kompjuterë kuantikë" },
            { year: "2040", label: "Mars" },
            { year: "2050", label: "E ardhmja" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_hsl(263,70%,50%,0.5)]" />
                <span className="text-sm font-bold text-foreground mt-2">{item.year}</span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
              {i < 3 && <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/50 to-secondary/50 mt-[-16px]" />}
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg">
          🚀 Mos harro — ti je pjesë e kësaj të ardhmeje. Mëso, eksploro dhe ëndërro pa kufij!
        </p>
      </div>
    </section>
  );
}
