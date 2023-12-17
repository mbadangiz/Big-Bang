import React, { useEffect } from "react";
import { RegisterHolder } from "../../Components/User/LoginRegisterForgetpass/RegisterHolder";

const UserRegister = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <RegisterHolder />;
};

export { UserRegister };
