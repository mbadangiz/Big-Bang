import React, { useEffect } from "react";
import { LoginHolder } from "../../Components/User/LoginRegisterForgetpass/LoginHolder";

const UserLogin = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <LoginHolder />;
};

export { UserLogin };
