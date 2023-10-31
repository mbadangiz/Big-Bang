import { Element } from "react-scroll";
import { ArticleCards } from "../../../ArticleCards/ArticleCards";
import ImgTemp from "./../../../../../Assets/Image/sampleImage.png";
import { ArticleCardSmall } from "../../../ArticleCardSmall/ArticleCardSmall";
const SimilarArticles = () => {
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
  ];
  return (
    <Element name="similarArticles" className="!mb-10">
      <div className="my-4">
        <h1 className="f-bold text-xl">مقالات مشابه</h1>
      </div>
      <div className="w-full flex-row-all-center">
        {articleList.map((items) => {
          return <ArticleCardSmall key={items.id} data={items} />;
        })}
      </div>
    </Element>
  );
};

export { SimilarArticles };
