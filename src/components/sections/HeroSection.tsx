import ParticleField from "../ParticleField";
import heroImage from "@/assets/hero-earth-2050.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Earth from space in 2050"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Starfield */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full text-sm font-medium border border-primary/30 bg-primary/10 text-primary-foreground/80 mb-6 neon-glow-sm">
            🚀 Një udhëtim në të ardhmen
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 gradient-text leading-tight tracking-tight">
          Mirë se vini në vitin 2050
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light">
          ku fizika kuantike dhe hapësira ndryshojnë jetën tonë
        </p>
        <p className="text-sm text-muted-foreground/60 max-w-xl mx-auto leading-relaxed">
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
