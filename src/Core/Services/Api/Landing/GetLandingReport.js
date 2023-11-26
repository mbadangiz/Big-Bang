import instance from "../../Interceptor/Interceptor";

const getLandingReport = async () => {
  try {
    const result = await instance.get(`/Home/LandingReport`);
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getLandingReport };
