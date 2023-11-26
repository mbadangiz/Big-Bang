import instance from "../../Interceptor/Interceptor";

const getCommentRepliesNews = async (id) => {
  try {
    const res = await instance.get(`/News/GetRepliesComments?Id=${id}`);
    return res;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default getCommentRepliesNews;
// /News/GetRepliesComments?Id=
