// Pictures Import
import BahrLogo from "../../../../../../Assets/Images/Logo/BahrLogo.png";

const PanelSidebarNameLogo = () => {
  return (
    <div className="w-full flex px-[4px] py-[2px]">
      <figure className="w-[50px] h-[50px] ">
        <img
          className="w-full h-full"
          src={BahrLogo}
          alt="Bahrolomi Academy Logo"
        />
      </figure>
      <div className="mr-3">
        <h1 className="text-[22px] text-bluePrimary font-bold leading-[43px] ">
          پنل کاربری
        </h1>
      </div>
    </div>
  );
};

export { PanelSidebarNameLogo };
