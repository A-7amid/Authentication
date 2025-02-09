import React, { useState } from "react";
import { useAuth } from "../context/auth.provider";

const ResetPasswordPage = () => {
  const { handleResetPassword } = useAuth();

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-neutral-800 to-zinc-950 text-white">
      <form
        onSubmit={handleResetPassword}
        className={`border-[1px] border-zinc-800 rounded-md`}
      >
        <div className="px-6 py-5 flex flex-col">
          <div className="flex flex-col mb-3 gap-y-3">
            <h1 className="font-bold flex text-2xl justify-center mb-3">
              Create new password
            </h1>

            <label htmlFor="email" className="font-semibold w-fit">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="border-[1px] border-zinc-800 px-3 py-2 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md pr-24"
              autoFocus
              required
            />

            <label htmlFor="password" className="font-semibold w-fit">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="border-[1px] border-zinc-800 px-3 py-2 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md pr-24"
              autoFocus
              required
            />

            <button
              type="submit"
              className="bg-white mt-3 cursor-pointer duration-200 hover:bg-neutral-200 text-black/90 py-2 flex justify-center rounded-md font-medium text-lg"
            >
              Change password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
