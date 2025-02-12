import React, { useState } from "react";
import { useAuth } from "../../context/auth.provider";
import { Link } from "react-router-dom";
import Line from "../Line";
import Navbar from "../Navbar";
import { useTheme } from "../../context/theme.provider";
import Loading from "../Loading";

const ResetPasswordPage = () => {
  const { handleResetPassword } = useAuth();
  const { theme } = useTheme();

  const [isHidden, setIsHidden] = useState(true);

  const handleHidden = () => {
    setIsHidden(true);
  };

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

      <Loading />

      <form
        onSubmit={handleResetPassword}
        className={`border-[1px] shadow-lg ${
          theme == "light" ? "border-zinc-200" : "border-zinc-800"
        } rounded-lg`}
      >
        <div className="px-6 py-4 flex flex-col">
          <div className="flex flex-col mb-3 gap-y-3">
            <h1
              className={`font-bold flex flex-col items-center justify-center gap-y-4 mt-2 text-2xl ${
                theme == "light" ? "text-slate-950" : "text-white"
              } justify-center mb-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex items-center justify-center size-10"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Reset Password
            </h1>

            <label htmlFor="email" className="font-semibold w-fit -mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`border-[1px] ${
                theme == "light"
                  ? "border-slate-200 placeholder-slate-500 outline-zinc-800 focus:outline-[3px] outline-offset-2"
                  : "border-zinc-800 placeholder-zinc-500 outline-zinc-800 focus:outline-[2px] outline-offset-2"
              } px-3 py-[6px] mt-1 rounded-md pr-24`}
              autoFocus
              required
            />

            <label htmlFor="password" className="font-semibold w-fit -mb-3">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`border-[1px] ${
                theme == "light"
                  ? "border-slate-200 placeholder-slate-500 outline-zinc-800 focus:outline-[3px] outline-offset-2"
                  : "border-zinc-800 placeholder-zinc-500 outline-zinc-800 focus:outline-[2px] outline-offset-2"
              } px-3 py-[6px] mt-1 rounded-md pr-24`}
              required
            />

            <button
              type="submit"
              className={` cursor-pointer ${
                theme == "light"
                  ? "text-white bg-slate-900 hover:bg-slate-800"
                  : "bg-white text-slate-900"
              } duration-200 py-[6px] flex justify-center rounded-md font-medium text-lg`}
            >
              Reset password
            </button>

            <Link
              to="/login"
              className="font-medium items-center justify-center flex mt-3"
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
                class="lucide lucide-arrow-left mr-3 h-4 w-4"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              <div
                className={`${
                  theme == "light"
                    ? "hover:border-slate-900"
                    : "hover:border-white"
                } border-b-[1px] border-transparent`}
              >
                Back to Login
              </div>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
