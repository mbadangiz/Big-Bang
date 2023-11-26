import instance from "../../Interceptor/Interceptor";

const getNewsComments = async (newsId) => {
  try {
    const res = await instance.get(`/News/GetNewsComments?NewsId=${newsId}`);
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getNewsComments };
