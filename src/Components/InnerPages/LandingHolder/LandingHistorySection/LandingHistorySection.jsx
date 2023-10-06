import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";

const LandingHistorySection = () => {
  const historyList = [
    { id: 1, imgPath: "studenst.png", title: "دانشجو", count: 150 },
    { id: 2, imgPath: "courses.png", title: "دوره", count: 15 },
    { id: 3, imgPath: "masters.png", title: "استاد", count: 10 },
  ];
  return (
    <div className="w-full mt-16">
      <LandingSectionsTitle
        mainText="سابقه"
        subText="سابقه آکادمی تا به اینجا "
      />
      <div className="h-[500px] w-full relative bg-landing-historySection ">
        <div className="width-handler h-full flex-row-all-center gap-24">
          {historyList.map((item) => (
            <HistoryItems key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const HistoryItems = ({ data }) => {
  const { id, imgPath, title, count } = data;
  return (
    <div className="text-center text-white">
      <img src={`./Img/${imgPath}`} className="w-16 mx-auto" alt="" />
      <p className="text-6xl f-bold mt-2">{count}</p>
      <p className="mt-2">{title}</p>
    </div>
  );
};

export { LandingHistorySection };
