import { useEffect } from "react";
import { ArticleAndNewsMainContent } from "./ArticleAndNews/ArticleAndNewsMainContent/ArticleAndNewsMainContent";
import ArticleListProvider from "../../../Core/Providers/ArticleListProvider";
import ArticlesSearchBar from "./ArticleAndNews/ArticlesSearchBar/ArticlesSearchBar";
import ArticleDetailsProvider from "../../../Core/Providers/ArticleDetailsProvider";

const ArticleAndNewsHolder = () => {
  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);

  return (
    <ArticleListProvider>
      <ArticleDetailsProvider>
        <ArticlesSearchBar />
        <ArticleAndNewsMainContent />
      </ArticleDetailsProvider>
    </ArticleListProvider>
  );
};

export { ArticleAndNewsHolder };
