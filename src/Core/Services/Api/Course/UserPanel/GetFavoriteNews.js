import instance from "../../../Interceptor/Interceptor";

const GetFavoriteNews = async () => {
  try {
    const res = await instance.get("/SharePanel/GetMyFavoriteNews");
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { GetFavoriteNews };
