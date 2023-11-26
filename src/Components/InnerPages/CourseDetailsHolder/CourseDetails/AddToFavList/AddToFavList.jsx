import { useState, useEffect } from "react";
import { useMyCourseDetail } from "../../../../../Core/Providers/CourseDetailProvider";
import AddCourseToFavList from "../../../../../Core/Services/Api/CourseDetails/AddCourseToFavList";
import getFavIdByCourseId from "../../../../../Core/Services/Api/CourseDetails/getFavIdByCourseId";
import { GetCourseDetails } from "../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import DelFavCourse from "../../../../../Core/Services/Api/CourseDetails/DelFavCourse";

const AddToFavList = () => {
  const { courseId, isUserFavorite } = useMyCourseDetail().courseDetails;
  const setCourseDetails = useMyCourseDetail().setCourseDetails;

  const [favId, setFavid] = useState();

  const getter = async () => {
    const res = await getFavIdByCourseId();
    const findMyIdArr = res.favoriteCourseDto.filter(
      (items) => items.courseId === courseId
    );
    const id = findMyIdArr.length > 0 ? findMyIdArr[0].favoriteId : null;

    setFavid(id);
  };

  useEffect(() => {
    getter();
  }, []);

  const favHandler = async () => {
    if (favId) {
      const res = await DelFavCourse(favId);
      console.log("delete is loading ", res);
    } else {
      const res = await AddCourseToFavList(courseId);
      console.log("add is loading ", res);
    }
    getter();
  };
  console.log(favId);
  return (
    <div className="w-full bg-white rounded-lg py-4 px-4 flex-row-all-center mb-5 cursor-pointer">
      <h2 className="f-bold text-center w-max opacity-90" onClick={favHandler}>
        <i className="fi fi-sr-calendar-star relative text-xl top-1 ml-2"></i>
        {favId ? "حذف از لیست علاقه مندی ها" : "افزودن به لیست علاقه مندی ها"}
      </h2>
    </div>
  );
};

export default AddToFavList;
