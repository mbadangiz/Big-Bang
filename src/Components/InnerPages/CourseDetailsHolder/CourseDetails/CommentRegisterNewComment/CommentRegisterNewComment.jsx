import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { Element } from "react-scroll";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";

const CommentRegisterNewComment = () => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <Element name="newComment" className="artcileDeailtCardsSettings">
      <Formik initialValues={{ commet: comment }} onSubmit={() => {}}>
        <Form>
          <div className="my-5 relative h-24">
            <Field
              as="textarea"
              name="comment"
              className="w-full h-full bg-graySilver border-[2px]
                border-grayDetail/5 border-solid rounded-lg text-sm py-3 px-4 
                focus:border-bluePrimary/50 transition-all duration-150 "
              placeholder=" نظر خود را در رابطه با این مقاله با ما به اشتراک بگذارید..."
              onChange={(e) => {
                setComment(e.target.value);
                console.log(comment);
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
            type={"button"}
          />
        </Form>
      </Formik>
    </Element>
  );
};

export { CommentRegisterNewComment };
