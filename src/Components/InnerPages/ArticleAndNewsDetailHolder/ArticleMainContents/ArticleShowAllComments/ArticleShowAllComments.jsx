import { Element } from "react-scroll";
import { CommentTree } from "../../../../Common/CommentTree/CommentTree";

const ArticleShowAllComments = () => {
  return (
    <Element name="allComments" className="artcileDeailtCardsSettings">
      <CommentTree />
    </Element>
  );
};

export { ArticleShowAllComments };
