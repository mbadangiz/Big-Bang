import instance from "../../../Interceptor/Interceptor";

const RegisterVerifyMessage = async (value) => {
  try {
    const response = await instance.post("/Sign/VerifyMessage", value);

    return response;
  } catch (error) {
    return ErrorToastify("متاسفانه درخواست شما با مشکل مواجه شده است");
  }
};

export { RegisterVerifyMessage };
