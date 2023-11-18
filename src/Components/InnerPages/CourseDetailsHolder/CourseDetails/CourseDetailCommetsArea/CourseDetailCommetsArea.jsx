import { Element } from "react-scroll";
import ThereIsNoCommet from "../../../../Common/ThereIsNoCommet/ThereIsNoCommet";
import { useEffect, useState } from "react";
import CourseDetailThereIsNoComment from "../CourseDetailThereIsNoComment/CourseDetailThereIsNoComment";
import { CommentRegisterNewComment } from "../CommentRegisterNewComment/CommentRegisterNewComment";
import { Comments } from "../Comments/Comments";

const CourseDetailCommetsArea = ({ data }) => {
  const { courseId, commentCount } = data;

  const [commetStatus, setCommetStatus] = useState();

  const changeStatus = () => {
    if (commentCount !== 0) {
      setCommetStatus(2);
    } else if (commentCount === 0) {
      setCommetStatus(0);
    }
  };
  useEffect(() => {
    changeStatus();
  }, []);
  return (
    <>
      <h3 className="f-bold text-xl my-7">دیدگاه ها</h3>
      {commetStatus === 0 ? (
        <CourseDetailThereIsNoComment clickHandler={() => setCommetStatus(1)} />
      ) : commetStatus === 1 ? (
        <>
          <CommentRegisterNewComment />
        </>
      ) : commetStatus === 2 ? (
        <>
          <CommentRegisterNewComment />
          <Comments courseId={courseId} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CourseDetailCommetsArea;
