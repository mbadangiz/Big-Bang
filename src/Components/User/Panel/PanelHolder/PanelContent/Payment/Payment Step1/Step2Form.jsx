import { Field, Form, Formik } from "formik";
import React from "react";

const Step2Form = ({ step }) => {
  const { steps, setSteps } = step;
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <Formik class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <Form class="max-w-md mx-auto">
            <div class="flex items-center space-x-5">
              <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 class="leading-relaxed">پرداختی</h2>
              </div>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="flex flex-col">
                  <label class="leading-loose">عکس فیش واریزی</label>
                  <Field
                    type="file"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <button
                  onClick={() => {
                    setSteps(2);
                  }}
                  class="mr-1 bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                >
                  قبل
                </button>

                <button
                  onClick={() => {}}
                  class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                >
                  ثبت
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { Step2Form };
