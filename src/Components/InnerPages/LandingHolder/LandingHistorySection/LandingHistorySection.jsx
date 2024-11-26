import CountUp from "react-countup/";
import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import { getLandingReport } from "../../../../Core/Services/Api/Landing/GetLandingReport";
import { useState } from "react";
import { useEffect } from "react";

const LandingHistorySection = () => {
  const [ReportItem, setReportItem] = useState();

  const getReport = async () => {
    const res = await getLandingReport();
    setReportItem(res);
  };

  useEffect(() => {
    getReport();
  }, []);

  const historyList = [
    {
      id: 1,
      imgPath: "studenst.png",
      title: "دانشجو",
      count: ReportItem ? ReportItem.studentCount : "",
    },
    {
      id: 2,
      imgPath: "courses.png",
      title: "دوره",
      count: ReportItem ? ReportItem.courseCount : "",
    },
    {
      id: 3,
      imgPath: "courses.png",
      title: "مقالات",
      count: ReportItem ? ReportItem.newsCount : "",
    },
    {
      id: 4,
      imgPath: "masters.png",
      title: "استاد",
      count: ReportItem ? ReportItem.teacherCount : "",
    },
  ];
  return (
    <div className="w-full mt-16">
      <LandingSectionsTitle
        mainText="سابقه"
        subText="سابقه آکادمی تا به اینجا "
      />
      <div className="h-[500px] w-full relative bg-landing-historySection ">
        <div className="width-handler h-full flex flex-nowrap justify-center items-center gap-3 md:gap-24">
          {historyList
            ? historyList.map((item) => (
                <HistoryItems key={item.id} data={item} />
              ))
            : "در حال حاضر دوره ایی برای نمایش موجود نمیباشد"}
        </div>
      </div>
    </div>
  );
};

const HistoryItems = ({ data }) => {
  const { id, count, title, imgPath } = data;
  return (
    <div className="text-center text-white">
      <img src={`./Img/${imgPath}`} className="w-6 md:w-16 mx-auto" alt="" />
      <p className="text-base md:text-6xl f-bold m-0 md:mt-2">
        <CountUp end={count} duration={5} />
      </p>
      <p className="m-0 md:mt-2">{title}</p>
    </div>
  );
};

export { LandingHistorySection };
