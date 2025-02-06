import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
