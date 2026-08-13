import { useEffect, useRef, useState } from "react";

// Animates a number counting up to its real value the moment it scrolls into
// view — same trigger mechanism as useReveal (IntersectionObserver, fires once).
// This only ever animates numbers the site already has for real (branch count,
// service count) — it's a presentation detail, never a source of a number.
export function useCountUp(target, durationMs = 900) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / durationMs);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return [ref, value];
}
