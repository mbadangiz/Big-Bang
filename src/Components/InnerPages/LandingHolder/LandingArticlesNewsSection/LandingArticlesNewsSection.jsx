import { data } from "autoprefixer";
import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import SampleImage from "./../../../../Assets/Image/sampleImage.png";
import { ViewMoreBtn } from "../../../Common/ViewMoreBtn/ViewMore";
import { ArticleCardSmall } from "../../ArticleCardSmall/ArticleCardSmall";

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
      <ViewMoreBtn
        text={"مشاهده ی کامل اخبار و مقالات"}
        to={"/ArticleAndNews"}
      />
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
        return <ArticleCardSmall key={item.id} data={item} />;
      })}
    </div>
  );
};

export { LandingArticlesNewsSection };
