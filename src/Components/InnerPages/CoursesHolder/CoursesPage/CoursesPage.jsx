import { CourseCard } from "../../CourseCard/CourseCard";
import ImageSample from "./../../../../Assets/Image/sampleImage.png";
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
    <div className="w-full width-handler flex justify-center gap-4">
      <ul className="w-[300px] rounded-[15px] shadow-md bg-[#F6F6F6]">
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1 ">
          <input type="checkbox" id="d0" name="r" className="hidden" />
          <label htmlFor="d0" className="px-6">
            نوع دوره
          </label>
          <label htmlFor="d0">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[65%] m-auto mt-2">
            <div>
              <input type="checkbox" id="d1" className="" />
              <label htmlFor="d1" className="px-3">
                رایگان
              </label>
            </div>
            <div>
              <input type="checkbox" id="d2" className="" />
              <label htmlFor="d2" className="px-3">
                آنلاین
              </label>
            </div>
            <div>
              <input type="checkbox" id="d3" className="" />
              <label htmlFor="d3" className="px-3">
                ویژه
              </label>
            </div>
          </div>
        </li>
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1">
          <input type="checkbox" id="d4" name="r" className="hidden" />
          <label htmlFor="d4" className="px-6">
            قیمت
          </label>
          <label htmlFor="d4">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[100%] m-auto mt-2">
            <div className="w-full">
              <div className="slider relative">
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input type="range" />
                <input type="range" />
              </div>
              <div className="price-input">
                <div className="field">
                  <span className="px-2">از</span>
                  <input type="number" className="input-min" value="2500" />
                </div>
                <div className="field">
                  <span className="px-2">تا</span>
                  <input type="number" className="input-max" value="5000000" />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1">
          <input type="checkbox" id="d5" name="r" className="hidden" />
          <label htmlFor="d5" className="px-6">
            دسته بندی{" "}
          </label>
          <label htmlFor="d5">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[65%] m-auto mt-2"></div>
        </li>
        <li className="py-3 w-[93%] m-auto text-[#635B5B] text-[16px] font-bold mb-1 ">
          <input type="checkbox" id="d6" name="r" className="hidden" />
          <label htmlFor="d6" className="px-6">
            تگ های محبوب{" "}
          </label>
          <label htmlFor="d6">
            <i className="fi fi-rs-angle-small-down float-left p-2 text-xl"></i>
          </label>
          <div className="contentAcar h-0 text-[17px] font-semibold overflow-hidden w-[65%] m-auto mt-2"></div>
        </li>
      </ul>
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
  );
};

export default CoursesPage;
