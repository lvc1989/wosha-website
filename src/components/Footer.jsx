import { INTRANET_URL } from "../api.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer({ businessName, logoUrl, visitCount }) {
  const { t } = useLanguage();
  return (
    <footer className="py-12" style={{ background: "#060F1F" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {logoUrl ? (
              <img src={logoUrl} alt="" className="w-7 h-7 rounded-full object-contain" />
            ) : (
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs" style={{ background: "#FFDE00", color: "#0B1B33" }}>W</div>
            )}
            <span className="font-display font-semibold text-white text-sm">{businessName || "Wosha"}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={INTRANET_URL} className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t("nav_intranet")}</a>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} {businessName || "Wosha"}. {t("footer_rights")}</p>
          </div>
        </div>
        {visitCount != null && (
          <div className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            {t("footer_visits", { count: visitCount.toLocaleString() })}
          </div>
        )}
      </div>
    </footer>
  );
}
