import { useEffect } from "react";
import { Error404PageHolder } from "../../Components/Error404PageHolder";

const Error404 = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <Error404PageHolder />;
};

export { Error404 };
