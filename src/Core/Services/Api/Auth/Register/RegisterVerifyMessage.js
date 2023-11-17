import { SuccessToastify } from "../../../../Utils/Toastifies/SuccessToastify.Utils";
import instance from "../../../Interceptor/Interceptor";

const RegisterVerifyMessage = async (value) => {
  try {
    await instance
      .post("/Sign/VerifyMessage", value)
      .then(() => SuccessToastify("کد تایید شما با موفقیت ثبت شد"));
  } catch (error) {
    return ErrorToastify("متاسفانه درخواست شما با مشکل مواجه شده است");
  }
};

export { RegisterVerifyMessage };
