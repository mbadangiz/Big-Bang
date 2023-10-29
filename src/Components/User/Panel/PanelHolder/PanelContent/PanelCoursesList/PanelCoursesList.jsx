import React from "react";

const PanelCoursesList = () => {
  return (
    <div className=" p-3 rounded-3xl bg-slate-100">
      <div className="bg-bluePrimary p-4 rounded-lg text-white  mr-auto cursor-default">
        <span className="px-3">عکس دوره </span>
        <span className="px-9">نام دوره </span>
        <span className="px-9">استاد دوره </span>
        <span className="px-9"> ظرفیت دوره </span>
        <span className="px-9"> تاریخ شروع </span>
        <span className="px-9">تاریخ پایان </span>
        <span className="px-9">قیمت </span>
        <span className="px-9">افزودن </span>
      </div>
      <div className="bg-[#E8ECF1] p-4 rounded-lg text-white  mr-auto cursor-default mt-3"></div>
    </div>
  );
};

export { PanelCoursesList };
