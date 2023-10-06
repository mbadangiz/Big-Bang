import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import { CourseCard } from "../CourseCard/CourseCard";
import ImageSample from "./../../../../Assets/Image/sampleImage.png";
const LandingPopularCoursesSection = () => {
  const list = [
    {
      id: 1,
      imgPath: ImageSample,
      courseTitle: "دوره ی آموزشی ری اکت",
      courseDesc:
        "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
      courseMaster: "یه بابایی",
      courseParticipants: 120,
      courseStatus: "اتمام ضبط",
      coursePrice: 2500000,
    },
    {
      id: 2,
      imgPath: ImageSample,
      courseTitle: "دوره ی آموزشی ری اکت",
      courseDesc:
        "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
      courseMaster: "یه بابایی",
      courseParticipants: 120,
      courseStatus: "اتمام ضبط",
      coursePrice: 2680000,
    },
    {
      id: 3,
      imgPath: ImageSample,
      courseTitle: "دوره ی آموزشی ری اکت",
      courseDesc:
        "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
      courseMaster: "یه بابایی",
      courseParticipants: 120,
      courseStatus: "اتمام ضبط",
      coursePrice: 2680000,
    },
  ];
  return (
    <div className="width-handler select-none">
      <LandingSectionsTitle
        mainText="محبوبترین دوره ها"
        subText="شما عزیزان می توانید در دوره های ما ثبت نام کنید"
      />
      <div className="w-full flex-row-all-center gap-10 mt-5">
        {list.map((course) => {
          return <CourseCard key={course.id} data={course} />;
        })}
      </div>
    </div>
  );
};

export { LandingPopularCoursesSection };
