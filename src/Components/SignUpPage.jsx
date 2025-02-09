import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.provider";

const SignUpPage = () => {
  const { handleSignUp, isRegistered } = useAuth();

  const navigate = useNavigate();

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
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-neutral-800 to-zinc-950 text-white">
      <form
        id="signup-form"
        onSubmit={handleSubmit}
        className="border-[1px] border-zinc-800 rounded-lg bg-transparent backdrop-blur-lg"
      >
        <div className="px-6 py-5 flex flex-col">
          <div className="flex flex-col">
            <h1 className="font-bold flex text-2xl justify-center mb-3">
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
              className="border-[1px] border-zinc-800 px-3 py-2 mt-1 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md pr-24"
              autoFocus
              required
            />
            {isRegistered && (
              <div className="text-red-400 font-medium mt-3">
                Email is already registered
              </div>
            )}

            <label htmlFor="email" className="font-semibold w-fit mb-1 mt-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border-[1px] border-zinc-800 px-3 py-2 mt-1 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md pr-32"
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
              className="border-[1px] border-zinc-800 px-3 py-2 mt-1 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-zinc-100 duration-200 text-black/85 py-2 flex cursor-pointer justify-center rounded-md font-semibold mt-4"
          >
            Sign Up
          </button>

          <div className="select-none mt-3 flex items-center gap-x-2 font-medium text-xs">
            <div className="h-px flex bg-white w-full"></div>
            <span>or</span>
            <div className="h-px flex bg-white w-full"></div>
          </div>

          <div className="flex flex-col gap-y-2 justify-center mt-3">
            <Link className="border-zinc-800 hover:bg-zinc-800 items-center duration-200 font-medium border-2 w-full py-1 justify-center flex rounded-md">
              <img src="/github.png" alt="github" className="size-4 mr-3" />
              Sign up with GitHub
            </Link>
            <Link className="border-zinc-800 hover:bg-zinc-800 items-center duration-200 font-medium border-2 w-full py-1 justify-center flex rounded-md">
              <img src="/twitter.png" alt="twitter" className="size-4 mr-3" />
              Sign up with Twitter
            </Link>
          </div>

          <div className="text-white font-medium flex flex-row items-center justify-center mt-6">
            Already have an account?
            <Link to="/login" className="text-blue-400 ml-1 hover:underline">
              Log in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
