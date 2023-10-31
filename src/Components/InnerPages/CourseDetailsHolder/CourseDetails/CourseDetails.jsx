import { Accardion } from "../../../Common/Accardion/Accardion";
// import EmojiRating from "react-emoji-rating";
import { TopSection } from "./CourseDetailTopSection/TopSection";
import { PopularTag } from "./PopularTag/PopularTag";
import { CourseDesc } from "./CourseDescription/CourseDesc";
import { RatingSection } from "./RatingSection/RatingSection";

const CourseDetails = () => {
  return (
    <div className="width-handler mt-2">
      <TopSection />

      <div className="w-full mt-11 flex">
        <div className="w-[830px]">
          <div
            className="h-[74px] shadow-md rounded-[12px] text-[19px]
          text-[#707070] flex items-center gap-16"
          >
            <a href="#" className="mr-5 font-bold">
              توضیحات
            </a>
            <a href="#className" className="">
              جلسات
            </a>
            <a href="#" className="">
              پرسش و پاسخ
            </a>
          </div>
          <CourseDesc />
          <Accardion />
        </div>
        <div className="w-full mr-8">
          <RatingSection />
          <div className="shadow-md rounded-[12px] mb-4 overflow-hidden">
            <PopularTag />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseDetails };
