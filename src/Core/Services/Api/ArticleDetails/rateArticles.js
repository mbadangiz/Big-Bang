import instance from "../../Interceptor/Interceptor";

const rateArticles = async (NewsId, RateNumber) => {
  try {
    const res = await instance.post(
      `/News/NewsRate?NewsId=${NewsId}&RateNumber=${RateNumber}`
    );
    return res;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default rateArticles;
