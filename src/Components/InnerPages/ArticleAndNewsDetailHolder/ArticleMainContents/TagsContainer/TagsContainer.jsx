const TagsContainer = ({ TagsList }) => {
  return (
    <div className="flex-row-all-center justify-start my-5 gap-4">
      {TagsList.map((items, index) => {
        return <Tags text={items} key={index} />;
      })}
    </div>
  );
};
const Tags = ({ text }) => {
  return (
    <div className="text-[#333333]/80 cursor-pointer rounded-lg bg-graySilver h-9 flex-row-all-center px-5 py-0">
      #{text}
    </div>
  );
};
export { TagsContainer };
