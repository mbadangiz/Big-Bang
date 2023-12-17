import React, { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import GetCourseType from "../../../../../Core/Services/Api/Course/GetCourseType";
import { GetCategoryList } from "../../../../../Core/Services/Api/Course/GetCategoryList";
import { ThreeNumberSpiliter } from "../../../../../Core/Utils/ThreeNumberSpiliter/ThreeNumberSpiliter";
import { TomanLogo } from "../../../../Common/TomanLogo/TomanLogo";
import { FilterAccardion } from "../../../../Common/FilterAccardion/FilterAccardion";
import { CheckBox } from "../../../../Common/CheckBox/CheckBox";
import { RadioButton } from "../../../../Common/RadioButton/RadioButton";
import { useMyCourses } from "../../../../../Core/Providers/CourseListProvider";
import { getCourseListAll } from "../../../../../Core/Services/Api/Course/GetCourseListAll";

const CoursesAccardion = () => {
  const [CourseTypes, setCourseTypes] = useState();
  const [categoryName, setCateGoryName] = useState();
  const {
    courseList,
    setCourseList,
    minMax,
    setMinMax,
    CourseTypeValue,
    setCourseTypeValue,
    techList,
    setTechList,
    rowpageCount,
  } = useMyCourses();

  const getList = async () => {
    const res = await getCourseListAll({
      CourseTypeValue,
      minMax,
      techList,
      rowpageCount,
    });
    setCourseList(res);
  };

  useEffect(() => {
    getList();
  }, [CourseTypeValue, minMax, techList, rowpageCount]);

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

  const checkBoxChangeHandler = (event) => {
    const checked = event.target.checked;
    const value = Number(event.target.value);
    if (checked) {
      setTechList([...techList, value]);
    } else {
      setTechList(techList.filter((checkbox) => checkbox !== value));
    }
  };

  return (
    <div
      className="w-[300px] rounded-[15px]   h-[max-content] sticky top-5   border-2 border-solid border-grayDetail/10 
    px-3"
    >
      <FilterAccardion head={"نوع دوره"}>
        <div>
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
      </FilterAccardion>
      <FilterAccardion head={"قیمت"}>
        <div className="w-full m-auto mt-2 min-h-[100px]">
          <RangeSlider
            className="my-5 w-[95%] mx-auto"
            min={0}
            max={100000000}
            step={5000}
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
      </FilterAccardion>
      <FilterAccardion head={"دسته بندی"}>
        <div>
          {categoryName &&
            categoryName.map((category) => {
              return (
                <CheckBox
                  key={category.id}
                  id={category.id}
                  htmlId={category.id + category.techName}
                  text={category.techName}
                  changeHandler={checkBoxChangeHandler}
                  list={techList}
                />
              );
            })}
        </div>
      </FilterAccardion>
    </div>
  );
};

export { CoursesAccardion };
