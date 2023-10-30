import { ArticleNewsCourseAside } from "./ArticleNewsCourseAside/ArticleNewsCourseAside";
import { ArticleNewsCourseContents } from "./ArticleNewsCourseContents/ArticleNewsCourseContents";

const index = ({ aside, mainContents }) => {
  return (
    <div className="width-handler my-4 flex-row-all-center items-start ">
      <ArticleNewsCourseAside>{aside}</ArticleNewsCourseAside>
      <ArticleNewsCourseContents>{mainContents}</ArticleNewsCourseContents>
    </div>
  );
};

export default index;
