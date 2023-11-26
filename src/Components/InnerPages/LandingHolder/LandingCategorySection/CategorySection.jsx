import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import Style from "./CategorySection.module.css";

const CategorySection = () => {
  return (
    <div
      className={`${Style.CategorySectionBackground}  width-handler h-screen px-0 py-10 flex-row-all-center`}
    >
      <LandingSectionsTitle
        mainText="دسته بندی ها"
        subText="گستره وسیعی از موضوعات رو می توانید انتخاب کنید"
      />
      <div
        className={`w-full  flex gap-4 flex-wrap items-center justify-center relative my-8`}
      >
        <CategoryCards icon={"fi fi-rs-pencil-paintbrush"} text={"UI/UX"} />
        <div className="w-[30%] flex-row-all-center gap-6">
          <CategoryCards icon={"fi fi-br-database"} text={"پایگاه داده"} />
          <CategoryCards icon={"fi fi-rr-binary-lock"} text={"هک و امنیت"} />
          <CategoryCards icon={"fi fi-rr-sitemap"} text={"شبکه"} />
          <CategoryCards icon={"fi fi-rr-display-code"} text={"فرانت اند"} />
        </div>
        <CategoryCards icon={"fi fi-ss-square-terminal"} text={"بک اند"} />
      </div>
    </div>
  );
};

export { CategorySection };

const CategoryCards = ({ text, icon, extraClasses }) => {
  return (
    <div
      className={`flex-col-all-center w-[170px] h-[200px] border-2 border-solid border-gray-200
       hover:bg-bluePrimary text-bluePrimary  rounded-[16px] text-center bg-white
       hover:text-white cursor-pointer gap-5 transition-all duration-100 hover:translate-y-[-8px] ${extraClasses}`}
    >
      <i className={`${icon} text-7xl block mt-5`}></i>
      <h1 className="text-xl f-bold">{text}</h1>
    </div>
  );
};
