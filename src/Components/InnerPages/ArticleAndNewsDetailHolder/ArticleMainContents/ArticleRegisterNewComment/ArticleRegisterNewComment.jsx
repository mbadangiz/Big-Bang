import Rating from "react-rating";
import { Field, Form, Formik } from "formik";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { useState } from "react";
import { Element } from "react-scroll";
import AddNewCommentArticles from "../../../../../Core/Services/Api/ArticleDetails/AddNewCommentArticles";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const ArticleRegisterNewComment = ({ newsId }) => {
  console.log(newsId);
  const [comment, setComment] = useState("");
  const submitHanlerAddComment = async (val) => {
    const data = {
      newsId: newsId,
      title: val.title,
      describe: comment,
    };
    const res = await AddNewCommentArticles(data);
    console.log(res);
    if (res.success) {
      SuccessToastify("عملیات با  موفقیت انجام شد.");
    } else {
      ErrorToastify(res.errors[0]);
    }
  };
  return (
    <Element
      name="newComment"
      className="artcileDeailtCardsSettings h-max py-2 pb-6"
    >
      <Formik
        initialValues={{ title: "", inptComment: comment }}
        onSubmit={submitHanlerAddComment}
      >
        <Form>
          <h1 className="f-bold text-lg mb-3">ثبت دیدگاه جدید</h1>
          <div className="my-5 relative ">
            <Field
              type="text"
              name="title"
              className="w-full bg-graySilver border-[2px]
                border-grayDetail/5 border-solid rounded-lg text-sm py-3 px-4
                focus:border-bluePrimary/50 transition-all duration-150 mb-4   "
              placeholder="عنوان"
              maxLength={300}
            />
            <Field
              as="textarea"
              name="inptComment"
              className="w-full h-24 bg-graySilver border-[2px]
                border-grayDetail/5 border-solid rounded-lg text-sm py-3 px-4
                focus:border-bluePrimary/50 transition-all duration-150 "
              placeholder=" نظر خود را در رابطه با این مقاله با ما به اشتراک بگذارید..."
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                console.log(e.target);
              }}
              maxLength={300}
            />
            <div className="absolute bottom-3 left-3 text-grayDetail text-xs">
              300 / {comment.length}
            </div>
          </div>
          <BlueButton
            buttonText={
              <>
                <i className="fi fi-sr-comment-check relative top-0.5"></i>
                <span className="mx-2">ثبت نظر جدید</span>
              </>
            }
            type={"submit"}
          />
        </Form>
      </Formik>
    </Element>
  );
};
export { ArticleRegisterNewComment };
