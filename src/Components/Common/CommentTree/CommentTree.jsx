import { Comment } from "./Comment";

const CommentTree = () => {
  return (
    <div className="w-full">
      <Comment commentType="mian" />
      <div
        className="w-full pr-16 space-y-4 py-4 relative   
        before:w-1 before:h-[calc(100%-80px)] before:bg-grayDetail/30 before:block
        before:absolute before:-top-0  before:right-7 "
      >
        <Comment commentType="repley" />
        <Comment commentType="repley" />
        <Comment commentType="repley" />
      </div>
    </div>
  );
};

export { CommentTree };
