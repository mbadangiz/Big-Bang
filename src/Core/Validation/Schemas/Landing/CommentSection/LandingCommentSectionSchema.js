import * as yup from "yup";

const LandingCommentSectionSchema = yup.object().shape({
  email: yup
    .string()
    .email("لطفا ایمیل خود را درست وارد کنید")
    .required("لطفا ایمیل خود را وارد کنید"),
  text: yup.string().required("لطفا متن مورد نظر خود را وارد کنید"),
});

export { LandingCommentSectionSchema };
