import React from "react";
import { useRef } from "react";
import { SearchCard } from "./SearchCard";
import { SearchInCourses } from "../../../../../Core/Services/Api/Course/SearchInCourses";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { SearchInNews } from "../../../../../Core/Services/Api/Landing/LandingSearchinNews";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const HeroSearchBox = () => {
  const [searchItem, setSearchItem] = useState();
  const [isSearchModalShow, setisSearchModalShow] = useState(false);
  const [isSearchNews, setisSearchNews] = useState();
  const inputContainer = useRef(null);
  const searchInput = useRef(null);

  const navigate = useNavigate();

  const SearchHero = (e) => {
    const value = e.target.value;
    setTimeout(async () => {
      if (isSearchNews != "News") {
        const res = await SearchInCourses(value);
        setSearchItem(res);
      } else {
        const res = await SearchInNews(value);
        setSearchItem(res);
      }
    }, 2000);
  };

  const handleChange = (event) => {
    setisSearchNews(event.target.value);
  };
  console.log(isSearchNews);

  return (
    <div
      className="mt-20 w-full h-16  rounded-full shadow-xl shadow-black/10
  border-4 border-solid border-white bg-gray-500/20 backdrop-blur-sm py-2  relative"
      ref={inputContainer}
    >
      <select
        name=""
        value={isSearchNews}
        onChange={handleChange}
        className="w-1/5 h-full rounded-r-full bg-transparent
          text-center border-l-2 border-solid border-white f-bold text-lg text-white"
      >
        <option className="text-textBlack" value="Courses">
          دوره
        </option>
        <option className="text-textBlack" value="News">
          مقالات
        </option>
      </select>
      <input
        type="text"
        className="w-4/5 h-full bg-transparent rounded-l-full px-3
        text-bluePrimary text-lg f-bold placeholder:text-bluePrimary/75"
        placeholder="عبارت مورد نظر خود را جست  و جو کنید"
        onFocus={() => {
          inputContainer.current.style.borderColor = "#406dd58f";
          setisSearchModalShow(true);
        }}
        onBlur={() => {
          inputContainer.current.style.borderColor = "#fff";
          setisSearchModalShow(false);
        }}
        onChange={SearchHero}
        ref={searchInput}
      />
      <div
        className={`w-full  ${
          isSearchModalShow ? "h-350 p-1" : "h-0"
        }  bg-white  backdrop-blur-lg absolute bottom-20
        rounded-lg transition-all duration-300 overflow-y-scroll`}
        id="SearchModal"
      >
        {searchItem ? (
          isSearchNews !== "News" ? (
            <>
              {searchItem.courseFilterDtos.map((items) => {
                return (
                  <SearchCard type={"course"} key={items.id} data={items} />
                );
              })}
            </>
          ) : (
            <>
              {searchItem.news.map((items) => {
                return <SearchCard type={"news"} key={items.id} data={items} />;
              })}
            </>
          )
        ) : (
          isSearchModalShow && (
            <>
              <PuffLoader color="#36d7b7" />
              <p className="text-[#36d7b7]">لطفا صبر کنید</p>
            </>
          )
        )}
      </div>
    </div>
  );
};

export { HeroSearchBox };
