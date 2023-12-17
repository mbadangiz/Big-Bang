import React from "react";
import { RedButton } from "../../../Common/Buttons/RedButton";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../../../Core/Services/common/storage.services";

const PanelLogOutModal = () => {
  const navigate = useNavigate();

  const LogOutTokenRemoveHandler = () => {
    removeItem("token");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="w-screen h-screen absolute top-0 right-0 m-auto bg-black/40">
      <div className="border-2 border-solid border-bluePrimary bg-white w-[500px] h-[230px] mx-auto mt-[200px] rounded-xl">
        <div className="mt-10 w-full h-14 ">
          <h2 className="text-[22px] text-bluePrimary text-center leading-[55px]">
            آیا می خواهید از حساب کاربری خود خارج شوید ؟
          </h2>
        </div>
        <div className="mt-10 h-12 flex justify-center">
          <button
            onClick={() => navigate("/User/Panel/Dashboard")}
            className=" border-2 border-solid border-slate-200 mt-[2px] mr-14  bg-white w-[150px] h-[39px] rounded-full shadow-lg transform hover:scale-125 ease-out duration-300"
          >
            لغو
          </button>

          <RedButton
            buttonText="خروج از حساب"
            buttonClasses="w-[150px] h-[39px]"
            textClasses="text-center leading-[34px] mr-[20px]"
            clickHandler={LogOutTokenRemoveHandler}
          />
        </div>
      </div>
    </div>
  );
};

export { PanelLogOutModal };
