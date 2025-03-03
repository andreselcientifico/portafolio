"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Asegurar que el tema esté montado en el cliente para evitar errores de SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Evita el renderizado hasta que el componente esté montado
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
    >
      {/* Sol: Se muestra solo en modo claro */}
      <Sun
        className={`h-5 w-5 transition-all ${
          resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      
      {/* Luna: Se muestra solo en modo oscuro */}
      <Moon
        className={`h-5 w-5 absolute transition-all ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
