import { Layout } from "../components/Layout";
import { AppInitProvider } from "../providers/AppInitProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import "../styles/global.scss";
import { useEffect } from "react";
import { initFirebase } from "../components/Firebase";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("creating firebase");
    initFirebase();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppInitProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </AppInitProvider>
    </QueryClientProvider>
  );
}
