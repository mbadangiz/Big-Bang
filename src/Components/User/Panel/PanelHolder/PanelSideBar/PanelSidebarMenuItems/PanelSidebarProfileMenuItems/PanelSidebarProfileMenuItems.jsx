// Component module css import
import Style from "./PanelSidebarProfileMenuItems.module.css";

// Sidebar Profile Picture import
import UserProfilePicture from "../../../../../../../Assets/Images/Panel/User/UserProfilePicture/UserProfilePicture.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RedButton } from "../../../../../../Common/Buttons/RedButton";
import {
  getItem,
  removeItem,
} from "../../../../../../../Core/Services/common/storage.services";

const PanelSidebarProfileMenuItems = () => {
  const userInfo = useSelector((reducer) => reducer.user.userInformations);
  const navigate = useNavigate();

  const LogOutModalHandler = () => {
    setTimeout(() => {
      navigate("/User/Panel/LogOut");
    });

    console.log(token);
  };

  return (
    <div className="border-2 border-solid border-transparent h-full relative">
      <div>
        <ul>
          <NavLink
            to={"/"}
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
          </NavLink>

          {/* Sidebar Profile Picture */}

          <li
            className={`${Style.SidebarProfileMenuItemAcountDetail} cursor-pointer my-1 w-full h-[50px] px-[2px]  py-[0px] absolute bottom-[6px] right-[1.5px]`}
          >
            <div className=" flex justify-between ">
              <div className="border-[3px] border-solid border-bluePrimary w-[50px] h-[50px] rounded-full py-[2.5px] px-[2.5px] relative">
                <figure className="shadow-md shadow-gray-500 w-[40px] h-[40px] rounded-full">
                  <img
                    className="rounded-full object-cover"
                    src={
                      userInfo.currentPictureAddress
                        ? userInfo.currentPictureAddress
                        : UserProfilePicture
                    }
                    alt="User Profile Picture"
                  />
                </figure>
              </div>
              <div className="w-full mr-4 h-[45px]">
                <h2 className="text-[20px] text-bluePrimary font-semibold leading-[45px]">
                  {`${userInfo.fName} ${userInfo.lName}`}
                </h2>
              </div>
            </div>

            {/* ykljdf lkjslgjsdgd0 */}
            <div
              className={`${Style.SidebarProfileMenuItemAcountManagementHolder} border-2 border-solid border-blue-600 min-h-[200px] w-full absolute bottom-12 z-50 rounded-lg bg-white `}
            >
              <div className="border-2 border-solid border-red-800 h-[250px] overflow-y-scroll"></div>
              <div>
                <RedButton
                  buttonText="خروج از حساب"
                  iconClass="fi fi-rr-power"
                  buttonClasses="w-[130px] h-[35px]"
                  textClasses="text-[15px] leading-20 mt-1"
                  clickHandler={LogOutModalHandler}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { PanelSidebarProfileMenuItems };
