import { Element } from "react-scroll";
import ThereIsNoCommet from "../../../../Common/ThereIsNoCommet/ThereIsNoCommet";
const ArticleThereIsNoCommets = ({ ClickHandler }) => {
  const text = `متاسفانه تا کنون هیچ دیدگاهی برای این مقاله ثبت نشده است، برای ثبت
  دیدگاه جدید بر روی ایتم زیر کلیک کنید`;
  return (
    <Element
      name="newComment"
      className="artcileDeailtCardsSettings text-center"
    >
      <ThereIsNoCommet ClickHandler={ClickHandler} text={text} />
    </Element>
  );
};

export { ArticleThereIsNoCommets };
