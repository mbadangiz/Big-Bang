const PanelDashboardItemTitle = ({ DashboardItemIcon, DashboardItemTitle }) => {
  return (
    <>
      <figure className="w-[40px] h-[40px] my-[4px] py-[0px] px-[2px] ">
        <i className={`${DashboardItemIcon} text-[32px] text-bluePrimary`}></i>
      </figure>

      <div className="w-[200px] h-[40px] my-1">
        <h2 className="text-[19px] font-semibold text-bluePrimary mx-[2px] leading-[38px]">
          {DashboardItemTitle}
        </h2>
      </div>
    </>
  );
};

export { PanelDashboardItemTitle };
