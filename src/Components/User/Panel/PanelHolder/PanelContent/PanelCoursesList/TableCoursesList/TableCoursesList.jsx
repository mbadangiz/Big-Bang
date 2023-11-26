import React, { useEffect, useState } from "react";
import ImageTest from "./../../../../../../../Assets/Image/sampleImage.png";
import { getCourseAll } from "../../../../../../../Core/Services/Api/UserPanel/GetAllCourse";
import { Link, useNavigate } from "react-router-dom";

const TableCoursesList = ({ setAllCourse, allCourse }) => {
  const getAllCoursesInPanel = async () => {
    const AllCourses = await getCourseAll();
    setAllCourse(AllCourses);
  };

  useEffect(() => {
    getAllCoursesInPanel();
  }, []);

  const navigate = useNavigate();

  console.log(allCourse);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-100">
        <table className="w-full text-base text-center text-gray-500 dark:text-gray-400 h-[612px]">
          <thead className="text-base text-white uppercase bg-bluePrimary">
            <tr>
              <th scope="col" className="px-6 py-3">
                عکس دوره
              </th>
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
                گروه دوره
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
                افزودن
              </th>
            </tr>
          </thead>
          <tbody className="container">
            {allCourse
              ? allCourse.courseFilterDtos.map((course, index) => {
                  return (
                    <tr
                      className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 "
                      onClick={() => {
                        navigate(`/CoursesDetails?courseId=${course.courseId}`);
                      }}
                      key={index}
                    >
                      <th
                        scope="row"
                        className="py-4 font-medium whitespace-nowrap"
                      >
                        <img
                          src={
                            course.tumbImageAddress
                              ? course.tumbImageAddress
                              : ImageTest
                          }
                          alt=""
                          className="border-2 border-red-100 border-solid w-20 relative right-8 rounded-md"
                        />
                      </th>
                      <td className="px-6 py-4">{course.title}</td>
                      <td className="px-6 py-4">{course.teacherName}</td>
                      <td className="px-6 py-4">{course.currentRegistrants}</td>
                      <td className="px-6 py-4">{course.technologyList}</td>
                      <td className="px-6 py-4">{course.levelName}</td>
                      <td className="px-6 py-4">{course.statusName}</td>
                      <td className="px-6 py-4 text-red-500">{course.cost}</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          <i className="fi fi-rr-add"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })
              : " "}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { TableCoursesList };
