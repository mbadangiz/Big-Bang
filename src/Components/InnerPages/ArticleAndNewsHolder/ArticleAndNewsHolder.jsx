import { useEffect } from "react";
import { ArticleCards } from "../ArticleCards/ArticleCards";
import ArticleNewsCourseLayout from "../ArticleNewsCourseLayout/";
import { useArticleData } from "../../../Core/Providers/ArticleListProvider";
import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { Tags } from "../../Common/Tages/Tages";

const ArticleAndNewsHolder = () => {
  const { articleData, setArticleData } = useArticleData();

  useEffect(() => {
    document.body.style.background = "#F5F7FA";
  }, []);

  return (
    <ArticleNewsCourseLayout
      ControlData={setArticleData}
      data={articleData}
      aside={<ArticleFilters />}
      mainContents={<ArticleMainContent data={articleData} />}
    />
  );
};

const ArticleMainContent = ({ data }) => {
  return (
    <>
      {data.map((items) => {
        return <ArticleCards key={items.id} data={items} />;
      })}
    </>
  );
};
const CUSTOM_ANIMATION = {
  mount: { heigh: 100 },
  unmount: { heigh: 0 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const ArticleFilters = () => {
  const [openAcc1, setOpenAcc1] = useState(true);
  const [openAcc2, setOpenAcc2] = useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const TagsList = ["تگ 1", "تگ 2", "تگ 3", "تگ 4"];
  return (
    <>
      <Accordion
        open={openAcc1}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={handleOpenAcc1}
          className="w-full text-base px-4 rounded-t-lg"
        >
          فیلتر بر اساس تگ
        </AccordionHeader>
        <AccordionBody className="w-full text-base px-2"></AccordionBody>
      </Accordion>
      <Accordion
        open={openAcc2}
        animate={CUSTOM_ANIMATION}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          onClick={handleOpenAcc2}
          className="w-full text-base px-4 rounded-b-lg"
        >
          تگ های محبوب
        </AccordionHeader>
        <AccordionBody className="w-full">
          <div className="w-full text-base px-2 flex-row-all-center justify-start gap-2">
            {TagsList.map((items, index) => {
              return <Tags text={items} key={index} extraClass="!bg-white" />;
            })}
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};
export { ArticleAndNewsHolder };
