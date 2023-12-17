import React, { useEffect } from "react";

// Components Import
import { PanelSidebar } from "./PanelSideBar";
import { PanelContent } from "./PanelContent";
import { getItem } from "../../../../Core/Services/common/storage.services";

const PanelHolder = () => {
  return (
    <div className=" h-full grid grid-cols-12 px-2 bg-slate-300">
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
