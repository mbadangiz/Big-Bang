import { ErrorToastify } from "../../../../Utils/Toastifies/ErrorToastify.Utils";
import { SuccessToastify } from "../../../../Utils/Toastifies/SuccessToastify.Utils";
import instance from "../../../Interceptor/Interceptor";

const RegisterSendVerifyMessage = async (value) => {
  try {
    await instance
      .post("/Sign/SendVerifyMessage", value)
      .then(() => SuccessToastify("شماره موبایل شما با موفقیت ثبت شد"));
  } catch (error) {
    return ErrorToastify("متاسفانه درخواست شما با مشکل مواجه شده است");
  }
};

export { RegisterSendVerifyMessage };
