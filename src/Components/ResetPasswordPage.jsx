import React, { useState } from "react";
import { useAuth } from "../context/auth.provider";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
  const { handleResetPassword } = useAuth();

  const [isHidden, setIsHidden] = useState(true);

  const handleHidden = () => {
    setIsHidden(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-neutral-800 to-zinc-950 text-white">
      <form
        onSubmit={handleResetPassword}
        className={`border-[1px] border-zinc-800 rounded-md`}
      >
        <div className="px-6 py-4 flex flex-col">
          <div className="flex flex-col mb-3 gap-y-3">
            <h1 className="font-bold flex text-2xl justify-center mb-2 flex-col items-center gap-y-5">
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

            <label htmlFor="email" className="font-semibold w-fit">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-[1px] border-zinc-800 px-3 py-2 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md pr-24"
              autoFocus
              required
            />

            <label htmlFor="password" className="font-semibold w-fit">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-[1px] border-zinc-800 px-3 py-2 outline-zinc-800 focus:outline-2 outline-offset-2 rounded-md pr-24"
              required
            />

            <button
              type="submit"
              className="bg-white mt-3 cursor-pointer duration-200 hover:bg-neutral-200 text-black/90 py-2 flex justify-center rounded-md font-semibold text-lg"
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
              <div className="hover:border-white border-b-[1px] border-transparent">
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
