import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import GetCourseType from "../../../../../Core/Services/Api/GetCourseType";
import { TomanLogo } from "../../../../Common/TomanLogo/TomanLogo";
import { ThreeNumberSpiliter } from "../../../../../Core/Utils/ThreeNumberSpiliter/ThreeNumberSpiliter";
import { GetCategoryList } from "../../../../../Core/Services/Api/GetCategoryList";
import { FilterCourse } from "../../../../../Core/Services/Api/FilterCourse";

const CoursesAccardion = () => {
  const [CourseTypes, setCourseTypes] = useState();
  const [categoryName, setCateGoryName] = useState();
  const [minMax, setMinMax] = useState([0, 2000000]);

  const [CourseTypeValue, setCourseTypeValue] = useState("");

  const courseTypesGetter = async () => {
    const res = await GetCourseType();
    setCourseTypes(res);
  };

  const categoryNameGetter = async () => {
    const res = await GetCategoryList();
    setCateGoryName(res);
  };

  useEffect(() => {
    courseTypesGetter();
    categoryNameGetter();
  }, []);

  return (
    <>
      <ul className="w-[300px] rounded-[15px]   h-[max-content] sticky top-5   border-2 border-solid border-grayDetail/10">
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px]  mb-1 ">
          <input type="checkbox" id="d0" name="r" className="hidden" />
          <label htmlFor="d0" className="px-6 cursor-pointer f-bold">
            نوع دوره
          </label>
          <label htmlFor="d0">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0     overflow-hidden w-[65%] m-auto mt-2">
            {CourseTypes
              ? CourseTypes.map((types) => {
                  return (
                    <RadioButton
                      key={types.id}
                      text={types.typeName}
                      id={types.id}
                      name={"courseType"}
                      selectedRadioBtn={CourseTypeValue}
                      setSelectedRadioBtn={setCourseTypeValue}
                    />
                  );
                })
              : "-"}
            {CourseTypeValue !== "" ? (
              <p
                className="text-sm text-grayDetail bg-graySilver w-max px-2 py-1 rounded mt-2 cursor-pointer"
                onClick={() => {
                  setCourseTypeValue("");
                }}
              >
                X حذف فیلتر
              </p>
            ) : (
              ""
            )}
          </div>
        </li>
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px]   mb-1">
          <input type="checkbox" id="d4" name="r" className="hidden" />
          <label htmlFor="d4" className="px-6  f-bold">
            قیمت
          </label>
          <label htmlFor="d4">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar w-[100%] m-auto mt-2 min-h-[100px]">
            <RangeSlider
              className="my-5 w-[95%] mx-auto"
              min={0}
              max={2000000}
              step={50000}
              value={minMax}
              onInput={(e) => {
                setMinMax(e);
              }}
            />
            <div className="px-4">
              <div className="flex-row-all-center justify-start gap-3">
                <span>از</span>
                <span className="f-bold">{ThreeNumberSpiliter(minMax[0])}</span>
                <TomanLogo />
              </div>
              <div className="flex-row-all-center justify-start gap-3">
                <span>تا</span>
                <span className="f-bold">{ThreeNumberSpiliter(minMax[1])}</span>
                <TomanLogo />
              </div>
            </div>
          </div>
        </li>
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] mb-1">
          <input type="checkbox" id="d5" name="r" className="hidden" />
          <label htmlFor="d5" className="px-6 f-bold">
            دسته بندی
          </label>
          <label htmlFor="d5">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0 text-[17px]    overflow-hidden w-[65%] m-auto mt-2">
            {categoryName &&
              categoryName.map((category) => {
                return (
                  <CheckBox
                    key={category.id}
                    id={category.id + category.techName}
                    text={category.techName}
                  />
                );
              })}
          </div>
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
const RadioButton = ({
  text,
  id,
  name,
  selectedRadioBtn,
  setSelectedRadioBtn,
}) => {
  // console.log(typeof id);
  return (
    <div>
      <input
        type="radio"
        id={`radio${id}`}
        value={selectedRadioBtn}
        name={name}
        onChange={(e) => {
          setSelectedRadioBtn(id);
          // console.log(e.target.value);
        }}
        checked={Number(selectedRadioBtn) === Number(id)}
      />
      <label htmlFor={`radio${id}`} className="px-3 text-sm">
        {text}
      </label>
    </div>
  );
};
{
  /* <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px]  mb-1 ">
          <input type="checkbox" id="d6" name="r" className="hidden" />
          <label htmlFor="d6" className="px-6">
            تگ های محبوب{" "}
          </label>
          <label htmlFor="d6">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0 text-[17px]    overflow-hidden w-[65%] m-auto mt-2"></div>
        </li> */
}
