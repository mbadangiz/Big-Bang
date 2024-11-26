import { useState } from "react";
import AddRepToComments from "../../../Core/Services/Api/CourseDetails/AddRepToComments";
import { Field, Form, Formik } from "formik";
import { BlueButton } from "../Buttons/BlueButton";

const CommentRepForm = ({ commentRep, id, cId }) => {
  const [repComment, setRepComment] = useState("");

  const commentReplyHandler = async (val) => {
    const objName = {
      CommentId: id,
      CourseId: cId,
      Title: val.repComment ? val.repComment : "",
      Describe: repComment,
    };
    const res = await AddRepToComments(objName);
    console.log(res);
  };
  return (
    <div
      className={`w-full transition-all duration-200 ${
        commentRep ? "h-max mt-3 py-2 px-4" : "h-0 overflow-hidden"
      }`}
    >
      <Formik
        initialValues={{ repTitle: "", repInptComment: repComment }}
        onSubmit={commentReplyHandler}
      >
        <Form>
          <div className="my-5 relative flex flex-col">
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
    </div>
  );
};

export default CommentRepForm;
