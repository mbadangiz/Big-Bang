import React, { useState } from "react";
import { TableCoursesList } from "./TableCoursesList/TableCoursesList";
import { CoursesFilter } from "./CoursesFilter/CoursesFilter";
import CourseListProvider from "../../../../../../Core/Providers/CourseListProvider";

const PanelCoursesList = () => {
  const [isShowModal, setisShowModal] = useState(false);
  const [allCourse, setAllCourse] = useState();
  return (
    <CourseListProvider>
      <h1>لیست دوره ها</h1>
      <div className="flex gap-2 text-[13px] mt-3 mb-3">
        <div
          className="bg-bluePrimary py-1 px-6 rounded-[4px] text-white"
          onClick={() => {
            setisShowModal(true);
          }}
        >
          فیلتر ها
          <i className="fi fi-rs-filter relative top-1 right-2"></i>
        </div>

        <input
          type="search"
          className="bg-[#E8ECF1] py-1 px-10 rounded-[4px]"
          placeholder="جست و جو کنید..."
        />
      </div>
      <CoursesFilter
        data={{ isShowModal, setisShowModal }}
        allCourse={allCourse}
        setAllCourse={setAllCourse}
      />

      <TableCoursesList allCourse={allCourse} setAllCourse={setAllCourse} />
    </CourseListProvider>
  );
};

export { PanelCoursesList };
