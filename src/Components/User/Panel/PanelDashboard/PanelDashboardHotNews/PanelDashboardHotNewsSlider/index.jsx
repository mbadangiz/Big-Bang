import React from "react";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// HotNews slider pictures import
import HotNewsSliderPictureOne from "../../../../../../Assets/Images/Panel/User/UserPanelBackgrounds/HotNewsSliderPictures/PanelSlide1.jpg";
import HotNewsSliderPictureTwo from "../../../../../../Assets/Images/Panel/User/UserPanelBackgrounds/HotNewsSliderPictures/PanelSlide2.jpg";
import HotNewsSliderPictureThree from "../../../../../../Assets/Images/Panel/User/UserPanelBackgrounds/HotNewsSliderPictures/PanelSlide3.jpg";
import HotNewsSliderPictureFour from "../../../../../../Assets/Images/Panel/User/UserPanelBackgrounds/HotNewsSliderPictures/PanelSlide4.jpg";
import HotNewsSliderPictureFive from "../../../../../../Assets/Images/Panel/User/UserPanelBackgrounds/HotNewsSliderPictures/PanelSlide5.jpg";
import { HotNewsSliderItems } from "./HotNewsSliderItems";

const PanelDashboardHotNewsSlide = () => {
  return (
    <div className="w-full h-full rounded-lg">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 4000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <HotNewsSliderItems
            HotNewsText="آغاز دوره پایلوت جدید پاییز"
            HotNewsImage={HotNewsSliderPictureOne}
          />
        </SwiperSlide>

        <SwiperSlide>
          <HotNewsSliderItems
            HotNewsText="آغاز دوره برنامه نویسی کودکان زیر 13 سال"
            HotNewsImage={HotNewsSliderPictureTwo}
          />
        </SwiperSlide>

        <SwiperSlide>
          <HotNewsSliderItems
            HotNewsText="همایش متد های برنامه نویسی جدید و کاریابی"
            HotNewsImage={HotNewsSliderPictureThree}
          />
        </SwiperSlide>

        <SwiperSlide>
          <HotNewsSliderItems
            HotNewsText="نتایج ارسال رزومه های دانشجو های دوره ریکت"
            HotNewsImage={HotNewsSliderPictureFour}
          />
        </SwiperSlide>

        <SwiperSlide>
          <HotNewsSliderItems
            HotNewsText="پایان دوره ریکت تابستان"
            HotNewsImage={HotNewsSliderPictureFive}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { PanelDashboardHotNewsSlide };
