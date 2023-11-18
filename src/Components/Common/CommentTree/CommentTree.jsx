import { useEffect } from "react";
import { Comment } from "./Comment";
import getCommentReplies from "../../../Core/Services/Api/CourseDetails/getCommentReplies";
import { useState } from "react";

const CommentTree = ({ data }) => {
  const {
    id,
    courseId,
    title,
    describe,
    author,
    insertDate,
    accept,
    acceptReplysCount,
    disslikeCount,
    likeCount,
  } = data;

  const [commentReplies, setCommentReplies] = useState([]);

  const getReplies = async () => {
    const res = await getCommentReplies(courseId, id);
    setCommentReplies(res);
  };
  useEffect(() => {
    getReplies();
  }, []);

  return (
    <div className="w-full">
      <Comment commentType="mian" data={data} />
      <div
        className="w-full pr-16 space-y-4 py-4 relative   
        before:w-1 before:h-[calc(100%-80px)] before:bg-grayDetail/30 before:block
        before:absolute before:-top-0  before:right-7 "
      >
        {commentReplies.length > 0 &&
          commentReplies.map((items) => {
            return <Comment data={items} commentType="repley" />;
          })}
      </div>
    </div>
  );
};

export { CommentTree };
