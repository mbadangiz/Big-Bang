import axios from "axios";
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ForgetpassSchema } from "../../../../../Core/Validation/Schemas/auth/Forgetpass/ForgetpassSchema";

import { BlueInputField } from "../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { InfoToastify } from "../../../../../Core/Utils/Toastifies/InfoToastify.Utils";
import { useNavigate } from "react-router-dom";
import { ForgetpassAPI } from "../../../../../Core/Services/Api/Auth/Forgetpass/ForgetpassAPI";

const ForgetpassForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const Navigate = useNavigate();

  const baseUrl = "http://localhost:5173/User/Forgetpass/Resetpass";

  useEffect(() => {
    InfoToastify("برای تغییر رمز ابتدا ایمیل خود را وارد کنید");
  }, []);

  const onSubmit = async (value) => {
    setIsDisabled(true);

    const newValue = { ...value, baseUrl };
    try {
      const result = await ForgetpassAPI(newValue);

      if (result.success === true) {
        SuccessToastify("پیام با موفقیت به ایمیل شما ارسال شد");
      }
    } catch (error) {
      return ErrorToastify(result.message);
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
        validationSchema={ForgetpassSchema}
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
