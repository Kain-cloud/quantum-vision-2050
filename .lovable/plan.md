## Audio voiceover playback

### 1. Place the MP3s
Copy the 10 uploaded files into `public/audio/` with kebab-case slugs (so URLs are clean and stable):

- `Superpozicioni.mp3` → `public/audio/superpozicioni.mp3`
- `tuneli quantik.mp3` → `public/audio/tuneli-kuantik.mp3`
- `efekti vezhguesit.mp3` → `public/audio/efekti-vezhguesit.mp3`
- `a e dije.mp3` → `public/audio/a-e-dije.mp3`
- `kubiti.mp3` → `public/audio/kubiti.mp3`
- `ftohesi dilution.mp3` → `public/audio/ftohesi-dilution.mp3`
- `elektronika e kontrollit.mp3` → `public/audio/elektronika-e-kontrollit.mp3`
- `kabllot koaksiale.mp3` → `public/audio/kabllot-koaksiale.mp3`
- `rezonatoret e leximit.mp3` → `public/audio/rezonatoret-e-leximit.mp3`
- `mburoja magnetike.mp3` → `public/audio/mburoja-magnetike.mp3`

The remaining 6 (to be uploaded later) will drop into the same folder following the same slug rule.

### 2. Shared single-track audio player
Create `src/hooks/useAudioPlayer.ts` — a tiny global store (module-level `Audio` instance + `useSyncExternalStore`) exposing:
- `currentSrc: string | null`
- `toggle(src)` → if same src is playing, pause; otherwise stop previous and play new
- subscribes to `ended` / `pause` events to reset state

This guarantees only one track plays at a time across the whole site.

### 3. AudioButton component
Create `src/components/AudioButton.tsx`: a small icon button using lucide `Play` / `Pause` icons. Props: `src`, optional `label` for aria. Style matches the dark/space aesthetic — rounded-full, `glass-card`-like background, primary glow on hover, `neon-glow-sm` when active. Compact (h-8 w-8) so it slots into card headers.

### 4. Wire buttons into chatbox cards
- **QuantumSection.tsx**: add an `AudioButton` next to each card heading
  - Superpozicioni → `superpozicioni.mp3`
  - Tunelimi kuantik → `tuneli-kuantik.mp3`
  - Efekti i vëzhguesit → `efekti-vezhguesit.mp3`
  - "A e dije?" panel → `a-e-dije.mp3`
- **QuantumComputerSection.tsx**: inside the selected info panel header (next to title), add an `AudioButton` driven by `selected.id` mapped to:
  - `qubit` → `kubiti.mp3`
  - `dilution` → `ftohesi-dilution.mp3`
  - `control` → `elektronika-e-kontrollit.mp3`
  - `wiring` → `kabllot-koaksiale.mp3`
  - `readout` → `rezonatoret-e-leximit.mp3`
  - `shield` → `mburoja-magnetike.mp3`

### 5. Ready for next 6
When the remaining MP3s arrive (likely Innovations cards + Hero + Conclusion), I'll drop them into `public/audio/` with the same slug convention and add `AudioButton` to those cards — no architectural changes needed.

### Notes
- No color, layout, or copy changes.
- No new dependencies (uses native `Audio`, lucide-react is already installed).
