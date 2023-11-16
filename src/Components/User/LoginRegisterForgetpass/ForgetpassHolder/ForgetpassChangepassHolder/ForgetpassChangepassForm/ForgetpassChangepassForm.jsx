import { Formik, Form } from "formik";
import { useState } from "react";
import axios from "axios";

import { SuccessToastify } from "../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

import { BlueInputField } from "../../../../../Common/InputFields/BlueInputField/index";
import { BlueButton } from "../../../../../Common/Buttons/BlueButton";
import { UserForgetpassChangepassSchema } from "../../../../../../Core/Validation/Schemas/Login&Register&Forgetpass/User/UserForgetpassChangepass";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgetpassChangepassForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const Navigate = useNavigate();

  const onSubmit = async (value) => {
    setIsDisabled(true);

    try {
      await axios
        .post(
          "https://user1697223215770.requestly.dev/BigBangUserForgetpassChangepass",
          value
        )
        .then(() =>
          SuccessToastify("درخواست تغییر رمز شما با موفقیت انجام شده است")
        )
        .then(() => setTimeout(() => Navigate("/User/Login"), 2500));
    } catch (error) {
      ErrorToastify("متاسفانه درخواست تغییر رمز شما با مشکل مواجهه شده است");
    }
    setIsDisabled(false);
  };

  return (
    <div>
      <ToastContainer rtl />
      <h1 className="text-[30px]  text-bluePrimary text-center">
        ورود کاربران
      </h1>
      <h3 className="text-[18px] text-bluePrimary text-center">
        رمز عبور جدید
      </h3>

      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={UserForgetpassChangepassSchema}
        onSubmit={onSubmit}
      >
        <Form className="my-[35px]">
          <BlueInputField
            type="password"
            name="password"
            placeholder="رمز عبور جدید"
            iconClass="fi fi-rr-lock"
          />

          <BlueInputField
            type="password"
            name="confirmPassword"
            placeholder="تایید رمز عبور جدید"
            iconClass="fi fi-rr-lock"
          />

          <BlueButton type="submit" buttonText="ثبت" isDisabled={isDisabled} />
        </Form>
      </Formik>
    </div>
  );
};

export { ForgetpassChangepassForm };
