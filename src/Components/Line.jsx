import React from "react";
import { useTheme } from "../context/theme.provider";

const Line = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`border-b-[1px] transition duration-200 ${
        theme === "light" ? "border-zinc-200" : "border-zinc-900"
      } `}
    ></div>
  );
};

export default Line;
