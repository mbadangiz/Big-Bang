import React from "react";
import axios from "axios";

const FavoriteCourse = () => {
  const list = [
    {
      id: 1,
      courseTitle: "ری اکت",
      courseMaster: "یه بابایی",
      courseParticipants: 120,
      courseStartTime: "1402/01/01",
      courseEndTime: "1402/05/22",
      courseStatus: "اتمام ضبط",
      coursePrice: 2500000,
    },
    {
      id: 2,
      courseTitle: "جاوا اسکریپت",
      courseMaster: "یه بابایی",
      courseParticipants: 20,
      courseStartTime: "1402/01/01",
      courseEndTime: "1402/05/22",
      courseStatus: "اتمام ضبط",
      coursePrice: 2500000,
    },
    {
      id: 3,
      courseTitle: "Tailwindcss",
      courseMaster: "یه بابایی",
      courseParticipants: 160,
      courseStartTime: "1402/01/01",
      courseEndTime: "1402/05/22",
      courseStatus: "اتمام ضبط",
      coursePrice: 2500000,
    },
  ];

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
                ظرفیت دوره
              </th>
              <th scope="col" className="px-6 py-3">
                تاریخ شروع
              </th>
              <th scope="col" className="px-6 py-3">
                تاریخ پایان
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت دوره
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
            {list.map((course) => {
              return (
                <>
                  <tr className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 ">
                    <td className="px-6 py-4">{course.courseTitle}</td>
                    <td className="px-6 py-4">{course.courseMaster}</td>
                    <td className="px-6 py-4">{course.courseParticipants}</td>
                    <td className="px-6 py-4">{course.courseStartTime}</td>
                    <td className="px-6 py-4">{course.courseEndTime}</td>
                    <td className="px-6 py-4">{course.courseStatus}</td>
                    <td className="px-6 py-4 text-red-500">
                      {course.coursePrice}
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
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { FavoriteCourse };
