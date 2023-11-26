import React from "react";
import { useState } from "react";
import { GetCourseDetails } from "../../../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import { useEffect } from "react";
import DelFavCourse from "../../../../../../../Core/Services/Api/CourseDetails/DelFavCourse";
import { SuccessToastify } from "../../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { useNavigate } from "react-router-dom";

export const RowOfFavorite = ({ data, favoriteId, state }) => {
  const [FavCourse, setFavCourse] = useState();
  const getFavoriteCourse = async () => {
    const FavCourses = await GetCourseDetails(data);
    setFavCourse(FavCourses);
  };

  const { Fav, setFavoriteCourse } = state;

  const DelFavorite = async (courseId) => {
    const favDel = await DelFavCourse(favoriteId);
    if (favDel.success) {
      SuccessToastify(favDel.message);
      const copiedItems = [...Fav];
      const filteredItems = copiedItems.filter(
        (items) => items.courseId !== courseId
      );
      setFavoriteCourse(filteredItems);
      // console.log(filteredItems);
    } else ErrorToastify(favDel.message);
    console.log(favDel);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getFavoriteCourse();
  }, []);

  console.log(FavCourse);

  return (
    <>
      {FavCourse ? (
        <>
          <tr
            className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 
          "
            onClick={() => {
              navigate(`/CoursesDetails?courseId=${FavCourse.courseId}`);
            }}
          >
            <td className="px-6 py-4">{FavCourse.title}</td>
            <td className="px-6 py-4">{FavCourse.teacherName}</td>
            <td className="px-6 py-4">{FavCourse.capacity}</td>
            <td className="px-6 py-4">{FavCourse.likeCount}</td>
            <td className="px-6 py-4">{FavCourse.courseLevelName}</td>
            <td className="px-6 py-4">{FavCourse.courseStatusName}</td>
            <td className="px-6 py-4 text-red-500">{FavCourse.cost}</td>
            <td className="px-6 py-4">
              <div
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                onClick={() => DelFavorite(FavCourse.courseId)}
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
