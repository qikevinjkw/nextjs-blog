import React, { useContext, useEffect, useState } from "react";
import color from "color";

const BASE_LIGHT = "white";
const BASE_DARK = "#334f6f";
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
    background: color(BASE_LIGHT).darken(0.01).hsl().toString(),
    post: BASE_LIGHT,
    text: "black",
    squigglyLine: "#5720ff",
  },
  dark: {
    background: color(BASE_DARK).darken(0.5).hsl().toString(),
    post: BASE_DARK,
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
      "--shadow-color-hover",
      theme === "light"
        ? color("black").alpha(0.4).lighten(0.8).toString()
        : color("white").darken(0.2).toString()
    );
    root.style.setProperty(
      "--shadow-color",
      theme === "light"
        ? color("black").alpha(0.2).lighten(0.8).toString()
        : color("white").darken(0.4).toString()
    );
    root.style.setProperty(
      "--scrollbar-track-color",
      theme === "light" ? COLORS.light.background : COLORS.dark.background
    );
    root.style.setProperty(
      "--scrollbar-thumb",
      theme === "light" ? COLORS.light.post : COLORS.dark.post
    );
    root.style.setProperty(
      "--scrollbar-thumb-hover",
      theme === "light" ? "white" : "black"
    );
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
