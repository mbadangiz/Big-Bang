import { useEffect } from "react";
import { ArticleAndNewsHolder } from "../../Components/InnerPages/ArticleAndNewsHolder/ArticleAndNewsHolder";

const ArticleAndNews = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <ArticleAndNewsHolder />;
};

export { ArticleAndNews };
