import SilverLogo from "../../../../Assets/Images/Logo/BahrSilverLogo.png";

const FooterLogo = () => {
  return (
    <div className="h-[180px]">
      <figure className="w-full h-full ">
        <img src={SilverLogo} className="w-full h-full " alt="Logo Image" />
      </figure>
    </div>
  );
};

export { FooterLogo };
