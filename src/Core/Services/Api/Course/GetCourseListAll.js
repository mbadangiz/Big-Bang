import { useMyCourses } from "../../../Providers/CourseListProvider";
import instance from "../../Interceptor/Interceptor";

const getCourseListAll = async (data) => {
  const { CourseTypeValue, minMax, techList, rowpageCount } = data;

  const count = rowpageCount * 9;
  const rowCount = `PageNumber=1&RowsOfPage=${count}`;

  const costQuery = `CostDown=${minMax[0]}&CostUp=${minMax[1]}`;
  const courseTypeQuery = `CourseTypeId=${CourseTypeValue}`;

  const techCount = techList.length < 2 ? techList.length : techList.length - 1;
  const techString = techList.toString();

  const techlistQuery =
    techCount > 0 ? `TechCount=${techCount}&ListTech=${techString}` : "";

  try {
    const result = await instance.get(
      `/Home/GetCoursesWithPagination?${rowCount}&${courseTypeQuery}&${costQuery}&${techlistQuery}`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getCourseListAll };
