import { useState, useEffect } from "react";
import { BOOKING_URL, INTRANET_URL } from "../api.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

export default function Nav({ businessName, logoUrl }) {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(11,27,51,0.92)" : "transparent", backdropFilter: scrolled ? "blur(10px)" : "none", boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.15)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          {logoUrl ? (
            <img src={logoUrl} alt="" className="w-9 h-9 rounded-full object-contain" />
          ) : (
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold" style={{ background: "#FFDE00", color: "#0B1B33" }}>W</div>
          )}
          <span className="font-display font-bold text-lg text-white">{businessName || "Wosha"}</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t("nav_services")}</a>
          <a href="#how" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t("nav_how")}</a>
          <a href="#branches" className="text-sm font-medium text-white/80 hover:text-white transition-colors">{t("nav_branches")}</a>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher dark />
          <a href={INTRANET_URL} className="hidden lg:inline text-xs font-semibold text-white/60 hover:text-white transition-colors">{t("nav_intranet")}</a>
          <a href={BOOKING_URL} className="text-sm font-bold px-5 py-2.5 rounded-full transition-transform hover:scale-105" style={{ background: "#FFDE00", color: "#0B1B33" }}>
            {t("nav_book")}
          </a>
        </div>
      </div>
    </nav>
  );
}
