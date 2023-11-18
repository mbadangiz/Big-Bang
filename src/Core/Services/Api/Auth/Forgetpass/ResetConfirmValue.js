import instance from "../../../Interceptor/Interceptor";

const ResetConfirmValue = async (configValue) => {
  try {
    const response = await instance.get(`/Sign/Reset/${configValue}`);

    return response;
  } catch (error) {
    return alert(error);
  }
};

export { ResetConfirmValue };
