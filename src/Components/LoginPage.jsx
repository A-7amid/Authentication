import React, { useEffect, useState } from "react";
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
    <div className="flex items-center justify-center h-screen">
      <form
        id="login-form"
        onSubmit={handleSubmit}
        className="border-2 border-zinc-200 rounded-md"
      >
        <div className="px-7 py-8 flex flex-col">
          <div className="flex flex-col mb-8 gap-y-3 px-7">
            <h1 className="font-medium flex text-3xl justify-center mb-2">
              Login
            </h1>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-zinc-300 px-2 py-2 mt-1 outline-none rounded-lg"
              autoFocus
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 border-zinc-300 px-2 py-2 mt-1 outline-none rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-400/90  cursor-pointer duration-200 text-white py-2 flex justify-center rounded-lg font-medium text-xl"
          >
            Login
          </button>
          {/* <div className="text-red-800 pt-2 text-xs italic">
            Email or password is invalid.
          </div> */}

          <div className="text-black/50 flex flex-row text-xs items-center justify-center mt-2">
            Need an account?
            <Link to="/signup" className="text-blue-400 ml-1">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
