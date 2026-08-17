import { createContext, useContext, useState, useEffect } from "react";
import { translate, LANGUAGES } from "./translations.js";

const LanguageContext = createContext(null);

const STORAGE_KEY = "wosha_lang";

export function LanguageProvider({ children, defaultLanguage }) {
  // A person's own explicit choice (stored locally on their device) always wins
  // over the admin's site-wide default — picking a language shouldn't get
  // silently overridden the next time settings change.
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_KEY) || "en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored && defaultLanguage && LANGUAGES.some((l) => l.code === defaultLanguage)) {
      setLang(defaultLanguage);
    }
  }, [defaultLanguage]);

  const changeLang = (code) => {
    setLang(code);
    localStorage.setItem(STORAGE_KEY, code);
  };

  const t = (key, vars) => translate(lang, key, vars);

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
