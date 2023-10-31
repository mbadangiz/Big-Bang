import React, { useState } from "react";

// User panel change password background
import Style from "./index.module.css";
import { Formik, Form } from "formik";

import { BlueInputField } from "../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../Common/Buttons/BlueButton";

import { UserPanelChangePasswordSchema } from "../../../../Core/Validation/Schemas/Panel/User/UserPanelChangePasswordSchema";
import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const PanelChangePassword = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = async (value) => {
    setIsDisabled(true);
    try {
      console.log(value);
      SuccessToastify("درخواست تغییر رمز شما با موفقیت انجام شده است");
    } catch (error) {
      ErrorToastify("درخواست تغییر رمز شما با مشکل مواجه شده است");
    }
    setIsDisabled(false);
  };

  return (
    <div className="h-full py-[6px] px-[6px] grid grid-cols-12 gap-5">
      <div className="leading-[75px] h-[90px]  col-span-12">
        <h2 className="text-center text-bluePrimary text-[30px]">
          برای تغییر رمز خود رمز جدید خود را وارد کنید
        </h2>
      </div>
      <div className="col-span-3 h-[500px]"></div>
      <div
        className={`${Style.UserPanelChangePasswordBackground} border-[10px] border-solid border-[#D9D9D9] p-6 rounded-[20px] col-span-6 h-[500px]`}
      >
        <div className="border-8 border-solid border-bluePrimary h-full px-6 pt-24 rounded-[10px] backdrop-blur">
          <Formik
            initialValues={{
              currentPassword: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={onSubmit}
            validationSchema={UserPanelChangePasswordSchema}
          >
            <Form>
              <BlueInputField
                type="password"
                name="currentPassword"
                placeholder="رمز عبور فعلی"
                iconClass="fi fi-rr-password"
              />

              <BlueInputField
                type="password"
                name="password"
                placeholder="رمز عبور جدید"
                iconClass="fi fi-rr-lock"
              />

              <BlueInputField
                type="password"
                name="confirmPassword"
                placeholder="تکرار رمز عبور جدید"
                iconClass="fi fi-rr-lock"
              />
              <BlueButton
                type="submit"
                buttonText="ثبت"
                isDisabled={isDisabled}
              />
            </Form>
          </Formik>
        </div>
      </div>
      <div className="col-span-3 h-[500px]"></div>
    </div>
  );
};

export { PanelChangePassword };
