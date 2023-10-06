import IconBahr from "./../../../Assets/Images/Group 4.png";

const Navbar = () => {
  return (
    <div className="w-full h-28 border-2  flex items-center ">
      <div className="font-semibold text-xl flex justify-end">
        <a
          href="#"
          className="bg-bluePrimary text-white rounded-full py-2 px-6 mr-2"
        >
          ورود
        </a>
        <a
          href="#"
          className=" text-bluePrimary rounded-full py-1 px-5 border-2 border-solid border-bluePrimary"
        >
          ثبت نام
        </a>
      </div>
      <div className="w-6/12 h-16 border-2  text-center font-semibold text-xl flex items-center justify-center flex-row-reverse mx-auto">
        <a
          href="#"
          className="px-1 py-1 text-bluePrimary border-b-4 rounded-sm border-solid border-bluePrimary ml-6"
        >
          خانه
        </a>
        <a href="#" className="px-1 py-1 ml-6">
          دوره ها
        </a>
        <a href="#" className="px-1 py-1 ml-6">
          اساتید
        </a>
        <a href="#" className="px-1 py-1 ml-6">
          اخبار مقالات
        </a>
        <a href="#" className="px-1 py-1 ml-6">
          درباره ما
        </a>
        <a href="#" className="px-1 py-1 ml-6">
          تماس با ما
        </a>
      </div>
      <div>
        <div className="w-36 h-16 flex mb-4">
          <div className="mt-4 text-base text-bluePrimary">
            <p>
              آکادمی کدنویسی
              <br />
              بحرالعلومی
            </p>
          </div>
          <img src={IconBahr} alt="Logo" className="" />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
