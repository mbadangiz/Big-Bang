import * as yup from "yup";

const RegisterStep1Schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .min(11, "شماره موبایل شما باید دارای 11 عدد باشد")
    .max(11, "شماره موبایل شما باید دارای 11 عدد باشد")
    .matches(
      /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/,
      "لطفا شماره موبایل خود را درست وارد کنید"
    )
    .required("لطفا شماره موبایل خود را وارد کنید"),
});

export { RegisterStep1Schema };
