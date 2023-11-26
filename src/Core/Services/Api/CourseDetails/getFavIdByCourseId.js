//
import instance from "../../Interceptor/Interceptor";

const getFavIdByCourseId = () => {
  try {
    const res = instance.get(`/SharePanel/GetMyFavoriteCourses`);
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default getFavIdByCourseId;
