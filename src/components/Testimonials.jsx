import { Star } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { accentFor } from "../theme.js";

export default function Testimonials({ testimonials }) {
  const { t } = useLanguage();
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((tm, i) => {
              const a = accentFor(i);
              return (
                <Reveal key={tm.id} delay={i * 80}>
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
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
