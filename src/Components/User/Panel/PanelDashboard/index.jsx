// Components imports

// ID User Profile Picture image
import { PanelDashboardCalendar } from "./PanelDashboardCalendar";
import { PanelDashboardHotNews } from "./PanelDashboardHotNews";
import { PanelDashboardIDUserCard } from "./PanelDashboardIDUserCard";
import { PanelDashboardUserActivity } from "./PanelDashboardUserActivity";

const PanelDashboard = () => {
  return (
    <div className="w-full h-full rounded-lg grid grid-cols-12 gap-6 px-2 pt-2 pb-[22px]">
      <div className="col-span-7  w-full h-[300px] rounded-lg">
        <PanelDashboardIDUserCard />
      </div>
      <div className="col-span-1"></div>

      <div className="col-span-4 w-full h-[300px] rounded-lg">
        <PanelDashboardUserActivity />
      </div>

      <div className=" col-span-7  w-full h-[340px] rounded-lg">
        <PanelDashboardHotNews />
      </div>
      <div className="col-span-1"></div>

      <div className="col-span-4 w-full h-full rounded-lg">
        <PanelDashboardCalendar />
      </div>
    </div>
  );
};

export { PanelDashboard };
