import React, { useMemo, useState } from "react";
import { createContext, useContext } from "react";
import { useSignUp } from "./signup.provider";
import { useNavigate } from "react-router-dom";

const ResetPasswordContext = createContext();

const useResetPassword = () => {
  const resetPassword = useContext(ResetPasswordContext);

  if (!resetPassword) {
    throw new Error(
      "useResetpassword must be used within ResetPasswordProvider"
    );
  }

  return resetPassword;
};

const ResetPasswordProvider = ({ children }) => {
  const navigate = useNavigate();
  const { users } = useSignUp();

  const handleResetPassword = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");
    // const [newPassword, setNewPassword] = useState(formData.get("password"));

    users.map((user) => {
      if (user.email === email.toLowerCase()) {
        // const [oldPassword, setOldPassword] = useState(user.password);
        user.password = password;

        console.log(user);
        navigate("/login");
      }
    });

    console.log(users, email, password);
  };

  const values = useMemo(
    () => ({ handleResetPassword }),
    [handleResetPassword]
  );

  return (
    <ResetPasswordContext.Provider value={values}>
      {children}
    </ResetPasswordContext.Provider>
  );
};

export { ResetPasswordProvider, useResetPassword };
