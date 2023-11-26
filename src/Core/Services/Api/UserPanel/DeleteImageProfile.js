import instance from "../../Interceptor/Interceptor";

const DeleteImageProfile = async (value) => {
  try {
    const response = await instance.delete(
      "/SharePanel/DeleteProfileImage",
      value
    );

    return response;
  } catch (error) {
    return false;
  }
};

export { DeleteImageProfile };
