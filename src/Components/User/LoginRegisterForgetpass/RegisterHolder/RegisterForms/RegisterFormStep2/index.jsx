import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterStep2Schema } from "../../../../../../Core/Validation/Schemas/auth/Register/RegisterStep2Schema";

import { ToastContainer } from "react-toastify";
import { BlueInputField } from "../../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../../Common/Buttons/BlueButton";
import { useSelector } from "react-redux";
import { RegisterVerifyMessage } from "../../../../../../Core/Services/Api/Auth/Register/RegisterVerifyMessage";
import { ErrorToastify } from "../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { SuccessToastify } from "../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";

const RegisterFormStep2 = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const Navigate = useNavigate();

  const register = useSelector((store) => store.register);

  console.log(register);

  const onSubmit = async (value) => {
    setIsDisabled(true);

    const newValue = { ...register, ...value };

    try {
      const result = await RegisterVerifyMessage(newValue);

      if (result.success === true) {
        SuccessToastify(result.message);
        setTimeout(() => {
          Navigate("/User/Register/Step3");
        }, 2000);
      } else if (result.success === false) {
        ErrorToastify(result.message);
      }
    } catch (error) {
      return false;
    }

    setIsDisabled(false);
  };

  return (
    <div className="">
      <ToastContainer rtl />
      <h1 className="text-[30px] text-center text-bluePrimary">ثبت نام</h1>

      <Formik
        initialValues={{
          verifyCode: "",
        }}
        validationSchema={RegisterStep2Schema}
        onSubmit={onSubmit}
      >
        <Form className="mt-6">
          {/* verifyCode */}
          <BlueInputField
            name="verifyCode"
            type="text"
            placeholder="کد تایید"
            iconClass="fi fi-rr-password"
          />

          <BlueButton type="submit" buttonText="ثبت" isDisabled={isDisabled} />
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterFormStep2 };
