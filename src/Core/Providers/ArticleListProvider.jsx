import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import ImgTemp from "./../../Assets/Image/sampleImage.png";

const ArticleDataContext = createContext();

const ArticleListProvider = ({ children }) => {
  const articlesList = [
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

  const [articleData, setArticleData] = useState(articlesList);

  return (
    <ArticleDataContext.Provider value={{ articleData, setArticleData }}>
      {children}
    </ArticleDataContext.Provider>
  );
};

export default ArticleListProvider;

export const useArticleData = () => useContext(ArticleDataContext);
