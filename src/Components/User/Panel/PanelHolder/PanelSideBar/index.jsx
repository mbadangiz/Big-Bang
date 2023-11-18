import React from "react";

// Components Imports
import { PanelSidebarRight } from "./PanelSidebarRight";
import { PanelSidebarLeft } from "./PanelSidebarLeft";
import { PanelSidebarNameLogo } from "./PanelSidebarMenuItems/PanelSidebarNameLogo";
import { PanelSidebarMenuItems } from "./PanelSidebarMenuItems/PanelSidebarMenuItems/PanelSideBarMenuItems";
import { PanelSidebarProfileMenuItems } from "./PanelSidebarMenuItems/PanelSidebarProfileMenuItems/PanelSidebarProfileMenuItems";

const PanelSidebar = () => {
  return (
    <div className="w-full mx-auto h-screen flex items-start relative">
      <div className="w-5/6 h-full ">
        <div className=" w-full h-full absolute right-[6px]">
          <div className="w-[60px] h-full py-[8px] -z-10">
            <PanelSidebarRight />
          </div>

          <div className="absolute w-full top-0 h-full -z-10">
            <PanelSidebarLeft />
          </div>
          {/* Panel SideBar Items */}
          <div className=" w-full h-full pt-[14px] pb-3 absolute top-0 bottom-0">
            <div className="h-[50px] pb-[3px] px-[2px] flex ">
              <PanelSidebarNameLogo />
            </div>

            <div className="absolute top-32  w-full ">
              <PanelSidebarMenuItems />
            </div>

            <div className=" absolute bottom-[2px] w-full h-[120px]">
              <PanelSidebarProfileMenuItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PanelSidebar };
