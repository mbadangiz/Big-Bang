import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import Style from "./CategorySection.module.css";

const CategorySection = () => {
  return (
    <div className="w-full width-handler">
      <LandingSectionsTitle
        mainText="دسته بندی ها"
        subText="گستره وسیعی از موضوعات رو می توانید انتخاب کنید"
      />
      <div
        className={`${Style.CategorySectionBackground} w-full h-[806px] CategorySectionBackground flex gap-4 flex-wrap items-center justify-center relative`}
      >
        <div
          className={`w-[250px] h-[320px] border-2 border-solid border-gray-200 bg-white rounded-[16px] text-center text-bluePrimary relative top-48`}
        >
          <i className="fi fi-br-database text-10xl block mt-5"></i>
          <h1 className="text-4xl">دیتابیس</h1>
        </div>
        <div className="w-[250px] h-[320px] border-2 border-solid border-gray-200 bg-white rounded-[16px] text-center text-bluePrimary">
          <i className="fi fi-br-database text-10xl block mt-5"></i>
          <h1 className="text-4xl">فرانت اند</h1>
        </div>
        <div className="w-[250px] h-[320px] border-2 border-solid border-gray-200 bg-white rounded-[16px] text-center text-bluePrimary">
          <i className="fi fi-br-database text-10xl block mt-5"></i>
          <h1 className="text-4xl">بک اند</h1>
        </div>
        <div className="w-[250px] h-[320px] border-2 border-solid border-gray-200 bg-white rounded-[16px] text-center text-bluePrimary relative top-48">
          <i className="fi fi-br-database text-10xl block mt-5"></i>
          <h1 className="text-4xl">UI & UX</h1>
        </div>
        <div className="w-[250px] h-[320px] border-2 border-solid border-gray-200 bg-white rounded-[16px] text-center text-bluePrimary">
          <i className="fi fi-br-database text-10xl block mt-5"></i>
          <h1 className="text-4xl">امنیت و هک</h1>
        </div>
        <div className="w-[250px] h-[320px] border-2 border-solid border-gray-200 bg-bluePrimary text-white rounded-[16px] text-center text-bluePrimary">
          <i className="fi fi-br-database text-10xl block mt-5"></i>
          <h1 className="text-4xl">شبکه</h1>
        </div>
      </div>
    </div>
  );
};

export { CategorySection };
