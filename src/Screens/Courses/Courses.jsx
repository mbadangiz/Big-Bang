import { useEffect } from "react";
import { CoursesHolder } from "../../Components/InnerPages/CoursesHolder/CoursesHolder";

const Courses = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <CoursesHolder />;
};

export { Courses };
