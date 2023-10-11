import IconBahr from "./../../../Assets/Images/Group 4.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-28 border-2  flex items-center ">
      <div className="font-semibold text-xl flex justify-end">
        <NavLink
          href="#"
          className="bg-bluePrimary text-white rounded-full py-2 px-6 mr-2"
        >
          ورود
        </NavLink>
        <NavLink
          href="#"
          className=" text-bluePrimary rounded-full py-1 px-5 border-2 border-solid border-bluePrimary"
        >
          ثبت نام
        </NavLink>
      </div>
      <div className="w-6/12 h-16 border-2  text-center font-semibold text-xl flex items-center justify-center flex-row-reverse mx-auto">
        <NavLink
          href="#"
          className="px-1 py-1 text-bluePrimary border-b-4 rounded-sm border-solid border-bluePrimary ml-6"
        >
          خانه
        </NavLink>
        <NavLink href="#" className="px-1 py-1 ml-6">
          دوره ها
        </NavLink>
        <NavLink href="#" className="px-1 py-1 ml-6">
          اساتید
        </NavLink>
        <NavLink href="#" className="px-1 py-1 ml-6">
          اخبار مقالات
        </NavLink>
        <NavLink href="#" className="px-1 py-1 ml-6">
          درباره ما
        </NavLink>
        <NavLink href="#" className="px-1 py-1 ml-6">
          تماس با ما
        </NavLink>
      </div>
      <div>
        <div className=" h-16 flex mb-4">
          <img src={IconBahr} alt="Logo" className="" />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
