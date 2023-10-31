import React from "react";

// Component import
import { PanelDashboardItemTitle } from "../PanelDashboardItemTitle";
import { PanelDashboardHotNewsSlide } from "./PanelDashboardHotNewsSlider";

const PanelDashboardHotNews = () => {
  return (
    <>
      <div className="rounded-t-lg w-full h-1/6 flex">
        <PanelDashboardItemTitle
          DashboardItemIcon="fi fi-rr-flame"
          DashboardItemTitle="تازه ترین ها"
        />
      </div>
      <div className="border-[3px] border-solid border-[#D9D9D9] rounded-[15px] w-full h-5/6 mb-2">
        <div className=" mx-auto my-[2px] rounded-[10px] gap-2 pt-[2px] px-[4px]">
          <PanelDashboardHotNewsSlide />
        </div>
      </div>
    </>
  );
};

export { PanelDashboardHotNews };
