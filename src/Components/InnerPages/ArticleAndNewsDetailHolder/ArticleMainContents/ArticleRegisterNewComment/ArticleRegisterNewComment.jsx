import Rating from "react-rating";
import { Field, Form, Formik } from "formik";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import { useState } from "react";

const ArticleRegisterNewComment = () => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="artcileDeailtCardsSettings">
      <Formik initialValues={{ commet: comment }} onSubmit={() => {}}>
        <Form>
          <div
            className="w-full h-16 bg-graySilver rounded-sm 
            flex-row-all-center justify-between px-4 py-0"
          >
            <p>چه امتیازی برای این مقاله میدهید؟</p>
            <div className="flex-row-all-center">
              {rate ? <span> 5 / {rate} </span> : ""}
              <Rating
                className="mx-2"
                initialRating={rate}
                start={0}
                stop={5}
                step={1}
                emptySymbol={
                  <i className="ml-1 fi fi-rr-star  text-lg relative top-0.5  opacity-50"></i>
                }
                fullSymbol={
                  <i className="ml-1 fi fi-sr-star text-lg  text-yellow-400 relative top-0.5"></i>
                }
                onChange={(value) => {
                  setRate(value);
                }}
              />
            </div>
          </div>
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
    </div>
  );
};
export { ArticleRegisterNewComment };
