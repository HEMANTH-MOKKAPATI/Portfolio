import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "../styles/main.scss";
import "../styles/modren-normalize.scss";
import "../styles/utils.scss";
import Hero from "./hero.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Hero/>
  </StrictMode>
);
