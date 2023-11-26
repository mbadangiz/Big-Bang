import instance from "../../../Interceptor/Interceptor";

const GetMyCoursesReserve = async () => {
  try {
    const res = await instance.get("/SharePanel/GetMyCoursesReserve");
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { GetMyCoursesReserve };
