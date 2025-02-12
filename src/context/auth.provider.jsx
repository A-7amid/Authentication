import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { dummyData, login, signUp } from "../utils/simulate-backend";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return auth;
};

const AuthProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(["token", "users"]);
  const [user, setUser] = useState("");
  const [users, setUsers] = useState(dummyData);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  const handleLogin = useCallback(
    (email, password) => {
      const user = login(email, password);

      if (user) {
        setUser(user);
        console.log("Login successful", user);
        navigate("/");
        // localStorage.setItem("token", user.token);
        setCookie("token", user.token);
        console.log(users);

        setIsLoggedIn(true);
      } else if (user === null) {
        console.log("Login failed");
        setIsLoggedIn(false);
      }
    },
    [navigate]
  );

  const handleSignUp = useCallback(
    (username, email, password) => {
      var newUser = signUp(username, email, password);

      if (!newUser) {
        newUser = {
          email: email,
          id: users.length + 1,
          password: password,
          token: users.length + 100,
          username: username,
        };
        users.push(newUser);
        console.log(users);
        // localStorage.setItem("token", newUser.token);
        // localStorage.setItem("users", JSON.stringify(users));
        setCookie("token", user.token);
        setCookie("users", JSON.stringify(users));
        setIsRegistered(false);
        navigate("/");
      } else {
        console.log(newUser);
        setIsRegistered(true);
      }
      setUser(newUser);
    },
    [navigate]
  );

  const handleResetPassword = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    users.map((user) => {
      if (user.email === email.toLowerCase()) {
        user.password = password;

        user = user.username;
        console.log(user);
        navigate("/");
      } else {

      }
    });

    console.log(users, email, password);
  };

  const values = useMemo(
    () => ({
      user,
      users,
      setUsers,
      handleLogin,
      isLoggedIn,
      handleSignUp,
      isRegistered,
      setIsRegistered,
      handleResetPassword,
    }),
    [
      user,
      users,
      setUsers,
      handleLogin,
      isLoggedIn,
      handleSignUp,
      isRegistered,
      setIsRegistered,
      handleResetPassword,
    ]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
