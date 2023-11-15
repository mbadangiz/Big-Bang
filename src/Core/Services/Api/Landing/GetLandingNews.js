import instance from "../../Interceptor/Interceptor";

const getLandingNews = async () => {
  try {
    const result = await instance.get(
      `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getLandingNews };
