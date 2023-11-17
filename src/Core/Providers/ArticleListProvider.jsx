import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import ImgTemp from "./../../Assets/Image/sampleImage.png";

const ArticleDataContext = createContext();

const ArticleListProvider = ({ children }) => {
  const [articleData, setArticleData] = useState();

  return (
    <ArticleDataContext.Provider value={{ articleData, setArticleData }}>
      {children}
    </ArticleDataContext.Provider>
  );
};

export default ArticleListProvider;

export const useArticleData = () => useContext(ArticleDataContext);
