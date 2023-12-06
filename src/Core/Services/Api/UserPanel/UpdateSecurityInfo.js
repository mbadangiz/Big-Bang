import instance from "../../Interceptor/Interceptor";

const UpdateSecurityInfo = async (value) => {
  try {
    const response = instance.put("/SharePanel/EditSecurity", value);

    return response;
  } catch (error) {
    return false;
  }
};

export { UpdateSecurityInfo };
