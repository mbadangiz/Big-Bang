import moment from "jalali-moment";

const MakeDatePickerDatePersian = (time) => {
  const date = moment(time, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");

  return date;
};

export { MakeDatePickerDatePersian };
