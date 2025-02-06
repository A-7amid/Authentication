import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "./signup.provider";
import { login } from "../utils/simulate-backend";

const AuthContext = createContext();

const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return auth;
};

const AuthProvider = ({ children }) => {
  const { users } = useSignUp();
  const { user, setUser } = useSignUp();

  const navigate = useNavigate();

  const handleLogin = useCallback(
    (email, password) => {
      setUser(login(email, password));

      if (user) {
        console.log("Login successful", user);
        navigate("/");
        localStorage.setItem("token", user.token);
        console.log(users);
      } else {
        console.log("Login failed");
      }
    },
    [navigate]
  );

  const values = useMemo(
    () => ({ user, setUser, users, handleLogin }),
    [users, handleLogin]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
