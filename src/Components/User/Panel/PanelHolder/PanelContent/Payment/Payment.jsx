import React from "react";
import { Step1Form } from "./Payment Step1/Step1Form";
import { Step2Form } from "./Payment Step1/Step2Form";
import { useState } from "react";
import PaymentFactore from "./Payment Step1/PaymentFactore";
import { ToastContainer } from "react-toastify";

const Payment = () => {
  const [steps, setSteps] = useState(1);
  const [information, setInformation] = useState({});
  const [courseDetail, setCourseDetail] = useState({});
  const [paymentId, setPaymentId] = useState();
  return (
    <>
      <ToastContainer />
      <h1 className="p-2">
        {steps === 1 ? (
          <Step1Form
            step={{ steps, setSteps }}
            data={{ information, setInformation }}
            detail={{ courseDetail, setCourseDetail }}
            payId={{ paymentId, setPaymentId }}
          />
        ) : steps === 2 ? (
          <PaymentFactore
            step={{ steps, setSteps }}
            data={{ information, setInformation }}
            detail={{ courseDetail, setCourseDetail }}
          />
        ) : (
          <Step2Form
            step={{ steps, setSteps }}
            payId={{ paymentId, setPaymentId }}
          />
        )}
      </h1>
    </>
  );
};

export { Payment };
