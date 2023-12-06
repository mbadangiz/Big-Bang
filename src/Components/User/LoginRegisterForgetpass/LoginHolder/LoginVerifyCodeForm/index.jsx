import React from "react";
import { useState } from "react";
import { Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import { BlueInputField } from "../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { LoginVerifyCodeSchema } from "../../../../../Core/Validation/Schemas/auth/Login/LoginVerifyCodeSchema";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { LoginVerifyCodeAPI } from "../../../../../Core/Services/Api/Auth/Login/LoginVerifyCodeAPI";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { setItem } from "../../../../../Core/Services/common/storage.services";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { useNavigate } from "react-router-dom";

const LoginVerifyCodeForm = () => {
  const LoginInfo = useSelector((reducer) => reducer.login.userLoginInfo);

  const navigate = useNavigate();

  const LoginVerifyCodeAPIFunction = async (value) => {
    try {
      const result = await LoginVerifyCodeAPI(LoginInfo, value);
      if (result.success === true) {
        setItem("token", result.token);

        SuccessToastify(result.message);
        setTimeout(() => {
          navigate("/User/Panel/Dashboard");
        }, 2000);

        console.log(result);
      } else if (result.success === false) {
        ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = (value) => {
    const newValue = value.VrifyCode;

    LoginVerifyCodeAPIFunction(newValue);
  };

  return (
    <div className="h-[300px]">
      <ToastContainer rtl />
      <h1 className="text-[30px] text-center text-bluePrimary">ورود کاربران</h1>

      <Formik
        initialValues={{ VrifyCode: "" }}
        validationSchema={LoginVerifyCodeSchema}
        onSubmit={(value) => handleSubmit(value)}
      >
        <Form>
          {/* VrifyCode */}
          <BlueInputField
            name="VrifyCode"
            type="string"
            placeholder="کد تایید "
            iconClass="fi fi-rr-password"
          />

          <BlueButton type="submit" buttonText="ثبت" />
        </Form>
      </Formik>
    </div>
  );
};

export { LoginVerifyCodeForm };
