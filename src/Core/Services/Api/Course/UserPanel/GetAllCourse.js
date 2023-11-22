import instance from "../../../Interceptor/Interceptor";

const getCourseAll = async (count) => {
  try {
    const result = await instance.get(
      `/Home/GetCoursesWithPagination?PageNumber=${count}&RowsOfPage=5`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getCourseAll };
