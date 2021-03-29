import { Layout } from "../components/Layout";
import { AppInitProvider } from "../providers/AppInitProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <AppInitProvider>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppInitProvider>
  );
}
