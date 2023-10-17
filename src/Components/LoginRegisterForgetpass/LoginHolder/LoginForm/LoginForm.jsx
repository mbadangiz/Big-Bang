import { Formik, Form } from "formik";
import axios from "axios";
import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { BlueInputField } from "../../../Common/InputFields/BlueInputField";
import { BlueCheckBox } from "../../../Common/InputFields/BlueCheckBox/index";
import { BlueButton } from "../../../Common/Buttons/BlueButton";
import { LoginSchema } from "../../../../Core/Validation/Schemas/Login&Register&Forgetpass/LoginSchema";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import { BigBangLoading } from "../../../Common/BigBangLoading/index";

const LoginForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value) => {
    setIsDisabled(true);
    setIsLoading(true);
    try {
      await axios
        .post("https://user1697223215770.requestly.dev/BigBangUserLogin", value)
        .then(() => SuccessToastify("!خوش آمدید"));
    } catch (error) {
      ErrorToastify("متاسفانه درخواست ورود شما با مشکل مواجه شده است");
    }
    setIsLoading(false);
    setIsDisabled(false);
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="text-[30px] text-center text-bluePrimary">ورود کاربران</h1>

      <Formik
        initialValues={{ email: "", password: "", toggle: false }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        <Form className="mt-6">
          <BlueInputField
            type="text"
            name="email"
            placeholder="ایمیل"
            iconClass="fi fi-rr-at"
          />

          <BlueInputField
            type={showPassword ? `text` : `password`}
            name="password"
            placeholder="رمز عبور"
            iconClass="fi fi-rr-lock"
          />

          <div className="w-[370px] h-[30px] m-auto  flex justify-between">
            <BlueCheckBox
              type="checkbox"
              name="toggle"
              labelName="مرا به خاطر بسپار"
            />
            <h3 className="text-bluePrimary text-[16px] ">فراموشی رمز</h3>
          </div>
          <BlueButton type="submit" buttonText="ورود" isDisabled={isDisabled} />
        </Form>
      </Formik>

      <p className="text-[17px] text-center mt-[14px]">
        برای ثبت نام
        <span className="text-bluePrimary text-[17px] text-center mx-1 cursor-pointer">
          اینجا
        </span>
        کلیک کنید
      </p>
      <h3 className="text-[20px] text-bluePrimary text-center cursor-pointer mt-[10px]">
        ورود کاربران
      </h3>
    </div>
  );
};

export { LoginForm };
