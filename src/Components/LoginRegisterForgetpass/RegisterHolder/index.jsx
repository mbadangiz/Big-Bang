import { RegisterForm } from "./RegisterForm/RegisterForm";

import UserRegisterLogo from "../../../Assets/Images/LoginRegisterForgetpass/UserRegisterLogo.png";
import { Link } from "react-router-dom";

const RegisterHolder = () => {
  return (
    <div className="w-5/6 h-4/5 m-auto grid grid-cols-6">
      <div className="col-span-2 mt-2">
        <RegisterForm />
      </div>
      <div className=" col-span-2"></div>
      <div className=" col-span-2">
        <figure className="w-[400px] mt-[70px] relative">
          <img className="w-full " src={UserRegisterLogo} alt="UserLoginLogo" />
          <figcaption className="text-[35px] text-bluePrimary hover:text-blue-900 w-[100px] text-center absolute bottom-4 right-[70px] ">
            <Link to="/">کاربران</Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export { RegisterHolder };
