import instance from "./../../Interceptor/Interceptor";

const GetCurrentUserProfile = async () => {
  try {
    const response = await instance.get("/SharePanel/GetProfileInfo");

    return response;
  } catch (error) {
    return false;
  }
};

export { GetCurrentUserProfile };
