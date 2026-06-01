import { Play, Pause } from "lucide-react";
import { toggleAudio, useCurrentAudio } from "@/hooks/useAudioPlayer";
import { cn } from "@/lib/utils";

interface AudioButtonProps {
  src: string;
  label?: string;
  className?: string;
}

export default function AudioButton({ src, label = "Dëgjo", className }: AudioButtonProps) {
  const current = useCurrentAudio();
  const isPlaying = current === src;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        toggleAudio(src);
      }}
      aria-label={isPlaying ? `Ndalo: ${label}` : `${label}`}
      className={cn(
        "shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300",
        "bg-background/60 backdrop-blur-sm border-border/40 text-foreground/80",
        "hover:border-primary/60 hover:text-primary hover:scale-110",
        isPlaying && "border-primary/70 text-primary neon-glow-sm bg-primary/10",
        className,
      )}
    >
      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-[1px]" />}
    </button>
  );
}
