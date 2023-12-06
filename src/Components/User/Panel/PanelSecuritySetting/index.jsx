import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BlueInputField } from "../../../Common/InputFields/BlueInputField/index";
import { RadioButtonField } from "../../../Common/InputFields/RadioButtonField";
import { BlueToggleInputField } from "../../../Common/InputFields/BlueToggleInputField";
import { useEffect, useState } from "react";
import { UserPanelSecuritySettingSchema } from "../../../../Core/Validation/Schemas/Panel/User/UserPanelSecuritySettingSchema";
import { GetUserSecurity } from "../../../../Core/Services/Api/UserPanel/GetUserSecurity";
import { onSetUserSecurity } from "./../../../../redux/userSecurity";
import { BlueButton } from "../../../Common/Buttons/BlueButton";
import { onSetFormData } from "../../../../Core/Utils/onSetFormData/onSetFormData";
import { UpdateSecurityInfo } from "../../../../Core/Services/Api/UserPanel/UpdateSecurityInfo";

import { SuccessToastify } from "../../../../Core/Utils/Toastifies/SuccessToastify.Utils";

const PanelSecuritySetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);

  const GetUserPanelSecurityInfo = async () => {
    try {
      const result = await GetUserSecurity();

      dispatch(onSetUserSecurity(result));
    } catch (error) {
      return false;
    }
  };

  const baseUrl = "http://localhost:5173/";

  const SetUserPanelSecurityInfoUpdate = async (value) => {
    console.log(value);

    try {
      setIsDisabled(true);

      const result = await UpdateSecurityInfo(value);
      if (result.success === true) {
        setIsDisabled(false);
        SuccessToastify(result.message);
        setTimeout(() => {
          navigate("/User/Panel/Dashboard");
        }, 2000);
      } else if (result.success === false) {
        setIsDisabled(false);
        SuccessToastify(result.message);
      }
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = (value) => {
    const newValue = {
      ...value,
      baseUrl: baseUrl,
      twoStepAuth: isToggle,
    };

    SetUserPanelSecurityInfoUpdate(newValue);
  };

  useEffect(() => {
    GetUserPanelSecurityInfo();
  }, []);

  const userSecurityInfo = useSelector(
    (reducer) => reducer.userSecurity.userSecurityInformations
  );

  const [isToggle, setIsToggle] = useState(userSecurityInfo.twoStepAuth);
  return (
    <div className="w-full h-[600px] rounded-lg">
      <div className="w-full h-full">
        <Formik
          initialValues={{
            twoStepAuth: userSecurityInfo.twoStepAuth,
            recoveryEmail: userSecurityInfo.recoveryEmail,
          }}
          validationSchema={UserPanelSecuritySettingSchema}
          onSubmit={(value) => handleSubmit(value)}
        >
          <Form>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <h2 className="text-[20px] text-bluePrimary text-center">
                  در اینجا می توانید تنظیمات امنیت حسابتان را کنترل کنید
                </h2>
              </div>

              <div className="col-span-2"></div>
              <div className="col-span-4 h-full flex">
                <h2 className="text-[20px] text-bluePrimary leading-10 mx-2 ">
                  حالت ورود دو مرحله ای :
                </h2>
                <BlueToggleInputField
                  isToggle={isToggle}
                  setIsToggle={setIsToggle}
                  toggleClass="my-2"
                />
              </div>

              <div className="col-span-4">
                <BlueInputField
                  name="recoveryEmail"
                  type="string"
                  placeholder="ایمیل بازیابی"
                  iconClass="fi fi-rr-at"
                />
              </div>
              <div></div>

              <div className="col-span-12 h-[60px]">
                <BlueButton
                  type="submit"
                  buttonText="ثبت"
                  isDisabled={isDisabled}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { PanelSecuritySetting };
