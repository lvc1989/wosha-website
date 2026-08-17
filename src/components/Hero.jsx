import { BOOKING_URL } from "../api.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import CarWashIllustration from "./CarWashIllustration.jsx";

export default function Hero({ businessName, tagline, branchCount, headlineOverride, subheadlineOverride }) {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, #0B1B33 0%, #0F2545 55%, #0B1B33 100%)", minHeight: "92vh" }}>
      <div className="absolute rounded-full animate-drift" style={{ top: "12%", right: "8%", width: 280, height: 280, background: "radial-gradient(circle, rgba(255,222,0,0.18) 0%, transparent 70%)" }} />
      <div className="absolute rounded-full animate-drift-slow" style={{ bottom: "8%", left: "4%", width: 340, height: 340, background: "radial-gradient(circle, rgba(43,108,246,0.22) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-24 grid lg:grid-cols-2 gap-10 items-center" style={{ minHeight: "92vh" }}>
        <div className="flex flex-col items-start">
        <div className="flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,222,0,0.12)", border: "1px solid rgba(255,222,0,0.3)" }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FFDE00" }} />
          <span className="text-xs font-semibold tracking-wide" style={{ color: "#FFDE00" }}>{t("hero_badge", { count: branchCount || "" })}</span>
        </div>

        {headlineOverride ? (
          <h1 className="font-display font-bold text-white leading-[0.95] mb-6" style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}>{headlineOverride}</h1>
        ) : (
          <h1 className="font-display font-bold text-white leading-[0.95] mb-6" style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}>
            {t("hero_headline_1")}<br />
            <span style={{ color: "#FFDE00" }}>{t("hero_headline_2")}</span> {t("hero_headline_3")}<br />
            {t("hero_headline_4")}
          </h1>
        )}

        <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
          {subheadlineOverride || tagline || t("hero_tagline_default", { business: businessName || "Wosha" })}
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <a href={BOOKING_URL} className="font-bold text-base px-8 py-4 rounded-full transition-transform hover:scale-105 inline-flex items-center gap-2" style={{ background: "#FFDE00", color: "#0B1B33" }}>
            {t("hero_cta_book")}
          </a>
          <a href="#services" className="font-semibold text-base px-8 py-4 rounded-full border border-white/25 text-white hover:bg-white/5 transition-colors">
            {t("hero_cta_services")}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[t("hero_trust_1"), t("hero_trust_2"), t("hero_trust_3")].map((txt) => (
            <div key={txt} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full" style={{ background: "#FFDE00" }} />
              <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>{txt}</span>
            </div>
          ))}
        </div>
        </div>

        <div className="hidden lg:block relative">
          <CarWashIllustration className="w-full max-w-md mx-auto drop-shadow-2xl" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, #F7F9FC, transparent)" }} />
    </section>
  );
}
