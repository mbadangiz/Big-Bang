import { useEffect } from "react";
import { ArticleMainContents } from "./ArticleMainContents/ArticleMainContents";
import { ArticlGuide } from "./ArticlGuide/ArticlGuide";

const ArticleAndNewsDetailHolder = () => {
  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);
  return (
    <div className="width-handler  flex-row-all-center justify-between items-start my-5">
      <ArticleMainContents />
      <ArticlGuide />
    </div>
  );
};

export { ArticleAndNewsDetailHolder };
