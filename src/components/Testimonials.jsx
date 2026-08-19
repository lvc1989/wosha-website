import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { accentFor } from "../theme.js";

function TestimonialCard({ tm, i }) {
  const a = accentFor(i);
  return (
    <div className="p-6 rounded-2xl h-full flex flex-col" style={{ background: "#fff", border: "1px solid #E4E7EC" }}>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={14} fill={s < tm.rating ? a.bg : "none"} color={s < tm.rating ? a.bg : "#D9DEE7"} />
        ))}
      </div>
      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#0B1B33" }}>"{tm.quote}"</p>
      <div className="flex items-center gap-2.5">
        {tm.photo_url ? (
          <img src={tm.photo_url} alt="" className="w-9 h-9 rounded-full object-cover" />
        ) : (
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-xs" style={{ background: a.tint, color: a.text }}>
            {tm.customer_name.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-sm font-semibold" style={{ color: "#0B1B33" }}>{tm.customer_name}</span>
      </div>
    </div>
  );
}

export default function Testimonials({ testimonials }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(timerRef.current);
  }, [paused, testimonials.length]);

  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section className="py-24" style={{ background: "#F7F9FC" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2B6CF6" }}>{t("testimonials_eyebrow")}</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14 max-w-lg" style={{ color: "#0B1B33" }}>
            {t("testimonials_headline")}
          </h2>
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal>
            <div className="text-center py-10 rounded-2xl" style={{ background: "#fff", border: "1px solid #E4E7EC", color: "#667085" }}>
              {t("testimonials_empty")}
            </div>
          </Reveal>
        ) : (
          <Reveal>
            {/* Sliding carousel on mobile/tablet, where showing one at a time reads
                better than a cramped grid; a full grid on wide screens, where
                there's genuinely room to show several at once without sliding. */}
            <div className="sm:hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div className="overflow-hidden rounded-2xl">
                <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
                  {testimonials.map((tm, i) => (
                    <div key={tm.id} className="w-full shrink-0 px-0.5">
                      <TestimonialCard tm={tm} i={i} />
                    </div>
                  ))}
                </div>
              </div>
              {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-5">
                  <button onClick={() => goTo(index - 1)} aria-label="Previous" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#fff", border: "1px solid #E4E7EC" }}>
                    <ChevronLeft size={16} color="#0B1B33" />
                  </button>
                  <div className="flex items-center gap-1.5">
                    {testimonials.map((_, i) => (
                      <button key={i} onClick={() => goTo(i)} aria-label={`Go to testimonial ${i + 1}`} className="rounded-full transition-all" style={{ width: i === index ? 18 : 6, height: 6, background: i === index ? "#2B6CF6" : "#D9DEE7" }} />
                    ))}
                  </div>
                  <button onClick={() => goTo(index + 1)} aria-label="Next" className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#fff", border: "1px solid #E4E7EC" }}>
                    <ChevronRight size={16} color="#0B1B33" />
                  </button>
                </div>
              )}
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((tm, i) => (
                <TestimonialCard key={tm.id} tm={tm} i={i} />
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
