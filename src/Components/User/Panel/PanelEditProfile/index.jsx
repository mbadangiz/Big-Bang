import { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { PanelEditProfileUserProfilePicture } from "./PanelEditProfileUserProfilePicture";
import { BlueInputField } from "../../../Common/InputFields/BlueInputField/index";
import { BlueButton } from "../../../Common/Buttons/BlueButton";

import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { RadioButtonField } from "../../../Common/InputFields/RadioButtonField";
import { TextAreaField } from "../../../Common/InputFields/TextAreaField/index";
import { PanelEditProfileMap } from "./PanelEditProfileMap";
import { UserPanelEditProfileFormSchema } from "../../../../Core/Validation/Schemas/Panel/User/UserPanelEditProfileFormSchema";
import { ToastContainer } from "react-toastify";
import { onSetFormData } from "../../../../Core/Utils/onSetFormData/onSetFormData";
import { GetCurrentUserProfile } from "../../../../Core/Services/Api/UserPanel/GetCurrentUserProfile";
import { onSetUserInfo } from "../../../../redux/user";
import { UpdateProfileInfo } from "../../../../Core/Services/Api/UserPanel/UpdateProfileInfo";
import { MakeDateEnglish } from "../../../../Core/Utils/MakeDateEnglish/MakeDateEnglish";
import { useNavigate } from "react-router-dom";
import { BlueToggleInputField } from "../../../Common/InputFields/BlueToggleInputField";
import { useState } from "react";
import { BlueDatePickerInputField } from "../../../Common/InputFields/BlueDatePickerInputField/BlueDatePickerInputField";
import { MakeDatePickerDatePersian } from "../../../../Core/Utils/MakeDatePickerDatePersian/MakeDatePickerDatePersian";

const PanelEditProfile = () => {
  const getUserProfileInfo = async () => {
    const user = await GetCurrentUserProfile();

    dispatch(onSetUserInfo(user));
  };

  useEffect(() => {
    getUserProfileInfo();
  }, []);

  const userInfo = useSelector((reducer) => reducer.user.userInformations);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  /* Inputs Field State */
  const [isToggle, setIstoggle] = useState(userInfo.receiveMessageEvent);

  const [markerLocationState, setMarkerLocationState] = useState([
    parseFloat(userInfo.latitude),
    parseFloat(userInfo.longitude),
  ]);

  const [datePickerDateTime, setDatePickerDateTime] = useState(
    MakeDatePickerDatePersian(userInfo.birthDay)
  );

  const onSubmit = async (value) => {
    try {
      console.log(value);
      const data = onSetFormData(value);

      const result = await UpdateProfileInfo(data);

      if (result.success === true) {
        console.log(result);
        SuccessToastify("درخواست ویرایش حساب شما با موفقیت انجام شده است");
        setTimeout(() => {
          Navigate("/User/Panel/Dashboard");
        }, 2000);
      } else if (result.success === false) {
        ErrorToastify(result.errors);
      }
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = (value) => {
    console.log(datePickerDateTime);

    const newValue = {
      ...value,
      LinkdinProfile: value.LinkdinProfile?.toString(),
      Gender: Boolean(value.Gender),
      ReceiveMessageEvent: isToggle,
      BirthDay: MakeDateEnglish(datePickerDateTime),
      Latitude: String(markerLocationState[0]),
      Longitude: String(markerLocationState[1]),
    };

    onSubmit(newValue);
  };

  return (
    <Formik
      initialValues={{
        LName: userInfo.lName,
        FName: userInfo.fName,
        UserAbout: userInfo.userAbout,
        LinkdinProfile: userInfo.linkdinProfile,
        TelegramLink: userInfo.telegramLink,
        ReceiveMessageEvent: userInfo.receiveMessageEvent,
        HomeAdderess: userInfo.homeAdderess,
        NationalCode: userInfo.nationalCode,
        Gender: String(userInfo.gender),
      }}
      validationSchema={UserPanelEditProfileFormSchema}
      onSubmit={(value) => handleSubmit(value)}
    >
      <Form className="w-full">
        <ToastContainer rtl />
        <div className="w-full h-full rounded-[10px] px-2 py-[8px] grid grid-cols-12 gap-y-4 gap-x-10">
          {/*   FIRST SECTION  */}
          <PanelEditProfileUserProfilePicture />

          {/*   SECOND SECTION  */}
          <div className="col-span-2"></div>

          <div className="col-span-4 ">
            {/* LName */}
            <BlueInputField
              type="text"
              name="LName"
              placeholder="نام "
              iconClass="fi fi-rr-user"
            />

            {/* NationalCode */}
            <BlueInputField
              type="text"
              name="NationalCode"
              placeholder="کد ملی "
              iconClass="fi fi-rr-tally"
            />

            {/* Gender */}
            <div className="w-[365px] h-[50px] mx-auto ">
              <div className="h-full flex">
                <h2 className="text-[20px] text-bluePrimary leading-10 mx-2 ">
                  جنسیت :
                </h2>
                <RadioButtonField
                  radioInputName="Gender"
                  labelName="مرد"
                  labelId="Man"
                  radioValue="true"
                />
                <RadioButtonField
                  radioInputName="Gender"
                  labelName="زن"
                  labelId="Woman"
                  radioValue="false"
                />{" "}
              </div>
              <ErrorMessage
                name="Gender"
                component={"p"}
                className="text-right text-[15px] text-errorColor mr-5 mt-[1px]"
              />
            </div>
          </div>
          <div className="col-span-4">
            {/* FName */}
            <BlueInputField
              type="text"
              name="FName"
              placeholder="نام خانوادگی"
              iconClass="fi fi-rr-users-alt"
            />

            {/* BirthDay */}

            <BlueDatePickerInputField
              datePickerDateTime={datePickerDateTime}
              setDatePickerDateTime={setDatePickerDateTime}
            />

            {/* ReceiveMessageEvent */}
            <div className="w-[375px] h-[50px] mx-auto ">
              <div className="h-full flex">
                {" "}
                <h2 className="text-[18px] text-bluePrimary leading-10 mx-2 ">
                  فعالسازی رویداد پیام :
                </h2>
                <BlueToggleInputField
                  isToggle={isToggle}
                  setIsToggle={setIstoggle}
                  toggleClass="my-2"
                />
              </div>
              <ErrorMessage
                name="ReceiveMessageEvent"
                component={"p"}
                className="text-right text-[15px] text-errorColor mr-5 mt-[1px]"
              />
            </div>
          </div>
          <div className="col-span-2"></div>

          {/*   THIRD SECTION  */}
          <div className="col-span-2"></div>
          <div className="col-span-8">
            <h2 className="text-[20px] text-bluePrimary my-1">
              درباره کاربر :{" "}
            </h2>
            <TextAreaField
              name="UserAbout"
              placeholder="درباره کاربر"
              extraClasses="w-full"
              TextAreaClasses="w-full h-[150px] bg-white border-[3px] border-solid border-bluePrimary text-textBlack"
            />
          </div>
          <div className="col-span-2"></div>

          {/* FOURTH SECTION */}
          <div className="col-span-2"></div>
          <div className="col-span-4 h-full">
            {/* LinkdinProfile */}
            <BlueInputField
              type="text"
              name="LinkdinProfile"
              placeholder="پروفایل لینکدین"
              iconClass="fi fi-brands-linkedin"
            />
          </div>

          <div className="col-span-4 h-full">
            {/* TelegramLink */}
            <BlueInputField
              type="text"
              name="TelegramLink"
              placeholder="پروفایل تلگرام"
              iconClass="fi fi-brands-telegram"
            />
          </div>
          <div className="col-span-2"></div>

          <div className="col-span-2"></div>
          <div className="col-span-4">
            {/* HomeAdderess */}
            <div className=" relative bottom-3 h-[200px]">
              <h2 className="text-[20px] text-bluePrimary my-1">
                آدرس خانه :{" "}
              </h2>
              <TextAreaField
                name="HomeAdderess"
                placeholder="آدرس خانه"
                TextAreaClasses=" w-full h-[120px] bg-white border-[3px] border-solid border-bluePrimary text-textBlack"
              />
            </div>
            <h3 className="text-bluePrimary text-[15px]">
              اختیاری : شما می توانید موقیت خود را در نقشه نشان دهید
            </h3>
          </div>
          <div className="col-span-4">
            <PanelEditProfileMap
              markerLocationState={markerLocationState}
              setMarkerLocationState={setMarkerLocationState}
            />
          </div>

          <div className="col-span-2"></div>

          <div className="col-span-4"></div>
          <div className="col-span-4 mt-[26px]">
            <BlueButton type="submit" buttonText="ثبت" />
          </div>
          <div className="col-span-4"></div>
        </div>
      </Form>
    </Formik>
  );
};

export { PanelEditProfile };
