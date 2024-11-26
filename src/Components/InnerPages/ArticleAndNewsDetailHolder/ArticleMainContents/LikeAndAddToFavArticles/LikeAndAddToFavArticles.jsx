import { useState } from "react";
import { likeArticles } from "../../../../../Core/Services/Api/ArticleDetails/likeArticles";
import addToFavArticles from "../../../../../Core/Services/Api/ArticleDetails/addToFavArticles";
import { SuccessToastify } from "../../../../../Core/Utils/Toastifies/SuccessToastify.Utils";

const LikeAndAddToFavArticles = ({ newsId, data }) => {
  const { currentLikeCount, currentUserIsLike, isCurrentUserFavorite } =
    data.detailsNewsDto;
  const [prevLikeCount, setPrevLikeCount] = useState(currentLikeCount);
  const [isUserLiked, setIsUserLiked] = useState(currentUserIsLike);
  const [favId, setFavId] = useState(false);

  const [isUserFav, setIsUserFav] = useState(isCurrentUserFavorite);

  const articleLikeHandler = async () => {
    const res = await likeArticles(newsId, false);
    if (res.message) {
      setIsUserLiked(!isUserLiked);
      setPrevLikeCount((prev) => prev + 1);
    }
  };
  const addToFavListArticles = async () => {
    const res = await addToFavArticles(newsId);
    console.log(res);

    if (res.success) {
      setIsUserFav(!isUserFav);
      SuccessToastify("مقاله ی مورد نظر به لیست علاقه مندی ها اضافه شد.");
    }
  };
  return (
    <div className="artcileDeailtCardsSettings flex-row-all-center justify-between">
      <div className="flex-row-all-center justify-between">
        <h2
          className="f-bold text-center w-max opacity-90 cursor-pointer"
          onClick={addToFavListArticles}
        >
          <i className="fi fi-sr-calendar-star relative text-xl top-1 ml-2"></i>
          {isUserFav
            ? "حذف از لیست علاقه مندی ها"
            : "افزودن به لیست علاقه مندی ها"}
        </h2>
      </div>
      <div className="flex-row-all-center justify-between">
        <p className="f-semiBold"> ایا این مقاله مورد پسند شما بود؟</p>
        <div className="flex-row-all-center gap-5 mr-2">
          {/* <button className="w-20 h-10 flex-row-all-center bg-graySilver  rounded">
          خیر
        </button>
        <button className="w-20 h-10 flex-row-all-center bg-rose-500 text-white rounded ">
          بله
        </button> */}
          <div className="flex-row-all-center  gap-3">
            <div
              className="flex-row-all-center gap-1 cursor-pointer"
              onClick={articleLikeHandler}
            >
              <span className="text-lg ">{prevLikeCount}</span>
              {isUserLiked ? (
                <i className="text-rose-500 text-2xl fi fi-rr-social-network relative top-1"></i>
              ) : (
                <i className="text-2xl fi fi-rr-social-network relative top-1"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LikeAndAddToFavArticles };
