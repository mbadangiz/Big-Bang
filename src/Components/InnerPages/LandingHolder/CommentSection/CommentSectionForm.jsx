import { Formik, Form } from "formik";
import axios from "axios";

//React-Toastify Imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SilverInputField } from "../../../Common/InputFields/SilverInputField/index";
import { TextAreaField } from "../../../Common/InputFields/TextAreaField/index";
import { SilverButton } from "../../../Common/Buttons/SilverButton";
import { LandingCommentSectionSchema } from "../../../../Core/Validation/Schemas/Landing/CommentSection/LandingCommentSectionSchema";

//Toastiy Functions
import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

import Style from "./CommentSection.module.css";

const CommentSectionForm = () => {
  const onSubmit = async (value) => {
    try {
      await axios
        .post(
          "https://64ff2f97f8b9eeca9e29c64c.mockapi.io/LandingCommentSection",
          value
        )
        .then(() => SuccessToastify("پیام شما با موفقیت ثبت شده است"));
    } catch (error) {
      ErrorToastify("متاسفانه پیام شما ثبت نشده است");
    }
  };

  return (
    <>
      <ToastContainer rtl />
      <div
        className={`${Style.CommentSectionBackground} border-2 border-solid border-transparent w-full h-[702px]  bg-primary`}
      >
        <Formik
          initialValues={{ email: "", text: "" }}
          onSubmit={onSubmit}
          validationSchema={LandingCommentSectionSchema}
        >
          <Form>
            <div className="my-[155px] flex flex-col justify-center items-center">
              <SilverInputField
                name="email"
                type="email"
                placeholder="ایمیل"
                extraClasses="w-[300px]"
              />
              <TextAreaField
                name="text"
                placeholder="متن مورد نظر"
                extraClasses="w-[300px] md:w-[500px] h-[280px]"
                TextAreaClasses="w-full h-[216px] border-4 border-solid border-white text-white bg-gray-300  focus:bg-white focus:border-bluePrimary focus:text-black "
              />

              <SilverButton type="submit" buttonText="ثبت" />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export { CommentSectionForm };
