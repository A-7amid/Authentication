import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "./signup.provider";

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const { users } = useSignUp();

  const navigate = useNavigate();

  const findUser = (user) => {
    const formData = new FormData(document.getElementById("login-form"));
    if (
      user.email === formData.get("email") &&
      user.password === formData.get("password")
    ) {
      navigate("/");
      localStorage.setItem("token", user.token);
      localStorage.setItem("username", user.username);
      console.log(users);
    } else {
      console.log("Login Failed");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    users.find(findUser);
  };

  const values = useMemo(() => ({ users, handleLogin }), [users, handleLogin]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
