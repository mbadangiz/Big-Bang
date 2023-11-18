import instance from "../../../Interceptor/Interceptor";

const ForgetpassResetpassAPI = async (value) => {
  try {
    const result = await instance.post("/Sign/Reset", value);
    return result;
  } catch (error) {
    return false;
  }
};

export { ForgetpassResetpassAPI };
