import { useEffect } from "react";
import { useArticleData } from "../../../../../Core/Providers/ArticleListProvider";
import { getAllNews } from "../../../../../Core/Services/Api/Articles/getAllNews";
import { FilterAccardion } from "../../../../Common/FilterAccardion/FilterAccardion";

export const ArticleFilters = () => {
  const { articleData, setArticleData } = useArticleData();
  const getAllData = async () => {
    const res = await getAllNews(2);
    setArticleData(res.news);
  };

  useEffect(() => {
    getAllData();
  }, []);
  return <>{/* <FilterAccardion ></FilterAccardion> */}</>;
};
