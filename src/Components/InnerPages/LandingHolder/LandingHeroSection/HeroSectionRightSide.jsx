import { useRef } from "react";

import Typewriter from "typewriter-effect";
import { HeroSearchBox } from "./HeroSearchBox/HeroSearchBox";

const HeroSectionRightSide = () => {
  return (
    <div className="w-3/4 md:w-1/2 h-max relative md:bottom-0 bottom-[110px]">
      <h1 className="f-bold md:text-6xl text-3xl leading-normal">
        به آکادمی برنامه نویسی
        <span className="f-bold mx-3 text-bluePrimary">بحر</span>
        خوش آمدید
      </h1>
      <p className="text-justify my-5 opacity-90 h-24">
        <Typewriter
          options={{
            strings: [
              `آکادمی کدنویسی بحر با افتخارات فراوان و سال ها تجربه آماده تدریس به روز
            ترین روش های روز دنیا با اساتید حرفه ای است. بعد از گذراندن تمام دوره
            های آموزشی و کارگاه ها حرفه ای برای شما عزیزان رزومه نوشته !خواهد تا به
            راحتی بتوانید وارد بازار کار شوید. با خیالی راحت به ما اعتماد کنید`,
            ],
            autoStart: true,
            loop: true,
            delay: 20,
            deleteSpeed: 20,
          }}
        />
      </p>
      <HeroSearchBox />
    </div>
  );
};

export { HeroSectionRightSide };
