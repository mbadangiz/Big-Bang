import React, { useEffect } from "react";
import { ForgetpassHolder } from "../../Components/User/LoginRegisterForgetpass/ForgetpassHolder";

const UserForgetpass = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <ForgetpassHolder />;
};

export { UserForgetpass };
