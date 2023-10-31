// Component module css import
import Style from "./PanelSidebarProfileMenuItems.module.css";

// Sidebar Profile Picture import
import UserProfilePicture from "../../../../../../../Assets/Images/Panel/User/UserProfilePicture/UserProfilePicture.jpg";

const PanelSidebarProfileMenuItems = () => {
  return (
    <div className="border-2 border-solid border-transparent h-full relative">
      <div>
        <ul>
          <li
            className={`${Style.SidebarProfileMenuItem} my-1 w-full h-[50px] px-[9px] py-[4px] flex justify-between`}
          >
            <div className="w-[40px] h-[40px] rounded-md   py-[2.5px] px-[5.5px]">
              <i className="fi fi-rr-exit text-[30px] text-center text-bluePrimary"></i>
            </div>
            <div className="w-full mr-5 h-[45px]">
              <h2 className="text-[20px] text-[#969696] leading-[36px]">
                خروج از پنل
              </h2>
            </div>
          </li>

          {/* Sidebar Profile Picture */}
          <li
            className={`cursor-pointer my-1 w-full h-[50px] px-[2px]  py-[0px] flex justify-between absolute bottom-[6px] right-[1.5px]`}
          >
            <div className="border-[3px] border-solid border-bluePrimary w-[50px] h-[50px] rounded-full py-[2px] px-[2px]">
              <figure className="shadow-md shadow-gray-500 w-[40px] h-[40px] rounded-full">
                <img
                  className="rounded-full object-cover"
                  src={UserProfilePicture}
                  alt="User Profile Picture"
                />
              </figure>
            </div>
            <div className="w-full mr-4 h-[45px]">
              <h2 className="text-[20px] text-bluePrimary font-semibold leading-[38px]">
                بهراد موسوی
              </h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { PanelSidebarProfileMenuItems };
