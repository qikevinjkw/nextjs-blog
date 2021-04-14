import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "../components/Layout";
import { AppInitProvider } from "../providers/AppInitProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import "../styles/global.scss";
import Router from "next/router";
import { ProgressBar } from "../components/ProgressBar";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<number | null>(null);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      console.log("route start");
      setProgress(60);
      // progressIntervalRef.current !== null &&
      //   clearInterval(progressIntervalRef.current);
      // progressIntervalRef.current = window.setInterval(() => {
      //   setProgress((prev) => {
      //     return Math.min(prev + 2, 100);
      //   });
      // }, 4000);
    });
    Router.events.on("routeChangeComplete", () => {
      console.log("route complete");
      // clearInterval(progressIntervalRef.current);
      setProgress(100);
      setTimeout(() => {
        setProgress(0);
      });
    });
    Router.events.on("routeChangeError", () => console.log("route error"));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppInitProvider>
        <ThemeProvider>
          <Layout>
            <ProgressBar progress={progress} />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppInitProvider>
    </QueryClientProvider>
  );
}
