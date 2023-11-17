import { useEffect, useState } from "react";
import IconBahr from "./../../../Assets/Images/Group 4.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isHeroBgOn, setIsHeroBgOn] = useState(true);

  const matches = useLocation();
  const thisisLink = matches.pathname.includes("/User/");
  useEffect(() => {
    if (matches.pathname !== "/") {
      setIsHeroBgOn(false);
    } else {
      setIsHeroBgOn(true);
    }
  }, [matches]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (Math.floor(winScroll) > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, []);

  const navItemsList = [
    { id: 1, title: "خانه", to: "/" },
    { id: 2, title: "دوره ها", to: "/Courses" },
    { id: 3, title: "اساتید", to: "/ss" },
    { id: 4, title: "اخبار مقالات", to: "/ArticleAndNews" },
    { id: 5, title: "درباره ی ما", to: "/ss" },
    { id: 6, title: "تماس با ما", to: "/ss" },
  ];
  return (
    <div
      className={`w-full h-20 
      ${isHeroBgOn ? "" : "bg-teransparent backdrop-blur-md "} z-50 `}
    >
      <div className="width-handler h-full border-2 flex-row-all-center ">
        <img src={IconBahr} alt="Logo" className="h-12" />
        <div className="  h-full border-2  text-center  f-bold text-base flex-row-all-center  mx-auto">
          {navItemsList.map((items) => {
            return <NavBarItems key={items.id} data={items} />;
          })}
        </div>
        <div className="font-semibold text-base flex justify-end">
          <NavLink
            to="User/Register/Step1"
            className="bg-bluePrimary text-white rounded-full text-base flex-row-all-center h-10 px-6 ml-2"
          >
            ثبت نام
          </NavLink>
          <NavLink
            to="User/Login"
            className=" text-bluePrimary rounded-full text-base flex-row-all-center h-10 px-6  border-2 border-solid border-bluePrimary"
          >
            ورود
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { Navbar };

const NavBarItems = ({ data }) => {
  const { id, title, to } = data;
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? " p-1 text-bluePrimary border-b-4 rounded-sm border-solid border-bluePrimary ml-6"
          : "p-1 ml-6"
      }
    >
      {title}
    </NavLink>
  );
};
