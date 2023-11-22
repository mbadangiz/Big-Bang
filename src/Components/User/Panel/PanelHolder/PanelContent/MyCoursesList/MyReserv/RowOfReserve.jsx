import React from "react";
import { useState } from "react";
import { GetCourseDetails } from "../../../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import { useEffect } from "react";
import { DeleteFavCourse } from "../../../../../../../Core/Services/Api/CourseDetails/DeleteFavCourse";
import { SuccessToastify } from "../../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

export const RowOfReserve = ({ data, state, reserveId }) => {
  const [resCourse, setresCourse] = useState();
  const getReserveCourse = async () => {
    const resCourses = await GetCourseDetails(data);
    setresCourse(resCourses);
  };
  const { CourseReserve, setCourseReserve } = state;

  const DelReserve = async (courseId) => {
    const resDel = await DeleteFavCourse(reserveId);
    if (resDel.success) {
      SuccessToastify(resDel.message);
      const copiedItems = [...CourseReserve];
      const filteredItems = copiedItems.filter(
        (items) => items.courseId !== courseId
      );
      setCourseReserve(filteredItems);
      // console.log(filteredItems);
    } else ErrorToastify(resDel.message);
    console.log(resDel);
  };

  useEffect(() => {
    getReserveCourse();
  }, []);

  console.log(resCourse);

  return (
    <>
      {resCourse ? (
        <>
          <tr className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 ">
            <td className="px-6 py-4">{resCourse.title}</td>
            <td className="px-6 py-4">{resCourse.teacherName}</td>
            <td className="px-6 py-4">{resCourse.capacity}</td>
            <td className="px-6 py-4">{resCourse.likeCount}</td>
            <td className="px-6 py-4">{resCourse.courseLevelName}</td>
            <td className="px-6 py-4">{resCourse.courseStatusName}</td>
            <td className="px-6 py-4 text-red-500">{resCourse.cost}</td>
            <td className="px-6 py-4">
              <div
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => DelReserve(resCourse.courseId)}
              >
                <i className="fi fi-rr-minus-circle"></i>
              </div>
            </td>
          </tr>
        </>
      ) : (
        ""
      )}
    </>
  );
};
