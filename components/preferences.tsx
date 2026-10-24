"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { dictionaries, type Dictionary, type Locale } from "@/content/dictionary";

type Theme = "light" | "dark";

type Preferences = {
  locale: Locale;
  theme: Theme;
  t: Dictionary;
  toggleLocale: () => void;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<Preferences | null>(null);

function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be unavailable (private mode); preferences then last for the visit only.
  }
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [theme, setTheme] = useState<Theme>("light");

  // Sync with what the boot script in layout.tsx already applied before paint.
  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.classList.contains("dark") ? "dark" : "light");
    if (root.lang === "vi") setLocale("vi");
    requestAnimationFrame(() => root.classList.remove("locale-pending"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dictionaries[locale].meta.title;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((current) => {
      const next = current === "en" ? "vi" : "en";
      store("locale", next);
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      store("theme", next);
      return next;
    });
  }, []);

  return (
    <PreferencesContext.Provider
      value={{ locale, theme, t: dictionaries[locale], toggleLocale, toggleTheme }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("usePreferences must be used inside PreferencesProvider");
  return value;
}
