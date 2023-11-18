import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNewsComments } from "../../../Core/Services/Api/Articles/getNewsComments";

const ArticleCards = ({ data }) => {
  const {
    id,
    title,
    miniDescribe,
    keyword,
    currentRate,
    currentView,
    currentLikeCount,
    currentImageAddressTumb,
    insertDate,
    updateDate,
    addUserFullName,
    newsCatregoryId,
    newsCatregoryName,
    currentUserIsLike,
  } = data;

  const [commentsCount, setCommetCount] = useState(0);

  const getCommetsCount = async () => {
    const res = await getNewsComments(id);
    setCommetCount(res.length);
  };
  useEffect(() => {
    getCommetsCount();
  }, []);
  return (
    <Link to={`/ArticleAndNewsDetail?articleId=${id}`} className="f-bold">
      <div className="cardsDefaultSettings w-300 space-y-3">
        <div className="w-full relative  h-36">
          <img
            src={currentImageAddressTumb}
            className="rounded-lg w-full h-full"
            alt=""
          />
          <p
            className="absolute bottom-10
          bg-lightGray text-sm f-bold py-1 pl-4 px-2 text-grayDetail rounded-l-xl"
          >
            #{newsCatregoryName}
          </p>
        </div>
        <div className="flex-row-all-center justify-between h-14">
          <h1 className="f-bold w-3/5 ">{title}</h1>
          <p className="flex-row-all-center gap-2">
            <div className="flex-row-all-center flex-row-reverse">
              <i className="fi fi-rr-comment"></i>
              <span className="text-sm ml-1">{commentsCount}</span>
            </div>
            <div className="flex-row-all-center flex-row-reverse ">
              <i className="fi fi-rr-star"></i>
              <span className="text-sm ml-1">{currentRate}</span>
            </div>
          </p>
        </div>
        <div className="flex-row-all-center justify-between">
          <div className="flex-row-all-center">
            <img
              src="./../Img/avatar1.jpg"
              className="w-10 rounded-full border-black border-solid border-2"
              alt=""
            />
            <p className="text-[15px] mr-1">{addUserFullName}</p>
          </div>
          <p className="text-[13px] opacity-60">{date}</p>
        </div>
        <div className="w-[90%] h-1 bg-divider/30 mx-auto"></div>
        <p className="!mb-3 text-bluePrimary ">مشاهده ی کامل مقاله...</p>
      </div>
    </Link>
  );
};

export { ArticleCards };
