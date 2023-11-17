import { Formik, Form } from "formik";
import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { BlueInputField } from "../../../../Common/InputFields/BlueInputField";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";

import { UserRegisterSchema } from "../../../../../Core/Validation/Schemas/Login&Register&Forgetpass/User/UserRegisterSchema";
import { useState } from "react";
import axios from "axios";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
import { useNavigate } from "react-router";

const RegisterForms = () => {
  return <Outlet />;
};

export { RegisterForms };
