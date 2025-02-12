import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.provider";
import Navbar from "../Navbar";
import Line from "../Line";
import { useTheme } from "../../context/theme.provider";
import { useCookies } from "react-cookie";

const SignUpPage = () => {
  const { handleSignUp, isRegistered } = useAuth();
  const { theme } = useTheme();

  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(["token"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleSignUp(
      formData.get("username"),
      formData.get("email"),
      formData.get("password")
    );
  };

  useEffect(() => {
    if (cookies.token) navigate("/");
  }, [navigate]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen duration-200 transition ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-linear-to-br from-neutral-800 to-zinc-950 text-white"
      }`}
    >
      <div className="absolute top-0 w-full">
        <Navbar />
        <Line />
      </div>

      <form
        id="signup-form"
        onSubmit={handleSubmit}
        className={`border-[1px] shadow-lg ${
          theme == "light" ? "border-zinc-200" : "border-zinc-800"
        } rounded-lg`}
      >
        <div className="px-6 py-5 flex flex-col">
          <div className="flex flex-col">
            <h1
              className={`font-bold flex text-2xl ${
                theme == "light" ? "text-slate-950" : "text-white"
              } justify-center mb-2`}
            >
              Create an account
            </h1>

            <label htmlFor="username" className="font-semibold w-fit mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className={`border-[1px] ${
                theme == "light"
                  ? "border-slate-200 placeholder-slate-500 outline-zinc-800 focus:outline-[3px] outline-offset-2"
                  : "border-zinc-800 placeholder-zinc-500 outline-zinc-800 focus:outline-[2px] outline-offset-2"
              } px-3 py-[6px] mt-1 rounded-md pr-24`}
              autoFocus
              required
            />

            {isRegistered ? (
              <div className="text-red-400 font-medium mt-4 mb-1 italic">
                Email is already registered
              </div>
            ) : (
              <label htmlFor="email" className="font-semibold w-fit mb-1 mt-4">
                Email
              </label>
            )}

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={`border-[1px] ${
                theme == "light"
                  ? "border-slate-200 placeholder-slate-500 outline-zinc-800 focus:outline-[3px] outline-offset-2"
                  : "border-zinc-800 placeholder-zinc-500 outline-zinc-800 focus:outline-[2px] outline-offset-2"
              } px-3 py-[6px] mt-1 rounded-md pr-24`}
              required
            />

            <label htmlFor="password" className="font-semibold w-fit mb-1 mt-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={`border-[1px] ${
                theme == "light"
                  ? "border-slate-200 placeholder-slate-500 outline-zinc-800 focus:outline-[3px] outline-offset-2"
                  : "border-zinc-800 placeholder-zinc-500 outline-zinc-800 focus:outline-[2px] outline-offset-2"
              } px-3 py-[6px] mt-1 rounded-md pr-24`}
              required
            />
          </div>

          <button
            type="submit"
            className={` cursor-pointer ${
              theme == "light"
                ? "text-white bg-slate-900 hover:bg-slate-800"
                : "bg-white text-slate-900"
            } duration-200 py-[6px] mt-4 flex justify-center rounded-md font-medium text-lg`}
          >
            Sign Up
          </button>

          <div className="select-none mt-3 flex items-center gap-x-2 font-medium text-xs">
            <div
              className={`h-px flex ${
                theme == "light" ? "bg-slate-900" : "bg-white"
              } transition duration-200 w-full`}
            ></div>
            <span>or</span>
            <div
              className={`h-px flex ${
                theme == "light" ? "bg-slate-900" : "bg-white"
              } transition duration-200 w-full`}
            ></div>
          </div>

          <div className="flex flex-col gap-y-2 justify-center mt-3">
            <Link
              className={` ${
                theme == "light"
                  ? "bg-transparent hover:bg-slate-100 border-slate-200"
                  : "border-zinc-800 hover:bg-zinc-800"
              } items-center duration-200 font-medium border-2 w-full py-1 justify-center flex rounded-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github mr-2 h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              Sign up with GitHub
            </Link>
            <Link
              className={`${
                theme == "light"
                  ? "bg-transparent hover:bg-slate-100 border-slate-200"
                  : "border-zinc-800 hover:bg-zinc-800"
              } items-center duration-200 font-medium border-2 w-full py-1 justify-center flex rounded-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter mr-2 h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Sign up with Twitter
            </Link>
          </div>

          <div
            className={`${
              theme == "light" ? "text-slate-900" : "text-white"
            } flex flex-row text-xs items-center justify-center mt-5`}
          >
            Already have an account?
            <Link
              to="/login"
              className="text-blue-400 ml-[6px] hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
