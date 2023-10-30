import { useEffect } from "react";
import { ArticleCards } from "../ArticleCards/ArticleCards";
import ArticleNewsCourseLayout from "../ArticleNewsCourseLayout/";
import ImgTemp from "./../../../Assets/Image/sampleImage.png";

const ArticleAndNewsHolder = () => {
  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);

  return (
    <ArticleNewsCourseLayout
      aside={"sss"}
      mainContents={<ArticleMainContent />}
    />
  );
};

export { ArticleAndNewsHolder };

const ArticleMainContent = () => {
  const articleList = [
    {
      id: 1,
      articleTitle: "یک متن تست رسینت رسیتذر نس یترذ",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 2,
      articleTitle: "یک متن تست",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 3,
      articleTitle: "یک متن تست",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 4,
      articleTitle: "یک متن تست رسینت رسیتذر نس یترذ",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 5,
      articleTitle: "یک متن تست",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 6,
      articleTitle: "یک متن تست",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 7,
      articleTitle: "یک متن تست رسینت رسیتذر نس یترذ",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 8,
      articleTitle: "یک متن تست",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
    {
      id: 9,
      articleTitle: "یک متن تست",
      img: ImgTemp,
      rating: 3.5,
      commentsCount: 30,
      author: 1,
      tag: "پایتون",
      date: "29 شهریور 1402",
    },
  ];
  return (
    <>
      {articleList.map((items) => {
        return <ArticleCards key={items.id} data={items} />;
      })}
    </>
  );
};
