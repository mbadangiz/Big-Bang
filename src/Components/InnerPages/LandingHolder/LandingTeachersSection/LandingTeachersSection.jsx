import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import { useState } from "react";
import { useEffect } from "react";
import { getTeachersList } from "../../../../Core/Services/Api/Landing/GetTeacherList";
import SampleImg from "../../../../Assets/Image/sampleImage.png";

import Style from "./LandingTeachersSection.module.css";

const LandingTeachersSection = () => {
  const [teacherlist, setTeacherList] = useState();

  const getTeachers = async () => {
    const res = await getTeachersList();
    setTeacherList(res);
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className="width-handler my-10">
      <LandingSectionsTitle
        mainText="پربازدید ترین اساتید"
        subText="اساتید برجسته آکادمی با چندین سال تجربه در کنار شما خواهند بود"
      />
      <div
        className="w-full mt-14 
        flex-row-all-center gap-y-16 gap-x-10 items4 hide"
      >
        {teacherlist
          ? teacherlist.map((teacher, index) => {
              if (index < 3) {
                return <TeachersCard data={teacher} key={teacher.id} />;
              }
            })
          : "در حال حاضر دوره ایی برای نمایش موجود نمیباشد"}
      </div>
    </div>
  );
};
const TeachersCard = ({ data }) => {
  const { id, fullName, courseCounts, pictureAddress } = data;
  return (
    <div
      className={`${Style.TeachersCard} border-2 border-solid border-gray-200 w-[350px] hover:cursor-pointer rounded-[15px] shadow-sm shadow-black/25 
    text-center hover:translate-y-[-5px] transition-all duration-200 p-2`}
    >
      <figure
        id="TeacherImage"
        className="w-[200px] h-[180px] shadow-xl shadow-black/20 mx-auto relative bottom-12 overflow-hidden rounded-[12px] cursor-pointer  hover:backdrop-blur-sm"
      >
        <img
          src={pictureAddress ? pictureAddress : SampleImg}
          alt=""
          className="w-300 h-250 object-fill rounded-[15px] hover:shadow-md"
        />
      </figure>
      <div
        className={`${Style.TeachersLinks} h-1/6s grid grid-cols-3 gap-4 px-10 my-10`}
      >
        <div className="h-[50px] col-span-1 ">
          <i className="fi fi-brands-instagram hover:text-textBlack hover:cursor-pointer text-[40px] text-bluePrimary"></i>
        </div>
        <div className="h-[50px] col-span-1">
          <i className="fi fi-brands-linkedin hover:text-textBlack hover:cursor-pointer text-[40px] text-bluePrimary"></i>
        </div>
        <div className="h-[50px] col-span-1">
          <i className="fi fi-brands-telegram hover:text-textBlack hover:cursor-pointer text-[40px] text-bluePrimary"></i>
        </div>
      </div>
      <figcaption className="relative  bottom-[160px] rounded-[15px] z-50 mx-auto w-[85%] h-[70px]">
        <h3 className="f-bold text-textBlack text-lg opacity-95">
          {fullName ? fullName : "ی بابایی"}
        </h3>
        <p className="text-grayDetail">متخصص فرانت</p>
      </figcaption>
    </div>
  );
};
export { LandingTeachersSection };
