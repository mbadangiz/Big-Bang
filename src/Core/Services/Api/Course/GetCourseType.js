import instance from "../../Interceptor/Interceptor";

const GetCourseType = async () => {
  const res = await instance.get("/CourseType/GetCourseTypes");
  return res;
};

export default GetCourseType;
