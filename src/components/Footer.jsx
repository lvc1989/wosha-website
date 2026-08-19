import { INTRANET_URL } from "../api.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { MapPin, Phone } from "lucide-react";

export default function Footer({ businessName, logoUrl, address, phone, tagline, visitCount }) {
  const { t } = useLanguage();
  return (
    <footer className="pt-14 pb-8" style={{ background: "#060F1F" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              {logoUrl ? (
                <img src={logoUrl} alt="" className="w-8 h-8 rounded-full object-contain" />
              ) : (
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-xs" style={{ background: "#FFDE00", color: "#0B1B33" }}>W</div>
              )}
              <span className="font-display font-semibold text-white text-base">{businessName || "Wosha"}</span>
            </div>
            {tagline && <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{tagline}</p>}
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>{t("footer_quick_links")}</div>
            <div className="flex flex-col gap-2.5">
              <a href="#services" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>{t("nav_services")}</a>
              <a href="#how" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>{t("nav_how")}</a>
              <a href="#branches" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>{t("nav_branches")}</a>
              <a href={INTRANET_URL} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>{t("nav_intranet")}</a>
            </div>
          </div>

          {(address || phone) && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>{t("footer_contact")}</div>
              <div className="flex flex-col gap-2.5">
                {address && (
                  <div className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }} />
                    <span>{address}</span>
                  </div>
                )}
                {phone && (
                  <a href={`tel:${phone}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <Phone size={15} className="shrink-0" style={{ color: "rgba(255,255,255,0.35)" }} />
                    <span>{phone}</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>© {new Date().getFullYear()} {businessName || "Wosha"}. {t("footer_rights")}</p>
          {visitCount != null && (
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{t("footer_visits", { count: visitCount.toLocaleString() })}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
