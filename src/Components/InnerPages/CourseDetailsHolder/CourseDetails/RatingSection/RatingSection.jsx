import React, { useState, Component } from "react";
import Rating from "react-rating";
import SetRateForCourse from "../../../../../Core/Services/Api/CourseDetails/SetRateForCourse";
import { useMyCourseDetail } from "../../../../../Core/Providers/CourseDetailProvider";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../../Core/Utils/Toastifies/ErrorToastify.Utils";

const RatingSection = () => {
  const { courseId } = useMyCourseDetail().courseDetails;
  const setCourseDetails = useMyCourseDetail().setCourseDetails;
  const [rate, setRate] = useState(0);

  const setRateHandler = async () => {
    const res = await SetRateForCourse(courseId, rate);
    if (res.success) {
      SuccessToastify("عملیات با موفقیت انجام شده است.");
    } else {
      ErrorToastify(res.message);
    }
  };
  return (
    <div className="w-full flex-row-all-center justify-between rounded-[12px] mb-4 text-center bg-white px-3 py-5">
      <p className="f-bold">چه امتیازی برای این دوره میدهید؟</p>
      <div>
        {rate ? <span> 5 / {rate} </span> : ""}
        <Rating
          className="mr-2"
          initialRating={rate}
          start={0}
          stop={5}
          step={1}
          emptySymbol={
            <i className="ml-1 fi fi-rr-star  text-lg relative top-0.5  opacity-50"></i>
          }
          fullSymbol={
            <i className="ml-1 fi fi-sr-star text-lg  text-yellow-400 relative top-0.5"></i>
          }
          onChange={(value) => {
            setRate(value);
            setRateHandler();
          }}
        />
      </div>
    </div>
  );
};

export { RatingSection };
