import { TomanLogo } from "../../../../Common/TomanLogo/TomanLogo";
import { ThreeNumberSpiliter } from "../../../../../Core/Utils/ThreeNumberSpiliter/ThreeNumberSpiliter";
import { makeDatePersian } from "./../../../../../Core/Utils/MakeDatePersian/MakeDatePersian.js";
import { PostAddCourseToReserved } from "../../../../../Core/Services/Api/CourseDetails/PostAddCourseToReserved.js";
import { useState } from "react";
import { WarningToastify } from "../../../../../Core/Utils/Toastifies/WarningToastify.Utils.js";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils.js";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils.js";
import { DeleteFavCourse } from "../../../../../Core/Services/Api/CourseDetails/DeleteFavCourse.js";
import { useMyCourseDetail } from "../../../../../Core/Providers/CourseDetailProvider.jsx";

const TopSection = ({ data }) => {
  const { courseDetails, setCourseDetails } = useMyCourseDetail();
  const {
    courseId,
    imageAddress,
    title,
    googleTitle,
    cost,
    courseStatusName,
    currentRegistrants,
    capacity,
    startTime,
    teacherName,
    isCourseReseve,
    courseReseveId,
  } = courseDetails;

  // const [reserveMessage, setReserveMessage] = useState(Number(isCourseReseve));

  const start = makeDatePersian(startTime);

  const information = [
    {
      id: 1,
      title: "استاد دوره",
      info: teacherName,
      icon: "fi fi-rs-chalkboard-user",
    },
    {
      id: 2,
      title: "وضعیت دوره",
      info: courseStatusName,
      icon: "fi fi-rr-play-circle",
    },
    {
      icon: "fi fi-rr-graduation-cap",
      title: "تعداد دانشجو ",
      id: 3,
      info: capacity + " / " + currentRegistrants,
    },
    {
      id: 4,
      title: "زمان دوره",
      icon: "fi fi-rr-clock",
      info: start,
    },
  ];

  const showMeesage = (res, resId) => {
    if (res.success) {
      console.log(resId);
      SuccessToastify("عملیات با موفقیت انجام شده است.");
      setCourseDetails({ ...courseDetails, isCourseReseve: resId });
    } else {
      console.log(resId);
      ErrorToastify(res.errors[0]);
    }
  };
  const reserveHandler = async () => {
    if (Number(isCourseReseve)) {
      const res = await DeleteFavCourse(courseReseveId);
      showMeesage(res, 0);
    } else {
      const res = await PostAddCourseToReserved(courseId);
      showMeesage(res, 1);
    }
  };
  return (
    <>
      <div className="p-3 rounded-[12px] bg-white shadow-sm ">
        <div className="flex border-b-2 border-solid border-gray-300">
          <div className="">
            <h1 className="text-[24px] f-bold">{title}</h1>
            <p className="w-[780px] text-base mt-4 text-grayDetail">
              {googleTitle}
            </p>
            <div className="flex mt-16 mb-5 relative justify-between items-center">
              <div
                className={`w-[230px] h-[50px] rounded-[12px] bg-[#4376EE] text-white flex-row-all-center gap-3  
                cursor-pointer `}
                onClick={reserveHandler}
              >
                {Number(isCourseReseve) ? (
                  <>
                    <h3 className="text-lg  f-semiBold">حذف از لیست رزو</h3>
                  </>
                ) : (
                  <>
                    <i className="fi fi-sr-square-plus relative top-1.5 text-2xl"></i>
                    <h3 className="text-lg  f-semiBold">افزودن به لیست رزو</h3>
                  </>
                )}
              </div>
              <div className=" text-2xl flex-row-all-center gap-2">
                <h2 className="f-bold text-bluePrimary">
                  {ThreeNumberSpiliter(cost)}
                </h2>
                <TomanLogo />
              </div>
            </div>
          </div>
          <div className="m-auto">
            <img
              src={imageAddress}
              alt={title}
              className="h-[215px] inline-block rounded-[12px]"
            />
          </div>
        </div>
        <div className="flex justify-evenly">
          {information.map((items) => {
            return <InfoItems data={items} key={items.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export { TopSection };

const InfoItems = ({ data }) => {
  const { id, info, icon, title } = data;
  return (
    <div className=" p-3 flex gap-x-2">
      <i className={`${icon} text-bluePrimary text-2xl relative top-0.5 `}></i>
      <p> {title} : </p>
      <p>{info}</p>
    </div>
  );
};
