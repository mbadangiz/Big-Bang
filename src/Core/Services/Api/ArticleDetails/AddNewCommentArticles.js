import instance from "../../Interceptor/Interceptor";

const AddNewCommentArticles = async (data) => {
  try {
    const res = await instance.post(`/News/CreateNewsComment`, data);
    return res;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default AddNewCommentArticles;
