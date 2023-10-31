import * as yup from "yup";

const UserPanelChangePasswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, "حداقل رمز عبورتان باید 6 کاراکتر باشد")
    .required("لطفا رمز عبور فعلی را وارد کنید"),
  password: yup
    .string()
    .min(6, "حداقل رمز عبورتان باید 6 کاراکتر باشد")
    .required("لطفا رمز عبور جدید خود را وارد کنید"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "باید با رمز عبور بالا یکسان باشد")
    .required("لطفا رمز عبور جدید خود را مجدد وارد کنید"),
});

export { UserPanelChangePasswordSchema };
