import { useState } from "react";
import "../styles/globals.css";
import Header from "../components/header";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("Light");
  return (
    <div className={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <Component {...pageProps} />
    </div>
  );
}
