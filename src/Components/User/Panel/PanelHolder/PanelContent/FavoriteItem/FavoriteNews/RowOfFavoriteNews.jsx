import React from "react";
import { useState } from "react";
import { GetCourseDetails } from "../../../../../../../Core/Services/Api/CourseDetails/GetCourseDetail";
import { useEffect } from "react";
import { GetNewsDetails } from "../../../../../../../Core/Services/Api/Course/UserPanel/GetNewsDetail";

export const RowOfFavoriteNews = ({ data }) => {
  const [FavoriteNews, setFavNews] = useState();
  const getFavoriteNews = async () => {
    const FavNews = await GetNewsDetails(data);
    setFavNews(FavNews);
  };

  useEffect(() => {
    getFavoriteNews();
  }, []);

  console.log(FavoriteNews);

  return (
    <>
      {FavoriteNews ? (
        <>
          <tr className="bg-[#E8ECF1] text-[#5E5E64] hover:bg-[#bac1c9]/30 ">
            <td className="px-6 py-4">{FavoriteNews.detailsNewsDto.title}</td>
            <td className="px-6 py-4">
              {FavoriteNews.detailsNewsDto.addUserFullName}
            </td>
            <td className="px-6 py-4">
              {FavoriteNews.detailsNewsDto.currentLikeCount}
            </td>
            <td className="px-6 py-4">
              {FavoriteNews.detailsNewsDto.currentView}
            </td>
            <td className="px-6 py-4">
              {FavoriteNews.detailsNewsDto.newsCatregoryName}
            </td>
            <td className="px-6 py-4">
              {FavoriteNews.detailsNewsDto.currentRate}
            </td>
            <td className="px-6 py-4">
              <button
                type="submit"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <i className="fi fi-rr-minus-circle"></i>
              </button>
            </td>
          </tr>
        </>
      ) : (
        ""
      )}
    </>
  );
};
