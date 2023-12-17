import { Fragment, useEffect } from "react";
import { useArticleData } from "../../../../../Core/Providers/ArticleListProvider";
import { getAllNews } from "../../../../../Core/Services/Api/Articles/getAllNews";

const ArticlesSearchBar = () => {
  const {
    articleData,
    setArticleData,
    rowCounts,
    quey,
    setQuery,
    setEmptyList,
    SortingData,
  } = useArticleData();

  const changeHandlerSearch = async () => {
    const res = await getAllNews(rowCounts, quey, SortingData);
    if (res.news.length === 0) {
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }
    setArticleData(res);
  };

  useEffect(() => {
    setArticleData(null);
    const timeOut = setTimeout(() => {
      changeHandlerSearch();
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [quey]);

  return (
    <Fragment>
      <div className="h-[100px] bg-gradient-to-l from-bluePrimary to-bluePrimary/10 py-2">
        <h2 className="text-center text-[40px] text-white">اخبار و مقالات</h2>
      </div>
      <div className="w-full h-40 flex-row-all-center relative bottom-20 ">
        <div className="w-[550px] h-[52px]  rounded-full relative">
          <input
            className="w-full h-full rounded-full  shadow-lg shadow-black/10  bg-white border-2 border-solid border-grayDetail/20 pr-4 pl-12 text-sm 
              focus:border-bluePrimary transition-all duration-150"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="نام مقاله یا نویسنده ی مورد نظر خود را جست و جو کنید"
          />
          <i className="fi fi-br-search absolute top-[53%] left-4 -translate-y-1/2 text-xl text-grayDetail/30"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default ArticlesSearchBar;
