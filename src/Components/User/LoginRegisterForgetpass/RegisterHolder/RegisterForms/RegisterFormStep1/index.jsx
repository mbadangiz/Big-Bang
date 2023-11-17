import React, { useState } from "react";
import { Form, Formik } from "formik";

import { BlueInputField } from "../../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../../Common/Buttons/BlueButton";
import { ToastContainer } from "react-toastify";
import { RegisterStep1Schema } from "../../../../../../Core/Validation/Schemas/auth/Register/RegisterStep1Schema";
import { RegisterSendVerifyMessage } from "../../../../../../Core/Services/Api/Auth/Register/RegisterSendVerifyMessage";
import { useDispatch, useSelector } from "react-redux";
import register, {
  onSetPhoneNumber,
} from "../../../../../../redux/auth/register";
import { useNavigate } from "react-router-dom";
import { SuccessToastify } from "../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";

const RegisterFormStep1 = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const Navigate = useNavigate();

  const register = useSelector((store) => store.register);
  const dispatch = useDispatch();

  const onSubmit = async (value) => {
    setIsDisabled(true);

    try {
      await RegisterSendVerifyMessage(value)
        .then(() => dispatch(onSetPhoneNumber(value.phoneNumber)))
        .then(() =>
          setTimeout(() => {
            Navigate("/User/Register/Step2");
          }, 1500)
        );
    } catch (error) {
      return false;
    }

    console.log(register);

    setIsDisabled(false);
  };

  return (
    <div className="">
      <ToastContainer rtl />
      <h1 className="text-[30px] text-center text-bluePrimary">ثبت نام</h1>

      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        validationSchema={RegisterStep1Schema}
        onSubmit={onSubmit}
      >
        <Form className="mt-6">
          {/* phoneNumber */}
          <BlueInputField
            name="phoneNumber"
            type="text"
            placeholder="شماره موبایل"
            iconClass="fi fi-rr-mobile-notch"
          />

          <BlueButton type="submit" buttonText="ثبت" isDisabled={isDisabled} />
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterFormStep1 };
