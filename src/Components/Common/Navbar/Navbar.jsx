import { useEffect, useState } from "react";
import IconBahr from "./../../../Assets/Images/Group 4.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { GetCurrentUserProfile } from "../../../Core/Services/Api/UserPanel/GetCurrentUserProfile";

import { getItem } from "../../../Core/Services/common/storage.services";
import { useDispatch, useSelector } from "react-redux";
import { onSetUserInfo } from "../../../redux/user";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isHeroBgOn, setIsHeroBgOn] = useState(true);
  const [isBgOn, setIsBgOn] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((reducer) => reducer.user.userInformations);
  const navigate = useNavigate();

  const token = getItem("userList");

  const GetUserInfo = async () => {
    if (token !== null && token) {
      const user = await GetCurrentUserProfile();
      dispatch(onSetUserInfo(user));
      console.log(user);
    }
  };

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
    document.onscroll = () => {
      if (pageYOffset > 200) {
        setIsBgOn(true);
        setIsFixed(true);
      } else {
        setIsFixed(false);
        setIsBgOn(false);
      }
    };
  }, []);

  useEffect(() => {
    GetUserInfo();
  }, []);

  const navItemsList = [
    { id: 1, title: "خانه", to: "/" },
    { id: 2, title: "دوره ها", to: "/Courses" },
    // { id: 3, title: "اساتید", to: "/ss" },
    { id: 4, title: "اخبار مقالات", to: "/ArticleAndNews" },
    // { id: 5, title: "درباره ی ما", to: "/ss" },
    // { id: 6, title: "تماس با ما", to: "/ss" },
  ];
  return (
    <div
      className={`w-full h-20 
      ${isHeroBgOn ? "" : "bg-white/40 backdrop-blur-md "}   z-50  ${
        isFixed && "fixed"
      }  sticky top-0 ${isBgOn && "bg-white/40 backdrop-blur-md"}  `}
    >
      <div className="width-handler h-full border-2 flex-row-all-center p-2">
        <img src={IconBahr} alt="Logo" className="h-7 md:h-10" />
        <div className="  h-full border-2  text-center  f-bold text-sm md:text-base flex-row-all-center  mx-auto">
          {navItemsList.map((items) => {
            return <NavBarItems key={items.id} data={items} />;
          })}

          <FaRegUser
            className="sm:hidden"
            size={16}
            onClick={() =>
              token
                ? navigate("/User/Panel/Dashboard")
                : navigate("/User/Login")
            }
          />
        </div>
        <div className="font-semibold text-base flex justify-end">
          {token ? (
            <div className="w-[120px] h-[70px]">
              <figure
                onClick={() => navigate("/User/Panel/Dashboard")}
                className="border-[3px] border-solid border-bluePrimary hover:border-dotted w-[65px] h-[65px] rounded-full mx-auto hover:cursor-pointer"
              >
                <img
                  className="w-[52px] h-[52px] rounded-full mx-auto my-[4px] shadow-lg shadow-black/40"
                  src={userInfo.currentPictureAddress}
                  alt=""
                />
              </figure>
            </div>
          ) : (
            <div className=" justify-end hidden sm:flex">
              <NavLink
                to="/User/Register/Step1"
                className="bg-bluePrimary text-white rounded-full text-base flex-row-all-center h-10 px-6 ml-2"
              >
                ثبت نام
              </NavLink>
              <NavLink
                to="/User/Login"
                className=" text-bluePrimary rounded-full text-base flex-row-all-center h-10 px-6  border-2 border-solid border-bluePrimary"
              >
                ورود
              </NavLink>
            </div>
          )}
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
