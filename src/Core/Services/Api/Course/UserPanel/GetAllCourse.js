import instance from "../../../Interceptor/Interceptor";

const getCourseListAll = async (data) => {
  try {
    const result = await instance.get(`/Home/GetCoursesWithPagination?`);
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getCourseListAll };
