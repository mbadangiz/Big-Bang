import { useEffect, useState } from "react";
import { ArticleThereIsNoCommets } from "../ArticleThereIsNoCommets/ArticleThereIsNoCommets";
import { ArticleShowAllComments } from "../ArticleShowAllComments/ArticleShowAllComments";
import { ArticleRegisterNewComment } from "../ArticleRegisterNewComment/ArticleRegisterNewComment";

const ArticleCommets = ({ data, newsId }) => {
  console.log(newsId);
  const [commetStatus, setCommetStatus] = useState(0);
  const { commentDtos } = data;
  useEffect(() => {
    if (commentDtos.length === 0) setCommetStatus(0);
    else setCommetStatus(2);
  }, []);
  return (
    <>
      {commetStatus === 0 ? (
        <ArticleThereIsNoCommets ClickHandler={() => setCommetStatus(1)} />
      ) : commetStatus === 1 ? (
        <>
          <ArticleRegisterNewComment newsId={newsId} />
        </>
      ) : commetStatus === 2 ? (
        <>
          <ArticleRegisterNewComment newsId={newsId} />
          <ArticleShowAllComments data={commentDtos} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export { ArticleCommets };
