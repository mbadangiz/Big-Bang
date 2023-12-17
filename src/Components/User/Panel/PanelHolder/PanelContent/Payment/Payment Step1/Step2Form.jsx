// import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { AddImagePayment } from "../../../../../../../Core/Services/Api/UserPanel/AddImagePayment";
import { SuccessToastify } from "../../../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const Step2Form = ({ step, payId }) => {
  const { paymentId, setPaymentId } = payId;
  const { steps, setSteps } = step;
  const [Image, setImage] = useState();

  console.log(paymentId);

  const step2 = async () => {
    const res = await AddImagePayment({ Image: Image, PaymentId: paymentId });
    console.log(res);
    if (res.success) {
      SuccessToastify(res.message);
    } else {
      ErrorToastify(res.message);
    }
  };
  console.log(Image);
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="p-8 flex justify-center items-center min-h-screen bg-white">
        <div class="w-full md:w-1/2 relative grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-gray-100 rounded-lg">
          <div class="rounded-l-lg p-4 bg-gray-200 flex flex-col justify-center items-center border-0 border-r border-gray-300 ">
            <label
              class="cursor-pointer hover:opacity-80 inline-flex items-center shadow-md my-2 px-2 py-2 bg-[#007aff] text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
              for="restaurantImage"
            >
              انتخاب عکس
              <input
                id="restaurantImage"
                class="text-sm cursor-pointer w-36 hidden"
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              />
            </label>
            <button
              onClick={(e) => {
                e.preventDefault();
                step2();
              }}
              class="inline-flex items-center shadow-md my-2 px-2 py-2 bg-[#007aff] text-gray-50 border border-transparent
        rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none 
       focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
            >
              ثبت
            </button>
          </div>
          <div class="relative order-first md:order-last h-28 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
            <span class="text-gray-400 opacity-75">
              <svg
                class="w-14 h-14"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="0.7"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Step2Form };
{
  /* <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"> */
}
//   <div class="relative py-3 sm:max-w-xl sm:mx-auto">
//     <div
//       // onSubmit={step2}
//       // initialValues={{}}
//       class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
//     >
//       <form class="max-w-md mx-auto">
//         <div class="flex items-center space-x-5">
//           <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
//             <h2 class="leading-relaxed">پرداختی</h2>
//           </div>
//         </div>
//         <div class="divide-y divide-gray-200">
//           <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//             <div class="flex flex-col">
//               <label class="leading-loose">عکس فیش واریزی</label>
//               <input
//                 type="file"
//                 class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
//                 placeholder="Optional"
//                 onChange={(e) => {
//                   setImage(e.target.files[0]);
//                 }}
//               />
//             </div>
//           </div>
//           <div class="pt-4 flex items-center space-x-4">
//             <button
//               onClick={() => {
//                 setSteps(2);
//               }}
//               class="mr-1 bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
//             >
//               قبل
//             </button>

//             <button
//               // type="submit"
//               onClick={(e) => {
//                 e.preventDefault();
//                 step2();
//               }}
//               class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
//             >
//               ثبت
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
