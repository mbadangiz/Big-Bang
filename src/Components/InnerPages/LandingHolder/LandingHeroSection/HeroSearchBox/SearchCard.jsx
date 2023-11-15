import React from "react";

const SearchCard = ({ data }) => {
  const { title } = data;
  return (
    <div
      className="p-1 h-12 bg-white rounded-sm text-lg 
    flex-row-all-center justify-start  hover:bg-slate-100
    border-b border-solid border-blue-300"
    >
      <p>{title}</p>
    </div>
  );
};

export { SearchCard };
