import * as yup from "yup";

const LoginSchema = yup.object().shape({
  phoneOrGmail: yup
    .string()
    .email("Please enter valid email")
    .required("email cannot be empty"),
  password: yup
    .string()
    .min(6, "حداقل رمز عبورتان باید 6 کاراکتر باشد")
    .required("لطفا رمز عبور خود را وارد کنید"),
});

export { LoginSchema };
