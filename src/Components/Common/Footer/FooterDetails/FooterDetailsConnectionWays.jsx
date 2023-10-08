const FooterDetailsConnectionWays = () => {
  return (
    <div className="w-[275px] h-[208px] p-auto">
      <h2 className="h-1/6 text-white text-[28px] mb-3 text-right">
        راه های ارتباطی
      </h2>
      <div className=" w-full h-5/6 ">
        <div className="w-full flex">
          <i className="fi fi-rr-phone-call w-[22px] h-[22px] text-[22px] text-white text-center"></i>
          <p className="text-white text-[20px] mr-2 my-auto">01123456789</p>
        </div>
        <div className="w-full flex mt-3">
          <i className="fi fi-rr-at w-[22px] h-[22px] text-[22px] text-white text-center"></i>
          <p className="text-white text-[20px] mr-2 my-auto">
            example@gmail.com
          </p>
        </div>
        <div className="w-full flex mt-3">
          <i className="fi fi-rr-map-marker w-[22px] h-[22px] text-[22px] text-white text-center"></i>
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
