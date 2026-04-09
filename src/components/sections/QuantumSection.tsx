import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function SuperpositionDemo() {
  return (
    <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300 animate-pulse-glow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl">⚛️</div>
        <h3 className="text-lg font-bold text-foreground">Superpozicioni</h3>
      </div>
      <div className="relative h-32 flex items-center justify-center mb-4">
        {/* Particle in multiple states */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute inset-2 rounded-full bg-secondary/40 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          <div className="absolute inset-4 rounded-full bg-accent/60 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-foreground" />
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Një grimcë mund të jetë në <strong className="text-secondary">shumë gjendje njëkohësisht</strong> — si një top që ndodhet në dy vende njëherësh! Vetëm kur e vëzhgojmë, ajo "zgjedh" një gjendje.
      </p>
    </div>
  );
}

function TunnelingDemo() {
  return (
    <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-xl">🌀</div>
        <h3 className="text-lg font-bold text-foreground">Tunelimi kuantik</h3>
      </div>
      <div className="relative h-32 flex items-center justify-center mb-4">
        {/* Wall with tunneling particle */}
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-secondary animate-tunnel" />
          <div className="w-4 h-20 bg-muted/60 rounded mx-4" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Grimcat mund të <strong className="text-accent">kalojnë nëpër mure</strong> — sikur të zhduken nga njëra anë dhe shfaqen në tjetrën! Kjo quhet tunelim kuantik.
      </p>
    </div>
  );
}

function ObserverDemo() {
  const [observed, setObserved] = useState(false);

  return (
    <div className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-xl">👁️</div>
        <h3 className="text-lg font-bold text-foreground">Efekti i vëzhguesit</h3>
      </div>
      <div className="relative h-32 flex items-center justify-center mb-4">
        <div className="relative">
          {observed ? (
            <div className="w-8 h-8 rounded-full bg-accent transition-all duration-500" />
          ) : (
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-3 rounded-full border-2 border-dashed border-secondary/50 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
              <div className="absolute inset-6 rounded-full bg-primary/30 animate-pulse" />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => setObserved(!observed)}
        className="w-full mb-3 px-4 py-2 rounded-lg bg-primary/20 border border-primary/30 text-sm font-medium text-foreground hover:bg-primary/30 transition-colors"
      >
        {observed ? "🔓 Mos vëzhgo" : "👁️ Vëzhgo grimcën"}
      </button>
      <p className="text-sm text-muted-foreground">
        Kur <strong className="text-primary">vëzhgojmë</strong> një grimcë, ajo ndryshon sjelljen! Kliko butonin për ta parë vetë.
      </p>
    </div>
  );
}

export default function QuantumSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-32 px-4" id="quantum">
      <div ref={ref} className={`max-w-6xl mx-auto ${visible ? 'section-visible' : 'section-hidden'}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary mb-4">
            Seksioni 1
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            Çfarë është fizika kuantike?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fizika kuantike studion botën e grimcave shumë të vogla — atome, elektrone, protone dhe fotone. 
            Në këtë botë, rregullat janë krejtësisht të ndryshme nga ato që njohim!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <SuperpositionDemo />
          <TunnelingDemo />
          <ObserverDemo />
        </div>

        <div className="mt-12 glass-card rounded-xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            💡 <strong className="text-foreground">A e dije?</strong> Fizika kuantike u zbulua në fillim të shekullit 20 nga shkencëtarë si 
            <strong className="text-secondary"> Max Planck</strong>, <strong className="text-primary">Niels Bohr</strong> dhe 
            <strong className="text-accent"> Albert Einstein</strong>. Sot, ajo po ndryshon teknologjinë e botës!
          </p>
        </div>
      </div>
    </section>
  );
}
