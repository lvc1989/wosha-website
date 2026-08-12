import { CalendarCheck, KeyRound, Sparkles, CarFront } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { accentFor } from "../theme.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const STEP_META = [
  { icon: CalendarCheck, key: 1 },
  { icon: KeyRound, key: 2 },
  { icon: Sparkles, key: 3 },
  { icon: CarFront, key: 4 },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2B6CF6" }}>{t("how_eyebrow")}</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14 max-w-lg" style={{ color: "#0B1B33" }}>
            {t("how_headline")}
          </h2>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="wosha-rail flex sm:grid sm:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0" style={{ scrollSnapType: "x mandatory" }}>
          {STEP_META.map((s, i) => {
            const a = accentFor(i);
            return (
              <Reveal key={s.key} delay={i * 110} className="flex-shrink-0" style={{ width: "78vw", maxWidth: 240, scrollSnapAlign: "start" }}>
                <div className="relative sm:w-full h-full">
                  {i < STEP_META.length - 1 && (
                    <div className="hidden sm:block absolute top-7 left-[calc(50%+34px)] right-[calc(-50%+34px)] h-px" style={{ background: "linear-gradient(to right, #D9DEE7, transparent)" }} />
                  )}
                  <div className="relative bg-white rounded-2xl p-6 h-full" style={{ border: "1px solid #EEF1F5" }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative" style={{ background: a.tint }}>
                      <s.icon size={24} style={{ color: a.text }} strokeWidth={1.8} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-display font-bold text-[10px]" style={{ background: a.bg, color: "#0B1B33" }}>{i + 1}</div>
                    </div>
                    <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: "#0B1B33" }}>{t(`how_${s.key}_title`)}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#667085" }}>{t(`how_${s.key}_body`)}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="flex sm:hidden justify-center gap-1.5 mt-2">
          {STEP_META.map((s) => <div key={s.key} className="w-1.5 h-1.5 rounded-full" style={{ background: "#D9DEE7" }} />)}
        </div>
      </div>
    </section>
  );
}
