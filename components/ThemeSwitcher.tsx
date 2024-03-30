"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="size-8 text-white hover:bg-white hover:text-black rounded-full transition-all active:scale-90 hover:scale-105 p-1"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="size-8 text-black hover:text-white hover:bg-black rounded-full transition-all active:scale-90 hover:scale-105 p-1 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
