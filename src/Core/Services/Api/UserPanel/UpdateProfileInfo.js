import instance from "../../Interceptor/Interceptor";

const UpdateProfileInfo = async (value) => {
  try {
    const response = await instance.put("/SharePanel/UpdateProfileInfo", value);

    return response;
  } catch (error) {
    return false;
  }
};

export { UpdateProfileInfo };
