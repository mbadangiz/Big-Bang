import { FooterDetailsConnectionWays } from "./FooterDetailsConnectionWays";
import { FooterDetailsSocialmedia } from "./FooterDetailsSocialmedia";
import { FooterLogo } from "./FooterLogo";

const FooterDetails = () => {
  return (
    <div className="w-4/5 h-[273px] mx-auto rounded-[30px] bg-gradient-to-t from-bluePrimary to-blueSecondary shadow-sm py-4 px-8 relative top-[220px] z-[3333333333333333333]">
      <div className="flex-row-all-center justify-between ">
        <FooterLogo />
        <FooterDetailsConnectionWays />
        <FooterDetailsSocialmedia />
      </div>
      <h3 className=" text-[15px] text-center mt-2 text-white">
        تمامی حقوق معنوی و مادی این سایت مطعلق به آکادمی کدنویسی بحر است. طرح از
        گروه <span className="text-[18px]">Big Bang</span>
      </h3>
    </div>
  );
};

export { FooterDetails };
