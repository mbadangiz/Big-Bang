import { Link } from "react-router-dom";
import Img from "./../../../../Assets/Image/HeroSectionImage.png";
const HeroSectionLeftSide = () => {
  const socialMediaList = [
    { id: 1, type: "instagram", to: "" },
    { id: 2, type: "telegram", to: "" },
    { id: 3, type: "youtube", to: "" },
    { id: 4, type: "facebook", to: "" },
  ];
  return (
    <div className="w-1/2 text-center flex-row-all-center  justify-end gap-10">
      <img
        src={Img}
        className="h-450 rounded-3xl outline-4 outline-bluePrimary outline p-2"
      />
      <div className="w-10 h-450">
        <div className="w-[2px] h-28 bg-black rounded-xl mx-auto"></div>
        <div className="vertical-text my-4 relative -left-2.5 rotate-180 ">
          ما را دنبال کنید
        </div>
        <div className="w-[2px] h-10 bg-black rounded-xl mx-auto"></div>
        <div className="flex-col-all-center py-2">
          {socialMediaList.map((items) => (
            <SocialMedia key={items.id} data={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { HeroSectionLeftSide };
const SocialMedia = ({ data }) => {
  const { id, type, to } = data;
  return (
    <Link to={to}>
      <div className=" hover:text-bluePrimary  cursor-pointer">
        <i className={`text-2xl fi fi-brands-${type}`}></i>
      </div>
    </Link>
  );
};
