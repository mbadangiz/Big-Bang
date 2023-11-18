import React from "react";
import { Tags } from "../../../../Common/Tages/Tages";

const PopularTag = () => {
  return (
    <div className="bg-white  ">
      <div className="f-bold text-[20px] pt-3 pb-4 px-3 bg-gray-200/60">
        تگ های محبوب
      </div>
      <div className="bg-white py-3  px-3">
        <Tags text={"تگ 1"} />
      </div>
    </div>
  );
};

export { PopularTag };
