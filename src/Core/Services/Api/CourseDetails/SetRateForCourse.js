import instance from "../../Interceptor/Interceptor";

const SetRateForCourse = async (CourseId, RateNumber) => {
  try {
    const res = await instance.post(
      `/Course/SetCourseRating?CourseId=${CourseId}&RateNumber=${RateNumber}`
    );
    return res;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export default SetRateForCourse;
