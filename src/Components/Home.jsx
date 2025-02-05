import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const userName = localStorage.getItem("name");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen items-center mt-8 overflow-y-hidden">
      <h1 className="text-2xl font-semibold">Home Page</h1>
      <Link
        className="bg-green-500 hover:bg-green-500/90 mb-3 px-4 py-2 font-medium text-lg rounded-lg mt-3 duration-200"
        to="/login"
      >
        Login
      </Link>
      <h3>{userName}</h3>
    </div>
  );
};

export default Home;
