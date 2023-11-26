import { useEffect } from "react";
import { useArticleData } from "../../../../../Core/Providers/ArticleListProvider";
import { ArticleAndNewsSorting } from "./ArticleAndNewsSorting";
import { ArticleCards } from "../../../ArticleCards/ArticleCards";
import { getAllNews } from "../../../../../Core/Services/Api/Articles/getAllNews";
import PleaseWait from "../../../../Common/PleaseWait/PleaseWait";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { useMyArticleDetails } from "../../../../../Core/Providers/ArticleDetailsProvider";

const ArticleAndNewsMainContent = () => {
  const {
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
  } = useArticleData();

  const getAll = async () => {
    const res = await getAllNews(rowCounts, quey, SortingData);
    setArticleData(res);
  };
  useEffect(() => {
    getAll();
  }, [rowCounts, SortingData]);
  return (
    <div className="width-handler min-h-[1000px] py-4 px-0">
      {emptyList ? (
        "داده با توجه به سرچ شما موجود نیست"
      ) : (
        <>
          <ArticleAndNewsSorting />
          <>
            <div className="w-full flex-row-all-center mt-6` py-3 px-0 gap-x-4 gap-y-5">
              {articleData ? (
                articleData.news.map((article) => {
                  return <ArticleCards key={article.id} data={article} />;
                })
              ) : (
                <PleaseWait />
              )}
            </div>
            <div className="mt-10">
              <BlueButton
                buttonText={"مشاهده ی بیشتر"}
                ClickHandler={() => {
                  setRowCount((prev) => prev + 1);
                }}
                type={"button"}
              />
            </div>
          </>
        </>
      )}
    </div>
  );
};
export { ArticleAndNewsMainContent };
