import { data } from "autoprefixer";
import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import SampleImage from "./../../../../Assets/Image/sampleImage.png";
import { ViewMoreBtn } from "../../../Common/ViewMoreBtn/ViewMore";
import { ArticleCardSmall } from "../../ArticleCardSmall/ArticleCardSmall";
import { useState } from "react";
import { useEffect } from "react";
import { getLandingNews } from "../../../../Core/Services/Api/Landing/GetLandingNews";
const LandingArticlesNewsSection = () => {
  const [News, setNews] = useState();

  const getNews = async () => {
    const res = await getLandingNews();
    setNews(res);
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(News);

  return (
    <div className="width-handler  pt-4  px-0  ">
      <LandingSectionsTitle
        mainText={"اخبار و مقالات"}
        subText={
          "شما عزیزان می توانید تمام اخبار ومقالات برنامه نویسی را مشاهده بفرمایید"
        }
      />
      <div className="w-full  flex-row-all-center  py-5  gap-4">
        <ArticleAndNewsWrapper title={"مقالات"} />
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
    <>
      {list.map((item) => {
        return <ArticleCardSmall key={item.id} data={item} />;
      })}
    </>
  );
};

export { LandingArticlesNewsSection };
