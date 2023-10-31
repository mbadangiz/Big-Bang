import { data } from "browserslist";
import React from "react";

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
      id: 3,
      title: "زمان دوره",
      icon: "fi fi-rr-clock",
      info: "1402/01/01",
    },
  ];
  return (
    <div className="p-3 rounded-[12px] shadow-md">
      <div className="flex border-b-2 border-solid border-gray-300">
        <div className="">
          <h1 className="text-[27px] f-bold">اموزش Tailwindcss</h1>
          <p className="w-[780px] text-xl mt-4 text-grayDetail">
            در قالب آموزش tailwind سعی کردیم این ابزار بسیار کاربردی را در قالب
            پروژه قدم به قدم، به شما آموزش دهیم. با دوره آموزش tailwindcss شما
            میتوانید به شکل کامل با tailwind آشنا شوید.
          </p>
          <div className="flex mt-16 mb-5 relative justify-between items-center">
            <div className="w-[297px] h-[57px] rounded-[12px] bg-[#4376EE] text-[20px] font-semibold text-white flex items-center gap-x-7">
              <i className="fi fi-rr-shopping-cart flex px-3"></i>
              <h3 className="text-center">افزودن به سبد خرید</h3>
            </div>
            <div className="flex gap-x-2 text-2xl">
              <h2>566,000</h2>
              <p className="text-bluePrimary">تومان</p>
            </div>
          </div>
        </div>
        <div className="m-auto">
          <img
            src="./img/2.jpg"
            alt=""
            className="w-[420px] h-[290px] inline-block rounded-[12px]"
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
