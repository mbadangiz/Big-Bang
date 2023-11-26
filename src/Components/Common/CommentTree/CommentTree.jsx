import { useEffect } from "react";
import { Comment } from "./Comment";
import getCommentReplies from "../../../Core/Services/Api/CourseDetails/getCommentReplies";
import { useState } from "react";
import getCommentRepliesNews from "../../../Core/Services/Api/ArticleDetails/getCommentRepliesNews";

const CommentTree = ({ section, data }) => {
  const [commentReplies, setCommentReplies] = useState([]);

  const getReplies = async () => {
    if (section === "news") {
      const res = await getCommentRepliesNews(data.id);
      setCommentReplies(res);
    } else {
      const res = await getCommentReplies(data.courseId, data.id);
      setCommentReplies(res);
    }
  };
  useEffect(() => {
    getReplies();
  }, []);
  return (
    <div className="w-full">
      <Comment commentType="mian" section={section} data={data} />
      <div
        className="w-full pr-16 space-y-4 py-4 relative   
        before:w-1 before:h-[calc(100%-80px)] before:bg-grayDetail/30 before:block
        before:absolute before:-top-0  before:right-7 "
      >
        {commentReplies.length > 0 &&
          commentReplies.map((items) => {
            return (
              <Comment
                section={section}
                data={items}
                key={items}
                commentType="repley"
              />
            );
          })}
      </div>
    </div>
  );
};

export { CommentTree };
