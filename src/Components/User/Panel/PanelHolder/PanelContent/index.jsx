import React from "react";
import { Outlet } from "react-router-dom";

const PanelContent = () => {
  return (
    <div className="h-screen py-2 px-[6px]">
      <div className="border-2 border-solid border-gray-200 h-full shadow rounded-lg mr-[6px]">
        <Outlet />
      </div>
    </div>
  );
};

export { PanelContent };
