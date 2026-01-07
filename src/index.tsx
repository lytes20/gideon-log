import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";

import "./styles.css";
import "prismjs/themes/prism-tomorrow.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

// Handle GitHub Pages SPA fallback redirect
const redirect = sessionStorage.redirect;
if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
