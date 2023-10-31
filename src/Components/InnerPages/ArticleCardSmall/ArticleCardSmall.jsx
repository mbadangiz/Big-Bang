const ArticleCardSmall = ({ data }) => {
  const { id, img, articleTitle, date } = data;
  return (
    <div
      className="cardsDefaultSettings w-280 h-[200px] shadow-none  
        border-2 border-gray-400/50 border-solid mx-auto p-0 space-y-0  !rounded-t-[20px]"
    >
      <img
        src={img}
        className="w-full h-4/6 rounded-t-[20px] object-fill"
        alt=""
      />
      <div className=" w-full h-2/6 text-right px-2 pt-0.5 space-y-2">
        <h2 className="f-bold text-sm">{articleTitle}</h2>
        <div className="w-full flex-row-all-center  justify-between">
          <div className="flex-row-all-center">
            <i className="fi fi-rr-clock relative top-0.5"></i>
            <p className="text-sm">{date}</p>
          </div>
          <div>
            <i className="fi fi-sr-star relative top-0.75"></i>
            <span className="ml-1 text-sm">2.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ArticleCardSmall };
