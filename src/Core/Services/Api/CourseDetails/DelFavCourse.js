import instance from "../../Interceptor/Interceptor";

const DelFavCourse = (CourseFavoriteId) => {
  const data = new FormData();
  data.append("CourseFavoriteId", CourseFavoriteId);

  try {
    const res = instance.delete("/Course/DeleteCourseFavorite", { data: data });
    return res;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export default DelFavCourse;
//
