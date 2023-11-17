import { useState } from "react";

const Test = () => {
  const [aliAkbar, setAliakbar] = useState(1);
  return (
    <div className="w-full h-[500px] bg-slate-500 mt-40 rounded-t-[30px] px-[20px] pt-[10px] relative">
      <div
        className={
          aliAkbar === 1
            ? "bg-slate-600"
            : aliAkbar === 2
            ? "bg-red-500"
            : "bg-amber-300"
        }
      >
        {aliAkbar === 1 ? "ssss" : aliAkbar === 2 ? "ddd" : "ame akbar"}
      </div>
      <button
        onClick={() => {
          setAliakbar((prev) => prev + 1);
        }}
      >
        Counts
      </button>
    </div>
  );
};

export default Test;
