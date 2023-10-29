import React from "react";

const MyCoursesList = () => {
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
    {
      id: 4,
      courseTitle: "نکست",
      courseMaster: "یه بابایی",
      courseParticipants: 140,
      courseStartTime: "1402/01/01",
      courseEndTime: "1402/05/22",
      courseStatus: "اتمام ضبط",
      coursePrice: 2500000,
    },
    {
      id: 5,
      courseTitle: "Html,Css",
      courseMaster: "یه بابایی",
      courseParticipants: 351,
      courseStartTime: "1402/01/01",
      courseEndTime: "1402/05/22",
      courseStatus: "اتمام ضبط",
      coursePrice: 2500000,
    },
  ];

  return (
    <div className=" p-3 rounded-3xl bg-slate-100">
      <h1>لیست دوره های من</h1>

      <div className="bg-bluePrimary p-4 rounded-lg text-white  mr-auto cursor-default  flex justify-around mt-2">
        <div className="">نام دوره </div>
        <div className="">استاد دوره </div>
        <div className=""> ظرفیت دوره </div>
        <div className=""> تاریخ شروع </div>
        <div className="">تاریخ پایان </div>
        <div className="">وضعیت دوره </div>
        <div className="">قیمت </div>
        <div className="">حذف دوره </div>
      </div>

      {list.map((course) => {
        return (
          <>
            <div
              key={course.id}
              className="bg-[#E8ECF1] p-4 rounded-lg text-[#5E5E64]  mr-auto cursor-default mt-3 flex justify-around hover:shadow-sm hover:scale-[1.005]"
            >
              <div className="">{course.courseTitle}</div>
              <div className="">{course.courseMaster}</div>
              <div className="">{course.courseParticipants}</div>
              <div className="">{course.courseStartTime}</div>
              <div className="">{course.courseEndTime}</div>
              <div className="">{course.courseStatus}</div>
              <div className="text-red-500">{course.coursePrice}</div>
              <div className="hover:cursor-pointer">
                <i className="fi fi-rr-shopping-cart"></i>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export { MyCoursesList };
