import instance from "../../Interceptor/Interceptor";

const likeArticles = async (NewsId, body) => {
  try {
    const res = await instance.post(`/News/NewsLike/${NewsId}`, body);
    return res;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export { likeArticles };
