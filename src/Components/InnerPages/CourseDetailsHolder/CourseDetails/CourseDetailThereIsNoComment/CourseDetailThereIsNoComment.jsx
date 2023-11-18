import { Element } from "react-scroll";
import ThereIsNoCommet from "../../../../Common/ThereIsNoCommet/ThereIsNoCommet";

const CourseDetailThereIsNoComment = ({ clickHandler }) => {
  return (
    <Element className="artcileDeailtCardsSettings text-center">
      <ThereIsNoCommet
        ClickHandler={clickHandler}
        text={"تا کنون هیچ دیدگاهی برای دوره ی مورد نظر ثبت نشده است..."}
      />
    </Element>
  );
};

export default CourseDetailThereIsNoComment;
