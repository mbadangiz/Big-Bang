import instance from "../../Interceptor/Interceptor";

const SelectImageProfile = async (value) => {
  try {
    const response = await instance.post(
      "/SharePanel/SelectProfileImage",
      value
    );

    return response;
  } catch (error) {
    return false;
  }
};

export { SelectImageProfile };
