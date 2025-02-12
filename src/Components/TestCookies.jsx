import React from "react";
import { useCookies } from "react-cookie";

function Test() {
  const [cookies, setCookie] = useCookies(["name"]);

  const handleOnChange = (newName) => {
    setCookie("name", newName);
  };

  return (
    <div>
      <h2>{cookies.name}</h2>
      <input type="text" onChange={(e) => handleOnChange(e.target.value)} />
    </div>
  );
}

export default Test;
