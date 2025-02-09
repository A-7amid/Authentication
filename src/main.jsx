import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth.provider.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/theme.provider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        {/* <StrictMode> */}
        <App />
        {/* </StrictMode> */}
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
