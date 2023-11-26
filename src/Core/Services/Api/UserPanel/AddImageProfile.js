import instance from "./../../Interceptor/Interceptor";

const AddImageProfile = async (value) => {
  try {
    const response = await instance.post("/SharePanel/AddProfileImage", value);
    return response;
  } catch (error) {
    return false;
  }
};

export { AddImageProfile };
