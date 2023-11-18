import { Link } from "react-router-dom";
import { ForgetpassResetpassForm } from "./ForgetpassResetpassForm/ForgetpassChangepassForm";

import ForgetpassLogo from "../../../../../Assets/Images/LoginRegisterForgetpass/ForgetpassBackground.png";

const ForgetpassResetpassHolder = () => {
  return (
    <>
      <div className="w-5/6 h-4/5 m-auto grid grid-cols-6">
        <div className="col-span-2 mt-20">
          <ForgetpassResetpassForm />
        </div>
        <div className=" col-span-2"></div>
        <div className=" col-span-2">
          <figure className="w-[400px] mt-[70px]  relative">
            <img
              className="w-full "
              src={ForgetpassLogo}
              alt="ForgetpassLogo"
            />
            <figcaption className="ext-[31px] text-bluePrimary w-[350px] text-center absolute bottom-6   right-[-180px]">
              <Link to="/">
                ما بهت کمک می کنیم تا رمز عبور جدیدت رو وارد کنی😉
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export { ForgetpassResetpassHolder };
