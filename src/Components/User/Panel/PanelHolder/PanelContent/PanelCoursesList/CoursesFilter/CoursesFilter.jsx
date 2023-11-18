import React, { useEffect, useState } from "react";
import { FilterAccardion } from "../../../../../../Common/FilterAccardion/FilterAccardion";
import GetCourseType from "../../../../../../../Core/Services/Api/Course/GetCourseType";
import { GetCategoryList } from "../../../../../../../Core/Services/Api/Course/GetCategoryList";
import { CheckBox } from "../../../../../../Common/CheckBox/CheckBox";
import { RadioButton } from "../../../../../../Common/RadioButton/RadioButton";

const CoursesFilter = ({ data }) => {
  const [CourseTypes, setCourseTypes] = useState();
  const [categoryName, setCateGoryName] = useState();
  const [CourseTypeValue, setCourseTypeValue] = useState("");
  const [techList, setTechList] = useState([]);
  const { isShowModal, setisShowModal } = data;

  const categoryNameGetter = async () => {
    const res = await GetCategoryList();
    setCateGoryName(res);
  };

  const courseTypesGetter = async () => {
    const res = await GetCourseType();
    setCourseTypes(res);
  };

  const checkBoxChangeHandler = (event) => {
    const checked = event.target.checked;
    const value = Number(event.target.value);
    if (checked) {
      setTechList([...techList, value]);
    } else {
      setTechList(techList.filter((checkbox) => checkbox !== value));
    }
  };

  useEffect(() => {
    courseTypesGetter();
    categoryNameGetter();
  }, []);

  return (
    <div
      className={`w-screen h-screen p-2 bg-black/70  fixed 
     z-40 top-0 left-0 rounded-lg backdrop-blur-md   transition-all duration-100
     ${isShowModal ? "block" : "hidden"}`}
    >
      <div
        className="w-500 h-500 bg-white/80 backdrop-blur-md m-auto 
      my-16 p-3 rounded-lg overflow-hidden relative"
      >
        <div className="">
          <i
            className="fi fi-rr-x cursor-pointer text-base"
            onClick={() => {
              setisShowModal(false);
            }}
          ></i>
        </div>
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
        <button
          className="bg-bluePrimary p-2 rounded-2xl text-white 
        block absolute bottom-3 right-56"
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
};

export { CoursesFilter };
