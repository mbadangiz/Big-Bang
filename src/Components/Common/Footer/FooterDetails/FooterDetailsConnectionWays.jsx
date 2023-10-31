const FooterDetailsConnectionWays = () => {
  return (
    <div className="w-[275px] h-[208px] p-auto">
      <h2 className="h-1/6 text-white  text-[24px] mb-3 text-right">
        راه های ارتباطی
      </h2>
      <div className=" w-full h-5/6 ">
        <div className="w-full flex">
          <i className="fi fi-rr-phone-call text-[22px] text-white"></i>
          <p className="text-white text-[18px] mr-2 my-auto">01123456789</p>
        </div>
        <div className="w-full flex mt-3">
          <i className="fi fi-rr-at text-[22px] text-white "></i>
          <p className="text-white text-[18px] mr-2 my-auto">
            example@gmail.com
          </p>
        </div>
        <div className="w-full flex mt-3">
          <i className="fi fi-rr-map-marker text-[22px] text-white"></i>
          <p className="text-white text-[15px] mr-2 my-auto text-right">
            مازندران_ساری_میدان خزر_نرسیده به روزبهان جنب دنیای آرزو_ساختمان
            سپهر_طبقه اول_آکادمی کدنویسی بحر
          </p>
        </div>
      </div>
    </div>
  );
};

export { FooterDetailsConnectionWays };
