import ArticleListProvider from "../../../Core/Providers/ArticleListProvider";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { ArticleNewsCourseAside } from "./ArticleNewsCourseAside/ArticleNewsCourseAside";
import { ArticleNewsCourseContents } from "./ArticleNewsCourseContents/ArticleNewsCourseContents";

const index = ({ aside, mainContents, ControlData, data }) => {
  return (
    <>
      <div className="text-center">
        <SearchBar ControlData={ControlData} data={data} />
      </div>
      <div className="width-handler my-4 flex-row-all-center items-start ">
        <ArticleNewsCourseAside>{aside}</ArticleNewsCourseAside>
        <ArticleNewsCourseContents>{mainContents}</ArticleNewsCourseContents>
      </div>
    </>
  );
};

export default index;
