import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { getCourseAllPayment } from "../../../../../../../Core/Services/Api/UserPanel/GetAllCource-Payment";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { PaymentStep1 } from "../../../../../../../Core/Services/Api/UserPanel/PaymentStep1";
import { getMyCourses } from "../../../../../../../Core/Services/Api/UserPanel/GetMyCourses";
import { GetCourseDetails } from "../../../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import { SuccessToastify } from "../../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";
export const Step1Form = ({ step, data, detail, payId }) => {
  const [cost, setCost] = useState();
  const [row, setRow] = useState(200);
  const [selected, setSelected] = useState();
  const { information, setInformation } = data;
  const { courseDetail, setCourseDetail } = detail;
  const { paymentId, setPaymentId } = payId;

  // all course
  const [myCourse, setMyCourse] = useState();
  console.log(information);

  const getMyCourseInPanel = async () => {
    const myCourses = await getMyCourses();
    if (myCourse?.listOfMyCourses.length === 1) {
      courseById(myCourse.listOfMyCourses[0].courseId);
    }
    setMyCourse(myCourses);
  };

  const courseById = async (cid) => {
    const res = await GetCourseDetails(cid);
    // console.log(res);
    setInformation({ ...information, Paid: res.cost, courseId: cid });
    setCourseDetail(res);
  };
  // console.log(information);
  // post step 1
  const step1 = async () => {
    const res = await PaymentStep1(information);
    console.log(res);

    if (res.success) {
      setPaymentId(res.id);

      setSteps(2);
      SuccessToastify(res.message);
    } else {
      ErrorToastify(res.message);
    }
  };
  useEffect(() => {
    getMyCourseInPanel();
  }, []);

  console.log(paymentId, "payIdd");
  // console.log(myCourse);
  const { steps, setSteps } = step;
  return (
    <>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <Formik
            onSubmit={step1}
            initialValues={{}}
            class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
          >
            <Form class="max-w-md mx-auto">
              <div class="flex items-center space-x-5">
                <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 class="leading-relaxed">پرداختی</h2>
                </div>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="flex flex-col">
                    <label class="leading-loose">انتخاب دوره</label>

                    <select
                      style={{
                        borderRadius: "7px",
                        height: "40px",
                        width: "450px",
                      }}
                      data-te-select-init
                      onChange={(e) => {
                        courseById(e.target.value);
                      }}
                    >
                      {myCourse &&
                        myCourse.listOfMyCourses.map((course, index) => {
                          return (
                            <option value={course.courseId}>
                              {course.courseTitle}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div class="flex flex-col">
                    <label class="leading-loose">مبلغ پرداخت شده</label>
                    <Field
                      type="number"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                      value={information.Paid ? information.Paid : 0}
                    />
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="flex flex-col">
                      <label class="leading-loose">تاریخ پرداخت</label>
                      <div class="relative focus-within:text-gray-600 text-gray-400">
                        <DatePicker
                          style={{
                            display: "block",
                            width: "450px",
                            height: "40px",
                            border: "1px solid transparent",
                          }}
                          // value={new Date()}
                          calendar={persian}
                          locale={persian_fa}
                          onChange={(e) => {
                            setInformation({
                              ...information,
                              PeymentDate: e.toDate().toISOString(),
                            });
                          }}
                        />
                        <div class="absolute left-3 top-2">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">سریال پرداخت </label>
                    <Field
                      type="number"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                      value={
                        information.PaymentInvoiceNumber
                          ? information.PaymentInvoiceNumber
                          : 0
                      }
                      onChange={(e) => {
                        setInformation({
                          ...information,
                          PaymentInvoiceNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div class="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    onClick={() => {
                      step1();
                    }}
                    class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    مرحله بعدی
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

{
  /* <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <Formik
            onSubmit={step1}
            initialValues={{}}
            class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
          >
            <Form class="max-w-md mx-auto">
              <div class="flex items-center space-x-5">
                <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 class="leading-relaxed">پرداختی</h2>
                </div>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="flex flex-col">
                    <label class="leading-loose">انتخاب دوره</label>

                    <select
                      data-te-select-init
                      onChange={(e) => {
                        courseById(e.target.value);
                      }}
                    >
                      {myCourse &&
                        myCourse.listOfMyCourses.map((course, index) => {
                          return (
                            <option value={course.courseId}>
                              {course.courseTitle}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div class="flex flex-col">
                    <label class="leading-loose">مبلغ پرداخت شده</label>
                    <Field
                      type="number"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                      value={information.Paid ? information.Paid : 0}
                    />
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="flex flex-col">
                      <label class="leading-loose">تاریخ پرداخت</label>
                      <div class="relative focus-within:text-gray-600 text-gray-400">
                        <DatePicker
                          style={{
                            display: "block",
                            width: "100%",
                            marginRight: "20px",
                          }}
                          // value={new Date()}
                          calendar={persian}
                          locale={persian_fa}
                          onChange={(e) => {
                            setInformation({
                              ...information,
                              PeymentDate: e.toDate().toISOString(),
                            });
                          }}
                        />
                        <div class="absolute left-3 top-2">
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">سریال پرداخت </label>
                    <Field
                      type="number"
                      class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Optional"
                      value={
                        information.PaymentInvoiceNumber
                          ? information.PaymentInvoiceNumber
                          : 0
                      }
                      onChange={(e) => {
                        setInformation({
                          ...information,
                          PaymentInvoiceNumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div class="pt-4 flex items-center space-x-4">
                  <button
                    type="submit"
                    // onClick={() => {
                    //   step1();
                    // }}
                    class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  >
                    مرحله بعدی
                  </button>
                </div>
              </div>
            </Form>
          </Formik>
        </div> */
}
