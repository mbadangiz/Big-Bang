import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import { useState } from "react";
import { useEffect } from "react";
import { getTeachersList } from "../../../../Core/Services/Api/Landing/GetTeacherList";
import SampleImg from "../../../../Assets/Image/sampleImage.png";
import LinkImg from "../../../../Assets/Image/linkedin.png";

const LandingTeachersSection = () => {
  const [teacherlist, setTeacherList] = useState();

  const getTeachers = async () => {
    const res = await getTeachersList();
    setTeacherList(res);
  };

  useEffect(() => {
    getTeachers();
  }, []);

  console.log(teacherlist);

  // const teacherList = [
  //   {
  //     id: 1,
  //     fullName: teacherlist ? teacherlist.fullName : "",
  //     occupation: "یه چیزایی بلده داداشمون",
  //     img: "img-sampleMasters.png",
  //   },
  //   {
  //     id: 2,
  //     fullName: teacherlist ? teacherlist.fullName : "",
  //     occupation: "یه چیزایی بلده داداشمون",
  //     img: "img-sampleMasters.png",
  //   },
  //   {
  //     id: 3,
  //     fullName: teacherlist ? teacherlist.fullName : "",
  //     occupation: "یه چیزایی بلده داداشمون",
  //     img: "img-sampleMasters.png",
  //   },
  //   {
  //     id: 4,
  //     fullName: teacherlist ? teacherlist.fullName : "",
  //     occupation: "یه چیزایی بلده داداشمون",
  //     img: "img-sampleMasters.png",
  //   },
  // ];
  return (
    <div className="width-handler my-10 space-y-9">
      <LandingSectionsTitle
        mainText="پربازدید ترین اساتید"
        subText="اساتید برجسته آکادمی با چندین سال تجربه در کنار شما خواهند بود"
      />
      <div
        className="border-2 border-solid border-red-500 w-full
        flex-row-all-center gap-5 items4 hide"
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
      className="border-2 border-solid border-gray-200 h-[350px] w-[250px] rounded-[15px] shadow-sm shadow-black/25 overflow-hidden 
    text-center hover:translate-y-[-5px] transition-all duration-200 p-2"
    >
      <figure
        id="TeacherImage"
        className="h-4/6 relative overflow-hidden rounded-[12px] cursor-pointer  hover:backdrop-blur-sm"
      >
        <img
          src={pictureAddress ? pictureAddress : SampleImg}
          alt=""
          className="w-300 h-250 object-fill rounded-[15px] hover:shadow-md"
        />
      </figure>
      <div className="h-1/6s grid grid-cols-3 gap-4 px-10 my-10">
        <div className="h-[50px] col-span-1 ">
          <i className="fi fi-brands-telegram text-[40px] text-bluePrimary"></i>
        </div>
        <div className="h-[50px] col-span-1">
          <i className="fi fi-brands-telegram text-[40px] text-bluePrimary"></i>
        </div>
        <div className="h-[50px] col-span-1">
          <i className="fi fi-brands-telegram text-[40px] text-bluePrimary"></i>
        </div>
      </div>
      <figcaption className="bg-bluePrimary relative  bottom-[170px] rounded-[15px] z-50 mx-auto w-[85%] h-[70px] shadow-md shadow-bluePrimary/30">
        <h3 className="f-bold text-white text-lg leading-[65px] opacity-95">
          {fullName ? fullName : "ی بابایی"}
        </h3>
      </figcaption>
    </div>
  );
};
export { LandingTeachersSection };
