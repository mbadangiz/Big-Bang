// Component module style import
import Style from "./PanelSidebarMenuItems.module.css";

const PanelSidebarMenuItems = () => {
  return (
    <ul>
      <li
        className={`${Style.SidebarMenuItems} my-1  w-full h-[50px] px-[9px] py-[4px] flex justify-between `}
      >
        <div className="w-[40px] h-[40px] rounded-md py-[2.5px] px-[5.5px]">
          <i className="fi fi-rr-apps text-[30px] text-center text-bluePrimary"></i>
        </div>
        <div className="w-full mr-5 h-[45px]">
          <h2 className="text-[20px] text-[#969696] leading-[36px]">داشبورد</h2>
        </div>
      </li>

      <li
        className={`${Style.SidebarMenuItems} my-1 w-full h-[50px] px-[9px] py-[4px] flex justify-between`}
      >
        <div className="w-[40px] h-[40px] rounded-md   py-[2.5px] px-[5.5px]">
          <i className="fi fi-rr-list text-[30px] text-center text-bluePrimary"></i>
        </div>
        <div className="w-full mr-5 h-[45px]">
          <h2 className="text-[20px] text-[#969696] leading-[36px]">
            لیست دوره ها
          </h2>
        </div>
      </li>

      <li
        className={`${Style.SidebarMenuItems} my-1 w-full h-[50px] px-[9px] py-[4px] flex justify-between`}
      >
        <div className="w-[40px] h-[40px] rounded-md   py-[2.5px] px-[5.5px]">
          <i className="fi fi-rr-e-learning text-[30px] text-center text-bluePrimary"></i>
        </div>
        <div className="w-full mr-5 h-[45px]">
          <h2 className="text-[20px] text-[#969696] leading-[36px]">
            دوره های من
          </h2>
        </div>
      </li>

      <li
        className={`${Style.SidebarMenuItems} my-1 w-full h-[50px] px-[9px] py-[4px] flex justify-between`}
      >
        <div className="w-[40px] h-[40px] rounded-md   py-[2.5px] px-[5.5px]">
          <i className="fi fi-rr-shopping-cart text-[30px] text-center text-bluePrimary"></i>
        </div>
        <div className="w-full mr-5 h-[45px]">
          <h2 className="text-[20px] text-[#969696] leading-[36px]">
            سبد خرید
          </h2>
        </div>
      </li>

      <li
        className={`${Style.SidebarMenuItems} my-1 w-full h-[50px] px-[9px] py-[4px] flex justify-between`}
      >
        <div className="w-[40px] h-[40px] rounded-md   py-[2.5px] px-[5.5px]">
          <i className="fi fi-rr-key text-[30px] text-center text-bluePrimary"></i>
        </div>
        <div className="w-full mr-5 h-[45px]">
          <h2 className="text-[20px] text-[#969696] leading-[36px]">
            تغییر رمز
          </h2>
        </div>
      </li>

      <li
        className={`${Style.SidebarMenuItems} my-1 w-full h-[50px] px-[9px] py-[4px] flex justify-between`}
      >
        <div className="w-[40px] h-[40px] rounded-md   py-[2.5px] px-[5.5px]">
          <i className="fi fi-rr-user-pen text-[30px]  text-center text-bluePrimary"></i>
        </div>
        <div className="w-full mr-5 h-[45px]">
          <h2 className="text-[20px] text-[#969696] leading-[36px]">
            ویرایش پروفایل
          </h2>
        </div>
      </li>
    </ul>
  );
};

export { PanelSidebarMenuItems };
