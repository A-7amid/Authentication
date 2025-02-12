import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import ResetPasswordPage from "./Components/Pages/ResetPasswordPage";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
