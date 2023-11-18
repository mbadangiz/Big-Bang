import React from "react";

const CourseDesc = ({ decripe }) => {
  return (
    <div className="w-[830px]  rounded-[12px] mt-6  bg-white">
      <h2 className="f-bold text-[20px] mr-5 py-1">توضیحات دوره</h2>
      <div className="w-full py-5 mx-auto">
        <p className=" text-[15px] text-justify px-3">{decripe}</p>
      </div>
    </div>
  );
};

export { CourseDesc };
