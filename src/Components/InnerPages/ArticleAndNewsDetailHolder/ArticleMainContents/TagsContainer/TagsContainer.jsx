import { Tags } from "../../../../Common/Tages/Tages";

const TagsContainer = ({ TagsList }) => {
  return (
    <div className="flex-row-all-center justify-start my-5 gap-4">
      {TagsList.map((items, index) => {
        return <Tags text={items} key={index} />;
      })}
    </div>
  );
};

export { TagsContainer };
