import { createContext, useContext, useState } from "react";

const CourseDetailsContext = createContext();

const CourseDetailsProvider = ({ children }) => {
  const [courseDetails, setCourseDetails] = useState();
  return (
    <CourseDetailsContext.Provider value={{ courseDetails, setCourseDetails }}>
      {children}
    </CourseDetailsContext.Provider>
  );
};

export default CourseDetailsProvider;

export const useMyCourseDetail = () => useContext(CourseDetailsContext);
