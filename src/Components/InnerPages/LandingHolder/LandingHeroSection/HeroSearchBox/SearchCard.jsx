import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ data }) => {
  const { title, tumbImageAddress, courseId } = data;
  return (
    <Link to={`/CoursesDetails?courseId=${courseId}`}>
      <div
        className="p-1 h-14 bg-white rounded-sm text-base 
    flex-row-all-center justify-start  hover:bg-slate-100
    border-b border-solid border-blue-300 relative"
      >
        {/* <img src={tumbImageAddress} alt="" /> */}
        <p>نام دوره : {title}</p>
        <p
          className="bg-blue-300/30 p-1 rounded-md absolute left-2
      cursor-pointer"
        >
          مشاهده دوره
        </p>
      </div>
    </Link>
  );
};

export { SearchCard };
