import { Droplets, Clock, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { accentFor } from "../theme.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const FEATURE_META = [
  { icon: Clock, key: 1 },
  { icon: Droplets, key: 2 },
  { icon: ShieldCheck, key: 3 },
  { icon: Sparkles, key: 4 },
];

export default function WhyWosha({ businessName }) {
  const { t } = useLanguage();
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2B6CF6" }}>{t("why_eyebrow", { business: businessName || "Wosha" })}</span>
        <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14 max-w-lg" style={{ color: "#0B1B33" }}>
          {t("why_headline")}
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {FEATURE_META.map((f, i) => {
          const a = accentFor(i);
          return (
            <Reveal key={f.key} delay={i * 90}>
              <div className="group p-7 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1" style={{ background: "#fff", border: "1px solid #E4E7EC", boxShadow: "0 1px 2px rgba(11,27,51,0.04)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: a.tint }}>
                  <f.icon size={21} style={{ color: a.text }} strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "#0B1B33" }}>{t(`why_${f.key}_title`)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#667085" }}>{t(`why_${f.key}_body`)}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
