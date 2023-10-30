import { Accardion } from "../../../Common/Accardion/Accardion";
import React, { Component } from "react";

import EmojiRating from "react-emoji-rating";
import { TopSection } from "./CourseDetailTopSection/TopSection";

const CourseDetails = () => {
  return (
    <div className="width-handler mt-2">
      <TopSection />

      <div className="w-full mt-11 flex">
        <div className="w-[830px]">
          <div
            className="h-[74px] shadow-md rounded-[12px] text-[19px]
          text-[#707070] flex items-center gap-16"
          >
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
          <div className="shadow-md rounded-[12px] mb-4">
            <div className="">
              <EmojiRating variant="classic" className="w-full" />
            </div>
          </div>
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
