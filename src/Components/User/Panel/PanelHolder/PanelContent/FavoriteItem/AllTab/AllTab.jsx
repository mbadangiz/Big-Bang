import React from "react";
import { useState } from "react";
import { FavoriteCourse } from "../FavoriteCourse/FavoriteCourse";
import { FavoriteNews } from "../FavoriteNews/FavoriteNews";

const AllTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { id: 0, title: "دوره های مورد علاقه", content: <FavoriteCourse /> },
    { id: 1, title: " مقالات مورد علاقه ", content: <FavoriteNews /> },
  ];
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="p-4">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2  rounded-md  m-1 ${
                activeTab === tab.id ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {tabs.map((tab) => (
            <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { AllTab };
