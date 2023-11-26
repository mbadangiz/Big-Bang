import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { GetFavoriteCourses } from "../../../../../../../Core/Services/Api/UserPanel/GetFavoriteCourses";
import { useState } from "react";
import { RowOfFavorite } from "./RowOfFavorite";
import { ToastContainer } from "react-toastify";

const FavoriteCourse = () => {
  const [Fav, setFavoriteCourse] = useState();

  const GetFavorite = async () => {
    const FavoriteCourses = await GetFavoriteCourses();
    setFavoriteCourse(FavoriteCourses);
  };

  console.log(Fav);

  useEffect(() => {
    GetFavorite();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-100">
        <table className="w-full text-base text-center text-gray-500 dark:text-gray-400">
          <thead className="text-base text-white uppercase bg-bluePrimary">
            <tr>
              <th scope="col" className="px-6 py-3">
                نام دوره
              </th>
              <th scope="col" className="px-6 py-3">
                استاد دوره
              </th>
              <th scope="col" className="px-6 py-3">
                ظرفیت
              </th>
              <th scope="col" className="px-6 py-3">
                تعداد لایک
              </th>
              <th scope="col" className="px-6 py-3">
                سطح
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-6 py-3">
                قیمت
              </th>
              <th scope="col" className="px-6 py-3">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {Fav
              ? Fav.favoriteCourseDto.map((favorite) => {
                  return (
                    <>
                      <RowOfFavorite
                        data={favorite.courseId}
                        favoriteId={favorite.favoriteId}
                        state={{ Fav, setFavoriteCourse }}
                      />
                    </>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { FavoriteCourse };
