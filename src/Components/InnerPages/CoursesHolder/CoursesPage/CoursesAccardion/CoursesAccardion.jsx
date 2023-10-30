import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const CoursesAccardion = () => {
  return (
    <ul className="w-[300px] rounded-[15px] shadow-md bg-[#F6F6F6] h-[max-content]">
      <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1 ">
        <input type="checkbox" id="d0" name="r" className="hidden" />
        <label htmlFor="d0" className="px-6">
          نوع دوره
        </label>
        <label htmlFor="d0">
          <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
        </label>
        <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[65%] m-auto mt-2">
          <div>
            <input type="checkbox" id="d1" className="" />
            <label htmlFor="d1" className="px-3">
              رایگان
            </label>
          </div>
          <div>
            <input type="checkbox" id="d2" className="" />
            <label htmlFor="d2" className="px-3">
              آنلاین
            </label>
          </div>
          <div>
            <input type="checkbox" id="d3" className="" />
            <label htmlFor="d3" className="px-3">
              ویژه
            </label>
          </div>
        </div>
      </li>
      <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1">
        <input type="checkbox" id="d4" name="r" className="hidden" />
        <label htmlFor="d4" className="px-6">
          قیمت
        </label>
        <label htmlFor="d4">
          <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
        </label>
        <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[100%] m-auto mt-2">
          <RangeSlider />
        </div>
      </li>
      <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1">
        <input type="checkbox" id="d5" name="r" className="hidden" />
        <label htmlFor="d5" className="px-6">
          دسته بندی{" "}
        </label>
        <label htmlFor="d5">
          <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
        </label>
        <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[65%] m-auto mt-2"></div>
      </li>
      <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1 ">
        <input type="checkbox" id="d6" name="r" className="hidden" />
        <label htmlFor="d6" className="px-6">
          تگ های محبوب{" "}
        </label>
        <label htmlFor="d6">
          <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
        </label>
        <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[65%] m-auto mt-2"></div>
      </li>
    </ul>
  );
};

export { CoursesAccardion };
