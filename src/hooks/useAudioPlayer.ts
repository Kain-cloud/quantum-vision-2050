import { useSyncExternalStore } from "react";

let audio: HTMLAudioElement | null = null;
let currentSrc: string | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

function ensureAudio() {
  if (audio) return audio;
  audio = new Audio();
  audio.preload = "none";
  audio.addEventListener("ended", () => {
    currentSrc = null;
    emit();
  });
  audio.addEventListener("pause", () => {
    if (audio && audio.ended) return;
    // only clear if fully paused by user/stop; we'll manage explicitly
  });
  return audio;
}

export function toggleAudio(src: string) {
  const a = ensureAudio();
  if (currentSrc === src) {
    a.pause();
    currentSrc = null;
    emit();
    return;
  }
  a.pause();
  a.src = src;
  a.currentTime = 0;
  void a.play().catch(() => {
    currentSrc = null;
    emit();
  });
  currentSrc = src;
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useCurrentAudio() {
  return useSyncExternalStore(
    subscribe,
    () => currentSrc,
    () => null,
  );
}
