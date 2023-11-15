import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";
import { useState } from "react";
import { useEffect } from "react";
import { getTeachersList } from "../../../../Core/Services/Api/Landing/GetTeacherList";

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
      <img
        src={pictureAddress}
        alt=""
        className="w-300 h-280 object-fill rounded-md hover:shadow-md "
      />
      <h3 className="f-bold text-lg mt-2 opacity-95">{fullName}</h3>
    </div>
  );
};
export { LandingTeachersSection };
