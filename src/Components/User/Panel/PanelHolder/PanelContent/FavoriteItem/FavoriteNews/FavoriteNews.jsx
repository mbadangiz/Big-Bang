import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { RowOfFavoriteNews } from "./RowOfFavoriteNews";
import { GetFavoriteNews } from "../../../../../../../Core/Services/Api/UserPanel/GetFavoriteNews";

const FavoriteNews = () => {
  const [FavNews, setFavoriteNews] = useState();

  const GetFavorite = async () => {
    const FavoriteNewss = await GetFavoriteNews();
    setFavoriteNews(FavoriteNewss);
  };

  console.log(FavNews);

  useEffect(() => {
    GetFavorite();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-100">
        <table className="w-full text-base text-center text-gray-500 dark:text-gray-400">
          <thead className="text-base text-white uppercase bg-bluePrimary">
            <tr>
              <th scope="col" className="px-6 py-3">
                نام دوره
              </th>
              <th scope="col" className="px-6 py-3">
                نویسنده مقاله
              </th>

              <th scope="col" className="px-6 py-3">
                تعداد لایک
              </th>
              <th scope="col" className="px-6 py-3">
                تعداد بازدید
              </th>
              <th scope="col" className="px-6 py-3">
                گروه
              </th>
              <th scope="col" className="px-6 py-3">
                نمره مقاله
              </th>

              <th scope="col" className="px-6 py-3">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {FavNews
              ? FavNews.myFavoriteNews.map((favorite) => {
                  return (
                    <>
                      <RowOfFavoriteNews data={favorite.newsId} />
                    </>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { FavoriteNews };
