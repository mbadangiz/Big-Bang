import { createContext, useContext, useState } from "react";

const CourseDetailsContext = createContext();

const CourseDetailsProvider = ({ children }) => {
  const [courseDetails, setCourseDetails] = useState();
  const [commets, setCommets] = useState();
  return (
    <CourseDetailsContext.Provider
      value={{ courseDetails, setCourseDetails, commets, setCommets }}
    >
      {children}
    </CourseDetailsContext.Provider>
  );
};

export default CourseDetailsProvider;

export const useMyCourseDetail = () => useContext(CourseDetailsContext);
