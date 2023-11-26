import { Element } from "react-scroll";
import ThereIsNoCommet from "../../../../Common/ThereIsNoCommet/ThereIsNoCommet";
import { useEffect, useState } from "react";
import CourseDetailThereIsNoComment from "../CourseDetailThereIsNoComment/CourseDetailThereIsNoComment";
import { CommentRegisterNewComment } from "../CommentRegisterNewComment/CommentRegisterNewComment";
import { Comments } from "../Comments/Comments";
import CommentProvider from "../../../../../Core/Providers/CommentProvider";
import { useMyCourseDetail } from "../../../../../Core/Providers/CourseDetailProvider";
import { GetCourseDetailComments } from "../../../../../Core/Services/Api/CourseDetails/GetCourseDetailComments";

const CourseDetailCommetsArea = ({ data }) => {
  const { courseId, commentCount } = data;
  const { commets, setCommets } = useMyCourseDetail();

  const [commetStatus, setCommetStatus] = useState();

  const getComments = async () => {
    const res = await GetCourseDetailComments(courseId);
    setCommets(res);
  };

  const changeStatus = () => {
    if (commentCount !== 0) {
      setCommetStatus(2);
    } else if (commentCount === 0) {
      setCommetStatus(0);
    }
  };

  useEffect(() => {
    changeStatus();
    getComments();
  }, []);

  return (
    <CommentProvider>
      <h3 className="f-bold text-xl my-7">دیدگاه ها</h3>
      {commetStatus === 0 ? (
        <CourseDetailThereIsNoComment clickHandler={() => setCommetStatus(1)} />
      ) : commetStatus === 1 ? (
        <>
          <CommentRegisterNewComment
            commets={commets}
            setCommets={setCommets}
          />
        </>
      ) : commetStatus === 2 ? (
        <>
          <CommentRegisterNewComment
            commets={commets}
            setCommets={setCommets}
          />
          <Comments myClick={() => setCommetStatus(2)} courseId={courseId} />
        </>
      ) : (
        ""
      )}
    </CommentProvider>
  );
};

export default CourseDetailCommetsArea;
