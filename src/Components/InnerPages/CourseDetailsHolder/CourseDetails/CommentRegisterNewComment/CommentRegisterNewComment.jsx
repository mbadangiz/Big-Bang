import { Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import { Element } from "react-scroll";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";

const CommentRegisterNewComment = () => {
  const [comment, setComment] = useState("");
  return (
    <Element
      name="newComment"
      className="artcileDeailtCardsSettings h-max py-2 pb-6"
    >
      <Formik
        initialValues={{ title: "", inptComment: comment }}
        onSubmit={(val) => {
          console.log(val);
        }}
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
              placeholder=" نظر خود را در رابطه با این دوره با ما به اشتراک بگذارید..."
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

export { CommentRegisterNewComment };
