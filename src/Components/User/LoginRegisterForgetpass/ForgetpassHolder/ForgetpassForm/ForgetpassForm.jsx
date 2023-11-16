import axios from "axios";
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { UserForgetpassSchema } from "../../../../../Core/Validation/Schemas/Login&Register&Forgetpass/User/UserForgetpassSchema";

import { BlueInputField } from "../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { InfoToastify } from "../../../../../Core/Utils/Toastifies/InfoToastify.Utils";
import { useNavigate } from "react-router-dom";

const ForgetpassForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    InfoToastify("برای تغییر رمز ابتدا ایمیل خود را وارد کنید");
  }, []);

  const onSubmit = async (value) => {
    setIsDisabled(true);
    try {
      await axios
        .post(
          "https://user1697223215770.requestly.dev/BigBangUserForgetpass",
          value
        )
        .then(() => SuccessToastify("در خواست شما با موفقیت انجام شده است"))
        .then(() =>
          setTimeout(() => Navigate("/User/Forgetpass/Changepass"), 2500)
        );
    } catch (error) {
      ErrorToastify("درخواست شما با مشکل مواجه شده است");
    }
    setIsDisabled(false);
  };

  return (
    <div>
      <ToastContainer rtl />
      <div className="mx-auto">
        <h1 className="text-[30px]  text-center text-bluePrimary">
          ورود کاربران
        </h1>
        <h3 className="text-[18px] text-center text-bluePrimary">
          فراموشی رمز
        </h3>
      </div>

      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={UserForgetpassSchema}
      >
        <Form className="my-[35px]">
          <BlueInputField
            type="text"
            name="email"
            placeholder="ایمیل"
            iconClass="fi fi-rr-at"
          />

          <BlueButton type="submit" buttonText="ثبت" isDisabled={isDisabled} />
        </Form>
      </Formik>
    </div>
  );
};

export { ForgetpassForm };
