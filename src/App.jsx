import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ResetPasswordPage from "./Components/ResetPasswordPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} errorElement={<NotFound />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/resetpassword" element={<ResetPasswordPage />} />
    </Routes>
  );
}

export default App;
