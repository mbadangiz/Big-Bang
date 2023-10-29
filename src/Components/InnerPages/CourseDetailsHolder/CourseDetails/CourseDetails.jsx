import React from "react";
import { Accardion } from "../../../Common/Accardion/Accardion";

const CourseDetails = () => {
  const information = [
    {
      id: 1,
      info: "استاد بحر",
    },
    {
      id: 2,
      info: "درحال برگذاری",
    },
    {
      id: 3,
      info: 198,
    },

    {
      id: 3,
      info: "1402/01/01",
    },
  ];
  return (
    <div className="width-handler mt-2">
      <div className="p-3 rounded-[12px] shadow-md">
        <div className="flex border-b-2 border-solid border-gray-300">
          <div className="">
            <h1 className="text-[29px] font-bold">اموزش Tailwindcss</h1>
            <p className="w-[780px] text-[23px] mt-4">
              در قالب آموزش tailwind سعی کردیم این ابزار بسیار کاربردی را در
              قالب پروژه قدم به قدم، به شما آموزش دهیم. با دوره آموزش
              tailwindcss شما میتوانید به شکل کامل با tailwind آشنا شوید.
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
          <div className=" p-3 flex gap-x-2">
            <i className="fi fi-rs-chalkboard-user text-bluePrimary text-2xl "></i>
            <p> استاد دوره:</p>
            <p>{information[0].info}</p>
          </div>
          <div className=" p-3 flex gap-x-2">
            <i className="fi fi-rr-play-circle text-bluePrimary text-2xl "></i>
            <p> وضعیت دوره :</p>
            <p>{information[1].info}</p>
          </div>
          <div className=" p-3 flex gap-x-2">
            <i className="fi fi-rr-graduation-cap text-bluePrimary text-2xl"></i>
            <p> تعداد دانشجو :</p>
            <p>{information[2].info}</p>
          </div>
          <div className=" p-3 flex gap-x-2">
            <i className="fi fi-rr-clock text-bluePrimary text-2xl"></i>
            <p> زمان دوره :</p>
            <p>{information[3].info}</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-11 flex">
        <div className="w-[830px]">
          <div className="h-[74px] shadow-md rounded-[12px] text-[19px] text-[#707070] flex items-center gap-16">
            <a href="#" className="mr-5 font-bold">
              توضیحات
            </a>
            <a href="#className" className="">
              جلسات
            </a>
            <a href="#" className="">
              پرسش و پاسخ
            </a>
          </div>
          <div className="w-[830px] shadow-md rounded-[12px] mt-6">
            <h2 className="font-bold text-[20px] mr-5 py-1">توضیحات دوره</h2>
            <div className="w-[754px] m-auto text-[17px] py-5">
              <p>
                یکی از بزرگ‌ترین مشکلات استفاده از CSS خام زمان‌بر بودن
                بهره‌گیری از آن است. درست است که ما می‌توانیم همه چیز را به
                دقیق‌ترین روش ممکن پیاده‌سازی کنیم اما اگر عجله داشته باشیم و
                بخواهیم که در مدت زمان سریع‌تری ویژگی‌های مورد نظرمان را
                پیاده‌سازی کنیم چه؟ در این صورت شما به یک فریمورک نیاز دارید.
                اما آیا هر فریمورکی می‌تواند کارایی لازم را برای شما داشته باشد؟
                خیر! فریمورک‌هایی که به ما در استفاده کردن از CSS کمک می‌کنند
                بسیار زیاد بوده و هر کدام با مزایا و معایبی دست و پنجه نرم
                می‌کنند. یکی از بزرگ‌ترین عیب‌های بیشتر فریمورک‌ها سریع
                نبودن‌شان در امر پیاده‌سازی‌ست. برای حل این مشکل ما باید با تک
                تک این فریمورک‌ها کار کنیم و در نهایت پس از گذراندن چند ماه
                متوجه شویم که کدام مورد از کدام مورد دیگر بهتر است! خب این مسئله
                زمان‌بر و حوصله سربری است. اما از آنجا که خوشبختانه وبسایت
                آموزشی راکت حضور دارد ما می‌توانیم به شما این راهنمایی لازم را
                بدهیم. به صورت ساده اگر بخواهم بگویم: سریع‌ترین و دقیق‌ترین
                فریمورکی که با آن می‌توانید لایه‌بندی المان‌های وبسایت‌تان را با
                آن پیاده‌سازی کنید Tailwind CSS است. فریمورکی تازه کار اما با
                ویژگی‌های بسیار جذاب ....
              </p>
            </div>
          </div>
          <Accardion />
        </div>
        <div className="w-full mr-8">
          <div className="shadow-md rounded-[12px] mb-4"></div>
          <div className="shadow-md rounded-[12px] mb-4 overflow-hidden">
            <div className="h-[68px] bg-[#d9dde848] font-bold text-[20px] p-4">
              تگ های محبوب
            </div>
            <div className="mt-2 p-3">
              <h3 className="rounded-lg bg-[#d9dde848] inline-block p-3">
                #Tailwindcss
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseDetails };
