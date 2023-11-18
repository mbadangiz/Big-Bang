import { LoginForm } from "./LoginForm/LoginForm";
import { Link } from "react-router-dom";
import { LoginSocialMedia } from "./LoginSocialMedia";

import LoginLogo from "../../../../Assets/Images/LoginRegisterForgetpass/LoginLogo.png";

const LoginHolder = () => {
  return (
    <>
      <div className="w-5/6 h-4/5 m-auto grid grid-cols-8 px-[100px] backdrop-blur-sm bg-black/5 my-5 rounded-[22px] ">
        <div className="col-span-3 pt-[150px]">
          <LoginForm />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-3">
          <figure className="mx-auto w-[480px] mt-[40px] relative">
            <img className="w-full " src={LoginLogo} alt="LoginLogo" />
            <figcaption className=" text-bluePrimary w-[320px] h-[100px] text-center absolute bottom-[-20px] left-[280px]">
              <LoginSocialMedia />
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export { LoginHolder };
