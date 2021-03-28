import { ThemeProvider } from "../providers/ThemeProvider";
import "../styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
