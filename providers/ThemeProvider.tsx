import React, { useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
export const COLORS: Record<
  ThemeMode,
  {
    text: string;
    background: string;
    primary: string;
  }
> = {
  light: {
    background: "white",
    primary: "white",
    text: "black",
  },
  dark: {
    background: "rgba(24,38,54,1)",
    primary: "rgba(24,38,54,1)",
    text: "white",
  },
};
interface ITheme {
  theme: ThemeMode;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
}
const ThemeContext = React.createContext<ITheme | undefined>(undefined);

export function ThemeProvider(props) {
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? (storedTheme as ThemeMode) : "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    root.style.setProperty(
      "--color-text",
      theme === "light" ? COLORS.light.text : COLORS.dark.text
    );
    root.style.setProperty(
      "--color-background",
      theme === "light" ? COLORS.light.background : COLORS.dark.background
    );
    root.style.setProperty(
      "--color-primary",
      theme === "light" ? COLORS.light.primary : COLORS.dark.primary
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be within ThemeProvider");
  }

  return theme;
}
