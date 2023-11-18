import { Element } from "react-scroll";
import { CommentTree } from "../../../../Common/CommentTree/CommentTree";
import { useEffect } from "react";
import { GetCourseDetailComments } from "../../../../../Core/Services/Api/CourseDetails/GetCourseDetailComments";
import { useMyCourseDetail } from "../../../../../Core/Providers/CourseDetailProvider";

const Comments = ({ courseId }) => {
  const { commets, setCommets } = useMyCourseDetail();

  const getComments = async () => {
    const res = await GetCourseDetailComments(courseId);
    setCommets(res);
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <Element name="commets" className="pt-5 ">
      <div className="artcileDeailtCardsSettings shadow-sm">
        {commets
          ? commets.map((com) => {
              return <CommentTree key={com.id} data={com} />;
            })
          : "در حال حاضر داده ایی برای نمایش موجود نمی باشد."}
      </div>
    </Element>
  );
};

export { Comments };
