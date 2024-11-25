import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getNewsComments } from "../../../Core/Services/Api/Articles/getNewsComments";
import { makeDatePersian } from "../../../Core/Utils/MakeDatePersian/MakeDatePersian";
import { useMyArticleDetails } from "../../../Core/Providers/ArticleDetailsProvider";

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
    addUserProfileImage,
    newsCatregoryId,
    newsCatregoryName,
    currentUserIsLike,
    likeId,
    isCurrentUserFavorite,
    currentUserFavoriteId,
    totalCount,
  } = data;

  const [commentsCount, setCommetCount] = useState(0);
  const { articleExtraData, setArticleExtraData } = useMyArticleDetails();

  const getCommetsCount = async () => {
    const res = await getNewsComments(id);
    setCommetCount(res.length);
  };
  useEffect(() => {
    getCommetsCount();
  }, []);
  const navigate = useNavigate();
  console.log(articleExtraData);
  Theme;
  return (
    <div
      className="cardsDefaultSettings w-300 space-y-3"
      onClick={() => {
        setTimeout(() => {
          setArticleExtraData(addUserProfileImage);
          navigate(`/ArticleAndNewsDetail?articleId=${id}`);
        }, 1000);
      }}
    >
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
        <h1 className="f-bold w-[70%] makeTextNoWrap">{title}</h1>
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
      <div className="flex-row-all-center justify-between ">
        <div className="flex-row-all-center justify-start   w-3/5">
          <img
            src={addUserProfileImage}
            className="w-9 h-9 rounded-full border-bluePrimary border-solid border-2"
            alt=""
          />
          <p className="text-[14px] mr-1 w-[75%] textNoWrap ">
            {addUserFullName}
          </p>
        </div>
        <p className="text-[13px] opacity-60">{makeDatePersian(insertDate)}</p>
      </div>
      <div className="w-[90%] h-1 bg-divider/30 mx-auto"></div>
      <p className="!mb-3 text-bluePrimary f-bold">مشاهده ی کامل مقاله...</p>
    </div>
  );
};

export { ArticleCards };
