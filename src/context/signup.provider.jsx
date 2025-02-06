import React from "react";
import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyData } from "../../dummydata";

const SignUpContext = createContext();

const useSignUp = () => {
  const context = useContext(SignUpContext);

  if (!context) {
    throw new Error("useRegister must be used within a SignUpProvider");
  }

  return context;
};

const SignUpProvider = ({ children }) => {
  const [users, setUsers] = useState(dummyData);
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const findEmail = (user) => {
      const formData = new FormData(document.getElementById("signup-form"));
      const username = formData.get("username");
      const password = formData.get("password");
      const email = formData.get("email");

      const newUser = {
        email: email,
        password: password,
        id: users.length + 4,
        token: 1234,
        username: username,
      };

      if (user.email === newUser.email) {
        setIsRegistered(true);
      } else {
        setUsers((prevUsers) => [...prevUsers, newUser]);

        localStorage.setItem("token", newUser.token);
        localStorage.setItem("username", newUser.username);
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/");
      }
    };
    users.find(findEmail);
  };

  const values = useMemo(
    () => ({ users, setUsers, handleSignUp, isRegistered, setIsRegistered }),
    [users, setUsers, handleSignUp, isRegistered, setIsRegistered]
  );

  return (
    <SignUpContext.Provider value={values}>{children}</SignUpContext.Provider>
  );
};

export { SignUpProvider, useSignUp };
