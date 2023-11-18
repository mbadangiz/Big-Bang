import { useEffect } from "react";
import { useArticleData } from "../../../../Core/Providers/ArticleListProvider";
import { ArticleAndNewsSorting } from "./ArticleAndNewsSorting";
import { ArticleCards } from "../../ArticleCards/ArticleCards";
import { getAllNews } from "../../../../Core/Services/Api/Articles/getAllNews";

const ArticleAndNewsMainContent = () => {
  const { articleData, setArticleData } = useArticleData();
  const getAllData = async () => {
    const res = await getAllNews(2);
    setArticleData(res.news);
  };

  useEffect(() => {
    getAllData();
  }, []);
  console.log(articleData);
  return (
    <div className="w-full min-h-[1000px]">
      <ArticleAndNewsSorting />
      {articleData
        ? articleData.map((article) => {
            return <ArticleCards key={article.id} data={article} />;
          })
        : "ssss"}
    </div>
  );
};
export { ArticleAndNewsMainContent };
