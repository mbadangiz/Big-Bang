import { useEffect } from "react";
import SearchBar from "../../../Common/SearchBar/SearchBar";
import { CourseCard } from "../../CourseCard/CourseCard";
import ImageSample from "./../../../../Assets/Image/sampleImage.png";
import { CoursesAccardion } from "./CoursesAccardion/CoursesAccardion";
import { InputSearch } from "./InputSearch/InputSearch";
import { getCourseListAll } from "../../../../Core/Services/Api/GetCourseListAll";
import { useState } from "react";
import { SearchInCourses } from "../../../../Core/Services/Api/SearchInCourses";
const CoursesPage = () => {
  const [courseList, setCourseList] = useState();
  //   {
  //     id: 1,
  //     imgPath: ImageSample,
  //     courseTitle: "دوره ی آموزشی ری اکت",
  //     courseDesc:
  //       "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 120,
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2500000,
  //   },
  //   {
  //     id: 2,
  //     imgPath: ImageSample,
  //     courseTitle: "دوره ی آموزشی ری اکت",
  //     courseDesc:
  //       "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 120,
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2680000,
  //   },
  //   {
  //     id: 3,
  //     imgPath: ImageSample,
  //     courseTitle: "دوره ی آموزشی ری اکت",
  //     courseDesc:
  //       "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 120,
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2680000,
  //   },
  //   {
  //     id: 4,
  //     imgPath: ImageSample,
  //     courseTitle: "دوره ی آموزشی ری اکت",
  //     courseDesc:
  //       "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 120,
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2680000,
  //   },
  //   {
  //     id: 5,
  //     imgPath: ImageSample,
  //     courseTitle: "دوره ی آموزشی ری اکت",
  //     courseDesc:
  //       "این یک متن تست می باشد و ارزش دیگری نخواد داشت کلا الکی حساب میاد",
  //     courseMaster: "یه بابایی",
  //     courseParticipants: 120,
  //     courseStatus: "اتمام ضبط",
  //     coursePrice: 2680000,
  //   },
  // ];
  const getList = async () => {
    const res = await getCourseListAll();
    setCourseList(res);
  };

  useEffect(() => {
    getList();
  }, []);
  console.log(courseList);
  return (
    <div className="w-full width-handler">
      {/* <InputSearch /> */}
      <SearchBar
        placeholder={"عنوان دوره ی مورد نظر خورد را جست و جو نمایید..."}
        searchApiFunc={SearchInCourses}
        setData={setCourseList}
        getAllDataList={getCourseListAll}
      />
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
              {courseList
                ? courseList.courseFilterDtos.map((course) => {
                    return <CourseCard key={course.courseId} data={course} />;
                  })
                : "در حال حاضر دوره ایی برای نمایش موجود نمیباشد"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
