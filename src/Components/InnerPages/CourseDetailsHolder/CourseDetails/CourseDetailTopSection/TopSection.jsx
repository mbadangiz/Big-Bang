import { data } from "browserslist";
import React from "react";
import ImgTemp from "./../../../../../Assets/Image/sampleImage.png";
import { TomanLogo } from "../../../../Common/TomanLogo/TomanLogo";
const TopSection = ({ info }) => {
  const information = [
    {
      id: 1,
      title: "استاد دوره",
      info: "استاد بحر",
      icon: "fi fi-rs-chalkboard-user",
      //
    },
    {
      id: 2,
      title: "وضعیت دوره",
      info: "درحال برگذاری",
      icon: "fi fi-rr-play-circle",
    },
    {
      icon: "fi fi-rr-graduation-cap",
      title: "تعداد دانشجو ",
      id: 3,
      info: 198,
    },

    {
      id: 4,
      title: "زمان دوره",
      icon: "fi fi-rr-clock",
      info: "1402/01/01",
    },
  ];
  return (
    <div className="p-3 rounded-[12px] bg-white ">
      <div className="flex border-b-2 border-solid border-gray-300">
        <div className="">
          <h1 className="text-[27px] f-bold">اموزش Tailwindcss</h1>
          <p className="w-[780px] text-xl mt-4 text-grayDetail">
            در قالب آموزش tailwind سعی کردیم این ابزار بسیار کاربردی را در قالب
            پروژه قدم به قدم، به شما آموزش دهیم. با دوره آموزش tailwindcss شما
            میتوانید به شکل کامل با tailwind آشنا شوید.
          </p>
          <div className="flex mt-16 mb-5 relative justify-between items-center">
            <div className="w-[250px] h-[57px] rounded-[12px] bg-[#4376EE] font-semibold text-white flex-row-all-center gap-3">
              <i className="fi fi-rr-shopping-cart relative top-1.5 text-2xl"></i>
              <h3 className="text-lg">افزودن به سبد خرید</h3>
            </div>
            <div className=" text-2xl flex-row-all-center gap-2">
              <TomanLogo />
              <h2 className="f-bold text-bluePrimary">566,000</h2>
            </div>
          </div>
        </div>
        <div className="m-auto">
          <img
            src={ImgTemp}
            alt=""
            className="h-[215px] inline-block rounded-[12px]"
          />
        </div>
      </div>
      <div className="flex justify-evenly">
        {information.map((items) => {
          return <InfoItems data={items} key={items.id} />;
        })}
      </div>
    </div>
  );
};

export { TopSection };
const InfoItems = ({ data }) => {
  const { id, info, icon, title } = data;
  return (
    <div className=" p-3 flex gap-x-2">
      <i className={`${icon} text-bluePrimary text-2xl`}></i>
      <p> {title} : </p>
      <p>{info}</p>
    </div>
  );
};
