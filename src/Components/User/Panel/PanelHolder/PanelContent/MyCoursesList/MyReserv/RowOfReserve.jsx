import React from "react";
import { useState } from "react";
import { GetCourseDetails } from "../../../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import { useEffect } from "react";

export const RowOfReserve = ({ data }) => {
  const [resCourse, setresCourse] = useState();
  const getReserveCourse = async () => {
    const resCourses = await GetCourseDetails(data);
    setresCourse(resCourses);
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
              <button
                type="submit"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <i className="fi fi-rr-minus-circle"></i>
              </button>
            </td>
          </tr>
        </>
      ) : (
        ""
      )}
    </>
  );
};
