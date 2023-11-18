import { TomanLogo } from "../../../../Common/TomanLogo/TomanLogo";
import { ThreeNumberSpiliter } from "../../../../../Core/Utils/ThreeNumberSpiliter/ThreeNumberSpiliter";
import { GetTeacherById } from "../../../../../Core/Services/Api/Common/GetTeacherById";
import { makeDatePersian } from "./../../../../../Core/Utils/MakeDatePersian/MakeDatePersian.js";

const TopSection = ({ data }) => {
  const {
    imageAddress,
    title,
    googleTitle,
    cost,
    teacherId,
    courseStatusName,
    currentRegistrants,
    capacity,
    startTime,
    teacherName,
  } = data;

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
  return (
    <div className="p-3 rounded-[12px] bg-white shadow-sm ">
      <div className="flex border-b-2 border-solid border-gray-300">
        <div className="">
          <h1 className="text-[24px] f-bold">{title}</h1>
          <p className="w-[780px] text-base mt-4 text-grayDetail">
            {googleTitle}
          </p>
          <div className="flex mt-16 mb-5 relative justify-between items-center">
            <div className="w-[230px] h-[50px] rounded-[12px] bg-[#4376EE] text-white flex-row-all-center gap-3">
              <i className="fi fi-rr-shopping-cart relative top-1.5 text-2xl"></i>
              <h3 className="text-lg  f-semiBold">افزودن به سبد خرید</h3>
            </div>
            <div className=" text-2xl flex-row-all-center gap-2">
              <h2 className="f-bold text-bluePrimary">
                {ThreeNumberSpiliter(cost)}
              </h2>{" "}
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
