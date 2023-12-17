import React, { useEffect } from "react";
import { ForgetpassResetpassHolder } from "../../Components/User/LoginRegisterForgetpass/ForgetpassHolder/ForgetpassResetpassHolder";

const UserResetpass = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <ForgetpassResetpassHolder />;
};

export { UserResetpass };
