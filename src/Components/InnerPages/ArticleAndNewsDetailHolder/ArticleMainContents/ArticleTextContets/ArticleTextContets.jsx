export const ArticleTextContets = ({ data }) => {
  const { googleTitle, miniDescribe, describe } = data.detailsNewsDto;
  return (
    <div>
      <h2 className="text-lg f-bold my-4">{googleTitle}</h2>
      <p className="text-sm text-justify leading-6 opacity-70 mb-5">
        {miniDescribe}...
      </p>
      <div className="w-full mb-10">
        <p className="text-sm text-justify leading-7 opacity-90">{describe}</p>
      </div>
    </div>
  );
};
