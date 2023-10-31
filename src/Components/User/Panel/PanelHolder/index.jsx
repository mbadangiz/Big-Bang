import React from "react";

// Components Import
import { PanelSidebar } from "./PanelSideBar";
import { PanelContent } from "./PanelContent";

const PanelHolder = () => {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-2 ">
        <PanelSidebar />
      </div>
      <div className="col-span-10 ">
        <PanelContent />
      </div>
    </div>
  );
};

export { PanelHolder };
