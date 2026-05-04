import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import quantumImg from "@/assets/quantum-particles.jpg";

function SuperpositionDemo() {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 animate-pulse-glow group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl neon-glow-sm">⚛️</div>
        <h3 className="text-lg font-black text-foreground">Superpozicioni</h3>
      </div>
      <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-background/30">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-2 rounded-full bg-secondary/30 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          <div className="absolute inset-4 rounded-full bg-accent/40 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-foreground shadow-[0_0_15px_hsl(187,80%,55%)]" />
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Një grimcë mund të jetë në <strong className="text-secondary">shumë gjendje njëkohësisht</strong> — si një top që ndodhet në dy vende njëherësh! Vetëm kur e vëzhgojmë, ajo "zgjedh" një gjendje.
      </p>
    </div>
  );
}

function TunnelingDemo() {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-2xl neon-glow-sm">🌀</div>
        <h3 className="text-lg font-black text-foreground">Tunelimi kuantik</h3>
      </div>
      <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-background/30">
        <style>{`
          @keyframes tunnel-approach {
            0%   { transform: translateX(-72px); opacity: 1; }
            38%  { transform: translateX(-18px); opacity: 1; }
            45%  { transform: translateX(-14px); opacity: 0; }
            100% { transform: translateX(-14px); opacity: 0; }
          }
          @keyframes tunnel-exit {
            0%   { transform: translateX(14px);  opacity: 0; }
            52%  { transform: translateX(14px);  opacity: 0; }
            58%  { transform: translateX(18px);  opacity: 1; }
            100% { transform: translateX(72px);  opacity: 1; }
          }
          .tunnel-approach {
            animation: tunnel-approach 2.4s ease-in-out infinite;
          }
          .tunnel-exit {
            animation: tunnel-exit 2.4s ease-in-out infinite;
          }
        `}</style>
        {/* Wall */}
        <div className="absolute w-5 h-20 bg-muted/50 rounded border border-muted-foreground/30" />
        {/* Particle approaching from left */}
        <div className="tunnel-approach absolute w-4 h-4 rounded-full bg-secondary shadow-[0_0_12px_hsl(187,80%,55%)]" />
        {/* Particle exiting on right */}
        <div className="tunnel-exit absolute w-4 h-4 rounded-full bg-secondary shadow-[0_0_12px_hsl(187,80%,55%)]" />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Grimcat mund të <strong className="text-accent">kalojnë nëpër mure</strong> — sikur të zhduken nga njëra anë dhe shfaqen në tjetrën! Kjo quhet tunelim kuantik.
      </p>
    </div>
  );
}

function ObserverDemo() {
  const [observed, setObserved] = useState(false);

  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-2xl neon-glow-sm">👁️</div>
        <h3 className="text-lg font-black text-foreground">Efekti i vëzhguesit</h3>
      </div>
      <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-background/30">
        <div className="relative">
          {observed ? (
            <div className="w-10 h-10 rounded-full bg-accent transition-all duration-500 shadow-[0_0_20px_hsl(45,96%,56%)]" />
          ) : (
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-3 rounded-full border-2 border-dashed border-secondary/50 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
              <div className="absolute inset-6 rounded-full bg-primary/30 animate-pulse" />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => setObserved(!observed)}
        className="w-full mb-3 px-4 py-2.5 rounded-xl bg-primary/20 border border-primary/30 text-sm font-medium text-foreground hover:bg-primary/30 transition-all hover:shadow-[0_0_15px_hsl(263,70%,50%,0.3)]"
      >
        {observed ? "🔓 Mos vëzhgo" : "👁️ Vëzhgo grimcën"}
      </button>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Kur <strong className="text-primary">vëzhgojmë</strong> një grimcë, ajo ndryshon sjelljen! Kliko butonin për ta parë vetë.
      </p>
    </div>
  );
}

export default function QuantumSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-36 px-4" id="quantum">
      <div ref={ref} className={`max-w-6xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary mb-4 tracking-wider uppercase">
            Seksioni 1
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text mb-6">
            Çfarë është fizika kuantike?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Fizika kuantike studion botën e grimcave shumë të vogla — atome, elektrone, protone dhe fotone. 
            Në këtë botë, rregullat janë krejtësisht të ndryshme nga ato që njohim!
          </p>
        </div>

        {/* Hero image for section */}
        <div className="relative rounded-2xl overflow-hidden mb-12 group">
          <img
            src={quantumImg}
            alt="Quantum particles visualization"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            width={1280}
            height={720}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="text-sm text-foreground/80 font-medium">Vizualizim i grimcave kuantike dhe ndërveprimit të tyre</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <SuperpositionDemo />
          <TunnelingDemo />
          <ObserverDemo />
        </div>

        <div className="mt-12 glass-card rounded-2xl p-8 max-w-3xl mx-auto text-center holographic-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            💡 <strong className="text-foreground">A e dije?</strong> Fizika kuantike u zbulua në fillim të shekullit 20 nga shkencëtarë si 
            <strong className="text-secondary"> Max Planck</strong>, <strong className="text-primary">Niels Bohr</strong> dhe 
            <strong className="text-accent"> Albert Einstein</strong>. Sot, ajo po ndryshon teknologjinë e botës!
          </p>
        </div>
      </div>
    </section>
  );
}
