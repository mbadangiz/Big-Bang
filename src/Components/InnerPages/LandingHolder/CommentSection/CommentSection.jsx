import { CommentSectionHeader } from "./CommentSectionHeader";
import { CommentSectionForm } from "./CommentSectionForm";

const CommentSection = () => {
  return (
    <div className="width-handler h-[870px]">
      <CommentSectionHeader />
      <CommentSectionForm />
    </div>
  );
};

export { CommentSection };
