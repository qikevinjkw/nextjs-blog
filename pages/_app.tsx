import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "../components/Layout";
import { AppInitProvider } from "../providers/AppInitProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import "../styles/global.scss";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
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
