import Reveal from "./Reveal.jsx";
import { BOOKING_URL } from "../api.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const money = (n) => "TZS " + Number(n).toLocaleString();

export default function Services({ services }) {
  const { t } = useLanguage();
  const categories = [...new Set(services.map((s) => s.category || "Services"))];

  if (services.length === 0) return null;

  return (
    <section id="services" className="py-24" style={{ background: "#0B1B33" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#FFDE00" }}>{t("services_eyebrow")}</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14 text-white max-w-lg">
            {t("services_headline")}
          </h2>
        </Reveal>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <Reveal key={cat} delay={ci * 80}>
              <h3 className="font-display font-semibold text-lg mb-4" style={{ color: "#FFDE00" }}>{cat}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.filter((s) => (s.category || "Services") === cat).map((s) => (
                  <div key={s.id} className="flex items-center justify-between gap-3 px-5 py-4 rounded-xl transition-colors duration-200 hover:bg-white/[0.07]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="min-w-0">
                      <div className="font-medium text-white text-sm truncate">{s.name}</div>
                      {s.duration_min && <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>~{s.duration_min} {t("services_min")}</div>}
                    </div>
                    <div className="font-display font-bold text-sm shrink-0" style={{ color: "#FFDE00" }}>{money(s.price)}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <a href={BOOKING_URL} className="font-bold text-base px-8 py-4 rounded-full transition-transform hover:scale-105 inline-block" style={{ background: "#FFDE00", color: "#0B1B33" }}>
              {t("services_cta")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
