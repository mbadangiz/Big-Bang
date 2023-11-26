import { useState } from "react";
import Rating from "react-rating";
import rateArticles from "../../../../../Core/Services/Api/ArticleDetails/rateArticles";

const ArticleRating = ({ newsId }) => {
  const [rate, setRate] = useState(0);
  const rateHandler = async (value) => {
    setRate(value);
    const res = await rateArticles(newsId, value);
    console.log(res);
  };
  return (
    <div className="artcileDeailtCardsSettings flex-row-all-center justify-between">
      <p className="f-semiBold">چه امتیازی برای این مقاله میدهید؟</p>
      <div className="flex-row-all-center">
        {rate ? <span> 5 / {rate} </span> : ""}
        <Rating
          className="mx-2"
          initialRating={rate}
          start={0}
          stop={5}
          step={1}
          emptySymbol={
            <i className="ml-1 fi fi-rr-star  text-lg relative top-0.5  opacity-50"></i>
          }
          fullSymbol={
            <i className="ml-1 fi fi-sr-star text-lg  text-yellow-400 relative top-0.5"></i>
          }
          onChange={rateHandler}
        />
      </div>
    </div>
  );
};

export { ArticleRating };
