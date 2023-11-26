import instance from "../../Interceptor/Interceptor";

const SearchInCourses = async (searchQuery) => {
  try {
    const result = await instance.get(
      `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9&Query=${searchQuery}`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { SearchInCourses };
