import React from "react";
import { Link } from "react-router-dom";

const LoginSocialMedia = () => {
  return (
    <div className="h-full w-full">
      <div className="text-xl font-bold h-2/6">
        <h2>ما را در شبکه های اجتماعی دنبال کنید</h2>
      </div>

      <div className="text-xl font-bold h-4/6 flex justify-evenly">
        <Link className="w-[40px] h-full py-[6px]" to={"/"}>
          <i className="text-[40px] text-black/20 hover:text-bluePrimary fi fi-brands-instagram"></i>
        </Link>
        <Link className="w-[40px] h-full py-[6px]" to={"/"}>
          <i className="text-[40px] text-black/20 hover:text-bluePrimary fi fi-brands-telegram"></i>
        </Link>
        <Link className="w-[40px] h-full py-[6px]" to={"/"}>
          <i className="text-[40px] text-black/20 hover:text-bluePrimary fi fi-brands-youtube"></i>
        </Link>
        <Link className="w-[40px] h-full py-[6px]" to={"/"}>
          <i className="text-[40px] text-black/20 hover:text-bluePrimary fi fi-brands-facebook"></i>
        </Link>
      </div>
    </div>
  );
};

export { LoginSocialMedia };
