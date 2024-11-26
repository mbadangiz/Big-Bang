import { Element } from "react-scroll";
import Image from "./../../../../Assets/Image/sampleImage.png";
import { ArticleCommets } from "./ArticleCommets/ArticleCommets";
import { ArticleSharing } from "./ArticleSharing/ArticleSharing";
import { ArticleTextContets } from "./ArticleTextContets/ArticleTextContets.jsx";
import { TagsContainer } from "./TagsContainer/TagsContainer.jsx";
import { SimilarArticles } from "./SimilarArticles/SimilarArticles";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ArticleDetails from "../../../../Core/Services/Api/ArticleDetails/ArticleDetails.js";
import { useMyArticleDetails } from "../../../../Core/Providers/ArticleDetailsProvider.jsx";
import PleaseWait from "../../../Common/PleaseWait/PleaseWait.jsx";
import { makeDatePersian } from "../../../../Core/Utils/MakeDatePersian/MakeDatePersian.js";
import SampleAvatar from "./../../../../Assets/Image/smapleAvatar.png";
import { ArticleRating } from "./ArticleRating/ArticleRating.jsx";
import { LikeAndAddToFavArticles } from "./LikeAndAddToFavArticles/LikeAndAddToFavArticles.jsx";
export const pageUrl = window.location.href;
//
const ArticleMainContents = () => {
  const [params] = useSearchParams();
  const { articleDetails, setArticleDetails } = useMyArticleDetails();

  const articleId = params.get("articleId");

  const getArticleDetails = async () => {
    const res = await ArticleDetails(articleId);
    setArticleDetails(res);
  };
  useEffect(() => {
    getArticleDetails();
  }, []);

  return (
    <div className="w-full md:w-[70%] space-y-5">
      {articleDetails ? (
        <>
          <Element name="article" className="artcileDeailtCardsSettings">
            <ArticleMainHead data={articleDetails} />
            <div className="w-full h-1 bg-black/5 rounded-full my-8"></div>
            <ArticleMainBody data={articleDetails} />
          </Element>
          <LikeAndAddToFavArticles newsId={articleId} data={articleDetails} />
          <ArticleRating newsId={articleId} />
          <ArticleCommets newsId={articleId} data={articleDetails} />
        </>
      ) : (
        <PleaseWait />
      )}
    </div>
  );
};
const ArticleMainHead = ({ data }) => {
  const { articleExtraData, setArticleExtraData } = useMyArticleDetails();

  const commentCount = data.commentDtos;
  const { title, addUserFullName, currentRate, currentView, updateDate } =
    data.detailsNewsDto;

  console.log("articleExtraData is : ", articleExtraData);
  return (
    <div className="w-full flex-row-all-center justify-between">
      <div className="flex-row-all-center gap-5">
        <img
          src={SampleAvatar}
          className="w-24 rounded-full outline-4 outline-bluePrimary outline p-0.5"
          alt=""
        />
        <div className="space-y-5">
          <h2 className="f-bold text-lg">{title}</h2>
          <h4 className="text-sm opacity-70">{addUserFullName}</h4>
        </div>
      </div>
      <div className="opacity-70 space-y-5 text-left">
        <div className="space-x-4">
          <span className="space-x-2">
            <i className="fi fi-sr-comment"></i>
            <span>{commentCount.length}</span>
          </span>
          <span className="space-x-2">
            <i className="fi fi-sr-star"></i>
            <span>{currentRate}</span>
          </span>
          <span className="space-x-2">
            <i className="fi fi-sr-eye"></i>
            <span>{currentView}</span>
          </span>
        </div>
        <p className="text-sm" dir="rtl">
          <span className="text-grayDetail/80"> (آخرین به روز رسانی ) </span>
          <span>{makeDatePersian(updateDate)}</span>
        </p>
      </div>
    </div>
  );
};

const ArticleMainBody = ({ data }) => {
  const { currentImageAddress } = data.detailsNewsDto;

  const TagsList = ["تگ 1", "تگ 2", "تگ 3", "تگ 4"];
  return (
    <div className="w-full">
      <img
        src={currentImageAddress ? currentImageAddress : Image}
        className="h-400 rounded-lg mx-auto"
        alt=""
      />
      <ArticleTextContets data={data} />
      <TagsContainer TagsList={TagsList} />
      <ArticleSharing />
    </div>
  );
};

export { ArticleMainContents };
