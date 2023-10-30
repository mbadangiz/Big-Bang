const Comment = ({ commentType }) => {
  return (
    <div
      className={`w-full h-max flex-row-all-center justify-start 
      border-2 border-solid border-grayDetail/20 py-2 rounded-lg relative ${
        commentType === "repley" ? "commentRepley" : ""
      }`}
    >
      <div className="w-[14%] flex flex-col items-center content-center gap-3 border-l-4 border-solid border-black/50">
        <img
          src="./../Img/avatar1.jpg"
          className="h-20 w-20 object-cover rounded-full"
          alt=""
        />
        <p className="text-sm">محمد بادانگیز</p>
      </div>
      <div className="w-[calc(86%-4px)] text-sm text-justify px-4">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آیند.
      </div>
    </div>
  );
};

export { Comment };
