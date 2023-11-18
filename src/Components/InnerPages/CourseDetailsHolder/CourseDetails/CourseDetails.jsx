import { Accardion } from "../../../Common/Accardion/Accardion";
import { TopSection } from "./CourseDetailTopSection/TopSection";
import { PopularTag } from "./PopularTag/PopularTag";
import { CourseDesc } from "./CourseDescription/CourseDesc";
import { RatingSection } from "./RatingSection/RatingSection";
import { CommentTree } from "../../../Common/CommentTree/CommentTree";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { GetCourseDetails } from "../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import { useState } from "react";
import { useMyCourseDetail } from "../../../../Core/Providers/CourseDetailProvider";
import { Element, Link as RSlisnk } from "react-scroll";

const CourseDetails = () => {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const { courseDetails, setCourseDetails } = useMyCourseDetail();
  const getCourseById = async () => {
    const res = await GetCourseDetails(courseId);
    setCourseDetails(res);
  };

  useEffect(() => {
    document.body.style.background = "#F5F7FA";
    getCourseById();
  }, []);
  return (
    <div className="width-handler mt-10">
      {courseDetails ? (
        <>
          <TopSection data={courseDetails} />
          <div className="w-full mt-11 flex">
            <div className="w-[830px]  ">
              <div
                className="h-[74px]  rounded-[12px] text-[18px]
              text-[#707070] flex items-center gap-8 shadow-sm   bg-white  px-4"
              >
                <RSlisnk
                  className="cursor-pointer"
                  to="courseDesc"
                  offset={-200}
                >
                  توضیحات
                </RSlisnk>
                <RSlisnk className="cursor-pointer" to="classes" offset={-170}>
                  جلسات
                </RSlisnk>
                <RSlisnk to="commets" className="cursor-pointer" offset={-200}>
                  دیدگاه ها
                </RSlisnk>
              </div>

              <Element name="courseDesc" offset={-170}>
                <CourseDesc decripe={courseDetails.describe} />
              </Element>

              <Element name="classes " className="pt-6 px-0">
                <h3 className="f-bold text-xl mb-10">جلسات دوره</h3>
                <Accardion />
              </Element>

              <Element name="commets" className="pt-5">
                <h3 className="f-bold text-xl mb-7">دیدگاه ها</h3>
                <div className="artcileDeailtCardsSettings shadow-sm">
                  <CommentTree />
                </div>
              </Element>
            </div>
            <div className="w-full mr-8">
              <RatingSection />
              <div className="shadow-md rounded-[12px] mb-4 overflow-hidden">
                <PopularTag />
              </div>
            </div>
          </div>
        </>
      ) : (
        "داده ایی برای نمایش وجود ندارد"
      )}
    </div>
  );
};

export { CourseDetails };
