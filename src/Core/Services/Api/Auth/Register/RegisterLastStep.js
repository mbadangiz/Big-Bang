import { ErrorToastify } from "../../../../Utils/Toastifies/ErrorToastify.Utils";
import { SuccessToastify } from "../../../../Utils/Toastifies/SuccessToastify.Utils";
import instance from "../../../Interceptor/Interceptor";

const RegisterLastStep = async (value) => {
  try {
    await instance
      .post("/Sign/Register", value)
      .then(() => SuccessToastify("ثبت نام شما با موفقیت انجام شد"));
  } catch (error) {
    return ErrorToastify("متاسفانه درخواست شما با مشکل مواجه شده است");
  }
};

export { RegisterLastStep };
