import { useEffect } from "react";
import { Link as RSLink } from "react-scroll";
const ArticlGuide = () => {
  const GuidList = [
    { id: 1, title: "مقاله", path: "article" },
    { id: 2, title: "ثبت دیدگاه جدید", path: "newComment" },
    { id: 3, title: "دیدگاه ها", path: "allComments" },
    { id: 4, title: "مقالات مشابه", path: "similarArticles" },
  ];
  return (
    <div
      className="w-1/4 sticky top-[100px] border-solid border-2
       border-grayDetail/20 px-4 py-3 rounded-lg"
    >
      <h1 className="f-bold">راهنمای مقاله</h1>
      <div className="space-y-1.5 pt-1.5">
        {GuidList.map((items) => {
          return <ArticlePartsLinks key={items.id} data={items} />;
        })}
      </div>
    </div>
  );
};

export { ArticlGuide };

function ArticlePartsLinks({ data }) {
  const { id, title, path } = data;
  return (
    <RSLink
      activeClass="opacity-100"
      className="text-base"
      smooth={true}
      spy={true}
      to={path}
      offset={-90}
    >
      <div className="flex-row-all-center justify-start gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-75">
        <div className="w-3 h-3 bg-black/50"></div>
        <div>{title}</div>
      </div>
    </RSLink>
  );
}
