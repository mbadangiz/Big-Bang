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
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          ControlData(
            articlesList.filter((items) =>
              items.articleTitle.toLowerCase().includes(searchValue.toLowerCase)
            )
          );
        }}
      />
    </div>
  );
};

export default SearchBar;
