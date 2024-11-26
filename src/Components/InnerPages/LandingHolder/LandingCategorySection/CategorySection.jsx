import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import Style from "./CategorySection.module.css";

const CategorySection = () => {
  return (
    <div
      className={`${Style.CategorySectionBackground}  width-handler px-0 py-10 flex-row-all-center`}
    >
      <LandingSectionsTitle
        mainText="دسته بندی ها"
        subText="گستره وسیعی از موضوعات رو می توانید انتخاب کنید"
      />
      <div
        className={`w-full  flex gap-4 flex-wrap items-center justify-center relative my-8`}
      >
        <CategoryCards
          dataAos={"fade-left"}
          icon={"fi fi-rs-pencil-paintbrush"}
          text={"UI/UX"}
          delay={"400"}
        />
        <div className="md:w-[30%] flex-row-all-center gap-6">
          <CategoryCards
            dataAos={"fade-down"}
            delay={"300"}
            icon={"fi fi-br-database"}
            text={"پایگاه داده"}
          />
          <CategoryCards
            dataAos={"fade-down"}
            icon={"fi fi-rr-binary-lock"}
            text={"هک و امنیت"}
            delay={"300"}
          />
          <CategoryCards
            dataAos={"fade-up"}
            icon={"fi fi-rr-sitemap"}
            text={"شبکه"}
            delay={"100"}
          />
          <CategoryCards
            dataAos={"fade-up"}
            icon={"fi fi-rr-display-code"}
            text={"فرانت اند"}
            delay={"100"}
          />
        </div>
        <CategoryCards
          dataAos={"fade-right"}
          delay={"400"}
          icon={"fi fi-ss-square-terminal"}
          text={"بک اند"}
        />
      </div>
    </div>
  );
};

export { CategorySection };

const CategoryCards = ({ delay, dataAos, text, icon, extraClasses }) => {
  return (
    <div
      className={`flex-col-all-center w-[170px] h-[200px] border-2 border-solid border-gray-200
       hover:bg-bluePrimary text-bluePrimary  rounded-[16px] text-center bg-white
       hover:text-white cursor-pointer gap-5 transition-all duration-100 hover:translate-y-[-8px] ${extraClasses}`}
      data-aos={dataAos}
      data-aos-delay={delay}
    >
      <i className={`${icon} text-7xl block mt-5`}></i>
      <h1 className="text-xl f-bold">{text}</h1>
    </div>
  );
};
