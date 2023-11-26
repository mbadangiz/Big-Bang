import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";

const ServicesSection = () => {
  return (
    <div className="w-full width-handler">
      <LandingSectionsTitle
        mainText="خدمات ما"
        subText="شما عزیزان می توانید از خدمات ما استفاده کنید"
      />
      <div
        className="w-full h-[280px] border-2 border-solid border-transparent
       flex items-center justify-center gap-7 mt-6 mb-6"
      >
        <div
          data-aos="fade-down"
          data-aos-delay="0"
          className="ServCard w-[200px] h-[270px] border-2 border-solid border-transparent
         rounded-[16px] bg-white shadow-lg text-textBlack
         hover:bg-bluePrimary cursor-pointer  hover:translate-y-[-5px] transition-all duration-200"
        >
          <div className=" text-center">
            <i className="fi fi-rr-diploma text-8xl  block mt-6"></i>
            <h1 className=" font-extrabold text-[22px] mb-3">مدرک معتبر</h1>
            <p className="text-[16px] ">
              مشاوران ما شما عزیزان
              <br />
              را راهنمایی می کنند
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="500"
          className="ServCard w-[200px] h-[270px] border-2 border-solid border-transparent 
        rounded-[16px] bg-white shadow-lg hover:bg-bluePrimary cursor-pointer text-textBlack
        hover:translate-y-[-5px] transition-all duration-200"
        >
          <div className="text-center">
            <i className="fi-rr-messages-question text-8xl block mt-6"></i>
            <h1 className=" font-extrabold text-[22px] mb-3">مشاوره</h1>
            <p className="text-[16px]">
              مشاوران ما شما عزیزان
              <br />
              را راهنمایی می کنند
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="250"
          data-aos-duration="500"
          className="ServCard w-[200px] h-[270px] border-2 border-solid border-transparent 
        rounded-[16px] bg-white shadow-lg hover:bg-bluePrimary cursor-pointer text-textBlack
        hover:translate-y-[-5px] transition-all duration-200"
        >
          <div className=" text-center">
            <i className="fi fi-rr-test text-8xl  block mt-6"></i>
            <h1 className=" font-extrabold text-[22px] mb-3">آزمون ها</h1>
            <p className="text-[16px]">
              مشاوران ما شما عزیزان
              <br />
              را راهنمایی می کنند
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="500"
          className="ServCard w-[200px] h-[270px] border-2 border-solid border-transparent 
        rounded-[16px] bg-white shadow-lg hover:bg-bluePrimary cursor-pointer text-textBlack
        hover:translate-y-[-5px] transition-all duration-200"
        >
          <div className="text-center">
            <i className="fi fi-rr-laptop-code text-8xl block mt-6"></i>
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
