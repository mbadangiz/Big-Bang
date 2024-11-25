import { Formik, Form } from "formik";
import { useState } from "react";
import axios from "axios";

import { SuccessToastify } from "../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

import { BlueInputField } from "../../../../../Common/InputFields/BlueInputField/index";
import { BlueButton } from "../../../../../Common/Buttons/BlueButton";
import { UserForgetpassChangepassSchema } from "../../../../../../Core/Validation/Schemas/Login&Register&Forgetpass/User/UserForgetpassChangepass";
import { ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ResetConfirmValue } from "../../../../../../Core/Services/Api/Auth/Forgetpass/ResetConfirmValue";
import { useDispatch, useSelector } from "react-redux";
import {
  onSetForgetpassResetValue,
  onSetForgetpassUserId,
} from "../../../../../../redux/auth/forgetpass";
import { ForgetpassResetpassSchema } from "../../../../../../Core/Validation/Schemas/auth/Forgetpass/ForgetpassResetpassSchema";
import { ForgetpassResetpassAPI } from "../../../../../../Core/Services/Api/Auth/Forgetpass/ForgetpassResetpassAPI";

const ForgetpassResetpassForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const Navigate = useNavigate();

  const forgetpass = useSelector((reducer) => reducer.forgetpass);

  const dispatch = useDispatch();

  console.log(forgetpass);

  const params = useParams();

  // console.log(params);

  const configValue = params.configValue;

  const getConfigValue = async (configValue) => {
    const result = await ResetConfirmValue(configValue);

    // console.log(result);

    dispatch(onSetForgetpassUserId(result.id));
    dispatch(onSetForgetpassResetValue(result.message));

    // console.log(forgetpass);
  };

  useEffect(() => {
    getConfigValue(configValue);
  }, []);

  const onSubmit = async (value) => {
    setIsDisabled(true);

    const newPassword = value.newPassword;

    const newValue = { newPassword, ...forgetpass };

    console.log(newValue);
    // try {
    //   const result = await ForgetpassResetpassAPI(newValue);

    //   if (result.success === true) {
    //     SuccessToastify(result.message);

    //     setTimeout(() => Navigate("/User/Login"), 2000);
    //   } else if (result.success === false) {
    //     return ErrorToastify(result.message);
    //   }
    // } catch (error) {}

    // // console.log(newValue);

    // setIsDisabled(false);
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
        initialValues={{ newPassword: "", confirmPassword: "" }}
        validationSchema={ForgetpassResetpassSchema}
        onSubmit={onSubmit}
      >
        <Form className="my-[35px]">
          {/* newPassword */}
          <BlueInputField
            type="password"
            name="newPassword"
            placeholder="رمز عبور جدید"
            iconClass="fi fi-rr-lock"
          />

          {/* confirmPassword */}
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

export { ForgetpassResetpassForm };
