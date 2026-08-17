import Reveal from "./Reveal.jsx";
import DetailingIllustration from "./DetailingIllustration.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function ProcessShowcase() {
  const { t } = useLanguage();
  return (
    <section className="py-24 overflow-hidden" style={{ background: "#F7F9FC" }}>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <DetailingIllustration className="w-full max-w-md mx-auto" />
        </Reveal>
        <Reveal delay={100}>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2B6CF6" }}>{t("process_eyebrow")}</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-5" style={{ color: "#0B1B33" }}>
            {t("why_2_title")}
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#667085" }}>
            {t("why_2_body")}
          </p>
          <div className="flex flex-col gap-3">
            {[t("why_1_title"), t("why_3_title"), t("why_4_title")].map((label) => (
              <div key={label} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#EAF1FF" }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: "#2B6CF6" }} />
                </span>
                <span className="text-sm font-medium" style={{ color: "#0B1B33" }}>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
