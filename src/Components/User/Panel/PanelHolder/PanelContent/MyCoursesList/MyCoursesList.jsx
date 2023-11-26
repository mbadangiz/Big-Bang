import React from "react";
import { MyCoursesTab } from "./MyCoursesTab/MyCoursesTab";

const MyCoursesList = () => {
  return (
    <>
      <h1 className="p-2">لیست دوره های من</h1>
      <MyCoursesTab />
    </>
  );
};

export { MyCoursesList };
