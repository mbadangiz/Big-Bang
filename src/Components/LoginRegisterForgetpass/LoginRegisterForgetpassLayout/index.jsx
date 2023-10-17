import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../../Common/Navbar/Navbar";

import Style from "./index.module.css";

const LoginRegisterForgetpassLayout = () => {
  return (
    <div
      className={`${Style.LRFBackground}  w-full h-screen border-2 broder-solid border-rose-200`}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export { LoginRegisterForgetpassLayout };
