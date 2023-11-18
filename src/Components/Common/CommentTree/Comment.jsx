const Comment = ({ commentType, data }) => {
  const {
    id,
    courseId,
    title,
    describe,
    author,
    insertDate,
    accept,
    acceptReplysCount,
    disslikeCount,
    likeCount,
  } = data;
  return (
    <div
      className={`w-full h-max flex-row-all-center justify-start 
      border-2 border-solid border-grayDetail/20 py-2 rounded-lg relative ${
        commentType === "repley" ? "commentRepley" : ""
      }`}
    >
      <div className="w-[20%] overflow-hidden flex flex-col items-center content-center gap-3 border-l-4 border-solid border-black/50">
        <img
          src="./../Img/avatar1.jpg"
          className="h-20 w-20 object-cover rounded-full"
          alt=""
        />
        <p className="text-sm textNoWrap">{author}</p>
      </div>
      <div className="w-[calc(80%-4px)] text-sm text-justify px-4">
        <div className="w-full flex-row-all-center justify-between">
          <h1 className="f-semiBold mb-3  text-base">{title}</h1>
          <div className="flex-row-all-center  gap-3">
            <div className="flex-row-all-center cursor-pointer">
              <span className="text-lg">{likeCount}</span>
              <i className="text-lg mr-1 fi fi-br-hand relative top-1"></i>
            </div>

            <div className="flex-row-all-center cursor-pointer">
              <span className="text-lg">{disslikeCount}</span>
              <i className="text-lg mr-1 fi fi-rr-social-network relative top-1"></i>
            </div>
          </div>
        </div>
        <p>{describe}</p>
      </div>
    </div>
  );
};

export { Comment };
