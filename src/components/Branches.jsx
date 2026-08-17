import { MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { accentFor } from "../theme.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Branches({ branches }) {
  const { t } = useLanguage();
  if (branches.length === 0) return null;

  return (
    <section id="branches" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2B6CF6" }}>{t("branches_eyebrow")}</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14 max-w-lg" style={{ color: "#0B1B33" }}>
            {branches.length > 1 ? t("branches_headline_many", { count: branches.length }) : t("branches_headline_one")}
          </h2>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="wosha-rail flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0" style={{ scrollSnapType: "x mandatory" }}>
          {branches.map((b, i) => {
            const data = b.custom_data || {};
            const a = accentFor(i);
            return (
              <Reveal key={b.id} delay={i * 70} className="flex-shrink-0" style={{ width: "78vw", maxWidth: 300, scrollSnapAlign: "start" }}>
                <div className="group p-6 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1" style={{ background: "#F7F9FC", border: "1px solid #E4E7EC" }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: a.bg }}>
                    <MapPin size={18} color="#0B1B33" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "#0B1B33" }}>{b.name}</h3>
                  {data.address && <div className="text-sm mb-1" style={{ color: "#667085" }}>{data.address}</div>}
                  {data.phone && (
                    <div className="text-sm flex items-center gap-1.5 mt-2 font-medium" style={{ color: a.text }}>
                      <Phone size={13} /> {data.phone}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="flex sm:hidden justify-center gap-1.5 mt-2">
          {branches.map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "#D9DEE7" }} />)}
        </div>
      </div>
    </section>
  );
}
