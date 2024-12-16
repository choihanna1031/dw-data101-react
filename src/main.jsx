import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { name } from "./db.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <title>{name}</title>
    <App />
  </StrictMode>
);
