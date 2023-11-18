import { ErrorToastify } from "../../../../Utils/Toastifies/ErrorToastify.Utils";
import { SuccessToastify } from "../../../../Utils/Toastifies/SuccessToastify.Utils";
import instance from "../../../Interceptor/Interceptor";

const LoginAPI = async (value) => {
  try {
    const response = await instance.post("/Sign/Login", value);
    return response;
  } catch (error) {
    return ErrorToastify("متاسفانه درخواست شما با مشکل مواجه شده است");
  }
};

export { LoginAPI };
