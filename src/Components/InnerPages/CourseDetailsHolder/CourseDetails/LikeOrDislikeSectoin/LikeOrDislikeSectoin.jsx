import { useMyCourseDetail } from "../../../../../Core/Providers/CourseDetailProvider";
import { AddLikeForCourse } from "../../../../../Core/Services/Api/CourseDetails/AddLikeForCourse";
import { AddDissLikeForCourse } from "../../../../../Core/Services/Api/CourseDetails/AddDissLikeCourse";
import { GetCourseDetails } from "../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";

const LikeOrDislikeSectoin = () => {
  const { courseDetails, setCourseDetails } = useMyCourseDetail();
  const {
    courseId,
    likeCount,
    dissLikeCount,
    currentUserLike,
    currentUserDissLike,
  } = courseDetails;

  const likeCourse = async () => {
    const res = await AddLikeForCourse(courseId);
    // const getDetailData = await GetCourseDetails(courseId);
    // setCourseDetails(getDetailData);
  };
  const dissLikeCourse = async () => {
    const res = await AddDissLikeForCourse(courseId);
    // const getDetailData = await GetCourseDetails(courseId);
    // setCourseDetails(getDetailData);
  };

  return (
    <div className="w-full bg-white rounded-lg py-4 px-4 flex-row-all-center justify-between mb-5">
      <h2 className="f-bold ">آیا این دوره مورد پسند شما است؟</h2>

      <div className="flex-row-all-center  gap-3 mt-3" onClick={dissLikeCourse}>
        <div className="flex-row-all-center gap-1 cursor-pointer ">
          <span className="text-lg">{dissLikeCount}</span>
          {currentUserDissLike === "0" ? (
            <i className="text-2xl fi fi-rr-hand  relative top-1"></i>
          ) : (
            <i className="text-rose-500 text-2xl fi fi-rr-hand  relative top-1"></i>
          )}
        </div>

        <div
          className="flex-row-all-center gap-1 cursor-pointer"
          onClick={likeCourse}
        >
          <span className="text-lg">{likeCount}</span>
          {currentUserLike === "0" ? (
            <i className="text-2xl fi fi-rr-social-network relative top-1"></i>
          ) : (
            <i className="text-rose-500 text-2xl fi fi-rr-social-network relative top-1"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export { LikeOrDislikeSectoin };
