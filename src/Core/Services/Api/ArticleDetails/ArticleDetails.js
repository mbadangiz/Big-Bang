import instance from "../../Interceptor/Interceptor";

const ArticleDetails = async (articleId) => {
  try {
    const res = await instance.get(`/News/${articleId}`);
    return res;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default ArticleDetails;
