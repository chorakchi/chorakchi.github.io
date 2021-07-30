import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "./../const/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.main}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
