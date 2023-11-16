import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";

const ServicesSection = () => {
  return (
    <div className="w-full width-handler">
      <LandingSectionsTitle
        mainText="خدمات ما"
        subText="شما عزیزان می توانید از خدمات ما استفاده کنید"
      />
      <div className="w-full h-[280px] border-2 border-solid border-transparent flex items-center justify-center gap-7 mt-6 mb-6">
        <div className="w-[200px] h-[270px] border-2 border-solid border-transparent rounded-[16px] bg-white hover:bg-bluePrimary hover:text-white shadow-lg">
          <div className="text-[#575757] text-center">
            <i className="fi fi-rr-diploma text-8xl text-textBlack block mt-6"></i>
            <h1 className="text-textBlack font-extrabold text-[22px] mb-3">
              مدرک معتبر
            </h1>
            <p className="text-[16px]">
              مشاوران ما شما عزیزان
              <br />
              را راهنمایی می کنند
            </p>
          </div>
        </div>
        <div className="w-[200px] h-[270px] border-2 border-solid border-transparent rounded-[16px] bg-white shadow-lg">
          <div className="text-[#575757] text-center">
            <i className="fi-rr-messages-question text-8xl text-textBlack block mt-6"></i>
            <h1 className="text-textBlack font-extrabold text-[22px] mb-3">
              مشاوره
            </h1>
            <p className="text-[16px]">
              مشاوران ما شما عزیزان
              <br />
              را راهنمایی می کنند
            </p>
          </div>
        </div>
        <div className="w-[200px] h-[270px] border-2 border-solid border-transparent rounded-[16px] bg-white shadow-lg">
          <div className="text-[#575757] text-center">
            <i className="fi fi-rr-test text-8xl text-textBlack block mt-6"></i>
            <h1 className="text-textBlack font-extrabold text-[22px] mb-3">
              آزمون ها
            </h1>
            <p className="text-[16px]">
              مشاوران ما شما عزیزان
              <br />
              را راهنمایی می کنند
            </p>
          </div>
        </div>
        <div className="w-[200px] h-[270px] border-2 border-solid border-transparent rounded-[16px] bg-bluePrimary shadow-lg">
          <div className="text-center text-white">
            <i className="fi fi-rr-laptop-code text-8xl text-white block mt-6"></i>
            <h1 className=" font-extrabold text-[22px] mb-3">ورود به بازار</h1>
            <p className="text-[16px]">
              مشاوران ما شما عزیزان
              <br />
              را راهنمایی می کنند
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ServicesSection };
