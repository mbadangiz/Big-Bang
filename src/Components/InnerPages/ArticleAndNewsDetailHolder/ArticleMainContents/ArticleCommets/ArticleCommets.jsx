import { useState } from "react";
import { ArticleThereIsNoCommets } from "../ArticleThereIsNoCommets/ArticleThereIsNoCommets";
import { ArticleShowAllComments } from "../ArticleShowAllComments/ArticleShowAllComments";
import { ArticleRegisterNewComment } from "../ArticleRegisterNewComment/ArticleRegisterNewComment";

const ArticleCommets = () => {
  const [commetStatus, setCommetStatus] = useState(0);
  return (
    <>
      {commetStatus === 0 ? (
        <ArticleThereIsNoCommets ClickHandler={() => setCommetStatus(2)} />
      ) : commetStatus === 1 ? (
        <>
          <ArticleRegisterNewComment />
        </>
      ) : commetStatus === 2 ? (
        <>
          <ArticleRegisterNewComment />
          <ArticleShowAllComments />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export { ArticleCommets };
