import RegisterLogo from "../../../../Assets/Images/LoginRegisterForgetpass/RegisterBackground.png";
import { Link, useLocation, useParams } from "react-router-dom";
import { RegisterForms } from "./RegisterForms/RegisterForms";

const RegisterHolder = () => {
  const locationPath = useLocation().pathname;

  const handleRegisterSteps = (location) => {
    if (location === "/User/Register/Step1") {
      return <h2>مرحله اول</h2>;
    } else if (location === "/User/Register/Step2") {
      return <h2>مرحله دوم</h2>;
    } else if (location === "/User/Register/Step3") {
      return <h2>مرحله سوم</h2>;
    }
  };

  return (
    <div className="w-5/6 h-4/5 m-auto grid grid-cols-8 px-[100px] backdrop-blur-sm bg-black/5 my-5 rounded-[22px] ">
      <div className="col-span-3 pt-[150px]">
        <RegisterForms />
      </div>
      <div className="col-span-2"></div>
      <div className="col-span-3">
        <figure className="mx-auto w-[480px] mt-[40px] relative">
          <img className="w-full " src={RegisterLogo} alt="UserLoginLogo" />
          <figcaption className="text-[35px] text-bluePrimary w-[220px] text-center absolute bottom-4 right-[30px] ">
            {handleRegisterSteps(locationPath)}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export { RegisterHolder };
