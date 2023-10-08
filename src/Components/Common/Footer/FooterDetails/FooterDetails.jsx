import { FooterDetailsConnectionWays } from "./FooterDetailsConnectionWays";
import { FooterDetailsSocialmedia } from "./FooterDetailsSocialmedia";
import { FooterLogo } from "./FooterLogo";

const FooterDetails = () => {
  return (
    <div className="w-4/5 h-[273px] m-auto rounded-[30px] bg-gradient-to-t from-bluePrimary to-blueSecondary shadow-sm p-4 relative top-[0px] z-50">
      <div className=" flex  justify-between ">
        <FooterLogo />
        <FooterDetailsConnectionWays />
        <FooterDetailsSocialmedia />
      </div>
      <div className="mt-4 text-white">
        <h3 className=" text-[15px] ">
          تمامی حقوق معنوی و مادی این سایت مطعلق به آکادمی کدنویسی بحر است. طرح
          از گروه <span className="text-[18px]">Big Bang</span>
        </h3>
      </div>
    </div>
  );
};

export { FooterDetails };
