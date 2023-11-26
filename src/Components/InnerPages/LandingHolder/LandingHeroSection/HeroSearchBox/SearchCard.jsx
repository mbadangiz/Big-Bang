import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ data, type }) => {
  const { title, tumbImageAddress, courseId, id } = data;
  return (
    <Link
      to={
        type !== "news"
          ? `/CoursesDetails?courseId=${courseId}`
          : `/ArticleAndNewsDetail?articleId=${id}`
      }
    >
      <div
        className="p-1 h-14 bg-white rounded-sm text-base 
    flex-row-all-center justify-start  hover:bg-slate-100
    border-b border-solid border-blue-300 relative"
      >
        {/* <img src={tumbImageAddress} alt="" /> */}
        <p className="textNoWrap w-[75%]">نام دوره : {title}</p>
        <p
          className="bg-blue-300/30 p-1 rounded-md absolute left-2
      cursor-pointer"
        >
          مشاهده ی کامل
        </p>
      </div>
    </Link>
  );
};

export { SearchCard };
