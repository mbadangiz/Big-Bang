import { onSetFormData } from "../../../Utils/onSetFormData/onSetFormData";
import instance from "../../Interceptor/Interceptor";

const AddRepToComments = async (myObj) => {
  try {
    const myFormData = onSetFormData(myObj);
    const res = await instance.post(
      "/Course/AddReplyCourseComment",
      myFormData
    );
    return res;
  } catch (err) {
    console.log(err.response);
    return 0;
  }
};

export default AddRepToComments;
