import { Link } from "react-router-dom";
import { useMyPass } from "../../../Core/Providers/PasswordProvider";

const Test2 = () => {
  const { passId, setPassId } = useMyPass();
  console.log(passId);
  return <> dskvsdjn</>;
};

export default Test2;
