import { useRef, useState } from "react";
import { Droplet, Sparkles, Home as HomeIcon, Car } from "lucide-react";

const money = (n) => "TZS " + Number(n).toLocaleString();

// Distinct accent per category — the colorful-card idea, applied to Wosha's own
// palette instead of a rainbow of unrelated hues.
const CATEGORY_STYLE = {
  "Car Wash": { bg: "#EAF1FF", fg: "#0B1B33", accent: "#2B6CF6", icon: Droplet },
  "Detailing": { bg: "#FFF8DC", fg: "#0B1B33", accent: "#966B00", icon: Sparkles },
  "Carpet Cleaning": { bg: "#E4E9F0", fg: "#0B1B33", accent: "#0B1B33", icon: HomeIcon },
};
const FALLBACK_STYLE = { bg: "#EAF1FF", fg: "#0B1B33", accent: "#2B6CF6", icon: Car };

function ServiceCard({ s }) {
  const style = CATEGORY_STYLE[s.category] || FALLBACK_STYLE;
  const Icon = style.icon;
  return (
    <div
      className="flex-shrink-0 w-64 rounded-2xl px-6 py-5 mx-2.5 select-none"
      style={{ background: style.bg }}
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ background: "#fff" }}>
        <Icon size={18} style={{ color: style.accent }} />
      </div>
      <div className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: style.accent }}>{s.category}</div>
      <div className="font-display font-semibold text-base mb-3 leading-snug" style={{ color: style.fg }}>{s.name}</div>
      <div className="flex items-center justify-between">
        <span className="font-display font-bold text-lg" style={{ color: style.fg }}>{money(s.price)}</span>
        {s.duration_min && <span className="text-xs" style={{ color: "rgba(11,27,51,0.5)" }}>~{s.duration_min} min</span>}
      </div>
    </div>
  );
}

// A continuously drifting, drag-to-browse strip of real service cards — the
// "moving right to left" motion the hero lacks, and a genuinely interactive
// surface rather than a purely decorative animation: grab it and it follows
// your pointer, let go and it resumes drifting.
export default function ServiceMarquee({ services }) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  if (services.length === 0) return null;
  const loop = [...services, ...services];

  const onPointerDown = (e) => {
    setDragging(true);
    dragState.current = { startX: e.clientX, scrollLeft: trackRef.current.scrollLeft };
    trackRef.current.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragState.current.startX;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  };
  const onPointerUp = () => setDragging(false);

  return (
    <section className="py-20 overflow-hidden" style={{ background: "#F7F9FC" }}>
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2B6CF6" }}>Every Service, One Place</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 max-w-lg" style={{ color: "#0B1B33" }}>
          Drag through what we offer.
        </h2>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="wosha-marquee-track flex overflow-x-auto"
        style={{ cursor: dragging ? "grabbing" : "grab" }}
      >
        <div className={`flex flex-shrink-0 wosha-marquee-anim ${dragging ? "wosha-marquee-paused" : ""}`}>
          {loop.map((s, i) => <ServiceCard key={s.id + "-" + i} s={s} />)}
        </div>
      </div>
    </section>
  );
}
