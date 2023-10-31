import SearchBar from "../../../Common/SearchBar/SearchBar";
import { CourseCard } from "../../CourseCard/CourseCard";
import ImageSample from "./../../../../Assets/Image/sampleImage.png";
import { CoursesAccardion } from "./CoursesAccardion/CoursesAccardion";
import { InputSearch } from "./InputSearch/InputSearch";
const CoursesPage = () => {
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
    {
      id: 4,
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
      id: 5,
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
    <div className="w-full width-handler">
      {/* <InputSearch /> */}
      <SearchBar />
      <div className=" flex justify-center gap-4 width-handler">
        <CoursesAccardion />
        <div>
          <div className="w-[980px] h-[1000px]">
            <div className="w-full f-semiBold text-[18px] flex gap-x-5 cursor-pointer text-grayDetail">
              <div className="text-gray-500">مرتب سازی :</div>
              <div className="hover:text-bluePrimary">گرانترین</div>
              <div className="hover:text-bluePrimary">ارزان ترین</div>
              <div className="hover:text-bluePrimary">محبوب تربن</div>
              <div className="hover:text-bluePrimary">پرفروش ترین</div>
            </div>
            <div className="w-full flex-row-all-center gap-5 mt-6">
              {list.map((course) => {
                return <CourseCard key={course.id} data={course} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
