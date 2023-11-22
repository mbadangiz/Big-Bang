export const showMeesage = (res, resId) => {
  if (res.success) {
    console.log(resId);
    SuccessToastify("عملیات با موفقیت انجام شده است.");
    setCourseDetails({ ...courseDetails, isCourseReseve: resId });
  } else {
    console.log(resId);
    ErrorToastify(res.errors[0]);
  }
};
