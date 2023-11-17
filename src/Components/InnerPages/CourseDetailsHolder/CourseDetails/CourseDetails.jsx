import { Accardion } from "../../../Common/Accardion/Accardion";
// import EmojiRating from "react-emoji-rating";
import { TopSection } from "./CourseDetailTopSection/TopSection";
import { PopularTag } from "./PopularTag/PopularTag";
import { CourseDesc } from "./CourseDescription/CourseDesc";
import { RatingSection } from "./RatingSection/RatingSection";
import { Comment } from "../../../Common/CommentTree/Comment";
import { CommentTree } from "../../../Common/CommentTree/CommentTree";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CourseDetails = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  console.log(courseId);
  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);

  return (
    <div className="width-handler mt-10">
      <TopSection />
      <div className="w-full mt-11 flex ">
        <div className="w-[830px]">
          <div
            className="h-[74px] shadow-md rounded-[12px] text-[19px]
          text-[#707070] flex items-center gap-16  bg-white"
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
          <div className="artcileDeailtCardsSettings shadow-sm">
            <CommentTree />
          </div>
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
