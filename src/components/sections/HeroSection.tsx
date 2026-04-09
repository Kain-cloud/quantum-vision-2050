import ParticleField from "../ParticleField";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              backgroundColor: 'white',
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <ParticleField count={30} />

      {/* Earth glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(187 80% 55% / 0.15) 0%, hsl(263 70% 50% / 0.1) 40%, transparent 70%)',
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[60%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-secondary/20"
        style={{
          background: 'radial-gradient(circle at 40% 30%, hsl(187 80% 40% / 0.4), hsl(220 60% 20% / 0.8) 60%, hsl(230 60% 8%) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-primary/30 bg-primary/10 text-primary-foreground/80 mb-6">
            🚀 Një udhëtim në të ardhmen
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
          Mirë se vini në vitin 2050
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4">
          ku fizika kuantike dhe hapësira ndryshojnë jetën tonë
        </p>
        <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto">
          Zbuloni se si teknologjia kuantike, inteligjenca artificiale dhe eksplorime hapësinore do të transformojnë botën tonë
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-indicator">
        <span className="text-xs text-muted-foreground">Lëviz poshtë</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-secondary">
          <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
