import instance from "../../Interceptor/Interceptor";

const SearchInNews = async (searchQuery) => {
  try {
    const result = await instance.get(
      `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=${searchQuery}`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { SearchInNews };
