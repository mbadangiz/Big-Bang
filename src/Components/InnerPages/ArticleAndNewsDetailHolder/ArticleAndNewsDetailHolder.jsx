import { useEffect } from "react";
import { ArticleMainContents } from "./ArticleMainContents/ArticleMainContents";
import { ArticlGuide } from "./ArticlGuide/ArticlGuide";
import ArticleDetailsProvider from "../../../Core/Providers/ArticleDetailsProvider";

const ArticleAndNewsDetailHolder = () => {
  useEffect(() => {
    document.body.style.background = "#F5F7FA";
    window.scrollTo(0, 0);
  }, []);
  return (
    <ArticleDetailsProvider>
      <div className="width-handler  flex-row-all-center justify-between items-start my-5">
        <ArticleMainContents />
        <ArticlGuide />
      </div>
    </ArticleDetailsProvider>
  );
};

export { ArticleAndNewsDetailHolder };
