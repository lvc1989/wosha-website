import Reveal from "./Reveal.jsx";
import { BOOKING_URL } from "../api.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ClosingCTA({ businessName }) {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden py-28" style={{ background: "linear-gradient(135deg, #0B1B33, #0F2545)" }}>
      <div className="absolute rounded-full animate-drift" style={{ top: "-10%", left: "50%", width: 400, height: 400, background: "radial-gradient(circle, rgba(255,222,0,0.12) 0%, transparent 70%)" }} />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
            {t("closing_headline", { business: businessName || "Wosha" })}
          </h2>
          <p className="text-white/60 text-lg mb-10">{t("closing_body")}</p>
          <a href={BOOKING_URL} className="font-bold text-base px-10 py-4 rounded-full transition-transform hover:scale-105 inline-block" style={{ background: "#FFDE00", color: "#0B1B33" }}>
            {t("closing_cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
