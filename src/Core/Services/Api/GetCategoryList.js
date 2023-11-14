import instance from "../Interceptor/Interceptor";

const GetCategoryList = async () => {
  try {
    const res = await instance.get("/Home/GetTechnologies");
    return res;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { GetCategoryList };
