import Style from "./index.module.css";

import Error404ImageBackground from "../../Assets/Images/Error404/Background/Error404ImageBackground.png";
import { BlueButton } from "../Common/Buttons/BlueButton";

const Error404PageHolder = () => {
  return (
    <div
      className={`${Style.Error404PageBackground} w-full h-screen grid grid-cols-12 gap-4 px-6 pt-6 pb-60`}
    >
      <div className="col-span-4 h-[400px] "></div>
      <div className="col-span-4 h-[400px] ">
        <figure
          className={`${Style.Error404PageGif} shadow w-[400px] h-full mx-auto rounded-full pt-10`}
        >
          <img
            className="w-[90%] h-[90%] mx-auto"
            src={Error404ImageBackground}
            alt=""
          />
        </figure>
      </div>
      <div className="col-span-4 h-[400px]"></div>

      <div className="col-span-3 h-[100px]"></div>
      <div className="col-span-6 h-[100px]">
        <h3 className="text-[30px] text-bluePrimary text-center leading-[95px]">
          متاسفانه صفحه مورد نظر یافت نشد
        </h3>
      </div>
      <div className="col-span-3 h-[100px]"></div>

      <div className="col-span-4 h-[100px]"></div>
      <div className="col-span-4 h-[100px]">
        <BlueButton buttonText="بازگشت به صفحه اصلی" />
      </div>
      <div className="col-span-4 h-[100px]"></div>
    </div>
  );
};

export { Error404PageHolder };
