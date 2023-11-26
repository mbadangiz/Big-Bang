import instance from "../../Interceptor/Interceptor";

const AddLikeForCourse = async (courseId) => {
  try {
    const res = await instance.post(
      `/Course/AddCourseLike?CourseId=${courseId}`
    );
    return res;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export { AddLikeForCourse };
