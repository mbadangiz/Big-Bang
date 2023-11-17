import instance from "../../Interceptor/Interceptor";

const GetTeacherById = async (teacherId) => {
  try {
    const result = await instance.get(
      `/Home/GetTeacherDetails?TeacherId=${teacherId}`
    );
    return result;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};

export { GetTeacherById };
