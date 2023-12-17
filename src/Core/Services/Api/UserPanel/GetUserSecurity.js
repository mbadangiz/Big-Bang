import instance from "./../../Interceptor/Interceptor";

const GetUserSecurity = async () => {
  try {
    const response = await instance.get("/SharePanel/GetSecurityInfo");

    return response;
  } catch (error) {
    return false;
  }
};

export { GetUserSecurity };
