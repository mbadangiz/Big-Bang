import instance from "../Interceptor/Interceptor";

const FilterCourse = async (data) => {
  const baseRelativeUrl =
    "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=9";
  const queries = `&SortType=DESC&CostDown=&CostUp=${data}`;
  //   try {
  //     const res = await instance.get(baseRelativeUrl + queries);
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //     return [];
  //   }
  console.log(queries);
};

export { FilterCourse };
