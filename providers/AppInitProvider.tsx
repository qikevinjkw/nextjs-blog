import React, { useContext, useEffect, useRef, useState } from "react";
import _firebase from "firebase/app";
import { firebaseConfig } from "../components/Firebase";

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
  firestore: _firebase.firestore.Firestore;
  menuOn: boolean;
  setMenuOn: React.Dispatch<React.SetStateAction<boolean>>;
}
const AppInitContext = React.createContext<IAppInit | undefined>(undefined);

export function AppInitProvider(props) {
  const [mounted, setMounted] = useState(false);
  const [firestore, setFireStore] = useState<
    _firebase.firestore.Firestore | undefined
  >();
  const [menuOn, setMenuOn] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audio.current = new Audio("/audio/double-click.wav");
    audio.current.volume = 0.5;
  }, []);

  useEffect(() => {
    audio.current?.play();
  }, [menuOn]);

  useEffect(() => {
    setMounted(true);
    _firebase.initializeApp(firebaseConfig);
    setFireStore(_firebase.firestore());
  }, []);

  return firestore ? (
    <AppInitContext.Provider
      value={{
        mounted,
        firestore,
        menuOn,
        setMenuOn,
      }}
    >
      {props.children}
    </AppInitContext.Provider>
  ) : null;
}

export function useAppInit() {
  const appInit = useContext(AppInitContext);
  if (!appInit) {
    throw new Error("useAppInit must be within AppInitProvider");
  }

  return appInit;
}
