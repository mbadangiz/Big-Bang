import { LoginForm } from "./LoginForm/LoginForm";
import UserLoginLogo from "../../../Assets/Images/LoginRegisterForgetpass/UserLoginLogo.png";

const LoginHolder = () => {
  return (
    <div className="w-5/6 h-4/5 m-auto grid grid-cols-6">
      <div className="col-span-2 mt-20">
        <LoginForm />
      </div>
      <div className=" col-span-2"></div>
      <div className=" col-span-2">
        <figure className="w-full mt-[70px]">
          <img className="w-full " src={UserLoginLogo} alt="UserLoginLogo" />
        </figure>
      </div>
    </div>
  );
};

export { LoginHolder };
