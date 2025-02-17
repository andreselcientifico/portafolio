"use client";

import { Globe } from "lucide-react";

interface LanguageToggleProps {
  language: string;
  setLanguage: (lang: string) => void;
}

export function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
  return (
    <button
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
    >
      <Globe className="h-5 w-5" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
}
