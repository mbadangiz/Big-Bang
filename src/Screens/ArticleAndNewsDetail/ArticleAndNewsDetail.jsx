import { useEffect } from "react";
import { ArticleAndNewsDetailHolder } from "../../Components/InnerPages/ArticleAndNewsDetailHolder/ArticleAndNewsDetailHolder";
import GKJSNC from "./../../Assets/SVG/BG.svg";

const ArticleAndNewsDetail = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      {/* <img src={GKJSNC} alt="" /> */}
      <ArticleAndNewsDetailHolder />
    </>
  );
};

export { ArticleAndNewsDetail };
