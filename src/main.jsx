import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "../styles/main.scss";
import "../styles/modren-normalize.scss";
import "../styles/utils.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
   </StrictMode>
);
