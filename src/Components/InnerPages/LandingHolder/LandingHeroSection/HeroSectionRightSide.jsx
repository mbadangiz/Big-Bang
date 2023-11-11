import { useRef } from "react";
const HeroSectionRightSide = () => {
  const inputContainer = useRef(null);
  return (
    <div className="w-1/2 h-max">
      <h1 className="f-bold text-6xl leading-normal">
        به آکادمی برنامه نویسی
        <span className="f-bold mx-3 text-bluePrimary">بحر</span>
        خوش آمدید
      </h1>
      <p className="text-justify my-5 opacity-90">
        آکادمی کدنویسی بحر با افتخارات فراوان و سال ها تجربه آماده تدریس به روز
        ترین روش های روز دنیا با اساتید حرفه ای است. بعد از گذراندن تمام دوره
        های آموزشی و کارگاه ها حرفه ای برای شما عزیزان رزومه نوشته !خواهد تا به
        راحتی بتوانید وارد بازار کار شوید. با خیالی راحت به ما اعتماد کنید
      </p>
      <div
        className="mt-20 w-full h-16  rounded-full
      border-4 border-solid border-white bg-gray-500/20 backdrop-blur-sm py-2"
        ref={inputContainer}
      >
        <select
          name=""
          id=""
          className="w-1/5 h-full rounded-r-full bg-transparent
  text-center border-l-2 border-solid border-white f-bold text-lg text-white"
        >
          <option value="">دوره</option>
          <option value="">مقالات</option>
        </select>
        <input
          type="text"
          className="w-4/5 h-full bg-transparent rounded-l-full px-3
  text-bluePrimary text-lg f-bold placeholder:text-bluePrimary/75"
          placeholder="عبارت مورد نظر خود را جست  و جو کنید"
          onFocus={() => {
            inputContainer.current.style.borderColor = "#406dd58f";
          }}
          onBlur={() => {
            inputContainer.current.style.borderColor = "#fff";
          }}
        />
      </div>
    </div>
  );
};

export { HeroSectionRightSide };
