import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useTheme } from "../context/theme.provider";

const Loading = () => {
  const { theme } = useTheme();

  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    handleLoading();
  }, []);

  return (
    loading && (
      <div
        className={`${
          theme == "light" ? "bg-white" : "bg-neutral-900"
        } h-full absolute flex items-center justify-center w-full`}
      >
        <ReactLoading
          type="spin"
          color="var(--color-cyan-500)"
          height={40}
          width={40}
          className=""
        />
      </div>
    )
  );
};

export default Loading;
