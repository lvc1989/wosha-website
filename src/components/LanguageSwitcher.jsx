import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { LANGUAGES } from "../i18n/translations.js";

export default function LanguageSwitcher({ dark = true }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full transition-colors"
        style={{ color: dark ? "rgba(255,255,255,0.75)" : "#0B1B33", border: dark ? "1px solid rgba(255,255,255,0.2)" : "1px solid #E4E7EC" }}
      >
        <Globe size={13} />
        {current.code.toUpperCase()}
        <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 rounded-xl overflow-hidden shadow-lg z-50" style={{ background: "#fff", minWidth: 140, border: "1px solid #E4E7EC" }}>
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className="w-full text-left px-4 py-2.5 text-sm hover:bg-black/5 transition-colors"
              style={{ color: "#0B1B33", background: l.code === lang ? "#F5F7FA" : "transparent", fontWeight: l.code === lang ? 600 : 400 }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
