import { useEffect } from "react";
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
import PleaseWait from "../../../Common/PleaseWait/PleaseWait";

const CoursesPage = () => {
  const [sort, setSort] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const { courseList, setCourseList } = useMyCourses();

  const getList = async (e) => {
    const res = await SearchInCourses(e.target.value);
    setCourseList(res);
  };

  const listOfSort = [
    { id: 3, text: "محبوب ترین", sortingCol: "courseRate", sortType: "desc" },
    { id: 1, text: "گرانترین", sortingCol: "cost", sortType: "desc" },
    { id: 2, text: "ارزان ترین", sortingCol: "cost", sortType: "asc" },
  ];
  return (
    <div className="w-screen">
      <div className="h-[100px] bg-gradient-to-l from-bluePrimary to-bluePrimary/10">
        <h2 className="text-center text-[40px] text-white">دوره ها</h2>
      </div>
      <div className="w-full h-40 flex-row-all-center relative bottom-20 ">
        <div className="w-450 h-12  rounded-full relative">
          <input
            className="w-full h-full shadow-lg shadow-black/10 rounded-full bg-white border-2 border-solid border-grayDetail/20 pr-4 pl-12 text-sm 
          focus:border-bluePrimary transition-all duration-150"
            type="text"
            onChange={getList}
            placeholder={"جست و جوی دوره و یا نام استاد..."}
          />
          <i className="fi fi-br-search absolute top-[53%] left-4 -translate-y-1/2 text-xl text-grayDetail/30"></i>
        </div>
      </div>

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
              {sort.length > 0 && (
                <div
                  onClick={() => {
                    setSort([]);
                  }}
                >
                  x پاکسازی مرتبسازی
                </div>
              )}
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
                <PleaseWait />
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
