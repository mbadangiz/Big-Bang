import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterStep2Schema } from "../../../../../../Core/Validation/Schemas/auth/Register/RegisterStep2Schema";

import { ToastContainer } from "react-toastify";
import { BlueInputField } from "../../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../../Common/Buttons/BlueButton";
import { useSelector } from "react-redux";
import { RegisterVerifyMessage } from "../../../../../../Core/Services/Api/Auth/Register/RegisterVerifyMessage";

const RegisterFormStep2 = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const Navigate = useNavigate();

  const register = useSelector((store) => store.register);

  console.log(register);

  const onSubmit = async (value) => {
    setIsDisabled(true);

    const newValue = { ...register, ...value };

    try {
      await RegisterVerifyMessage(newValue).then(() =>
        setTimeout(() => {
          Navigate("/User/Register/Step3");
        }, 1500)
      );
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
