import { Element } from "react-scroll";
import { CommentTree } from "../../../../Common/CommentTree/CommentTree";

const ArticleShowAllComments = ({ data }) => {
  return (
    <Element name="allComments" className="artcileDeailtCardsSettings">
      {data.map((items) => {
        return <CommentTree data={items} section="news" />;
      })}
    </Element>
  );
};

export { ArticleShowAllComments };
