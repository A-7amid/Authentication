import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.provider";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    handleLogin(formData.get("email"), formData.get("password"));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-neutral-800 to-zinc-950 text-white">
      <form
        id="login-form"
        onSubmit={handleSubmit}
        className={`border-[1px] border-zinc-800 rounded-lg`}
      >
        <div className="px-6 py-5 flex flex-col">
          <div className="flex flex-col mb-8 gap-y-3">
            <h1 className="font-bold flex text-2xl justify-center mb-2">
              Login
            </h1>

            <label className="flex flex-col">
              <span className="font-semibold mb-1 w-fit">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border-[1px] border-zinc-800 px-3 py-2 mt-1 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md pr-24"
                autoFocus
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="font-semibold mb-1">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="border-[1px] border-zinc-800 px-3 py-2 mt-1 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-white cursor-pointer duration-200 text-black/90 py-2 flex justify-center rounded-md font-medium text-lg"
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

          <div className="text-white flex flex-row text-xs items-center justify-center mt-5">
            Don't have an account?
            <Link to="/signup" className="text-blue-400 ml-1 hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
