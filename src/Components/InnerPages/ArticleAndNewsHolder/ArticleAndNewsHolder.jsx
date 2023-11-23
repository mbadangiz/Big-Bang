import { useEffect } from "react";
import { ArticleAndNewsMainContent } from "./ArticleAndNews/ArticleAndNewsMainContent/ArticleAndNewsMainContent";
import ArticleListProvider from "../../../Core/Providers/ArticleListProvider";
import ArticlesSearchBar from "./ArticleAndNews/ArticlesSearchBar/ArticlesSearchBar";

const ArticleAndNewsHolder = () => {
  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);

  return (
    <ArticleListProvider>
      {/* <ArticleNewsCourseLayout mainContents={} /> */}
      <ArticlesSearchBar />
      <ArticleAndNewsMainContent />
    </ArticleListProvider>
  );
};

export { ArticleAndNewsHolder };
