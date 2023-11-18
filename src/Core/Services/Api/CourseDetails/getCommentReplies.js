import instance from "../../Interceptor/Interceptor";

const getCommentReplies = (courseId, commentId) => {
  try {
    const res = instance.get(
      `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
    );
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getCommentReplies;
