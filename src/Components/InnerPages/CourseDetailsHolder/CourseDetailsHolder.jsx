import CourseDetailsProvider from "../../../Core/Providers/CourseDetailProvider";
import { CourseDetails } from "./CourseDetails/CourseDetails";

const CourseDetailsHolder = () => {
  return (
    <CourseDetailsProvider>
      <CourseDetails />
    </CourseDetailsProvider>
  );
};

export { CourseDetailsHolder };
