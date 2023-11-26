import instance from "../../../Interceptor/Interceptor";

const GetNewsDetails = async (newsId) => {
  try {
    const result = await instance.get(`/News/${newsId}`);
    return result;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};
export { GetNewsDetails };
