import { onSetFormData } from "../../../Utils/onSetFormData/onSetFormData";
import instance from "../../Interceptor/Interceptor";

const AddCommentToCourse = async (obj) => {
  try {
    const data = onSetFormData(obj);
    const res = await instance.post("/Course/AddCommentCourse", data);
    return res;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export default AddCommentToCourse;
