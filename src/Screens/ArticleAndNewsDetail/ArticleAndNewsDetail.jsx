import { useEffect } from "react";
import { ArticleAndNewsDetailHolder } from "../../Components/InnerPages/ArticleAndNewsDetailHolder/ArticleAndNewsDetailHolder";

const ArticleAndNewsDetail = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <ArticleAndNewsDetailHolder />;
};

export { ArticleAndNewsDetail };
