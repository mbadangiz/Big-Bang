import instance from "../../Interceptor/Interceptor";

const getCourseAllPayment = async (count) => {
  try {
    const result = await instance.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=5${count}`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getCourseAllPayment };
