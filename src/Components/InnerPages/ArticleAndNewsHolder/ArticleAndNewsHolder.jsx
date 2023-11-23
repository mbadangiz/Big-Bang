import { useEffect } from "react";
import ArticleNewsCourseLayout from "../ArticleNewsCourseLayout";
import ArticleListProvider from "../../../Core/Providers/ArticleListProvider";
import { ArticleAndNewsMainContent } from "./ArticleAndNewsMainContent/ArticleAndNewsMainContent";
import { ArticleFilters } from "./ArticleFilters/ArticleFilters";

const ArticleAndNewsHolder = () => {
  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);

  return (
    <ArticleListProvider>
      <ArticleNewsCourseLayout
        aside={<ArticleFilters />}
        mainContents={<ArticleAndNewsMainContent />}
      />
    </ArticleListProvider>
  );
};

export { ArticleAndNewsHolder };
