import React from "react";

// Component import
import { PanelDashboardItemTitle } from "../PanelDashboardItemTitle";
import { SilverButton } from "../../../../Common/Buttons/SilverButton";

// ID user card profile picture import
import UserProfilePicture from "../../../../../Assets/Images/Panel/User/UserProfilePicture/UserProfilePicture.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { GetCurrentUserProfile } from "../../../../../Core/Services/Api/UserPanel/GetCurrentUserProfile";
import { useDispatch, useSelector } from "react-redux";
import user, { onSetUserInfo } from "../../../../../redux/user";
import { makeDatePersian } from "../../../../../Core/Utils/MakeDatePersian/MakeDatePersian";

const PanelDashboardIDUserCard = () => {
  const userInfo = useSelector((reducer) => reducer.user.userInformations);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const getUserProfileInfo = async () => {
    const user = await GetCurrentUserProfile();

    // console.log(user);

    dispatch(onSetUserInfo(user));
  };

  useEffect(() => {
    getUserProfileInfo();
  }, []);
  console.log("RENDERING", userInfo);

  return (
    <>
      <div className="rounded-t-lg w-full h-1/6 flex">
        <PanelDashboardItemTitle
          DashboardItemIcon="fi fi-rr-id-badge"
          DashboardItemTitle="نمایش اطلاعات"
        />
      </div>
      <div className="border-[3px] border-solid border-bluePrimary rounded-[15px] w-full h-5/6">
        <div className="w-[98.5%] h-[96%] mx-auto my-[5px] rounded-[10px] bg-[#E8ECF1] grid grid-cols-9 gap-2 p-[6px]">
          <div className="w-full h-[222px] col-span-2 rounded-[7px]">
            <figure className="w-full h-full rounded-[7px] shadow-lg shadow-gray-400">
              <img
                className="object-fill w-full h-full rounded-[7px]"
                src={
                  userInfo ? userInfo.currentPictureAddress : UserProfilePicture
                }
                alt="ID User Profile Picture"
              />
            </figure>
          </div>
          <div className="h-[222px] col-span-7 rounded grid grid-cols-6">
            <div className="h-[160px] col-span-3">
              {/* ID user card right */}
              <div className="h-[35px] leading-7">
                <h3 className="text-[18px] text-bluePrimary font-medium">
                  نقش :
                  <span className="text-[16px] text-black font-medium">
                    دانشجو
                  </span>
                </h3>
              </div>

              <div className="h-[35px] leading-7 my-4">
                <h3 className="text-[18px] text-bluePrimary font-medium">
                  نام کاربری :
                  <span className="text-[16px] text-black font-medium">
                    {`${userInfo.fName} ${userInfo.lName}`}
                  </span>
                </h3>
              </div>

              <div className="h-[35px] leading-7">
                <h3 className="text-[18px] text-bluePrimary font-medium">
                  ایمیل :
                  <span className="text-[16px] text-black font-medium">
                    {`${userInfo.email}`}
                  </span>
                </h3>
              </div>
            </div>
            <div className="h-[160px] col-span-3">
              {/* ID user card Left */}
              <div className="h-[35px] leading-7">
                <h3 className="text-[18px] text-bluePrimary font-medium">
                  شماره شناسنامه :
                  <span className="text-[16px] text-black font-medium">
                    {`${userInfo.nationalCode}`}
                  </span>
                </h3>
              </div>

              <div className="h-[35px] leading-7 my-4">
                <h3 className="text-[18px] text-bluePrimary font-medium">
                  تاریخ تولد :
                  <span className="text-[16px] text-black font-medium">
                    {`${makeDatePersian(userInfo.birthDay)}`}
                  </span>
                </h3>
              </div>

              <div className="h-[35px] leading-7">
                <h3 className="text-[18px] text-bluePrimary font-medium">
                  شماره موبایل :
                  <span className="text-[16px] text-black font-medium">
                    {`${userInfo.phoneNumber}`}
                  </span>
                </h3>
              </div>
            </div>
            <div className="h-[60px] col-span-12">
              <SilverButton
                buttonText="ویرایش"
                ClickHandler={() => Navigate("/User/Panel/EditProfile")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PanelDashboardIDUserCard };
