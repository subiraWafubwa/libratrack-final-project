import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure the element with id "root" exists in your HTML
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <div className="whole-app">
      <App />
    </div>
  );
} else {
  console.error("Root element not found.");
}
