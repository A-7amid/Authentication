import React from "react";
import { useTheme } from "../context/theme.provider";
import { useAuth } from "../context/auth.provider";
import Navbar from "./Navbar";

const Home = () => {
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen max-h-full relative duration-200 transition ${
        theme === "light" ? "bg-white" : "bg-zinc-950 text-white"
      }`}
    >
      <Navbar />

      <Line theme={theme} />

      <div className="flex flex-col gap-y-4 items-center justify-center h-screen -mt-14">
        <h3 className="font-bold text-4xl">
          Welcome, {user.username || "user"}
        </h3>
        <p className="text-xl">
          A modern authentication UI built with React.js and Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Home;

function Line({ theme }) {
  return (
    <div
      className={`border-b-[1px] transition duration-200 ${
        theme === "light" ? "border-zinc-200" : "border-zinc-900"
      } `}
    ></div>
  );
}
