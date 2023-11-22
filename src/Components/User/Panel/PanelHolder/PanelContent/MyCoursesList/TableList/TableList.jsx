import React, { useEffect, useState } from "react";
import axios from "axios";
import { getMyCourses } from "../../../../../../../Core/Services/Api/Course/UserPanel/GetMyCourses";

const TableList = () => {
  const [myCourse, setMyCourse] = useState();

  const getMyCourseInPanel = async () => {
    const myCourses = await getMyCourses();
    setMyCourse(myCourses);
  };

  useEffect(() => {
    getMyCourseInPanel();
  }, []);

  console.log(myCourse);

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
                ترم
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>
              <th scope="col" className="px-6 py-3">
                سطح
              </th>
              <th scope="col" className="px-6 py-3">
                نوع دوره
              </th>
              <th scope="col" className="px-6 py-3">
                شماره کلاس
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت واریزی
              </th>
              <th scope="col" className="px-6 py-3">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {myCourse
              ? myCourse.listOfMyCourses.map((course) => {
                  return (
                    <>
                      <tr className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 ">
                        <td className="px-6 py-4">{course.fullName}</td>
                        <td className="px-6 py-4">{course.termName}</td>
                        <td className="px-6 py-4">{course.statusName}</td>
                        <td className="px-6 py-4">{course.levelName}</td>
                        <td className="px-6 py-4">{course.typeName}</td>
                        <td className="px-6 py-4">{course.classRoomName}</td>
                        <td className="px-6 py-4 text-green-600">
                          {course.paymentStatus}
                        </td>
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
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { TableList };
