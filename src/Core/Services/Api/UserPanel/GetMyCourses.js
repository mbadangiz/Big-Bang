import instance from "../../Interceptor/Interceptor";

const getMyCourses = async () => {
  try {
    const result = await instance.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getMyCourses };
