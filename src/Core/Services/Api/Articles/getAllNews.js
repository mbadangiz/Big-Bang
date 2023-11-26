import instance from "../../Interceptor/Interceptor";

const getAllNews = async (count, query, sort) => {
  const querySrting = `Query=${query}`;

  const rowCountQuery = `PageNumber=1&RowsOfPage=${count * 12}`;

  const sortqury =
    sort.length > 0 ? `&SortingCol=${sort[0]}&SortType=${sort[1]}` : "";

  try {
    const res = await instance.get(
      `/News?${rowCountQuery}&${querySrting}${sortqury}`
    );
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getAllNews };
