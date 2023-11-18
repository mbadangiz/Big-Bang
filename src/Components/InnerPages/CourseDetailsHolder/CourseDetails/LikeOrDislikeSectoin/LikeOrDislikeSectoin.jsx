const LikeOrDislikeSectoin = ({ currentUserDissLike, likeCount }) => {
  return (
    <div className="w-full bg-white rounded-lg py-4 px-4 flex-row-all-center justify-between mb-5">
      <h2 className="f-bold ">آیا این دوره مورد پسند شما است؟</h2>
      <div class="flex-row-all-center  gap-3 mt-3">
        <div className="flex-row-all-center gap-1">
          <span className="text-lg">{currentUserDissLike}</span>
          <i className="text-2xl fi fi-rr-hand  relative top-1"></i>
        </div>
        <div className="flex-row-all-center gap-1">
          <span className="text-lg">{likeCount}</span>
          <i className="text-2xl fi fi-rr-social-network relative top-1"></i>
        </div>
      </div>
    </div>
  );
};

export { LikeOrDislikeSectoin };
