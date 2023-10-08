import { FooterLeaflet } from "./FooterLeaflet";

const FooterMap = () => {
  return (
    <div className=" w-full h-[472px] mt-[134px] rounded-t-[30px] bg-bluePrimary relative bottom-[273px] -z-0">
      <div className="w-full h-[462px]  mt-2 bg-white rounded-t-[30px]  relative top-[10px]">
        <FooterLeaflet />
      </div>
    </div>
  );
};

export { FooterMap };
