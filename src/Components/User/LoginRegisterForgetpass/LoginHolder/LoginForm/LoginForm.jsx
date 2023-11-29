import { Formik, Form } from "formik";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BlueInputField } from "../../../../Common/InputFields/BlueInputField";
import { BlueCheckBox } from "../../../../Common/InputFields/BlueCheckBox/index";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { LoginSchema } from "../../../../../Core/Validation/Schemas/auth/Login/LoginSchema";
import { LoginAPI } from "../../../../../Core/Services/Api/Auth/Login/LoginAPI";
import { setItem } from "../../../../../Core/Services/common/storage.services";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const LoginForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const Naviagate = useNavigate();

  const onSubmit = async (value) => {
    setIsDisabled(true);

    try {
      const user = await LoginAPI(value);
      // console.log(user);

      if (user.success === true) {
        setItem("token", user.token);

        SuccessToastify(user.message);

        setTimeout(() => {
          Naviagate("/User/Panel/Dashboard");
        }, 2000);
        setIsDisabled(false);
      } else if (user.success === false) {
        ErrorToastify(user.message);
        setIsDisabled(false);
      }
    } catch (error) {
      return false;
    }

    setIsDisabled(false);
  };

  return (
    <div>
      <ToastContainer rtl />
      <h1 className="text-[30px] text-center text-bluePrimary">ورود کاربران</h1>

      <Formik
        initialValues={{ phoneOrGmail: "", password: "", rememberMe: false }}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        <Form className="mt-6">
          {/* phoneOrGmail */}
          <BlueInputField
            type="text"
            name="phoneOrGmail"
            placeholder="ایمیل یا شماره موبایل"
            iconClass="fi fi-rr-at fi fi-rr-user"
          />

          {/* password */}
          <BlueInputField
            type="password"
            name="password"
            placeholder="رمز عبور"
            iconClass="fi fi-rr-lock"
          />

          <div className="w-[370px] h-[30px] m-auto  flex justify-between">
            {/* rememberMe */}
            <BlueCheckBox
              type="checkbox"
              name="rememberMe"
              labelName="مرا به خاطر بسپار"
            />
            <Link
              to="/User/Forgetpass"
              className="text-bluePrimary hover:text-blue-900 text-[16px] "
            >
              فراموشی رمز
            </Link>
          </div>
          <BlueButton type="submit" buttonText="ورود" isDisabled={isDisabled} />
        </Form>
      </Formik>

      <p className="text-[17px] text-center mt-[16px]">
        برای ثبت نام
        <Link
          to="/User/Register/Step1"
          className="text-bluePrimary hover:text-blue-900 text-[17px] text-center mx-1 cursor-pointer"
        >
          اینجا
        </Link>
        کلیک کنید
      </p>
    </div>
  );
};

export { LoginForm };
