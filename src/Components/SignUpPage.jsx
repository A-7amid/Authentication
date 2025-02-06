import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "../context/signup.provider";

const SignUpPage = () => {
  const { handleSignUp, isRegistered, setIsRegistered } = useSignUp();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    setIsRegistered(false);
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        id="signup-form"
        onSubmit={handleSignUp}
        className="border-2 border-zinc-200 rounded-md"
      >
        <div className="px-7 py-8 flex flex-col">
          <div className="flex flex-col mb-8 gap-y-3 px-7">
            <h1 className="font-medium flex text-3xl justify-center mb-2">
              Sign Up
            </h1>

            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border-2 border-zinc-300 px-2 py-2 mt-1 outline-none rounded-lg"
              autoFocus
              required
            />
            {isRegistered && (
              <div className="text-red-400 font-medium">
                Email is already registered
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-2 border-zinc-300 px-2 py-2 mt-1 outline-none rounded-lg"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 border-zinc-300 px-2 py-2 mt-1  outline-none rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-400/90 duration-200 text-white py-2 flex cursor-pointer justify-center rounded-lg font-medium text-xl"
          >
            Sign Up
          </button>

          <div className="text-black/50 font-medium flex flex-row items-center justify-center mt-6">
            Already have an account?
            <Link to="/login" className="text-blue-400 ml-1">
              Log in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
