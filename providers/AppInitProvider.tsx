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
interface IAppInit {
  mounted: boolean;
}
const AppInitContext = React.createContext<IAppInit | undefined>(undefined);

export function AppInitProvider(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AppInitContext.Provider
      value={{
        mounted,
      }}
    >
      {props.children}
    </AppInitContext.Provider>
  );
}

export function useAppInit() {
  const appInit = useContext(AppInitContext);
  if (!appInit) {
    throw new Error("useAppInit must be within AppInitProvider");
  }

  return appInit;
}
