const ArticleCardSmall = ({ data }) => {
  const {
    id,
    title,
    currentRate,
    insertDate,
    currentImageAddressTumb,
    articleTitle,
    date,
    img,
  } = data;
  return (
    <div
      className="cardsDefaultSettings w-300 h-[250px] shadow-none  
        border-2 border-gray-400/50 border-solid mx-auto p-0 space-y-0 
        !rounded-t-2xl hover:translate-y-[-5px]"
    >
      <img
        src={currentImageAddressTumb}
        className="w-full h-4/6 rounded-t-2xl object-fill"
        alt=""
      />
      <div className=" w-full h-2/6 text-right px-2 pt-0.5 space-y-2">
        <h2 className="f-bold text-sm">{title}</h2>
        <div className="w-full flex-row-all-center  justify-between border-t border-solid border-gray-600/30 p-1">
          <div className="flex-row-all-center">
            <i className="fi fi-rr-clock relative top-0.5"></i>
            <p className="text-sm">{insertDate}</p>
          </div>
          <div>
            <i className="fi fi-sr-star relative top-0.75"></i>
            <span className="ml-1 text-sm">{currentRate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ArticleCardSmall };
