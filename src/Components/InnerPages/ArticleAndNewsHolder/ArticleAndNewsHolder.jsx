import { useEffect } from "react";
import { ArticleCards } from "../ArticleCards/ArticleCards";
import ArticleNewsCourseLayout from "../ArticleNewsCourseLayout/";
import { useArticleData } from "../../../Core/Providers/ArticleListProvider";

const ArticleAndNewsHolder = () => {
  const { articleData, setArticleData } = useArticleData();

  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);

  return (
    <ArticleNewsCourseLayout
      ControlData={setArticleData}
      data={articleData}
      aside={"ddd"}
      mainContents={<ArticleMainContent data={articleData} />}
    />
  );
};

const ArticleMainContent = ({ data }) => {
  return (
    <>
      {data.map((items) => {
        return <ArticleCards key={items.id} data={items} />;
      })}
    </>
  );
};

export { ArticleAndNewsHolder };
