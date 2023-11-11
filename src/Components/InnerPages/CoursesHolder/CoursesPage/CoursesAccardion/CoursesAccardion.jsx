import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import GetCourseType from "../../../../../Core/Services/Api/GetCourseType";
import { TomanLogo } from "../../../../Common/TomanLogo/TomanLogo";

const CoursesAccardion = () => {
  const [CourseTypes, setCourseTypes] = useState();
  const [minMax, setMinMax] = useState([0, 15000000]);
  const courseTypesGetter = async () => {
    const res = await GetCourseType();
    setCourseTypes(res);
  };
  useEffect(() => {
    courseTypesGetter();
  }, []);
  const threeNumberSpiliter = (num) => {
    const number = new Intl.NumberFormat("en-US", { style: "decimal" }).format(
      num
    );
    return number;
  };
  return (
    <>
      <ul className="w-[300px] rounded-[15px]   h-[max-content] sticky top-5   border-2 border-solid border-grayDetail/10">
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1 ">
          <input type="checkbox" id="d0" name="r" className="hidden" />
          <label htmlFor="d0" className="px-6 cursor-pointer">
            نوع دوره
          </label>
          <label htmlFor="d0">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0  font-semibold overflow-hidden w-[65%] m-auto mt-2">
            {CourseTypes
              ? CourseTypes.map((types) => {
                  return (
                    <CheckBox
                      key={types.id}
                      text={types.typeName}
                      id={types.id}
                    />
                  );
                })
              : "-"}
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
          <div className="contentAcar text-[17px]   w-[100%] m-auto mt-2 min-h-[100px]">
            <RangeSlider
              className="my-5 w-[95%] mx-auto"
              min={0}
              max={15000000}
              step={50000}
              value={minMax}
              onInput={(e) => {
                setMinMax(e);
              }}
            />
            <div className="px-4">
              <div className="flex-row-all-center justify-start gap-3">
                <span>از</span>
                <span>{threeNumberSpiliter(minMax[0])}</span>
                <TomanLogo />
              </div>
              <div className="flex-row-all-center justify-start gap-3">
                <span>تا</span>
                <span>{threeNumberSpiliter(minMax[1])}</span>
                <TomanLogo />
              </div>
            </div>
          </div>
        </li>
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1">
          <input type="checkbox" id="d5" name="r" className="hidden" />
          <label htmlFor="d5" className="px-6">
            دسته بندی
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
    </>
  );
};

export { CoursesAccardion };

const CheckBox = ({ text, id }) => {
  return (
    <div>
      <input type="checkbox" id={`check${id}`} className="" />
      <label htmlFor={`check${id}`} className="px-3 text-sm">
        {text}
      </label>
    </div>
  );
};
