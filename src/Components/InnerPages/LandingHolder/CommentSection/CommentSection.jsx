import { CommentSectionForm } from "./CommentSectionForm";
import { LandingSectionsTitle } from "../../../Common/LandingSectionsTitle/LandingSectionsTitle";

const CommentSection = () => {
  return (
    <div className="width-handler h-[870px] pt-7">
      <LandingSectionsTitle
        mainText="نظرات و پیشنهادات"
        subText="شما می توانید نظرات و پیشنهادات خود را با ما به اشتراک بذارید "
      />
      <CommentSectionForm />
    </div>
  );
};

export { CommentSection };
