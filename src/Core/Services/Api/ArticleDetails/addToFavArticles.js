import instance from "../../Interceptor/Interceptor";

const addToFavArticles = async (NewsId) => {
  console.log(NewsId);
  try {
    const res = await instance.post(`/News/AddFavoriteNews?NewsId=${NewsId}`);
    return res;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export default addToFavArticles;
