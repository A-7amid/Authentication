import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "./Switch";
import { useTheme } from "../context/theme.provider";
import { useAuth } from "../context/auth.provider";

const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const navigate = useNavigate();

  const name = user.username;

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  return (
    <div
      className={`h-screen items-center ${
        theme === "light" ? "bg-white" : "bg-neutral-800 text-white"
      } duration-200`}
    >
      <div className="flex justify-between pt-2 px-2">
        <Switch />

        <h1 className="text-2xl flex font-semibold">Home Page</h1>

        <div className="gap-x-3 flex">
          <Link
            className={`${
              theme == "light"
                ? "bg-green-500 hover:bg-green-500/90"
                : "bg-green-600 hover:bg-green-600/90"
            } mb-3 px-4 py-2 font-medium text-lg rounded-lg duration-200`}
            to="/login"
          >
            Login
          </Link>
          <Link
            className="bg-gray-500 hover:bg-gray-500/90 mb-3 px-4 py-2 font-medium text-lg rounded-lg duration-200"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div>
        <h3 className="justify-center flex  font-medium text-xl items-center h-full">
          Welcome, {name}
        </h3>
      </div>
      <Link
        onClick={handleLogOut}
        className={`mx-2 ${
          theme === "light"
            ? "bg-red-500 hover:bg-white text-white hover:text-red-500 border-2 border-red-500"
            : "bg-red-500 hover:bg-transparent text-white hover:text-red-400 border-2 border-red-400"
        } hover:underline h-fit mb-3 px-4 py-2 font-medium text-lg rounded-lg mt-3 duration-200`}
        to="/login"
      >
        Log Out
      </Link>
    </div>
  );
};

export default Home;
