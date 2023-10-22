import * as yup from "yup";

const UserForgetpassSchema = yup.object().shape({
  email: yup
    .string()
    .email("لطفا ایمیل خود را درست وارد کنید")
    .required("لطفا ایمیل خود را وارد کنید"),
});

export { UserForgetpassSchema };
