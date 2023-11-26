import { useState } from "react";
import CommentRepForm from "./CommentRepForm";

const Comment = ({ section, commentType, data }) => {
  const [commentRep, setCommentRep] = useState(false);

  return (
    <div
      className={`w-full h-max flex-row-all-center justify-start 
      border-2 border-solid border-grayDetail/20 py-2 rounded-lg relative px-4 ${
        commentType === "repley" ? "commentRepley" : ""
      }`}
    >
      <div
        className="w-[20%] overflow-hidden flex flex-col items-center 
        content-center gap-3 border-l-4 border-solid border-black/50 transition-all duration-200"
      >
        <img
          src="./../Img/avatar1.jpg"
          className="h-20 w-20 object-cover rounded-full"
          alt=""
        />
        <p className="text-sm textNoWrap">
          {section === "news" ? "aaa" : "bbb"}
        </p>
      </div>
      <div className="w-[calc(80%-4px)] text-sm text-justify px-4 space-y-4 ">
        <div className="w-full flex-row-all-center justify-between">
          <h1 className="f-semiBold mb-3  text-base">{data.title}</h1>
          <div className="flex-row-all-center  gap-3">
            <div className="flex-row-all-center cursor-pointer">
              <span className="text-lg">
                {section === "news" ? data.commentLike : "bbb"}
              </span>{" "}
              <i className="text-lg mr-1 fi fi-rr-social-network relative top-1"></i>
            </div>
            {section !== "news" && (
              <div className="flex-row-all-center cursor-pointer">
                <span className="text-lg"></span>
                <i className="text-lg mr-1 fi fi-br-hand relative top-1"></i>
              </div>
            )}
          </div>
        </div>
        <p>{data.describe}</p>
        <div className="w-full flex-row-all-center justify-end  select-none">
          <div
            className="w-max flex-row-all-center justify-end gap-2 hover:underline cursor-pointer"
            onClick={() => setCommentRep(!commentRep)}
          >
            <p className="f-semiBold text-base">پاسخ</p>
            <i className="fi fi-br-reply-all text-base"></i>
          </div>
        </div>
      </div>
      <CommentRepForm
        commentRep={commentRep}
        id={data.id}
        cId={section === "news" ? data.newsId : "bbb"}
      />
    </div>
  );
};

export { Comment };
