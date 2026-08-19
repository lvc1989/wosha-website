import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BOOKING_URL } from "../api.js";

export default function AdBanners({ banners }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || banners.length <= 1) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % banners.length), 6000);
    return () => clearInterval(timer);
  }, [paused, banners.length]);

  if (banners.length === 0) return null;

  const goTo = (i) => setIndex((i + banners.length) % banners.length);

  return (
    <section className="py-10" style={{ background: "#F7F9FC" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl" style={{ boxShadow: "0 8px 32px rgba(11,27,51,0.12)" }}>
          <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {banners.map((b) => (
              <div key={b.id} className="w-full shrink-0 relative" style={{ aspectRatio: "16/6", minHeight: 200 }}>
                <img src={b.image_url} alt={b.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(11,27,51,0.85) 0%, rgba(11,27,51,0.3) 55%, transparent 100%)" }} />
                <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 max-w-lg">
                  <h3 className="font-display font-bold text-white text-xl sm:text-3xl mb-2">{b.title}</h3>
                  {b.description && <p className="text-white/80 text-sm sm:text-base mb-4 hidden sm:block">{b.description}</p>}
                  <a href={BOOKING_URL} className="inline-flex items-center gap-1.5 font-bold text-sm px-5 py-2.5 rounded-full self-start transition-transform hover:scale-105" style={{ background: "#FFDE00", color: "#0B1B33" }}>
                    {b.link_text || "Book Now"}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {banners.length > 1 && (
            <>
              <button
                onClick={() => goTo(index - 1)}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.9)" }}
              >
                <ChevronLeft size={18} color="#0B1B33" />
              </button>
              <button
                onClick={() => goTo(index + 1)}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.9)" }}
              >
                <ChevronRight size={18} color="#0B1B33" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {banners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to banner ${i + 1}`}
                    className="rounded-full transition-all"
                    style={{ width: i === index ? 18 : 6, height: 6, background: i === index ? "#FFDE00" : "rgba(255,255,255,0.6)" }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
