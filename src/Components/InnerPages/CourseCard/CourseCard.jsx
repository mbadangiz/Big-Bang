import { Link } from "react-router-dom";
import { TomanLogo } from "../../Common/TomanLogo/TomanLogo";
import { ThreeNumberSpiliter } from "../../../Core/Utils/ThreeNumberSpiliter/ThreeNumberSpiliter";

const CourseCard = ({ data }) => {
  const {
    teacherName,
    classRoomName,
    statusName,
    levelName,
    cost,
    currentRegistrants,
    likeCount,
    commandCount,
    userIsLiked,
    userFavorite,
    courseRate,
    title,
    describe,
    tumbImageAddress,
    lastUpdate,
    courseId,
    technologyList,
  } = data;
  return (
    <Link to={`/CoursesDetails?courseId=${courseId}`}>
      <div className="cardsDefaultSettings space-y-4  w-300 hover:translate-y-[-5px]">
        <img
          src={tumbImageAddress}
          className="w-full h-40 rounded-xl object-cover "
          alt={title}
        />
        <h3 className="f-semiBold text-textBlack text-base ">{title}</h3>
        <div className="flex-row-all-center justify-start gap-2">
          <SubjectiveText icon="fi fi-sr-chalkboard-user" val={teacherName} />
          <SubjectiveText icon="fi fi-sr-graduation-cap" val={12} />
          <div
            className={`${
              statusName === "درحال برگذاری" ? "bg-green-300" : "bg-rose-300"
            } flex-row-all-center gap-2 w-max text-sm px-3 py-2 rounded`}
          >
            {statusName}
          </div>
        </div>
        <div className="flex-row-all-center justify-between">
          <div className="flex-row-all-center gap-x-1 w-max">
            <p className="f-bold text-lg relative top-1 text-bluePrimary">
              {ThreeNumberSpiliter(cost)}
            </p>
            <TomanLogo />
          </div>
          <div>
            <i className="fi fi-sr-star relative top-[2.5px] mr-2"></i>{" "}
            <span>{courseRate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SubjectiveText = ({ icon, val }) => {
  return (
    <div className="flex-row-all-center gap-2 w-max text-sm bg-graySilver text-grayDetail h-10 px-2 rounded">
      <i className={`text-xl relative top-0.5 ${icon}`}></i>
      <span className="text-textBlack/90">{val}</span>
    </div>
  );
};

export { CourseCard };
