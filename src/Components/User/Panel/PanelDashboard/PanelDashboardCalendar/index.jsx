import React from "react";
import { PanelDashboardItemTitle } from "../PanelDashboardItemTitle";

// Component import
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const PanelDashboardCalendar = () => {
  return (
    <>
      <div className="rounded-t-lg w-full h-1/6 flex">
        <PanelDashboardItemTitle
          DashboardItemIcon="fi fi-rr-calendar"
          DashboardItemTitle="تقویم"
        />
      </div>
      <div className="rounded-[15px] px-[14px] w-full h-5/6">
        <Calendar
          defaultValue={new Date()}
          calendarType="islamic"
          locale="fa"
        />
      </div>
    </>
  );
};

export { PanelDashboardCalendar };
