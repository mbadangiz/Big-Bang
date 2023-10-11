import { data } from "autoprefixer";
import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import SampleImage from "./../../../../Assets/Image/sampleImage.png";

const LandingArticlesNewsSection = () => {
  return (
    <div className="width-handler   lg:h-[calc(768px-90px)]  pt-4  px-0  ">
      <LandingSectionsTitle
        mainText={"اخبار و مقالات"}
        subText={
          "شما عزیزان می توانید تمام اخبار ومقالات برنامه نویسی را مشاهده بفرمایید"
        }
      />
      <div className="w-full h-[calc(100%-180px)] flex-row-all-center  py-5  gap-4">
        <ArticleAndNewsWrapper title={"مقالات"} />
        <div className="w-1 h-full bg-black/30 rounded-md"></div>
        <ArticleAndNewsWrapper title={"اخبار"} />
      </div>
      <div>view More</div>
    </div>
  );
};

const ArticleAndNewsWrapper = ({ title }) => {
  const list = [
    {
      id: 1,
      img: SampleImage,
      articleTitle: "عنوان مقاله یا اخبار",
      date: "16 شهریور 1402",
    },
    {
      id: 2,
      img: SampleImage,
      articleTitle: "عنوان مقاله یا اخبار",
      date: "16 شهریور 1402",
    },
  ];

  return (
    <div className=" space-y-2.5 text-center ">
      <h1 className="text-xl opacity-70">{title}</h1>
      {list.map((item) => {
        return <LandinArticleCard key={item.id} data={item} />;
      })}
    </div>
  );
};
const LandinArticleCard = ({ data }) => {
  const { id, img, articleTitle, date } = data;
  return (
    <div
      className="cardsDefaultSettings w-280 h-[200px] shadow-none  
      border-2 border-gray-400/50 border-solid mx-auto p-0 space-y-0"
    >
      <img
        src={img}
        className="w-full h-4/6 rounded-t-[20px] object-fill"
        alt=""
      />
      <div className=" w-full h-2/6 text-right px-2 pt-0.5 space-y-2">
        <h2 className="f-bold text-sm">{articleTitle}</h2>
        <div className="w-full flex-row-all-center  justify-between">
          <div className="flex-row-all-center">
            <i className="fi fi-rr-clock relative top-0.5"></i>
            <p className="text-sm">{date}</p>
          </div>
          <div>
            <i className="fi fi-sr-star relative top-0.75"></i>
            <span className="ml-1">2.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { LandingArticlesNewsSection };
