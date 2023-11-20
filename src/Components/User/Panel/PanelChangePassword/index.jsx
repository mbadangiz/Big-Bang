import React, { useState } from "react";

// User panel change password background
import Style from "./index.module.css";
import { Formik, Form } from "formik";

import { BlueInputField } from "../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../Common/Buttons/BlueButton";

import { UserPanelChangePasswordSchema } from "../../../../Core/Validation/Schemas/Panel/User/UserPanelChangePasswordSchema";
import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { Changepassword } from "../../../../Core/Services/Api/UserPanel/Changepassword";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const PanelChangePassword = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const Navigate = useNavigate();

  const onSubmit = async (value) => {
    setIsDisabled(true);

    try {
      const newValue = {
        oldPassword: value.oldPassword,
        newPassword: value.newPassword,
      };

      const result = await Changepassword(newValue);

      if (result.success === true) {
        setIsDisabled(false);
        SuccessToastify(result.message);
        setTimeout(() => {
          Navigate("/User/Panel/Dashboard");
        }, 2000);
      } else if (result.success === false) {
        setIsDisabled(false);
        return ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }

    setIsDisabled(false);
  };

  return (
    <div className="h-full py-[6px] px-[6px] grid grid-cols-12 gap-5">
      <ToastContainer rtl />
      <div className="leading-[75px] h-[90px]  col-span-12">
        <h2 className="text-center text-bluePrimary text-[30px]">
          برای تغییر رمز خود رمز جدید خود را وارد کنید
        </h2>
      </div>
      <div className="col-span-3 h-[500px]"></div>
      <div className={`rounded-[25px] col-span-6 h-[500px]`}>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={UserPanelChangePasswordSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <BlueInputField
              type="password"
              name="oldPassword"
              placeholder="رمز عبور فعلی"
              iconClass="fi fi-rr-password"
            />

            <BlueInputField
              type="password"
              name="newPassword"
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

      <div className="col-span-3 h-[500px]"></div>
    </div>
  );
};

export { PanelChangePassword };
