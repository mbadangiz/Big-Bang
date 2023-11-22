import React from "react";
import { Tags } from "../../../../Common/Tages/Tages";
import { useMyCourseDetail } from "../../../../../Core/Providers/CourseDetailProvider";
import { useMyCourses } from "../../../../../Core/Providers/CourseListProvider";
import { useEffect } from "react";
import { GetCategoryList } from "../../../../../Core/Services/Api/Course/GetCategoryList";
import { useState } from "react";
import { forEach } from "lodash";

const PopularTag = () => {
  const { techList, setTechList } = useMyCourses();
  // const { techs } = useMyCourseDetail().courseDetails;
  const techs = ["BackEnd", "C#"];
  const [courseTechs, setCourseTechs] = useState([]);

  const cateGetter = async () => {
    const res = await GetCategoryList();
    setCourseTechs(res);
  };

  const setTechListForSearch = async () => {
    const filteredItems = courseTechs.filter((items) => {
      forEach(techs, (it) => {
        return items.techName === it;
      });
    });
    console.log(filteredItems);
  };

  useEffect(() => {
    cateGetter();
    setTechListForSearch();
  }, []);

  console.log(techList);
  return (
    <div className="bg-white  ">
      <div className="f-bold text-[20px] pt-3 pb-4 px-3 bg-gray-200/60">
        دسته بندی های مرطبت
      </div>
      <div className="bg-white py-3  px-3">
        {techs.map((tags, index) => {
          return <Tags key={index} text={tags} />;
        })}
      </div>
    </div>
  );
};

export { PopularTag };
