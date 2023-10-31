import React from "react";

// Component imports
import { PanelDashboardItemTitle } from "../PanelDashboardItemTitle";

// Component CSS import
import Style from "./index.module.css";

const PanelDashboardUserActivity = () => {
  return (
    <>
      <div className="rounded-t-lg w-full h-1/6 flex">
        <PanelDashboardItemTitle
          DashboardItemIcon="fi fi-rr-user-time"
          DashboardItemTitle="فعالیت های شما"
        />
      </div>
      <div
        className={`${Style.UserPanelDashboardUserActivityBackground} rounded-[15px] py-2 px-[14px] w-full h-5/6`}
      >
        <div className="w-full h-full m-auto">
          <div className="w-full h-[50px] ">
            <h3 className="text-[18px] text-white font-semibold leading-[44px]">
              وضعیت : <span>فعال</span>
            </h3>
          </div>
          <div className="w-full h-[50px] my-10">
            <h3 className="text-[18px] text-white font-semibold leading-[44px]">
              تعداد دوره های شما : <span>3</span>
            </h3>
          </div>
          <div className="w-full h-[50px] my-10">
            <h3 className="text-[18px] text-white font-semibold leading-[44px]">
              تعداد دوره های شما : <span>3</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export { PanelDashboardUserActivity };
