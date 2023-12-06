import * as yup from "yup";

const UserPanelSecuritySettingSchema = yup.object().shape({
  recoveryEmail: yup
    .string()
    .email("لطفا ایمیل خود را درست وارد کنید")
    .required("لطفا ایمیل  خود را وارد کنید"),
});

export { UserPanelSecuritySettingSchema };
