import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ISBNScanner from "./components/ISBNScanner.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="whole-app">
      <App />
      
      <ISBNScanner/>
    </div>
  </StrictMode>
);
