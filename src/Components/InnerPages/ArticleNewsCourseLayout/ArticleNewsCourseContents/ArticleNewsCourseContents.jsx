const ArticleNewsCourseContents = ({ children }) => {
  return (
    <div
      className="w-[calc(100%-300px)] flex-row-all-center
      justify-center items-start gap-5 mb-12"
    >
      {children}
    </div>
  );
};

export { ArticleNewsCourseContents };
