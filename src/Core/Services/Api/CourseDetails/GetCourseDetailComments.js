import instance from "../../Interceptor/Interceptor";
const GetCourseDetailComments = async (courseId) => {
  try {
    const result = await instance.get(`/Course/GetCourseCommnets/${courseId}`);
    return result;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export { GetCourseDetailComments };
