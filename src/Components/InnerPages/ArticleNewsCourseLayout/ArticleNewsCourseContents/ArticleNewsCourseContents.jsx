const ArticleNewsCourseContents = ({ children }) => {
  return (
    <div
      className="w-[calc(100%-300px)] flex-row-all-center
      justify-center items-start gap-4 mb-12 px-4"
    >
      {children}
    </div>
  );
};

export { ArticleNewsCourseContents };
