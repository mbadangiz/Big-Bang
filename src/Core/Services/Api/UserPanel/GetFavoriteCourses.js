import instance from "../../Interceptor/Interceptor";

const GetFavoriteCourses = async () => {
  try {
    const res = await instance.get("/SharePanel/GetMyFavoriteCourses");
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { GetFavoriteCourses };
