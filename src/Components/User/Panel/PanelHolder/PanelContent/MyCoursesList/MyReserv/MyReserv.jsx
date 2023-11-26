import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { RowOfReserve } from "./RowOfReserve";
import { GetMyCoursesReserve } from "../../../../../../../Core/Services/Api/UserPanel/GetCourseReserve";

const MyReserve = () => {
  const [CourseReserve, setCourseReserve] = useState();

  const GetReservation = async () => {
    const ResCourses = await GetMyCoursesReserve();
    setCourseReserve(ResCourses);
  };

  console.log(CourseReserve);

  useEffect(() => {
    GetReservation();
  }, []);

  return (
    <>
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
            {CourseReserve
              ? CourseReserve.map((favorite) => {
                  return (
                    <>
                      <RowOfReserve data={favorite.courseId} />
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

export { MyReserve };
