import { Link } from "react-router-dom";
import { ForgetpassForm } from "./ForgetpassForm/ForgetpassForm";

import ForgetpassLogo from "../../../../Assets/Images/LoginRegisterForgetpass/ForgetpassBackground.png";

const ForgetpassHolder = () => {
  return (
    <>
      <div className="w-5/6 h-4/5 m-auto grid grid-cols-8 px-[100px] backdrop-blur-sm bg-black/5 my-5 rounded-[22px] ">
        <div className="col-span-3 pt-[150px]">
          <ForgetpassForm />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-3">
          <figure className="mx-auto w-[480px] mt-[40px] relative">
            <img
              className="w-full "
              src={ForgetpassLogo}
              alt="ForgetpassLogo"
            />
            <figcaption className="text-[31px] text-bluePrimary w-[350px] text-center absolute bottom-12   right-[-180px]">
              <h2>رمز عبورت رو فراموش کردی ؟</h2>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export { ForgetpassHolder };
