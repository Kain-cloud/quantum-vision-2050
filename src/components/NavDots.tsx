import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Hyrje" },
  { id: "quantum", label: "Fizika kuantike" },
  { id: "innovations", label: "Inovacione" },
  { id: "daily-life", label: "Jeta" },
  { id: "space", label: "Hapësira" },
  { id: "conclusion", label: "Përfundim" },
];

export default function NavDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
          className="group flex items-center gap-2"
          title={s.label}
        >
          <span className="hidden group-hover:block text-xs text-muted-foreground bg-card px-2 py-0.5 rounded whitespace-nowrap">
            {s.label}
          </span>
          <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            active === s.id
              ? "bg-secondary scale-125 shadow-[0_0_8px_hsl(187,80%,55%,0.6)]"
              : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
          }`} />
        </button>
      ))}
    </nav>
  );
}
