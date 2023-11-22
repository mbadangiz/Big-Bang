import instance from "../../Interceptor/Interceptor";

const AddCourseToFavList = async (courseId) => {
  try {
    const res = await instance.post("/Course/AddCourseFavorite", {
      courseId: courseId,
    });
    return res;
  } catch (err) {
    console.log(err.resposne);
    return 0;
  }
};

export default AddCourseToFavList;
