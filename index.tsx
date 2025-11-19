import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./src/App";

import "./styles.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
