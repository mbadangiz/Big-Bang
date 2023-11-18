import { createContext, useState, useContext } from "react";

const ArticleDataContext = createContext();

const ArticleListProvider = ({ children }) => {
  const [articleData, setArticleData] = useState("sss");

  return (
    <ArticleDataContext.Provider value={{ articleData, setArticleData }}>
      {children}
    </ArticleDataContext.Provider>
  );
};

export default ArticleListProvider;

export const useArticleData = () => useContext(ArticleDataContext);
