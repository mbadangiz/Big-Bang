import instance from "../../Interceptor/Interceptor";

const DeleteFavCourse = async (courseId) => {
  try {
    const res = await instance.delete("/CourseReserve", {
      data: { id: courseId },
    });
    return res;
  } catch (err) {
    console.log(err.response);
    return [];
  }
};

export { DeleteFavCourse };
