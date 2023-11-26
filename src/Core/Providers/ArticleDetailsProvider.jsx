import { createContext, useState, useContext } from "react";

const articleDetailsContext = createContext();

const ArticleDetailsProvider = ({ children }) => {
  const [articleDetails, setArticleDetails] = useState();
  const [articleExtraData, setArticleExtraData] = useState();

  return (
    <articleDetailsContext.Provider
      value={{
        articleDetails,
        setArticleDetails,
        articleExtraData,
        setArticleExtraData,
      }}
    >
      {children}
    </articleDetailsContext.Provider>
  );
};

export const useMyArticleDetails = () => useContext(articleDetailsContext);

export default ArticleDetailsProvider;
