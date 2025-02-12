import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth.provider";
import Navbar from "../Navbar";
import { useTheme } from "../../context/theme.provider";
import Line from "../Line";
import { useCookies } from "react-cookie";

const LoginPage = () => {
  const { handleLogin, isLoggedIn, setIsLoggedIn } = useAuth();
  const { theme } = useTheme();

  const [cookies, setCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleLogin(formData.get("email"), formData.get("password"));
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
        id="login-form"
        onSubmit={handleSubmit}
        className={`border-[1px] shadow-lg ${
          theme == "light" ? "border-zinc-200" : "border-zinc-800"
        } rounded-lg`}
      >
        <div className="px-6 py-5 flex flex-col">
          <div className="flex flex-col mb-8 gap-y-3">
            <h1
              className={`font-bold flex text-2xl ${
                theme == "light" ? "text-slate-950" : "text-white"
              } justify-center mb-2`}
            >
              Login
            </h1>

            <div className="flex flex-col">
              {isLoggedIn ? (
                <label
                  htmlFor="email"
                  className={`font-semibold ${
                    theme == "light" ? "text-slate-950" : "text-white"
                  } mb-1 w-fit`}
                >
                  Email
                </label>
              ) : (
                <div
                  className={`${
                    theme == "light"
                      ? "font-medium text-red-500"
                      : "font-normal"
                  } mb-1 italic text-red-400`}
                >
                  Email or password is invalid.
                </div>
              )}

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className={`border-[1px] ${
                  theme == "light"
                    ? "border-slate-200 placeholder-slate-500 outline-zinc-800 focus:outline-[3px] outline-offset-2"
                    : "border-zinc-800 placeholder-zinc-500 outline-zinc-800 focus:outline-[2px] outline-offset-2"
                } px-3 py-[6px] mt-1 rounded-md pr-24`}
                autoFocus
                required
              />
            </div>

            <div className="flex flex-col">
              {isLoggedIn ? (
                <label
                  htmlFor="password"
                  className={`font-semibold ${
                    theme == "light" ? "text-slate-950" : "text-white"
                  } mb-1 w-fit`}
                >
                  Password
                </label>
              ) : (
                <div
                  className={`${
                    theme == "light"
                      ? "font-medium text-red-500"
                      : "font-normal"
                  } mb-1 italic text-red-400`}
                >
                  Email or password is invalid.
                </div>
              )}
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={`border-[1px] ${
                  theme == "light"
                    ? "border-slate-200 placeholder-slate-500 outline-zinc-800 focus:outline-[3px] outline-offset-2"
                    : "border-zinc-800 placeholder-zinc-500 outline-zinc-800 focus:outline-[2px] outline-offset-2"
                } px-3 py-[6px] mt-1 rounded-md`}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={` cursor-pointer ${
              theme == "light"
                ? "text-white bg-slate-900 hover:bg-slate-800"
                : "bg-white text-slate-900"
            } duration-200 py-[6px] flex justify-center rounded-md font-medium text-lg`}
          >
            Login
          </button>
          {/* <div className="text-red-800 pt-2 text-xs italic">
            Email or password is invalid.
          </div> */}

          <div className="flex justify-center">
            <Link
              to="/resetpassword"
              className="flex justify-center mt-4 text-xs text-blue-400 hover:underline cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>

          <div
            className={`${
              theme == "light" ? "text-slate-900" : "text-white"
            } flex flex-row text-xs items-center justify-center mt-5`}
          >
            Don't have an account?
            <Link
              to="/signup"
              className="text-blue-400 ml-[6px] hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
