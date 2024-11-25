import { Link } from "react-router-dom";
import { useMyPass } from "../../../Core/Providers/PasswordProvider";
import { useState } from "react";

const Test = () => {
  const [ghollomAli, setGhollomAli] = useState({ us: "a" });
  console.log(ghollomAli);
  return (
    <>
      <button
        className="bg-rose-500 w-[300px]"
        onClick={() => {
          setGhollomAli({ ...ghollomAli, usb: "3" });
        }}
      >
        {" "}
        add
      </button>
    </>
  );
};

export default Test;
