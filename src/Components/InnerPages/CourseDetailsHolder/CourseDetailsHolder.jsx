import CourseDetailsProvider from "../../../Core/Providers/CourseDetailProvider";
import CourseListProvider from "../../../Core/Providers/CourseListProvider";
import { CourseDetails } from "./CourseDetails/CourseDetails";

const CourseDetailsHolder = () => {
  return (
    <CourseListProvider>
      <CourseDetailsProvider>
        <CourseDetails />
      </CourseDetailsProvider>
    </CourseListProvider>
  );
};

export { CourseDetailsHolder };
