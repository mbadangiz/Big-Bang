import { useEffect } from "react";
import { LandingHolder } from "../../Components/InnerPages/LandingHolder/Index";

const Landing = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return <LandingHolder />;
};

export { Landing };
