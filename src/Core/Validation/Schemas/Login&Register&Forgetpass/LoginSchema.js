import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("لطفا ایمیل خود را درست وارد کنید")
    .required("لطفا ایمیل  خود را وارد کنید"),
  password: yup
    .string()
    .min(6, "حداقل رمز عبورتان باید 6 کاراکتر باشد")
    .required("لطفا رمز عبور خود را وارد کنید"),
});

export { LoginSchema };
