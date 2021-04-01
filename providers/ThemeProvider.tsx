import React, { useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
export const COLORS: Record<
  ThemeMode,
  {
    text: string;
    background: string;
    post: string;
    squigglyLine: string;
  }
> = {
  light: {
    background: "#eff1f5",
    post: "white",
    text: "black",
    squigglyLine: "#5720ff",
  },
  dark: {
    background: "rgba(24,38,54,1)",
    post: "#334f6f",
    text: "white",
    squigglyLine: "#FFEE51",
  },
};
interface ITheme {
  theme: ThemeMode;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
const ThemeContext = React.createContext<ITheme | undefined>(undefined);

export function ThemeProvider(props) {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? (storedTheme as ThemeMode) : "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const root = window.document.documentElement;
    root.style.setProperty(
      "--squiggly-line",
      theme === "light" ? COLORS.light.squigglyLine : COLORS.dark.squigglyLine
    );
    root.style.setProperty(
      "--color-text",
      theme === "light" ? COLORS.light.text : COLORS.dark.text
    );
    root.style.setProperty(
      "--color-background",
      theme === "light" ? COLORS.light.background : COLORS.dark.background
    );
    root.style.setProperty(
      "--color-post",
      theme === "light" ? COLORS.light.post : COLORS.dark.post
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        soundEnabled,
        setSoundEnabled,
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
