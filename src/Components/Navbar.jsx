import React, { useEffect, useRef, useState } from "react";
import Switch from "./Switch";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/theme.provider";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const { theme } = useTheme();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookies.token) setIsLoggedIn(true);
  }, []);

  const handleLogOut = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("username");
    removeCookie("token");
    removeCookie("username");
    setIsLoggedIn(false);
  };

  return (
    <div className="container mx-auto py-3">
      <div className="flex w-full justify-between items-center">
        <Link
          to="/"
          className={`font-bold text-2xl ${
            theme == "light" ? "text-slate-950" : "text-white"
          }`}
        >
          TaskFlow
        </Link>

        <div className="flex items-center gap-x-3">
          <Switch />

          {!isLoggedIn ? (
            <div className="flex gap-x-3">
              <Link
                className={` ${
                  theme == "light"
                    ? "bg-transparent border-2 text-black border-gray-300 hover:bg-zinc-200"
                    : "bg-transparent border-2 text-white border-neutral-800 hover:bg-neutral-800"
                } px-4 py-[6px] font-medium rounded-md  duration-200 transition`}
                to="/login"
              >
                Login
              </Link>

              <Link
                className={` ${
                  theme == "light"
                    ? "bg-gray-900 text-white duration-200 transition hover:bg-gray-900/95"
                    : "bg-white hover:bg-neutral-200 text-black duration-200 transition-all"
                } px-4 py-[6px] font-medium rounded-md `}
                to="/signup"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={handleLogOut}
              className={`  ${
                theme === "light"
                  ? "bg-transparent text-red-600 hover:text-red-700 hover:bg-red-100"
                  : "bg-transparent text-red-400 hover:text-red-300 hover:bg-red-400/50"
              } flex items-center gap-x-3
                cursor-pointer rounded-md font-medium px-4 py-2 transition duration-200`}
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
                class="lucide lucide-log-out mr-1 h-4 w-4"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line>
              </svg>
              Log Out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
