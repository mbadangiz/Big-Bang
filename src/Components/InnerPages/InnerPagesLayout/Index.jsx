import { Navbar } from "../../Common/Navbar/Navbar";
import { Footer } from "../../Common/Footer/index";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleListProvider from "../../../Core/Providers/ArticleListProvider";

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
    <ArticleListProvider>
      <div className={`${isHeroBgOn ? "bg-heroSectoin" : ""}`}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </ArticleListProvider>
  );
};

export { InnerPagesLayout };
