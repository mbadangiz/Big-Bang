import CourseListProvider from "../../../Core/Providers/CourseListProvider";
import CoursesPage from "./CoursesPage/CoursesPage";

const CoursesHolder = () => {
  return (
    <CourseListProvider>
      <CoursesPage />
    </CourseListProvider>
  );
};

export { CoursesHolder };
