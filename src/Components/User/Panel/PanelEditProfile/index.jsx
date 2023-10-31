import { Formik, Form } from "formik";

import { PanelEditProfileUserProfilePicture } from "./PanelEditProfileUserProfilePicture";
import { BlueInputField } from "../../../Common/InputFields/BlueInputField/index";
import { BlueButton } from "../../../Common/Buttons/BlueButton";

import { UserPanelEditProfileSchema } from "../../../../Core/Validation/Schemas/Panel/User/UserPanelEditProfileSchema";
import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const PanelEditProfile = () => {
  const onSubmit = async (value) => {
    try {
      console.log(value);
      SuccessToastify("درخواست ویرایش حساب شما با موفقیت انجام شده است");
    } catch (error) {
      ErrorToastify("درخواست ویرایش حساب شما با مشکل مواجه شده است");
    }
  };
  return (
    <Formik
      initialValues={{
        role: "دانشجو",
        userName: "بهراد موسوی",
        email: "example@gmail.com",
        birthDate: "1402/02/05",
        nationalNumber: "1234567890",
        phoneNumber: "09112345678",
      }}
      validationSchema={UserPanelEditProfileSchema}
      onSubmit={onSubmit}
    >
      <Form className="w-full">
        <div className="w-full h-full rounded-lg grid grid-cols-12 gap-6 px-2 pt-[8px] pb-[14px]">
          <PanelEditProfileUserProfilePicture />
          <div className="col-span-6 h-[230px]">
            {/* Role */}
            <BlueInputField
              type="text"
              name="role"
              placeholder="نقش"
              iconClass="fi fi-rr-face-viewfinder"
            />

            {/* UserName */}
            <BlueInputField
              type="text"
              name="userName"
              placeholder="نام کاربری"
              iconClass="fi fi-rr-user"
            />

            {/* Email */}
            <BlueInputField
              type="string"
              name="email"
              placeholder="ایمیل"
              iconClass="fi fi-rr-at"
            />
          </div>
          <div className="col-span-6 h-[230px]">
            {/* National Number */}
            <BlueInputField
              type="number"
              name="nationalNumber"
              placeholder="شماره ملی"
              iconClass="fi fi-rr-tally"
            />

            {/* Birth Date */}
            <BlueInputField
              type="text"
              name="birthDate"
              placeholder="تاریخ تولد"
              iconClass="fi fi-rr-cake-birthday"
            />

            {/* Phone Number */}
            <BlueInputField
              type="number"
              name="phoneNumber"
              placeholder="شماره موبایل"
              iconClass="fi fi-rr-mobile-notch"
            />
          </div>
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
