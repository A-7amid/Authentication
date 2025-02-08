import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "./Switch";
import { useTheme } from "../context/theme.provider";
import { useAuth } from "../context/auth.provider";

const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const navigate = useNavigate();

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
      className={`h-screen ${
        theme === "light" ? "bg-white" : "bg-zinc-950 text-white"
      } duration-200`}
    >
      <div className="pt-4 container mx-auto">
        <div className="flex w-full justify-between">
          <span className="font-black text-xl">TaskFlow</span>

          <div className="flex items-center gap-x-4">
            <Switch />
            <Link
              className={`${
                theme == "light"
                  ? "bg-transparent border-2 border-gray-300 hover:bg-green-500/90"
                  : "bg-transparent border-2 border-neutral-800 hover:bg-neutral-800"
              } px-4 py-1 font-medium rounded-md duration-200`}
              to="/login"
            >
              Login
            </Link>

            <Link
              className={`${
                theme == "light"
                  ? "bg-transparent border-2 border-gray-300 hover:bg-green-500/90"
                  : "bg-white hover:bg-neutral-200 text-black"
              } px-3 py-1 font-medium rounded-md duration-200`}
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* <h3 className="justify-center flex  font-medium text-xl items-center h-full">
          Welcome, {name}
        </h3> */}
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center -mt-7 h-full">
        <h3 className="font-bold text-4xl">Welcome, {user?.username}</h3>
        <p className="text-xl">
          A modern authentication UI built with React.js and Tailwind CSS
        </p>
      </div>

      <Link
        onClick={handleLogOut}
        className={`mx-2 mt-10 flex w-fit ${
          theme === "light"
            ? "bg-red-500 hover:bg-white text-white hover:text-red-500 border-2 border-red-500"
            : "bg-red-500 hover:bg-transparent text-white hover:text-red-400 border-2 border-red-400"
        } hover:underline h-fit px-3 py-1 font-medium text-lg rounded-lg mt-3 duration-200`}
        to="/login"
      >
        Log Out
      </Link>
    </div>
  );
};

export default Home;
