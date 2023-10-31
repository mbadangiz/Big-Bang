import { useState } from "react";
import ImgTemp from "./../../../Assets/Image/sampleImage.png";

const articlesList = [
  {
    id: 1,
    articleTitle: "یک متن تست رسینت رسیتذر نس یترذ",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 2,
    articleTitle: "یک متن تست",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 3,
    articleTitle: "یک متن تست",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 4,
    articleTitle: "یک متن تست رسینت رسیتذر نس یترذ",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 5,
    articleTitle: "یک متن تست",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 6,
    articleTitle: "یک متن تست",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 7,
    articleTitle: "یک متن تست رسینت رسیتذر نس یترذ",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 8,
    articleTitle: "یک متن تست",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
  {
    id: 9,
    articleTitle: "یک متن تست",
    img: ImgTemp,
    rating: 3.5,
    commentsCount: 30,
    author: 1,
    tag: "پایتون",
    date: "29 شهریور 1402",
  },
];
const SearchBar = ({ data, ControlData }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-full h-40 flex-row-all-center">
      <div className="w-450 h-12  rounded-full relative">
        <input
          className="w-full h-full rounded-full bg-white border-2 border-solid border-grayDetail/20 pr-4 pl-12 text-sm 
          focus:border-bluePrimary transition-all duration-150"
          type="text"
          onChange={(e) => {
            ControlData(
              articlesList.filter((items) =>
                items.articleTitle.toLowerCase().includes(e.target.value)
              )
            );
          }}
          placeholder="عنوان مقاله ی مورد نظر خود را جست و جوی کنید..."
        />
        <i className="fi fi-br-search absolute top-[53%] left-4 -translate-y-1/2 text-xl text-grayDetail/30"></i>
      </div>
    </div>
  );
};

export default SearchBar;
