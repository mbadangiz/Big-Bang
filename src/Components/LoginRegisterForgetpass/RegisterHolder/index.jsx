import { RegisterForm } from "./RegisterForm/RegisterForm";

import UserRegisterLogo from "../../../Assets/Images/LoginRegisterForgetpass/UserRegisterLogo.png";

const RegisterHolder = () => {
  return (
    <div className="w-5/6 h-4/5 m-auto grid grid-cols-6">
      <div className="col-span-2 mt-2">
        <RegisterForm />
      </div>
      <div className=" col-span-2"></div>
      <div className=" col-span-2">
        <figure className="w-full mt-[70px]">
          <img className="w-full " src={UserRegisterLogo} alt="UserLoginLogo" />
        </figure>
      </div>
    </div>
  );
};

export { RegisterHolder };
