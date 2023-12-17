import { useEffect } from "react";
import { CourseDetailsHolder } from "../../Components/InnerPages/CourseDetailsHolder/CourseDetailsHolder";

const CoursesDetails = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <CourseDetailsHolder />;
};

export { CoursesDetails };
