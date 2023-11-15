import instance from "../../Interceptor/Interceptor";

const getTeachersList = async () => {
  try {
    const result = await instance.get(`Home/GetTeachers`);
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};
export { getTeachersList };
