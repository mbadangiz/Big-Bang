import { createContext, useState, useContext } from "react";

const ArticleDataContext = createContext();

const ArticleListProvider = ({ children }) => {
  const [articleData, setArticleData] = useState();
  const [rowCounts, setRowCount] = useState(1);
  const [quey, setQuery] = useState("");
  const [emptyList, setEmptyList] = useState(false);
  const [SortingData, setSortingData] = useState([]);

  return (
    <ArticleDataContext.Provider
      value={{
        articleData,
        setArticleData,
        rowCounts,
        setRowCount,
        quey,
        setQuery,
        emptyList,
        setEmptyList,
        SortingData,
        setSortingData,
      }}
    >
      {children}
    </ArticleDataContext.Provider>
  );
};

export default ArticleListProvider;

export const useArticleData = () => useContext(ArticleDataContext);
