import { Element } from "react-scroll";
import { BlueButton } from "../../../../Common/Buttons/BlueButton";
import ThereIsNoCommentImage from "./../../../../../Assets/Image/thereisnocomment.png";
const ArticleThereIsNoCommets = ({ ClickHandler }) => {
  return (
    <Element
      name="newComment"
      className="artcileDeailtCardsSettings text-center"
    >
      <img src={ThereIsNoCommentImage} className="mx-auto " alt="" />
      <p className="mb-5">
        متاسفانه تا کنون هیچ دیدگاهی برای این مقاله ثبت نشده است، برای ثبت
        دیدگاه جدید بر روی ایتم زیر کلیک کنید
      </p>
      <BlueButton
        buttonText={
          <>
            <i className="fi fi-sr-comment-check relative top-0.5"></i>
            <span className="mx-2">ثبت دیدگاه جدید</span>
          </>
        }
        type={"button"}
        ClickHandler={ClickHandler}
      />
    </Element>
  );
};

export { ArticleThereIsNoCommets };
