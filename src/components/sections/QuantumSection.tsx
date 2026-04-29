import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import quantumImg from "@/assets/quantum-particles.jpg";

function SuperpositionDemo() {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 animate-pulse-glow group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl neon-glow-sm">⚛️</div>
        <h3 className="text-lg font-bold text-foreground">Superpozicioni</h3>
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
        <h3 className="text-lg font-bold text-foreground">Tunelimi kuantik</h3>
      </div>
      <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-background/30">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-secondary shadow-[0_0_10px_hsl(187,80%,55%)] animate-tunnel" />
          <div className="w-5 h-24 bg-muted/40 rounded-lg mx-4 border border-muted-foreground/20" />
        </div>
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
        <h3 className="text-lg font-bold text-foreground">Efekti i vëzhguesit</h3>
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

function EntanglementDemo() {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl neon-glow-sm">🔗</div>
        <h3 className="text-lg font-bold text-foreground">Ngatërrimi kuantik</h3>
      </div>
      <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-background/30">
        <div className="flex items-center gap-8">
          <div className="w-6 h-6 rounded-full bg-primary shadow-[0_0_15px_hsl(263,70%,50%)] animate-pulse" />
          <div className="flex-1 h-px bg-gradient-to-r from-primary via-secondary to-accent w-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent animate-pulse" />
          </div>
          <div className="w-6 h-6 rounded-full bg-accent shadow-[0_0_15px_hsl(45,96%,56%)] animate-pulse" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Dy grimca <strong className="text-primary">lidhen për gjithmonë</strong> — çdo ndryshim te njëra ndikon menjëherë te tjetra, çfarëdo distancë! Einstein e quajti "veprim i frikshëm nga distanca".
      </p>
    </div>
  );
}

function QubitDemo() {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-2xl neon-glow-sm">💠</div>
        <h3 className="text-lg font-bold text-foreground">Kubiti</h3>
      </div>
      <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-background/30">
        <div className="flex items-center gap-4 text-2xl font-bold">
          <span className="text-muted-foreground">0</span>
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-spin" style={{ animationDuration: "4s" }} />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">0+1</div>
          </div>
          <span className="text-muted-foreground">1</span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Biti klasik është 0 <em>ose</em> 1. <strong className="text-secondary">Kubiti</strong> mund të jetë 0, 1, <strong>ose të dyja njëkohësisht</strong>! Kjo i bën kompjuterët kuantikë super të fuqishëm.
      </p>
    </div>
  );
}

function DualityDemo() {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-2xl neon-glow-sm">🌊</div>
        <h3 className="text-lg font-bold text-foreground">Vala-Grimcë</h3>
      </div>
      <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-background/30">
        <svg viewBox="0 0 120 60" className="w-32 h-16 text-accent">
          <path d="M0,30 Q15,5 30,30 T60,30 T90,30 T120,30" fill="none" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
          <circle cx="60" cy="30" r="4" fill="currentColor" className="animate-pulse" />
        </svg>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Elektroni sillet si <strong className="text-accent">valë</strong> dhe si <strong className="text-secondary">grimcë</strong> njëkohësisht! Eksperimenti i dy çarjeve e provon këtë mister.
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-6">
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
          <EntanglementDemo />
          <QubitDemo />
          <DualityDemo />
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
