import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth.provider.jsx";
import { BrowserRouter } from "react-router-dom";
import { SignUpProvider } from "./context/signup.provider.jsx";
import { ThemeProvider } from "./context/theme.provider.jsx";
import { ResetPasswordProvider } from "./context/resetpassword.provider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <SignUpProvider>
        <AuthProvider>
          <ResetPasswordProvider>
            {/* <StrictMode> */}
            <App />
            {/* </StrictMode> */}
          </ResetPasswordProvider>
        </AuthProvider>
      </SignUpProvider>
    </ThemeProvider>
  </BrowserRouter>
);
