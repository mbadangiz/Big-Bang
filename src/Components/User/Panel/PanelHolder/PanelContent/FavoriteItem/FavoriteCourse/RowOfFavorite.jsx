import React from "react";
import { useState } from "react";
import { GetCourseDetails } from "../../../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import { useEffect } from "react";

export const RowOfFavorite = ({ data }) => {
  const [FavCourse, setFavCourse] = useState();
  const getFavoriteCourse = async () => {
    const FavCourses = await GetCourseDetails(data);
    setFavCourse(FavCourses);
  };

  useEffect(() => {
    getFavoriteCourse();
  }, []);

  console.log(FavCourse);

  return (
    <>
      {FavCourse ? (
        <>
          <tr className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 ">
            <td className="px-6 py-4">{FavCourse.title}</td>
            <td className="px-6 py-4">{FavCourse.teacherName}</td>
            <td className="px-6 py-4">{FavCourse.capacity}</td>
            <td className="px-6 py-4">{FavCourse.likeCount}</td>
            <td className="px-6 py-4">{FavCourse.courseLevelName}</td>
            <td className="px-6 py-4">{FavCourse.courseStatusName}</td>
            <td className="px-6 py-4 text-red-500">{FavCourse.cost}</td>
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
