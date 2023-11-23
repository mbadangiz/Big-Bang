import { useEffect } from "react";
import { useArticleData } from "../../../../Core/Providers/ArticleListProvider";
import { ArticleAndNewsSorting } from "./ArticleAndNewsSorting";
import { ArticleCards } from "../../ArticleCards/ArticleCards";
import { getAllNews } from "../../../../Core/Services/Api/Articles/getAllNews";

const ArticleAndNewsMainContent = () => {
  const { articleData, setArticleData } = useArticleData();

  return (
    <div className="w-full min-h-[1000px]">
      <ArticleAndNewsSorting />
      <div className="w-full flex-row-all-center py-3 px-0 gap-3">
        {articleData
          ? articleData.map((article) => {
              return <ArticleCards key={article.id} data={article} />;
            })
          : "ssss"}
      </div>
    </div>
  );
};
export { ArticleAndNewsMainContent };
