import React, { useMemo } from "react";
import { createContext, useContext, useState } from "react";
import { useCookies } from "react-cookie";

const ThemeContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [cookies, setCookie] = useCookies(["theme"]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    setCookie("theme", theme);
  };

  const values = useMemo(
    () => ({ theme, setTheme, handleTheme }),
    [theme, setTheme, handleTheme]
  );

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
