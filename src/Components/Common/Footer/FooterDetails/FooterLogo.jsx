import SilverLogo from "../../../../Assets/Images/Logo/BahrSilverLogo.png";

const FooterLogo = () => {
  return (
    <div className="w-30% h-[208px]">
      <figure className="w-full h-full ">
        <img src={SilverLogo} className="w-full h-full " alt="Logo Image" />
      </figure>
    </div>
  );
};

export { FooterLogo };
