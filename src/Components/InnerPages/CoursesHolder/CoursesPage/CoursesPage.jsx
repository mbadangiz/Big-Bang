import { useEffect } from "react";
import SearchBar from "../../../Common/SearchBar/SearchBar";
import { CourseCard } from "../../CourseCard/CourseCard";
import { CoursesAccardion } from "./CoursesAccardion/CoursesAccardion";
import { useState } from "react";
import { getCourseListAll } from "../../../../Core/Services/Api/Course/GetCourseListAll";
import { SearchInCourses } from "../../../../Core/Services/Api/Course/SearchInCourses";
import { useMyCourses } from "../../../../Core/Providers/CourseListProvider";
import { ClipLoader, GridLoader } from "react-spinners";
import _ from "lodash";
import { BlueButton } from "../../../Common/Buttons/BlueButton";
import { ThereIsNoProductsHere } from "../ThereIsNoProductsHere/ThereIsNoProductsHere";

const CoursesPage = () => {
  const { courseList, setRowPageCount } = useMyCourses();
  const [sort, setSort] = useState(["courseRate", "desc"]);
  const [isLoad, setIsLoad] = useState(false);

  const listOfSort = [
    { id: 3, text: "محبوب ترین", sortingCol: "courseRate", sortType: "desc" },
    { id: 1, text: "گرانترین", sortingCol: "cost", sortType: "desc" },
    { id: 2, text: "ارزان ترین", sortingCol: "cost", sortType: "asc" },
  ];
  return (
    <div className="w-full width-handler">
      <SearchBar
        placeholder={"عنوان دوره ی مورد نظر خورد را جست و جو نمایید..."}
        searchApiFunc={SearchInCourses}
        getAllDataList={getCourseListAll}
      />
      <div className=" flex justify-center gap-4 width-handler">
        <CoursesAccardion />
        <div>
          <div className="w-[980px] min-h-[1000px]">
            <div className="w-full text-sm flex-row-all-center justify-start cursor-pointer text-grayDetail select-none">
              <div className="text-base  text-gray-500 flex-row-all-center ml-3">
                <i className="fi fi-rr-sort-amount-down-alt relative top-1.5 text-lg"></i>
                <p className="f-bold">مرتب سازی بر اساس :</p>
              </div>
              {listOfSort.map((items) => {
                const setBlue =
                  sort.includes(items.sortingCol) &&
                  sort.includes(items.sortType);
                return (
                  <div
                    key={items.id}
                    className={`${
                      setBlue &&
                      "bg-bluePrimary text-white rounded hover:!text-white "
                    } hover:text-bluePrimary transition-all duration-[0.03s] p-2 `}
                    onClick={() => {
                      setSort([items.sortingCol, items.sortType]);
                    }}
                  >
                    <p className="f-semiBold">{items.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-full flex-row-all-center gap-5 mt-6">
              {courseList ? (
                courseList.courseFilterDtos.length === 0 ? (
                  <ThereIsNoProductsHere />
                ) : (
                  _.orderBy(
                    courseList.courseFilterDtos,
                    [sort[0]],
                    [sort[1]]
                  ).map((course) => {
                    return <CourseCard key={course.courseId} data={course} />;
                  })
                )
              ) : (
                <div className="w-full h-300 flex-row-all-center flex-col flex-nowrap gap-3">
                  <GridLoader
                    color="#406DD5"
                    cssOverride={{}}
                    loading
                    margin={5}
                    size={15}
                    speedMultiplier={1}
                  />
                  <p className="text-bluePrimary text-xl f-bold">
                    لطفا منتظر بمانید
                  </p>
                </div>
              )}
            </div>
            <div className="mt-10">
              {courseList && courseList.courseFilterDtos.length !== 0 && (
                <BlueButton
                  ClickHandler={() => {
                    setIsLoad(true);
                    setTimeout(() => {
                      setRowPageCount((prev) => prev + 1);
                      setIsLoad(false);
                    }, 2500);
                  }}
                  buttonText={
                    isLoad ? (
                      <>
                        <ClipLoader
                          color="#ffffff"
                          size={19}
                          speedMultiplier={0.7}
                          className="relative top-1 ml-2"
                        />
                        <span>لطفا شکیبا باشید</span>
                      </>
                    ) : (
                      "مشاهده ی بیشتر"
                    )
                  }
                  type={"button"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
