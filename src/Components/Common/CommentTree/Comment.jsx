import { useState } from "react";
import CommentRepForm from "./CommentRepForm";

const Comment = ({ commentType, data }) => {
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
        <p className="text-sm textNoWrap">{author}</p>
      </div>
      <div className="w-[calc(80%-4px)] text-sm text-justify px-4 space-y-4 ">
        <div className="w-full flex-row-all-center justify-between">
          <h1 className="f-semiBold mb-3  text-base">{title}</h1>
          <div className="flex-row-all-center  gap-3">
            <div className="flex-row-all-center cursor-pointer">
              <span className="text-lg">{likeCount}</span>
              <i className="text-lg mr-1 fi fi-br-hand relative top-1"></i>
            </div>

            <div className="flex-row-all-center cursor-pointer">
              <span className="text-lg">{disslikeCount}</span>
              <i className="text-lg mr-1 fi fi-rr-social-network relative top-1"></i>
            </div>
          </div>
        </div>
        <p>{describe}</p>
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
      <CommentRepForm commentRep={commentRep} id={id} cId={courseId} />
      {/* <div
        className={`w-full transition-all duration-200 ${
          commentRep ? "h-max mt-3 py-2 px-4" : "h-0 overflow-hidden"
        }`}
      >
        <Formik
          initialValues={{ repTitle: "", repInptComment: repComment }}
          onSubmit={commentReplyHandler}
        >
          <Form>
            <div className="my-5 relative ">
              <Field
                type="text"
                name="repTitle"
                className="w-full bg-graySilver border-[2px]
                border-grayDetail/5 border-solid rounded-lg text-sm py-3 px-4 
                focus:border-bluePrimary/50 transition-all duration-150 mb-4   "
                placeholder="عنوان"
                maxLength={300}
              />
              <Field
                as="textarea"
                name="repInptComment"
                className="w-full h-24 bg-graySilver border-[2px]
                border-grayDetail/5 border-solid rounded-lg text-sm py-3 px-4 
                focus:border-bluePrimary/50 transition-all duration-150 "
                placeholder=" نظر خود را در رابطه با این دوره با ما به اشتراک بگذارید..."
                value={repComment}
                onChange={(e) => {
                  setRepComment(e.target.value);
                }}
                maxLength={300}
              />
              <div className="absolute bottom-3 left-3 text-grayDetail text-xs">
                300 / {repComment.length}
              </div>
            </div>
            <BlueButton
              buttonText={
                <>
                  <i className="fi fi-sr-comment-check relative top-0.5"></i>
                  <span className="mx-2">ثبت پاسخ</span>
                </>
              }
              type={"submit"}
            />
          </Form>
        </Formik>
      </div> */}
    </div>
  );
};

export { Comment };
