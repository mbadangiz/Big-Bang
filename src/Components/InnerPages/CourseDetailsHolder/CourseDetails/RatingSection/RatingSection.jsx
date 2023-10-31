import React, { useState, Component } from "react";
import { RatingComponent } from "react-rating-emoji";
import "react-rating-emoji/dist/index.css";

const RatingSection = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="shadow-md rounded-[12px] mb-4">
      <div className="p-3">
        <RatingComponent rating={rating} onClick={handleRating} />{" "}
      </div>
    </div>
  );
};

export { RatingSection };
