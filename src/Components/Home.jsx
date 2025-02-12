import React, { useEffect, useState } from "react";
import { useTheme } from "../context/theme.provider";
import { useAuth } from "../context/auth.provider";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Line from "./Line";
import { useCookies } from "react-cookie";
import ReactLoading from "react-loading";
import Loading from "./Loading";

const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  const [cookies, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.token) navigate("/login");
  }, [navigate]);

  return (
    <div
      className={`min-h-screen max-h-full relative duration-200 transition ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-linear-to-br from-neutral-800 to-zinc-950 text-white"
      }`}
    >
      <Loading />
      <div>
        <Navbar />
        <Line />
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center h-screen -mt-14">
        <h3 className="font-bold text-4xl">Welcome, {user.username}</h3>
        <p className="text-xl">
          A modern authentication UI built with React.js and Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Home;
