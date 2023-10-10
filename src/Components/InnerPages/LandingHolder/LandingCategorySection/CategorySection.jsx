import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import Style from "./CategorySection.module.css";

const CategorySection = () => {
  return (
    <div className="w-full width-handler">
      <LandingSectionsTitle
        mainText="دسته بندی ها"
        subText="گستره وسیعی از موضوعات رو می توانید انتخاب کنید"
      />
      <div className="w-full h-[806px] CategorySectionBackground"></div>
    </div>
  );
};

export { CategorySection };
