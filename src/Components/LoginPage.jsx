import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../dummydata";
import { useAuth } from "../context/auth.provider";

const LoginPage = () => {
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        id="form"
        onSubmit={handleLogin}
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
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border-2 border-zinc-300 px-2 py-2 mt-1  outline-none rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-500/90 duration-200 text-white py-2 flex justify-center rounded-lg font-medium text-xl"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
