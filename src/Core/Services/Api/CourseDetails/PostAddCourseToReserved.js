import instance from "../../Interceptor/Interceptor";

const PostAddCourseToReserved = async (courseId) => {
  try {
    const res = await instance.post("/CourseReserve/ReserveAdd", {
      courseId: courseId,
    });
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { PostAddCourseToReserved };
