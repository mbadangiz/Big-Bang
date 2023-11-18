import instance from "./../../../Interceptor/Interceptor";

const ForgetpassAPI = async (value) => {
  try {
    const response = await instance.post("/Sign/ForgetPassword", value);
    return response;
  } catch (error) {
    return false;
  }
};

export { ForgetpassAPI };
