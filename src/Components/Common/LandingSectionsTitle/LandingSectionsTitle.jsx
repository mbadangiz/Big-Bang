const LandingSectionsTitle = ({ mainText, subText }) => {
  return (
    <div className="text-center ">
      <h1 className="f-bold text-3xl text-textBlack">{mainText}</h1>
      <h2 className="text-lg mt-4 text-textBlack/70 ">{subText}</h2>
    </div>
  );
};

export { LandingSectionsTitle };
