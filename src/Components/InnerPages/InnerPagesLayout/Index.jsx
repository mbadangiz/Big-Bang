import { Navbar } from "../../Common/Navbar/Navbar";
import { Footer } from "../../Common/Footer/index";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import { useEffect, useState } from "react";

const InnerPagesLayout = () => {
  const [isHeroBgOn, setIsHeroBgOn] = useState(false);
  const matches = useLocation();
  useEffect(() => {
    if (matches.pathname === "/") {
      setIsHeroBgOn(true);
    } else {
      setIsHeroBgOn(false);
    }
  }, [matches]);

  return (
    <>
      <div className={`${isHeroBgOn ? "bg-heroSectoin" : ""}`}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export { InnerPagesLayout };
