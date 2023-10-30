import React from "react";

const InputSearch = () => {
  return (
    <div className="flex relative">
      <input
        type="search"
        className="border-2 border-solid border-white py-2 px-5 w-[500px]
        block m-auto rounded-2xl mt-3 mb-4 bg-slate-300/40"
        placeholder="جست و جو کنید..."
      ></input>
      <i className="fi fi-rr-search"></i>
    </div>
  );
};

export { InputSearch };
