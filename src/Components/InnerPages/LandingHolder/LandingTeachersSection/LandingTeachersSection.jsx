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
        className="w-full
        flex-row-all-center gap-5"
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
      className="h-350 w-300 rounded-sm overflow-hidden 
    text-center hover:translate-y-[-5px] transition-all duration-200"
    >
      <div id="TeacherImage" className="relative overflow-hidden">
        <img
          src={pictureAddress ? pictureAddress : SampleImg}
          alt=""
          className="w-300 h-250 object-fill rounded-[1rem] hover:shadow-md"
        />
        <div
          className="HoverBox w-full h-full 
        bg-black/40 absolute top-0 rounded-[1rem] hidden"
        >
          <div
            className="flex-row-all-center mt-16 cursor-pointer
          "
          >
            <img src={LinkImg} alt="" className="w-[30%]" />
          </div>
        </div>
      </div>
      <h3 className="f-bold text-lg mt-2 opacity-95">
        {fullName ? fullName : "ی بابایی"}
      </h3>
    </div>
  );
};
export { LandingTeachersSection };
