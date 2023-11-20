import React, { useEffect, useState } from "react";
import ImageTest from "./../../../../../../../Assets/Image/sampleImage.png";
import { getCourseAll } from "../../../../../../../Core/Services/Api/UserPanel/GetAllCourse";

const TableCoursesList = () => {
  const [allCourse, setAllCourse] = useState();
  const getAllCoursesInPanel = async () => {
    const AllCourses = await getCourseAll();
    setAllCourse(AllCourses);
  };

  useEffect(() => {
    getAllCoursesInPanel();
  }, []);

  console.log(allCourse);

  // const list = [
  //   {
  //     id: 1,
  //     courseTitle: "ری اکت",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 120,
  //     courseStartTime: "1402/01/01",
  //     courseEndTime: "1402/05/22",
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2500000,
  //   },
  //   {
  //     id: 2,
  //     courseTitle: "جاوا اسکریپت",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 20,
  //     courseStartTime: "1402/01/01",
  //     courseEndTime: "1402/05/22",
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2500000,
  //   },
  //   {
  //     id: 3,
  //     courseTitle: "Tailwindcss",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 160,
  //     courseStartTime: "1402/01/01",
  //     courseEndTime: "1402/05/22",
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2500000,
  //   },
  //   {
  //     id: 4,
  //     courseTitle: "نکست",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 140,
  //     courseStartTime: "1402/01/01",
  //     courseEndTime: "1402/05/22",
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2500000,
  //   },
  //   {
  //     id: 5,
  //     courseTitle: "Html,Css",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 351,
  //     courseStartTime: "1402/01/01",
  //     courseEndTime: "1402/05/22",
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2500000,
  //   },
  // ];
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
          <tbody>
            {allCourse
              ? allCourse.courseFilterDtos.map((course) => {
                  return (
                    <>
                      <tr className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 ">
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
                        <td className="px-6 py-4">
                          {course.currentRegistrants}
                        </td>
                        <td className="px-6 py-4">{course.technologyList}</td>
                        <td className="px-6 py-4">{course.levelName}</td>
                        <td className="px-6 py-4">{course.statusName}</td>
                        <td className="px-6 py-4 text-red-500">
                          {course.cost}
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <i className="fi fi-rr-add"></i>
                          </a>
                        </td>
                      </tr>
                    </>
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
