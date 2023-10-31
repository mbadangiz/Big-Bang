import React from "react";
import { Tags } from "../../../../Common/Tages/Tages";

const PopularTag = () => {
  return (
    <div className="bg-white">
      <div className="h-[68px] bg-[#fff] font-bold text-[20px] p-4">
        تگ های محبوب
      </div>
      <div className="mt-2 p-3 bg-white">
        <Tags text={"تگ 1"} />
      </div>
    </div>
  );
};

export { PopularTag };
