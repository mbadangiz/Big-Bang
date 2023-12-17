import instance from "../../../Interceptor/Interceptor";

const LoginVerifyCodeAPI = async (value, paramValue) => {
  try {
    const response = instance.post(
      `/Sign/LoginTwoStep?VrifyCode=${paramValue}`,
      value
    );
    return response;
  } catch (error) {
    return false;
  }
};

export { LoginVerifyCodeAPI };
