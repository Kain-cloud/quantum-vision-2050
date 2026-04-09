import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ConclusionSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32 px-4" id="conclusion">
      <div ref={ref} className={`max-w-3xl mx-auto text-center ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-6 flex items-center justify-center text-2xl animate-pulse-glow">
            🌍
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-6">
            E ardhmja po ndërtohet sot
          </h2>
        </div>

        <div className="glass-card rounded-xl p-8 mb-8">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Fizika kuantike do të luajë një rol shumë të rëndësishëm në zhvillimin e botës. Falë saj, në vitin 2050 do të kemi teknologji më të shpejtë, më të sigurt dhe më miqësore me mjedisin.
          </p>
          <p className="text-foreground font-semibold text-lg">
            E ardhmja po ndërtohet sot.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { year: "2024", label: "Sot" },
            { year: "2030", label: "Kompjuterë kuantikë" },
            { year: "2040", label: "Mars" },
            { year: "2050", label: "E ardhmja" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <span className="text-xs font-bold text-foreground mt-1">{item.year}</span>
                <span className="text-[10px] text-muted-foreground">{item.label}</span>
              </div>
              {i < 3 && <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-primary/50 to-secondary/50 mt-[-12px]" />}
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          🚀 Mos harro — ti je pjesë e kësaj të ardhmeje. Mëso, eksploro dhe ëndërro pa kufij!
        </p>
      </div>
    </section>
  );
}
