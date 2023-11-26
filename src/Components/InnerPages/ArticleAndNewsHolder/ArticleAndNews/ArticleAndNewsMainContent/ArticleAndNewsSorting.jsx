import { useState } from "react";
import { useArticleData } from "../../../../../Core/Providers/ArticleListProvider";

const ArticleAndNewsSorting = () => {
  const listOfSort = [
    {
      id: 1,
      text: "پربازدید ترین",
      sortType: "DESC",
      sortingCol: "currentView",
    },
    {
      id: 2,
      text: "کم بازدید ترین",
      sortType: "ASC",
      sortingCol: "currentView",
    },

    {
      id: 3,
      text: "بیشترین امتیاز",
      sortType: "DESC",
      sortingCol: "currentRate",
    },
    {
      id: 4,
      text: "کمترین امتیاز",
      sortType: "ASC",
      sortingCol: "currentRate",
    },

    {
      id: 5,
      text: "بیشترین لایک",
      sortType: "DESC",
      sortingCol: "currentLikeCount",
    },
    {
      id: 6,
      text: "کمترین لایک",
      sortType: "ASC",
      sortingCol: "currentLikeCount",
    },
    {
      id: 7,
      text: " تاریخ مقاله نزولی",
      sortType: "DESC",
      sortingCol: "insertDate",
    },
    {
      id: 8,
      text: " تاریخ مقاله صعودی",
      sortType: "ASC",
      sortingCol: "insertDate",
    },
  ];
  const { SortingData, setSortingData } = useArticleData();

  return (
    <div className="w-full text-sm mb-3 flex-row-all-center justify-start cursor-pointer text-grayDetail select-none">
      <div className="text-base  text-gray-500 flex-row-all-center ml-3">
        <i className="fi fi-rr-sort-amount-down-alt relative top-1.5 text-lg"></i>
        <p className="f-bold">مرتب سازی بر اساس :</p>
      </div>
      {listOfSort.map((items) => {
        const setBlue =
          SortingData.includes(items.sortingCol) &&
          SortingData.includes(items.sortType);

        return (
          <div
            key={items.id}
            className={`${
              setBlue && "bg-bluePrimary text-white rounded hover:!text-white "
            } hover:text-bluePrimary transition-all duration-[0.03s] p-2 `}
            onClick={() => {
              setSortingData([items.sortingCol, items.sortType]);
            }}
          >
            <p className="f-semiBold">{items.text}</p>
          </div>
        );
      })}
      {SortingData.length > 0 && (
        <div
          className="p-2 px-4 flex-row-all-center gap-1 bg-gray-300 rounded mr-2 text-gray-950/240"
          onClick={() => setSortingData([])}
        >
          <span className="f-semiBold">X</span>
          <p className="f-semiBold">حذف فیلتر</p>
        </div>
      )}
    </div>
  );
};

export { ArticleAndNewsSorting };
