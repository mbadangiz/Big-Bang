import instance from "../../Interceptor/Interceptor";

const GetCourseDetails = async (courseId) => {
  try {
    const result = await instance.get(
      `/Home/GetCourseDetails?CourseId=${courseId}`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};
export { GetCourseDetails };
