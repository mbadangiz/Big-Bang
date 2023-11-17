import { LoginForm } from "./LoginForm/LoginForm";
import UserLoginLogo from "../../../../Assets/Images/LoginRegisterForgetpass/UserLoginLogo.png";
import { Link } from "react-router-dom";

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
            <img className="w-full " src={UserLoginLogo} alt="UserLoginLogo" />
            <figcaption className="text-[35px] text-bluePrimary hover:text-blue-900 w-[100px] text-center absolute bottom-4   right-[70px]  ">
              <Link to="/">کاربران</Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export { LoginHolder };
