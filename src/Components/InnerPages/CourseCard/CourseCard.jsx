import { Link } from "react-router-dom";
import { TomanLogo } from "../../Common/TomanLogo/TomanLogo";

const CourseCard = ({ data }) => {
  const {
    id,
    imgPath,
    courseTitle,
    courseDesc,
    courseMaster,
    courseParticipants,
    courseStatus,
    coursePrice,
  } = data;
  return (
    <Link to={`/CoursesDetails?courseId=${id}`}>
      <div className="cardsDefaultSettings space-y-2.5  w-300">
        <img src={imgPath} className="w-full rounded-xl " alt="" />
        <h3 className="f-semiBold text-textBlack text-base   text-center">
          {courseTitle}
        </h3>
        <p className="text-textBlack/50 text-sm">{courseDesc}</p>
        <SubjectiveText subject="استاد دوره" subjectText={courseMaster} />
        <SubjectiveText
          subject="تعداد شرکت کننده ها"
          subjectText={courseParticipants}
        />
        <SubjectiveText subject="وضعیت دوره" subjectText={courseStatus} />
        <div className="flex-row-all-center justify-between">
          <div className="flex-row-all-center gap-x-1 w-max">
            <p className="f-bold relative top-1 text-bluePrimary">
              {coursePrice}
            </p>
            <TomanLogo />
          </div>
          <div>
            <i className="fi fi-sr-star relative top-[2.5px] mr-2"></i>{" "}
            <span>2.5</span>
          </div>
        </div>
        {/* <div className="w-full h-1 bg-textBlack/20 rounded-xl"></div>
        <div>
          <Link
            to="#"
            className="text-bluePrimary/80 hover:text-bluePrimary/100 transition-all duration-100 f-bold my-4"
          >
            مشاهده ی کامل اطلاعات دوره...
          </Link>
        </div> */}
      </div>
    </Link>
  );
};

const SubjectiveText = ({ subject, subjectText }) => {
  return (
    <p className="text-sm">
      <span className="f-semiBold">{subject}</span> :{" "}
      <span className="text-textBlack/90">{subjectText}</span>
    </p>
  );
};

export { CourseCard };
