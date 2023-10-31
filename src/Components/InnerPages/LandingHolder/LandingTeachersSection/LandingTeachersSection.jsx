import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";

const LandingTeachersSection = () => {
  const teacherList = [
    {
      id: 1,
      fullName: "یه بابایی",
      occupation: "یه چیزایی بلده داداشمون",
      img: "img-sampleMasters.png",
    },
    {
      id: 2,
      fullName: "یه بابایی",
      occupation: "یه چیزایی بلده داداشمون",
      img: "img-sampleMasters.png",
    },
    {
      id: 3,
      fullName: "یه بابایی",
      occupation: "یه چیزایی بلده داداشمون",
      img: "img-sampleMasters.png",
    },
    {
      id: 4,
      fullName: "یه بابایی",
      occupation: "یه چیزایی بلده داداشمون",
      img: "img-sampleMasters.png",
    },
  ];
  return (
    <div className="width-handler my-10 space-y-9">
      <LandingSectionsTitle
        mainText="پربازدید ترین اساتید"
        subText="اساتید برجسته آکادمی با چندین سال تجربه در کنار شما خواهند بود"
      />
      <div
        className="w-full lg:h-375 bg-gradient-to-t rounded-[50px]
        flex-row-all-center gap-10 from-blueGray to-graySilver  
        border-solid border-[0.5px] border-blueGray/20"
      >
        {teacherList.map((teacher) => (
          <TeachersCard data={teacher} key={teacher.id} />
        ))}
      </div>
    </div>
  );
};
const TeachersCard = ({ data }) => {
  const { id, fullName, occupation, img } = data;
  return (
    <div
      className="w-[250px] h-[290px] flex flex-row flex-wrap justify-end 
      items-end content-end relative top-4 text-white"
    >
      <div
        className="w-3/5 h-4/6 relative top-20  rounded-[50px] border-[3px] border-solid
        border-bluePrimary overflow-hidden  "
      >
        <img src={`./Img/${img}`} className="w-full " alt="" />
      </div>
      <div className="w-full h-4/6 bg-bluePrimary  rounded-[50px]  pt-[84px] px-3 text-center space-y-2">
        <h2 className="f-bold text-lg"> {fullName}</h2>
        <p className="opacity-75 text-sm">{occupation}</p>
      </div>
    </div>
  );
};
export { LandingTeachersSection };
