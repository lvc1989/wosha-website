import { useState } from "react";
import { Play, X } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Gallery({ items }) {
  const { t } = useLanguage();
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="py-24" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#2B6CF6" }}>{t("gallery_eyebrow")}</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-14 max-w-lg" style={{ color: "#0B1B33" }}>
            {t("gallery_headline")}
          </h2>
        </Reveal>

        {items.length === 0 ? (
          <Reveal>
            <div className="text-center py-10 rounded-2xl" style={{ background: "#F7F9FC", border: "1px solid #E4E7EC", color: "#667085" }}>
              {t("gallery_empty")}
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <button onClick={() => setActive(item)} className="relative group w-full aspect-square rounded-2xl overflow-hidden block">
                  {item.media_type === "video" ? (
                    <video src={item.media_url} className="w-full h-full object-cover" muted />
                  ) : (
                    <img src={item.media_url} alt={item.title || ""} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  )}
                  {item.media_type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(11,27,51,0.25)" }}>
                      <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.9)" }}>
                        <Play size={18} color="#0B1B33" fill="#0B1B33" />
                      </div>
                    </div>
                  )}
                  {item.title && (
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-2 text-left" style={{ background: "linear-gradient(to top, rgba(11,27,51,0.7), transparent)" }}>
                      <span className="text-white text-xs font-medium">{item.title}</span>
                    </div>
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(11,27,51,0.9)" }} onClick={() => setActive(null)}>
          <button className="absolute top-5 right-5 text-white" onClick={() => setActive(null)}><X size={26} /></button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {active.media_type === "video" ? (
              <video src={active.media_url} controls autoPlay className="w-full rounded-2xl max-h-[80vh]" />
            ) : (
              <img src={active.media_url} alt={active.title || ""} className="w-full rounded-2xl max-h-[80vh] object-contain" />
            )}
            {active.title && <div className="text-white text-sm text-center mt-3">{active.title}</div>}
          </div>
        </div>
      )}
    </section>
  );
}
