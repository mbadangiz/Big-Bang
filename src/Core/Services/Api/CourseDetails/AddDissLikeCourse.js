import instance from "../../Interceptor/Interceptor";

const AddDissLikeForCourse = async (courseId) => {
  try {
    const res = await instance.post(
      `/Course/AddCourseDissLike?CourseId=${courseId}`
    );
    return res;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export { AddDissLikeForCourse };
