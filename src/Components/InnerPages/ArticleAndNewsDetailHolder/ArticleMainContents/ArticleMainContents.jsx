import Image from "./../../../../Assets/Image/sampleImage.png";
import { ArticleCommets } from "./ArticleCommets/ArticleCommets";
import { ArticleSharing } from "./ArticleSharing/ArticleSharing";
import { ArticleTextContets } from "./ArticleTextContets/ArticleTextContets.jsx";
import { ArticleThereIsNoCommets } from "./ArticleThereIsNoCommets/ArticleThereIsNoCommets";
import { TagsContainer } from "./TagsContainer/TagsContainer.jsx";
export const pageUrl = window.location.href;
//
const ArticleMainContents = () => {
  const commetCount = 0;
  return (
    <div className="w-[70%] space-y-5">
      <div className="artcileDeailtCardsSettings">
        <ArticleMainHead />
        <div className="w-full h-1 bg-black/5 rounded-full my-8"></div>
        <ArticleMainBody />
      </div>
      <ArticleCommets />
    </div>
  );
};
const ArticleMainHead = () => {
  return (
    <div className="w-full flex-row-all-center justify-between">
      <div className="flex-row-all-center gap-5">
        <img
          src="./../Img/avatar1.jpg"
          className="w-24 rounded-full outline-4 outline-bluePrimary outline p-0.5"
          alt=""
        />
        <div className="space-y-5">
          <h2 className="f-bold text-lg">عنوان مقاله</h2>
          <h4 className="text-sm opacity-70">محمد بادانگیز</h4>
        </div>
      </div>
      <div className="opacity-70 space-y-5 text-left">
        <div className="space-x-4">
          <span className="space-x-2">
            <i className="fi fi-sr-comment"></i>
            <span>23</span>
          </span>
          <span className="space-x-2">
            <i className="fi fi-sr-star"></i>
            <span>2.3</span>
          </span>
        </div>
        <p className="text-sm">29 شهریور 1402</p>
      </div>
    </div>
  );
};

const ArticleMainBody = () => {
  const TagsList = ["تگ 1", "تگ 2", "تگ 3", "تگ 4"];
  return (
    <div className="w-full">
      <img src={Image} className="h-350 rounded-lg mx-auto" alt="" />
      <ArticleTextContets />
      <TagsContainer TagsList={TagsList} />
      <ArticleSharing />
    </div>
  );
};

export { ArticleMainContents };
