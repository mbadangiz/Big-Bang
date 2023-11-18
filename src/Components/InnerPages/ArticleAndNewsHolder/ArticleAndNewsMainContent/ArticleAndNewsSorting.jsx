import { useState } from "react";

const ArticleAndNewsSorting = () => {
  const listOfSort = [
    { id: 1, text: "sss", sortType: "DESC", sortingCol: "cost" },
  ];
  const [sort, setSort] = useState("");
  return (
    <div className="w-full text-sm flex-row-all-center justify-start cursor-pointer text-grayDetail select-none">
      <div className="text-base  text-gray-500 flex-row-all-center ml-3">
        <i className="fi fi-rr-sort-amount-down-alt relative top-1.5 text-lg"></i>
        <p className="f-bold">مرتب سازی بر اساس :</p>
      </div>
      {listOfSort.map((items) => {
        const setBlue =
          sort.includes(items.sortingCol) && sort.includes(items.sortType);
        return (
          <div
            key={items.id}
            className={`${
              setBlue && "bg-bluePrimary text-white rounded hover:!text-white "
            } hover:text-bluePrimary transition-all duration-[0.03s] p-2 `}
            onClick={() => {
              setSort([items.sortingCol, items.sortType]);
            }}
          >
            <p className="f-semiBold">{items.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export { ArticleAndNewsSorting };
