import instance from "../../Interceptor/Interceptor";

const getPopularCourse = async () => {
  try {
    const result = await instance.get(`/Home/GetCoursesTop?Count=3`);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getPopularCourse };
