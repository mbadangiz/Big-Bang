import instance from "../../Interceptor/Interceptor";

const getAllNews = async (count) => {
  const rowCountQuery = `/News?PageNumber=1&RowsOfPage=${count * 1}`;
  try {
    const res = await instance.get(`${rowCountQuery}`);
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getAllNews };
