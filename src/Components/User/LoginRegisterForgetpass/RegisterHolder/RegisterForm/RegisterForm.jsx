import { Formik, Form } from "formik";

import { ToastContainer } from "react-toastify";
import { BlueInputField } from "../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";

import { UserRegisterSchema } from "../../../../../Core/Validation/Schemas/Login&Register&Forgetpass/User/UserRegisterSchema";
import { useState } from "react";
import axios from "axios";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const RegisterForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = async (value) => {
    setIsDisabled(true);
    try {
      await axios
        .post(
          "https://user1697223215770.requestly.dev/BigBangUserRegister",
          value
        )
        .then(() => SuccessToastify("ثبت نام با موفقیت انجام شد!"));
      console.log(value);
    } catch (error) {
      ErrorToastify("متاسفانه درخواست ثبت نام شما با مشکل مواجه شده است");
    }
    setIsDisabled(false);
  };

  return (
    <div className="mb-6">
      <ToastContainer rtl />
      <h1 className="text-[30px] text-center text-bluePrimary">
        ثبت نام کاربران
      </h1>

      <Formik
        initialValues={{
          userName: "",
          email: "",
          birthDate: "",
          nationalNumber: "",
          password: "",
        }}
        validationSchema={UserRegisterSchema}
        onSubmit={onSubmit}
      >
        <Form className="mt-6">
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

          {/* Birth Date */}
          <BlueInputField
            type="text"
            name="birthDate"
            placeholder="تاریخ تولد"
            iconClass="fi fi-rr-cake-birthday"
          />

          {/* National Number */}
          <BlueInputField
            type="number"
            name="nationalNumber"
            placeholder="شماره ملی"
            iconClass="fi fi-rr-tally"
          />

          {/* password */}
          <BlueInputField
            type="text"
            name="password"
            placeholder="رمز عبور"
            iconClass="fi fi-rr-lock"
          />

          <BlueButton type="submit" buttonText="ثبت" isDisabled={isDisabled} />
        </Form>
      </Formik>
    </div>
  );
};

export { RegisterForm };
