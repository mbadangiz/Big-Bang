import { createContext, useContext, useState } from "react";

const CourseDataContext = createContext();

const CourseListProvider = ({ children }) => {
  const [courseList, setCourseList] = useState();
  const [minMax, setMinMax] = useState([0, 10000000]);
  const [CourseTypeValue, setCourseTypeValue] = useState("");
  const [techList, setTechList] = useState([]);
  const [rowpageCount, setRowPageCount] = useState(1);

  return (
    <CourseDataContext.Provider
      value={{
        courseList,
        setCourseList,
        minMax,
        setMinMax,
        CourseTypeValue,
        setCourseTypeValue,
        techList,
        setTechList,
        rowpageCount,
        setRowPageCount,
      }}
    >
      {children}
    </CourseDataContext.Provider>
  );
};

export default CourseListProvider;

export const useMyCourses = () => useContext(CourseDataContext);
