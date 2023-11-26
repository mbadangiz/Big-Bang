import instance from "../../Interceptor/Interceptor";

const Changepassword = async (value) => {
  try {
    const response = await instance.post("/SharePanel/ChangePassword", value);

    return response;
  } catch (error) {
    return false;
  }
};

export { Changepassword };
